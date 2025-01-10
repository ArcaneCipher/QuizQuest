-- Purpose: Fetches quiz details for a given URL.
SELECT
  id,
  title,
  description,
  is_public,
  creator_id
FROM
  quizzes
WHERE
  quiz_url = $1; -- $1: quiz_url
