/**
 * All routes for results data are defined here
 * Since this file is loaded in server.js into api/results,
 *   these routes are mounted onto /api/results
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const { loadQuery } = require("../lib/utils");

// Load the query file
const query = loadQuery("select_quiz_attempt_results.sql");

// Route to get the result of a quiz by attempt_url
router.get("/:attempt_url", async (req, res) => {
  const { attempt_url } = req.params;

  try {
    const values = [attempt_url];
    const result = await db.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).render("error", { message: "Result not found" });
    }

    // Format the response
    const quizResult = {
      result_id: result.rows[0].result_id,
      quiz_id: result.rows[0].quiz_id,
      quiz_title: result.rows[0].quiz_title,
      quiz_url: result.rows[0].quiz_url,
      score: result.rows[0].score,
      question_total: result.rows[0].question_total,
      attempt_url: result.rows[0].attempt_url,
      answers: result.rows.map(row => ({
        question_id: row.question_id,
        question_text: row.question_text,
        selected_answer_id: row.selected_answer_id,
        selected_answer_text: row.selected_answer_text,
        correct_answer_text: row.correct_answer_text,
        is_correct: row.is_correct,
      })),
    };

    res.render("results", { quizResult, req });
  } catch (error) {
    console.error("Error fetching quiz result:", error.message);
    res.status(500).render("error", { message: "Internal server error" });
  }
});

module.exports = router;
