-- Purpose: Fetches result details using the result URL.
SELECT
  r.id AS result_id,
  r.user_id,
  r.quiz_id,
  r.score,
  r.question_total,
  r.attempt_url
FROM
  results r
WHERE
  r.attempt_url = $1; -- $1: attempt_url
