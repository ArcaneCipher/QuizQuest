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

router.get('/:quiz_url', async (req, res) => {
  const { quiz_url } = req.params;
  console.log('Requested quiz_url:', quiz_url); // Log the quiz_url

  try {
    const query = loadQuery('select_d3_comprehensive_analytics_all_quizzes.sql');
    const { rows } = await db.query(query, [quiz_url]);

    if (rows.length === 0) {
      console.log('Quiz not found:', quiz_url); // Log if no quiz is found
      return res.status(404).send('Quiz not found');
    }

    const analyticsData = rows[0];
    res.render('analytics', { req, quizUrl: quiz_url, analyticsData });
  } catch (error) {
    console.error('Error fetching quiz analytics:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
