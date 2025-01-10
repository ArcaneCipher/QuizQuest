-- STRETCH FEATURE!!!
-- IMPLEMENT ONLY AFTER MVP IS DONE!!!
-- Purpose: Provides analytics for the quiz creator.
SELECT
  q.id AS quiz_id,
  q.title,
  COUNT(r.id) AS total_attempts,
  AVG(r.score) AS average_score
FROM
  quizzes q
  LEFT JOIN results r ON q.id = r.quiz_id
WHERE
  q.creator_id = $1 -- $1: creator_id
GROUP BY
  q.id,
  q.title
ORDER BY
  total_attempts DESC;
