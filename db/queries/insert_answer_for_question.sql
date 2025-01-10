-- Purpose: Adds answers to a question.
INSERT INTO
  answers (
    question_id,
    answer,
    is_correct
    )
VALUES
  (
    $1, -- $1: question_id (ID of the question)
    $2, -- $2: answer (answer text)
    3   -- $3: is_correct (boolean)
    );
