/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { loadQuery } = require('../lib/utils');

router.get('/:quiz_url', (req, res) => {
  const queryParams = req.params.quiz_url;
  const queryString = loadQuery('select_quiz_questions_and_answers_by_quiz_url.sql');

  db.query(queryString,[queryParams])
    .then(data => {
      const quiz = data.rows;
      if (data.rowCount === 0) {
        return res.status(404).json({ error: 'Quiz not found!' });
      }
      res.json({ quiz });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;