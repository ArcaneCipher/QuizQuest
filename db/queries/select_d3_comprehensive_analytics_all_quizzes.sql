-- If you want to get all the analytics for all quizzes in one query, you can combine into a single query
SELECT
  q.id AS quiz_id,
  q.title AS quiz_title,
  q.quiz_url AS quiz_url,
  COUNT(r.id) AS attempt_count,
  AVG(r.score)::NUMERIC(5, 2) AS average_score,
  JSON_AGG(
    JSON_BUILD_OBJECT(
      'user_id', u.id,
      'user_name', u.name,
      'user_score', r.score
    )
    ORDER BY r.score DESC
  ) AS top_users
FROM
  quizzes q
LEFT JOIN
  results r ON q.id = r.quiz_id
LEFT JOIN
  users u ON r.user_id = u.id
WHERE
  q.quiz_url = $1
GROUP BY
  q.id, q.title, q.quiz_url;

-- This query:
-- Counts attempts (attempt_count).
-- Calculates the average score (average_score).
-- Aggregates the top users into a JSON array (top_users).
