/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const bcrypt = require('bcrypt');
const router  = express.Router();
const db = require('../db/connection');
const { loadQuery } = require('../lib/utils');

// route for rendering the signup page
router.get('/signup', (req, res) => {
  res.render('signup', { req }); // Assumes `views/signup.ejs` exists
});

// GET Route for the Login Page
router.get('/login', (req, res) => {
  res.render('login', { req });
});


// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Check if the email is already registered
    const existingUser = await db.query(loadQuery('select_existing_user_by_email.sql'), [email]);
    if (existingUser.rowCount > 0) {
      return res.status(400).json({ error: 'Email is already registered.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await db.query(loadQuery('insert_into_users_signup.sql'),
      [name, email, hashedPassword]
    );

    // Redirect to homepage after successful signup
    res.redirect('/');
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// This route will handle user login by verifying the email and password, then setting a session.
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Both email and password are required.' });
  }

  try {
    // Check if the user exists
    const userQuery = loadQuery('select_existing_user_by_email.sql');
    const userResult = await db.query(userQuery, [email]);

    if (userResult.rowCount === 0) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    const user = userResult.rows[0];

    // Compare the password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // Save user ID and name in the session
    req.session.userId = user.id;
    req.session.userName = user.name;

    // Redirect to the homepage after successful login
    res.redirect('/');
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

router.post('/logout', (req, res) => {
  req.session = null; // Clear session
  res.redirect('/'); // Redirect to homepage
});

module.exports = router;
