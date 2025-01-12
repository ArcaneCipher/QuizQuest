-- Purpose: Fetches all categories for the homepage.
SELECT
DISTINCT
  category
FROM
  quizzes
ORDER BY
  category;
