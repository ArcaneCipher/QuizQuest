SELECT
  u.id AS user_id,
  u.name AS user_name,
  r.score AS user_score
FROM
  results r
JOIN
  users u ON r.user_id = u.id
WHERE
  r.quiz_id = $1 -- Replace $1 with the desired quiz ID
ORDER BY
  r.score DESC
LIMIT 5;

-- The query orders users by their scores in descending order and limits the results to the top 5.
