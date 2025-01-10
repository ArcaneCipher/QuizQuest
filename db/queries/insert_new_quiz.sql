-- Purpose: Adds a new quiz to the database.
INSERT INTO
  quizzes (
    creator_id,
    title,
    description,
    is_public,
    quiz_url
  )
VALUES
  (
    $1, -- $1: creator_id (user creating the quiz)
    $2, -- $2: title (quiz title)
    $3, -- $3: description (quiz description)
    $4, -- $4: is_public (boolean for public/private)
    $5  -- $5: quiz_url (unique URL for sharing)
    )
RETURNING id;
