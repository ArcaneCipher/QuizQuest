// created this to get categories for dropdown

const db = require('../connection');

const getCategories = () => {
  return db.query(`SELECT DISTINCT category FROM quizzes ORDER BY category;`)
    .then(data => data.rows);
};

module.exports = { getCategories };
