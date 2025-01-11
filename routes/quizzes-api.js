/**
 * All routes for Quizzes Data are defined here
 * Since this file is loaded in server.js into api/quizzes,
 *   these routes are mounted onto /api/quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// javin code for sharing quizzes

const { loadQuery } = require('../lib/utils');

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
