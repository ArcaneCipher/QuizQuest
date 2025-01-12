-- Purpose: Fetches result details and user answers for a given quiz attempt.
SELECT
  r.id AS result_id,
  r.quiz_id,
  r.score,
  r.question_total,
  r.attempt_url,
  ua.question_id,
  ua.selected_answer_id,
  ua.is_correct
FROM
  results r
  JOIN user_answers ua ON r.id = ua.result_id
WHERE
  r.attempt_url = $1; -- $1: attempt_url
