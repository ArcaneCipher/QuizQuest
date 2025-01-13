-- Run SQL queries to verify if other user_answers rows are also affected:
SELECT
  ua.*
FROM
  user_answers ua
  JOIN answers a ON ua.selected_answer_id = a.id
WHERE
  ua.question_id != a.question_id;
-- This will return any rows where selected_answer_id does not correspond to the correct question_id.
