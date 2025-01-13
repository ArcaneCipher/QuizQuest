// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

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

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require('./routes/users');
const userApiRoutes = require('./routes/users-api');
const categoryApiRoutes = require('./routes/category-api');
const quizApiRoutes = require('./routes/all-quizzes-api');
const testApi = require('./routes/test-api');
const searchApiRoutes = require('./routes/search-quiz-api');
const quizzesApiRoutes = require('./routes/create-quiz-api');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

app.use('/users', usersRoutes);
app.use('/api/users', userApiRoutes);
app.use('/api/category', categoryApiRoutes);
app.use('/api/all-quizzes', quizApiRoutes);
app.use('/api/search-quiz', searchApiRoutes);
app.use('/api/test-api', testApi);
// app.use('/api/quizzes', userApiRoutes); // commenting out to amend for sharing quiz @javin
app.use('/quizzes', quizzesApiRoutes);

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
