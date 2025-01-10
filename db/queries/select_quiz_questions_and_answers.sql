-- Purpose: Retrieves all questions and answers for a given quiz.
SELECT
  q.id AS question_id,
  q.question,
  a.id AS answer_id,
  a.answer
FROM
  questions q
  JOIN answers a ON q.id = a.question_id
WHERE
  q.quiz_id = $1; -- $1: quiz_id
