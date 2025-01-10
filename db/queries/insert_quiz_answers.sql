-- Purpose: Records the user's selected answers for each question in the quiz.
INSERT INTO
  user_answers (
    result_id,
    question_id,
    selected_answer_id,
    is_correct
  )
VALUES
  (
    $1, -- $1: result_id
    $2, -- $2: question_id
    $3, -- $3: selected_answer_id (ID of the selected answer)
    $4  -- $4: is_correct (boolean)
  );
