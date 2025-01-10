-- Purpose: Fetches result details and user answers for a given quiz attempt.
SELECT
  r.id AS result_id,
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
  r.id = $1; -- $1: result_id
