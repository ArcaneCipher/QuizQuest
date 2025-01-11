/**
 * All routes for Quizzes Data are defined here
 * Since this file is loaded in server.js into api/quizzes,
 *   these routes are mounted onto /api/quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { loadQuery } = require('../lib/utils');

router.get('/', (req, res) => {
  const query = loadQuery('_test_query.sql');

  db.query(query)
    .then(data => {
      const queryData = data.rows;
      res.json({ queryData });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
