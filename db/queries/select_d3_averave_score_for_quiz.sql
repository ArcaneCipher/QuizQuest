SELECT
  q.id AS quiz_id,
  q.title AS quiz_title,
  AVG(r.score)::NUMERIC(5, 2) AS average_score
FROM
  quizzes q
JOIN
  results r ON q.id = r.quiz_id
WHERE
  q.id = $1 -- Replace $1 with the desired quiz ID
GROUP BY
  q.id, q.title;

-- AVG(r.score)::NUMERIC(5, 2) ensures the average is rounded to two decimal places.
