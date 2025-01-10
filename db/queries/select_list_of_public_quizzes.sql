-- Purpose: Fetches all public quizzes for the homepage.
SELECT
  id,
  title,
  description,
  quiz_url
FROM
  quizzes
WHERE
  is_public = TRUE
ORDER BY
  id DESC;
