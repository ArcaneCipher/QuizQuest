-- STRETCH FEATURE!!!
-- IMPLEMENT ONLY AFTER MVP IS DONE!!!
-- Purpose: Select User by Email
SELECT
  id,
  name,
  email,
  password
FROM
  users
WHERE
  email = $1; -- email
