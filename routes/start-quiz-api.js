/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { loadQuery, generateRandomString } = require('../lib/utils');

router.post('/', async (req, res) => {
  try {
    const user_id = req.session?.userId; // Retrieve user ID from session
    const { quiz_id, question_total } = req.body;

    if (!user_id) {
      return res.status(401).json({ error: 'Unauthorized: User not logged in.' });
    }

    // Generate unique URL for the quiz attempt
    const attempt_url = await generateRandomString('results', 'attempt_url');
    const queryString = loadQuery('insert_quiz_attempt.sql');

    const { rows } = await db.query(queryString, [user_id, quiz_id, question_total, attempt_url]);

    const result_id = rows[0].id;
    res.json({ result_id, attempt_url });
  } catch (err) {
    console.error('Error starting quiz attempt:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
