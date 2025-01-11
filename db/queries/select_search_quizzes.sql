-- Purpose: Fetches searched quizzes for the homepage.
SELECT 
  category,     
  JSON_AGG(
  JSON_BUILD_OBJECT('title', title, 'quiz_url', quiz_url)
  ) AS quizzes 
FROM 
  quizzes
WHERE 
  is_public = true AND ($1::TEXT IS NULL OR LOWER(title) LIKE LOWER($1) OR LOWER(category::TEXT) LIKE LOWER($1))
GROUP BY 
  category
ORDER BY 
  category;