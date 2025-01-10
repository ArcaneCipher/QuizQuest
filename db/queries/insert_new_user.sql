-- STRETCH FEATURE!!!
-- IMPLEMENT ONLY AFTER MVP IS DONE!!!
-- Purpose: Insert New User
INSERT INTO
  users (name, email, password)
VALUES
  (
    $1, -- name
    $2, -- email
    $3  -- password
  )
RETURNING id;
