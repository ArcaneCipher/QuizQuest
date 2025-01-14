SELECT
  q.id AS quiz_id,
  q.title AS quiz_title,
  COUNT(r.id) AS attempt_count
FROM
  quizzes q
LEFT JOIN
  results r ON q.id = r.quiz_id
WHERE
  q.id = $1 -- Replace $1 with the desired quiz ID
GROUP BY
  q.id, q.title;

-- This uses a LEFT JOIN to ensure quizzes with no attempts are still included.
