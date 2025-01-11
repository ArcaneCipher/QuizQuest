  -- Purpose: Fetches all public quizzes for the homepage.
  SELECT 
  category,     
  JSON_AGG(
    JSON_BUILD_OBJECT('title', title, 'quiz_url', quiz_url)
  ) AS quizzes 
  FROM quizzes
  WHERE is_public = true 
  GROUP BY category
  ORDER BY category;