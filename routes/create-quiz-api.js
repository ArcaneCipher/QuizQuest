/**
 * All routes for Quizzes Data are defined here
 * Since this file is loaded in server.js into api/quizzes,
 *   these routes are mounted onto /api/quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { loadQuery, generateRandomString } = require('../lib/utils');

// Route to render the "Create Quiz" page
router.get('/new', (req, res) => {
  res.render('new-quiz-form');
});

// Route to create a new quiz
router.post('/new', async (req, res) => {
  const {quiz_name, quiz_description, quiz_category, is_public, questions } = req.body;

  // Validation: Ensure all required fields are filled - no blanks entries!
  if (!quiz_name || !quiz_description || !quiz_category) {
    return res.status(400).json({ error: 'Quiz name, description, and category are required.' });
  }

  if (!questions || questions.length === 0) {
    return res.status(400).json({ error: 'At least one question is required.' });
  }

  for (const question of questions) {
    if (!question.text) {
      return res.status(400).json({ error: 'Each question must have text.' });
    }

    if (!question.answers || question.answers.length === 0) {
      return res.status(400).json({ error: 'Each question must have at least one answer.' });
    }

    let hasCorrectAnswer = false;
    for (const answer of question.answers) {
      if (!answer.text) {
        return res.status(400).json({ error: 'Answer text cannot be blank.' });
      }
      if (answer.is_correct) {
        hasCorrectAnswer = true;
      }
    }

    if (!hasCorrectAnswer) {
      return res.status(400).json({ error: 'Each question must have one correct answer.' });
    }
  }

  try {
    //Public/Private listed quiz - boolean value for checkbox
    const isPublic = !!is_public;

    // Generate unique quiz URL
    const quiz_url = await generateRandomString('quizzes', 'quiz_url');

    // Load SQL queries
    const insertQuizQuery = loadQuery('insert_new_quiz.sql');
    const insertQuestionQuery = loadQuery('insert_question_for_quiz.sql');
    const insertAnswerQuery = loadQuery('insert_answer_for_question.sql');

    // Insert Quiz
    const quizResult = await db.query(insertQuizQuery, [
      quiz_name,
      quiz_description,
      quiz_category,
      is_public, // Store public/private status for quiz
      quiz_url
    ]);
    const quizId = quizResult.rows[0].id; // Getting the inserted quiz ID

    // Dynamically add questions + answer
        for (const questionId in questions) {
          const question = questions[questionId];

          // Validate that the question has exactly one correct answer
      const correctAnswers = Object.keys(question.answers).filter(
        (answerId) => answerId === question.correct
      );
      if (correctAnswers.length !== 1) {
        return res
          .status(400)
          .json({ error: `Question "${question.text}" must have exactly one correct answer.` });
      }
    
          // Insert the question into the database
          const insertQuestionQuery = loadQuery('insert_question_for_quiz.sql');
          const questionResult = await db.query(insertQuestionQuery, [quizId, question.text]);
          
          // Get the inserted question's database ID
          const questionDbId = questionResult.rows[0].id;
    
          // Iterate over the answers object within the current question
          for (const answerId in question.answers) {
            const answer = question.answers[answerId];
    
            // Insert the answer into the database
            const insertAnswerQuery = loadQuery('insert_answer_for_question.sql');
            await db.query(insertAnswerQuery, [
              questionDbId,
              answer.text,
              answerId === question.correct,
            ]);
          }
        }

    res.status(201).redirect(`/quizzes/${quiz_url}`); //Redirecting to created quiz page
  } catch (err) {
    console.error('Error creating quiz:', err.message);
    res.status(500).send('Internal server error');
   }
  });

// javin code for sharing quizzes
router.get('/:quiz_url', (req, res) => {
  const query = loadQuery('select_share_quizzes_by_url.sql');
  const params = [req.params.quiz_url];

  db.query(query, params)
    .then(data => {
      const quiz = data.rows[0];
      res.json({ quiz });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;