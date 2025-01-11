-- Purpose: Adds a new quiz to the database.
INSERT INTO
  quizzes (
    creator_id,
    title,
    description,
    is_public,
    quiz_url,
    category
  )
VALUES
  (
    $1, -- $1: creator_id (user creating the quiz)
    $2, -- $2: title (quiz title)
    $3, -- $3: description (quiz description)
    $4, -- $4: is_public (boolean for public/private)
    $5, -- $5: quiz_url (unique URL for sharing)
    $6  -- $6: category (quiz category)
    )
RETURNING id;
