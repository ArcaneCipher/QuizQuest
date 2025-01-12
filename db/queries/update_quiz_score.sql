UPDATE 
results
SET score = (
  SELECT COUNT(*)
  FROM user_answers
  WHERE result_id = $1 AND is_correct = TRUE
)
WHERE id = $1;