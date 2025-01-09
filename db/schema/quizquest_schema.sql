DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS quizzes CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS results CASCADE;
DROP TABLE IF EXISTS user_answers CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  is_public BOOLEAN NOT NULL DEFAULT TRUE,
  quiz_url VARCHAR(255) NOT NULL,
  category CATEGORY_ENUM NOT NULL DEFAULT 'Other'
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
  question TEXT NOT NULL
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
  answer TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE results (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
  score SMALLINT NOT NULL DEFAULT 0,
  question_total SMALLINT NOT NULL DEFAULT 0,
  attempt_url VARCHAR(255)
);

CREATE TABLE user_answers (
  id SERIAL PRIMARY KEY NOT NULL,
  result_id INTEGER REFERENCES results(id) ON DELETE CASCADE,
  question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
  selected_answer_id INTEGER REFERENCES answers(id) ON DELETE CASCADE,
  is_correct BOOLEAN NOT NULL
);

-- Create the ENUM type for the category
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
