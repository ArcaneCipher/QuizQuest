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

router.get('/', async (req, res) => {
  try {
    // Ensure query is defined before the try block
    const query = loadQuery('select_homepage_quizzes.sql');
    const { rows } = await db.query(query);

    const categories = rows.map(row => ({
      category: row.category,
      quizzes: row.quizzes || [], // Ensure empty array for categories with no quizzes
    }));

    res.json({ categories });
  } catch (err) {
    console.error('Error fetching homepage quizzes:', {
      message: err.message,
      stack: err.stack,
      // Log the query only if it exists to avoid undefined reference
      query: typeof query !== 'undefined' ? query : 'Query not defined',
    });
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

