-- If you want to get all the analytics for all quizzes in one query, you can combine into a single query
WITH all_results AS (
  SELECT
    r.quiz_id,
    r.user_id,
    u.name AS user_name,
    r.score AS user_score,
    r.question_total
  FROM
    results r
  LEFT JOIN
    users u ON r.user_id = u.id
  WHERE
    r.quiz_id = (SELECT id FROM quizzes WHERE quiz_url = $1)
),
top_10_results AS (
  SELECT
    quiz_id,
    user_id,
    user_name,
    user_score,
    question_total
  FROM
    all_results
  ORDER BY
    user_score DESC
  LIMIT 10
)
SELECT
  q.id AS quiz_id,
  q.title AS quiz_title,
  q.quiz_url AS quiz_url,
  t.question_total,
  (SELECT COUNT(*) FROM all_results) AS attempt_count, -- Total attempts
  (SELECT AVG(user_score) FROM all_results)::NUMERIC(5, 2) AS average_score, -- Average score across all attempts
  (SELECT MAX(user_score) FROM all_results)::NUMERIC(5, 2) AS highest_score, -- Highest score across all attempts
  (SELECT MIN(user_score) FROM all_results)::NUMERIC(5, 2) AS lowest_score, -- Lowest score across all attempts
  JSON_AGG(
    JSON_BUILD_OBJECT(
      'user_id', t.user_id,
      'user_name', t.user_name,
      'user_score', t.user_score
    )
    ORDER BY t.user_score DESC
  ) AS top_users -- Top 10 results
FROM
  quizzes q
LEFT JOIN
  top_10_results t ON q.id = t.quiz_id
WHERE
  q.quiz_url = $1
GROUP BY
  q.id, q.title, q.quiz_url,t.question_total;
-- This query:
-- Counts attempts (attempt_count).
-- Calculates the average score (average_score).
-- Aggregates the top users into a JSON array (top_users).