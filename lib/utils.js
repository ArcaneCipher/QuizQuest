const db = require("../db/connection"); // Import the shared database connection
const fs = require('fs');
const path = require('path');

/**
 * Generates a unique random alphanumeric string and ensures it does not
 * already exist in the specified database table and column.
 *
 * @async
 * @function generateRandomString
 * @param {string} tableName - The name of the database table to check for collisions.
 * @param {string} columnName - The name of the column in the table to check for collisions.
 * @returns {Promise<string>} A unique random alphanumeric string.
 * @throws {Error} Throws an error if unable to generate a unique string after maximum retries or if there is a database query error.
 *
 * @example
 * const quizUrl = await generateRandomString('quizzes', 'quiz_url');
 * console.log(quizUrl); // e.g., "a1B2c3D4"
 */
const generateRandomString = async(tableName, columnName) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const stringLength = 8;
  const maxRetries = 10;

  // Helper function to create a random string
  const createRandomString = () => {
    let result = "";
    for (let i = 0; i < stringLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  for (let i = 0; i < maxRetries; i++) {
    const randomString = createRandomString();

    // Check if the generated string already exists in the database
    const query = `
      SELECT COUNT(*)
      FROM ${tableName}
      WHERE ${columnName} = $1;
    `;
    const values = [randomString];

    try {
      const res = await db.query(query, values);
      if (parseInt(res.rows[0].count) === 0) {
        // No collision found, return the generated string
        return randomString;
      }
    } catch (err) {
      console.error("Database query error:", err.message);
      throw new Error("Error checking for string collision in the database.");
    }
  }

  // If unable to generate a unique string, throw an error
  throw new Error("Unable to generate a unique string after maximum retries.");
};

/**
 * @generateRandomString : In any part of your app, you can now import and use the utility function
 *
 * Import the Function with:
 *
 *   const { generateRandomString } = require('./lib/utils');
 *
 * Use in a Route (Example):
 *
 *   app.post('/create-quiz', async (req, res) => {
 *     try {
 *       const quizUrl = await generateRandomString("quizzes", "quiz_url");
 *       // Insert the new quiz into the database
 *       const query = `
 *         INSERT INTO quizzes (creator_id, title, description, is_public, quiz_url)
 *         VALUES ($1, $2, $3, $4, $5) RETURNING *;
 *       `;
 *       const values = [req.body.creatorId, req.body.title, req.body.description, true, quizUrl];
 *       const result = await db.query(query, values);
 *
 *       res.status(201).json(result.rows[0]);
 *     } catch (err) {
 *       console.error("Error creating quiz:", err.message);
 *       res.status(500).send("Internal server error");
 *     }
 *   });
 *
 */

/**
 * Utility function to load SQL files
 * @function loadQuery
 * @param {string} fileName - name of the .sql file located in ../db/queries
 */
const loadQuery = (fileName) => {
  const filePath = path.join(__dirname, '../db/queries', fileName);
  return fs.readFileSync(filePath, 'utf8');
};

/**
 * @loadQuery : Use the query loader and executor in your route handlers.
 *
 * Import the Function with:
 *
 *   const { loadQuery } = require('./lib/utils');
 *   const express = require('express');
 *   const router = express.Router();
 *
 * Use in a Route (Example):
 *
 * router.post('/questions', async (req, res) => {
 *   const { quizId, question } = req.body;
 *   const query = loadQuery('insert_question.sql');
 *   try {
 *     const result = await pool.query(query, [quizId, question]);
 *     res.json({ success: true, questionId: result.rows[0].id });
 *   } catch (err) {
 *     console.error('Error inserting question:', err);
 *     res.status(500).json({ success: false, error: err.message });
 *   }
 * });
 *
 */

module.exports = {
  generateRandomString,
  loadQuery
};
