DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS quizzes CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS results CASCADE;
DROP TABLE IF EXISTS user_answers CASCADE;

-- Create the ENUM type for the category
/*
Here’s the SQL query to get the list of values from the CATEGORY_ENUM type:
SELECT enumlabel AS category
FROM pg_enum
WHERE enumtypid = (SELECT oid FROM pg_type WHERE typname = 'category_enum');
 */
DO $$ BEGIN
  CREATE TYPE CATEGORY_ENUM AS ENUM (
    'Science',
    'History',
    'Movies',
    'Geography',
    'Technology',
    'Art',
    'Superheroes',
    'Programming',
    'Animals',
    'Riddles',
    'Space',
    'Sports',
    'Pop Culture',
    'Other'
  );
EXCEPTION
  WHEN duplicate_object THEN null; -- Avoid errors if the ENUM type already exists
END $$;

-- Users table: Stores information about users
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Quizzes table: Stores metadata about quizzes
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE, -- Links to the user who created the quiz
  title VARCHAR(255) NOT NULL,
  description TEXT,
  is_public BOOLEAN NOT NULL DEFAULT TRUE, -- Determines if the quiz is publicly visible
  quiz_url VARCHAR(255) NOT NULL, -- Unique URL for sharing the quiz
  category CATEGORY_ENUM NOT NULL DEFAULT 'Other' -- Category of the quiz
);

-- Questions table: Stores questions for each quiz
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE, -- Links to the quiz
  question TEXT NOT NULL -- The text of the question
);

-- Answers table: Stores possible answers for each question
CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE, -- Links to the question
  answer TEXT NOT NULL, -- The text of the answer
  is_correct BOOLEAN NOT NULL DEFAULT FALSE -- Indicates if this answer is correct
);

-- Results table: Tracks the results of quiz attempts
CREATE TABLE results (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, -- Links to the user who attempted the quiz
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE, -- Links to the quiz
  score SMALLINT NOT NULL DEFAULT 0, -- The user's score
  question_total SMALLINT NOT NULL DEFAULT 0, -- Total number of questions in the quiz
  attempt_url VARCHAR(255) -- Unique URL for sharing the result
);

-- User Answers table: Tracks answers selected by users during quiz attempts
CREATE TABLE user_answers (
  id SERIAL PRIMARY KEY NOT NULL,
  result_id INTEGER REFERENCES results(id) ON DELETE CASCADE, -- Links to the quiz result
  question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE, -- Links to the question
  selected_answer_id INTEGER REFERENCES answers(id) ON DELETE CASCADE, -- The answer selected by the user
  is_correct BOOLEAN NOT NULL -- Indicates if the user's selected answer was correct
);
