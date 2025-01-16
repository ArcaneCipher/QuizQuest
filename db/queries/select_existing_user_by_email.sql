-- Purpose: Check if the email is already registered
SELECT
  *
FROM
  users
WHERE
  email = $1;
