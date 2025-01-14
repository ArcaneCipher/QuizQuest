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

router.post('/', (req, res) => {
  const {result_id, question_id, selected_answer_id, is_correct} = req.body;
  const queryString = loadQuery('insert_quiz_answers.sql');

  db.query(queryString,[result_id, question_id, selected_answer_id, is_correct])
    .then(data => {
      res.json({ success:true });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;