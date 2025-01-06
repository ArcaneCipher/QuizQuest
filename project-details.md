# LHL Midterm Project: QuizQuest

Here are notes related to the LHL midterm group project. For an app I think it's best to keep it relatively simple/straightforward. We have two weeks to develop so I think simplicity in design/scope will be key.

The repo: <https://github.com/ArcaneCipher/QuizQuest>

## Tech stack (probably)

1. Front-End:
    - HTML/CSS: Basic structure and styling.
    - JavaScript & jQuery: Dynamic interactivity.
    - AJAX: Asynchronous data fetching without page reloads.

2. Back-End:
    - Node.js: Server-side JavaScript.
    - Express.js: Framework for handling routes and server logic.

3. Database:
    - PostgreSQL: To store user data, quizzes, and results.

4. Other Tools:
    - EJS: Templating engine for rendering dynamic pages.
    - Bootstrap: For quick, responsive styling.

## Scope Definition

Defining the scope, which includes user stories and MVP

### User Stories

1. As a user, I want to create a quiz with custom questions and answers.
2. As a user, I want to make my quiz public or private.
3. As a user, I want to share my quiz with friends using a unique URL.
4. As a user, I want to attempt quizzes and see my score afterward.
5. As a user, I want to view a list of public quizzes on the homepage.

### Minimum Viable Product (MVP)

1. Create quizzes with custom questions and answers.
2. Share quizzes using unique URLs.
3. Attempt quizzes and view results.

### LHL Assigned Tasks (Recommended new MVP List)
1. Users can create quizzes.
2. Users can make their quiz unlisted (make them private and not available on the home page, but if someone knows the quiz URL they can visit and take the quiz)
3. Users can share a link to a single quiz
4. Users can see a list of public quizzes
5. Users can see a list of public quizzes on the home page
6. Users can attempt a quiz
7. Users can see the results of their recent attempt
8. Users can share a link to the result of their attempt

### Stretch Features

1. User authentication for managing quizzes and attempts.
2. Analytics for quiz creators (e.g., number of attempts, average scores).
3. Timer for quiz attempts.

## Database design and ERDs

### Entities

Users:

- id (PK)
- name
- email
- password (hashed)

Quizzes:

- id (PK)
- title
- description
- is_public (boolean)
- creator_id (FK, references Users.id)

Questions:

- id (PK)
- quiz_id (FK, references Quizzes.id)
- text

Answers:

- id (PK)
- question_id (FK, references Questions.id)
- text
- is_correct (boolean)

Attempts:

- id (PK)
- user_id (FK, references Users.id)
- quiz_id (FK, references Quizzes.id)
- score

### Entity-Relationship Diagram (ERD)

1. Users are connected to Quizzes (1-to-many).
2. Quizzes are connected to Questions (1-to-many).
3. Questions are connected to Answers (1-to-many).
4. Users are connected to Attempts (1-to-many), which track quiz scores.

## Wireframes

This will need to be mocked up

Home Page:

- List of public quizzes.
Search bar to find quizzes.

Create Quiz Page:

- Input fields for title and description.
- Section to add questions and answers dynamically.

Attempt Quiz Page:

- Display questions with multiple-choice answers.
- Submit button to calculate score.

Result Page:

- Display user score with a shareable link.

## Workflow (Git)

Setting up the GitHub repository. Workflow is probably someone setting up the repo "QuizApp" (unless we wanna call it something else). Branching likely a "main" for stable/production ready code, "dev" branch for staging and integrating features. Then specific feature branches like "feature/create-quiz" or "feature/view-result" when we're working on those features.

## Work separation and organization

"who is responsible for what, and status tracking using tools like Trello, etc."

For Work separation/organization I think we'll have a better idea when we sit down and map out/plan/architect the app framework. Then we can divvy out features to work on. We'll have to figure out how often we want to meet as a team for code reviews before merging to main and for peer coding sessions. Fortunately there are no other lectures to worry about at that time.
