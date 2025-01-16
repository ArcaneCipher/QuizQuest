-- Purpose: Fetches all public quizzes for the homepage.
WITH all_categories AS (
  SELECT enumlabel AS category
  FROM pg_enum
  WHERE enumtypid = (
    SELECT oid
    FROM pg_type
    WHERE typname = 'category_enum'
  )
),
quizzes_with_categories AS (
  SELECT
    c.category,
    JSON_AGG(
      JSON_BUILD_OBJECT('title', q.title, 'quiz_url', q.quiz_url)
      ORDER BY q.title ASC
    ) AS quizzes
  FROM all_categories c
  LEFT JOIN quizzes q
  ON c.category = q.category::text -- Convert category_enum to text for comparison
  AND q.is_public = true
  GROUP BY c.category
)
SELECT *
FROM quizzes_with_categories
ORDER BY category ASC;
