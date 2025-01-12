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
  const {user_id, quiz_id, question_total} = req.body;
  // generate unique URL
  const attempt_url = await generateRandomString('results','attempt_url'); 
  const queryString = loadQuery('insert_quiz_attempt.sql');

  db.query(queryString,[user_id, quiz_id, question_total, attempt_url])
    .then(data => {
      const resultId = data.rows[0].id;
      res.json({ resultId, attemptUrl });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;