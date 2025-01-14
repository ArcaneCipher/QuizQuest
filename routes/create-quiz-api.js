/**
 * All routes for Quizzes Data are defined here
 * Since this file is loaded in server.js into api/quizzes,
 *   these routes are mounted onto /api/quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */


// Katrina - Create Quiz API code
const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { loadQuery, generateRandomString } = require('../lib/utils');

// Preload SQL queries
const insertQuizQuery = loadQuery('insert_new_quiz.sql');
const insertQuestionQuery = loadQuery('insert_question_for_quiz.sql');
const insertAnswerQuery = loadQuery('insert_answer_for_question.sql');
const shareQuizQuery = loadQuery('select_share_quizzes_by_url.sql');
const categoriesQuery = loadQuery('select_homepage_categories.sql'); // Added for dynamic categories

// Route to render the Create Quiz page w/ dynamic categories
router.get('/new', (req, res) => {
  // Fetch categories from the database dynamically
  db.query(categoriesQuery)
    .then(data => {
      res.render('new-quiz-form', { categories: data.rows }); // Pass categories to the template
    })
    .catch(err => {
      console.error('Error fetching categories:', err.message);
      res.status(500).send('Internal server error');
    });
});

// Route to Create New quiz
router.post('/new', async (req, res) => {
  const { quiz_name, quiz_description, quiz_category, is_public, questions } = req.body;

  // Validation: Ensure all required fields are filled - no blanks entries!
  if (!quiz_name || !quiz_description || !quiz_category) {
    return res.status(400).json({ error: 'Quiz name, description, and category are required.' });
  }

  if (!questions || Object.keys(questions).length === 0) {
    return res.status(400).json({ error: 'At least one question is required.' });
  }

  for (const questionId in questions) {
    const question = questions[questionId];

    // Validation for question text
    if (!question.text) {
      return res.status(400).json({ error: 'Each question must have text.' });
    }

    // Validation for answers
    if (!question.answers || Object.keys(question.answers).length === 0) {
      return res.status(400).json({ error: 'Each question must have at least one answer.' });
    }

    // Validation for one correct answer
    const correctAnswers = Object.keys(question.answers).filter(
      (answerId) => answerId === question.correct
    );
    if (correctAnswers.length !== 1) {
      return res.status(400).json({ error: `Question "${question.text}" must have exactly one correct answer.` });
    }

    for (const answerId in question.answers) {
      const answer = question.answers[answerId];
      if (!answer.text) {
        return res.status(400).json({ error: 'Answer text cannot be blank.' });
      }
    }
  }

  try {
    // Public/Private listed quiz - boolean value for checkbox
    const isPublic = !!is_public;

    // Generate unique quiz URL
    const quiz_url = await generateRandomString('quizzes', 'quiz_url');

    // Insert Quiz
    const quizResult = await db.query(insertQuizQuery, [
      quiz_name,
      quiz_description,
      quiz_category,
      isPublic, // Use the boolean value for public/private status
      quiz_url,
    ]);
    const quizId = quizResult.rows[0].id; // Getting the inserted quiz ID

    // Dynamically add questions + answers
    for (const questionId in questions) {
      const question = questions[questionId];

      // Insert the question into the database
      const questionResult = await db.query(insertQuestionQuery, [quizId, question.text]);
      const questionDbId = questionResult.rows[0].id; // Getting the inserted question ID

      // Iterate over the answers and insert into the database
      for (const answerId in question.answers) {
        const answer = question.answers[answerId];
        await db.query(insertAnswerQuery, [
          questionDbId, // The ID of the question this answer belongs to
          answer.text, // The text of the answer
          answerId === question.correct, // Whether this answer is correct
        ]);
      }
    }

    res.status(201).redirect(`/quizzes/${quiz_url}`); // Redirecting to created quiz page
  } catch (err) {
    console.error('Error creating quiz:', err.message);
    res.status(500).send('Internal server error');
  }
});

// Javin - Route for sharing quizzes
router.get('/:quiz_url', (req, res) => {
  const params = [req.params.quiz_url];

  db.query(shareQuizQuery, params)
    .then((data) => {
      const quiz = data.rows[0];
      res.json({ quiz });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
