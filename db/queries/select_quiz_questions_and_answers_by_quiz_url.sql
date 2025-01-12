-- Purpose: Retrieves all questions and answers for a given quiz.
SELECT 
  title,
  description,
  quizzes.id AS quiz_id,
  json_agg(
    json_build_object(
      'question_id', q.id,
      'question', q.question,
      'answers', (
        SELECT array_agg(
          json_build_object('answer_id', a.id, 'answer', a.answer, 'is_correct', a.is_correct)
        )
        FROM answers a
        WHERE a.question_id = q.id
      )
    )
  ) AS questions_and_answers
FROM
  quizzes
  JOIN questions q ON quizzes.id = q.quiz_id
WHERE
  quizzes.quiz_url = CAST($1 AS TEXT) -- $1: quiz_url
GROUP BY 
  quizzes.title, quizzes.description, quizzes.id;