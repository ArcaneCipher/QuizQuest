-- Purpose: Insert the new user into the database
INSERT INTO
  users (name, email, password)
VALUES
  (
    $1, -- name (first name, last name)
    $2, -- email addres (username)
    $3  -- password (hashed)
  );
