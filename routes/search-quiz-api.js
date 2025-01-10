7/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  const searchQuery = req.query.query;
  const queryString = `SELECT category,     
                JSON_AGG(
                  JSON_BUILD_OBJECT('title', title, 'quiz_url', quiz_url)
                ) AS quizzes 
                FROM quizzes
                WHERE is_public = true AND ($1::TEXT IS NULL OR LOWER(title) LIKE LOWER($1) OR LOWER(category::TEXT) LIKE LOWER($1))
                GROUP BY category
                ORDER BY category;`;

const queryParams = searchQuery ? [`%${searchQuery}%`] : [null];
  db.query(queryString,queryParams)
    .then(data => {
      const quizzes = data.rows;
      res.json({ quizzes });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;

