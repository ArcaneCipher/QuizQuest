-- Purpose: Adds questions to the quiz.
INSERT INTO
  questions (
    quiz_id,
    question
    )
VALUES
  (
    $1, -- $1: quiz_id (ID of the quiz)
    $2  -- $2: question (text of the question)
    )
RETURNING id;
