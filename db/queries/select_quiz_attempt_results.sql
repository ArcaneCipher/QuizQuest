-- Fetch result details and user answers with correct answers included
SELECT
  r.id AS result_id,
  r.quiz_id,
  qz.title AS quiz_title,
  r.score,
  r.question_total,
  r.attempt_url,
  ua.question_id,
  qs.question AS question_text,
  ua.selected_answer_id,
  sa.answer AS selected_answer_text,
  ua.is_correct,
  ca.answer AS correct_answer_text
FROM
  results r
  JOIN user_answers ua ON r.id = ua.result_id
  JOIN quizzes qz ON r.quiz_id = qz.id
  JOIN questions qs ON ua.question_id = qs.id
  JOIN answers sa ON ua.selected_answer_id = sa.id
  JOIN answers ca ON qs.id = ca.question_id AND ca.is_correct = TRUE
WHERE
  r.attempt_url = $1; -- $1: attempt_url
