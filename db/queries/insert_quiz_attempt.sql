-- Purpose: Records a new quiz attempt result.
INSERT INTO
  results (
    user_id,
    quiz_id,
    score,
    question_total,
    attempt_url
  )
VALUES
  (
    $1, -- $1: user_id
    $2, -- $2: quiz_id
    0, -- Initial score
    $3, -- $3: question_total (total number of questions in the quiz)
    $4  -- $4: attempt_url
  )
RETURNING id;
