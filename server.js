// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(express.json()); // Middleware to parse JSON
app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'default_secret_key'], // Replace with a secure key
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require('./routes/users');
const userApiRoutes = require('./routes/users-api');
const categoryApiRoutes = require('./routes/category-api');
const quizApiRoutes = require('./routes/all-quizzes-api');
const quizzesApiRoutes = require('./routes/create-quiz-api');
const quizAttemptApiRoutes = require('./routes/quiz-api');
const startQuizApiRoutes = require('./routes/start-quiz-api');
const submitAnswerApiRoutes = require('./routes/submit-answer-api');
const updateScoreApiRoutes = require('./routes/update-score-api');
const quizRoutes = require('./routes/quiz');
const testApi = require('./routes/test-api');
const searchApiRoutes = require('./routes/search-quiz-api');
const resultsApiRoutes = require('./routes/results-api');
const resultsRoutes = require('./routes/results');
const analyticsRoutes = require('./routes/quiz-analytics');
const authRoutes = require('./routes/authRoutes');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

app.use('/users', usersRoutes);
app.use('/api/users', userApiRoutes);
app.use('/api/category', categoryApiRoutes);
app.use('/api/all-quizzes', quizApiRoutes);
app.use('/api/search-quiz', searchApiRoutes);
app.use('/api/quiz', quizAttemptApiRoutes);
app.use('/api/start-quiz', startQuizApiRoutes);
app.use('/api/submit-answer', submitAnswerApiRoutes);
app.use('/api/update-score', updateScoreApiRoutes);
app.use('/quiz', quizRoutes);
app.use('/api/test-api', testApi);
app.use('/quizzes', quizzesApiRoutes); // trying this to fix the create a quiz button
app.use('/api/quizzes', quizzesApiRoutes);
app.use('/api/result', resultsApiRoutes);
app.use('/result', resultsRoutes);
app.use('/analytics', analyticsRoutes);
app.use('/', authRoutes); //login/signup route

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
