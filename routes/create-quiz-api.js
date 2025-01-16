const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const { loadQuery, generateRandomString, requireLogin } = require("../lib/utils");

// Preload SQL queries
const insertQuizQuery = loadQuery("insert_new_quiz.sql");
const insertQuestionQuery = loadQuery("insert_question_for_quiz.sql");
const insertAnswerQuery = loadQuery("insert_answer_for_question.sql");
const categoriesQuery = loadQuery("select_all_categories_enum.sql"); // use all categories from the enum
const shareQuizQuery = loadQuery("select_share_quizzes_by_url.sql");

// Route: Render the Create Quiz page
router.get("/new", requireLogin, async (req, res) => {
  try {
    const data = await db.query(categoriesQuery);
    res.render("new-quiz-form", { req, categories: data.rows });
  } catch (err) {
    console.error("Error fetching categories:", err.message);
    res.status(500).send("Internal server error");
  }
});

// Route: Handle quiz creation
router.post("/new", async (req, res) => {
  const creator_id = req.session?.userId;
  if (!creator_id) {
    return res.status(401).json({ error: "You must be logged in to create a quiz." });
  }
  const { quiz_name, quiz_description, quiz_category, is_public, questions } =
    req.body;

  // Validate the main quiz data
  if (!quiz_name || !quiz_description || !quiz_category) {
    return res
      .status(400)
      .json({ error: "Quiz name, description, and category are required." });
  }

  if (!questions || typeof questions !== "object" || Object.keys(questions).length === 0) {
    return res.status(400).json({ error: "At least one question is required." });
  }

  for (const questionId in questions) {
    const question = questions[questionId];
    if (!question.text || typeof question.text !== "string") {
      return res.status(400).json({ error: `Question ${questionId} must have text.` });
    }

    if (!question.answers || typeof question.answers !== "object" || Object.keys(question.answers).length === 0) {
      return res.status(400).json({ error: `Question "${question.text}" must have at least one answer.` });
    }

    if (!question.correct || !question.answers[question.correct]) {
      return res.status(400).json({ error: `Question "${question.text}" must have a valid correct answer.` });
    }

    for (const answerId in question.answers) {
      const answer = question.answers[answerId];
      if (!answer.text || typeof answer.text !== "string") {
        return res.status(400).json({ error: `Answer ${answerId} for question "${question.text}" cannot be blank.` });
      }
    }
  }

  try {
    // Generate a unique URL for the quiz
    const quiz_url = await generateRandomString("quizzes", "quiz_url");

    // Insert the quiz
    const quizResult = await db.query(insertQuizQuery, [
      creator_id,
      quiz_name,
      quiz_description,
      !!is_public, // Ensure boolean for is_public
      quiz_url,
      quiz_category,
    ]);
    const quizId = quizResult.rows[0].id;

    // Process each question
    for (const questionId in questions) {
      const question = questions[questionId];

      // Insert the question
      const questionResult = await db.query(insertQuestionQuery, [
        quizId,
        question.text,
      ]);
      const questionDbId = questionResult.rows[0].id;

      // Insert answers
      for (const answerId in question.answers) {
        const answer = question.answers[answerId];
        await db.query(insertAnswerQuery, [
          questionDbId,
          answer.text,
          parseInt(answerId) === parseInt(question.correct),
        ]);
      }
    }

    res.status(201).redirect(`/quiz/${quiz_url}`);
  } catch (err) {
    console.error("Error creating quiz:", err.stack);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route: Share quiz by URL
router.get("/:quiz_url", async (req, res) => {
  try {
    const params = [req.params.quiz_url];
    const data = await db.query(shareQuizQuery, params);
    if (data.rows.length === 0) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.json({ quiz: data.rows[0] });
  } catch (err) {
    console.error("Error fetching quiz:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
