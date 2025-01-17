# QuizQuest

QuizQuest is a collaborative project developed as part of the Lighthouse Labs midterm project. It is a quiz app that allows users to create, share, and take quizzes, as well as view and share their results. The app demonstrates the technical and collaborative skills of the development team.

## Project Authors

- Darshita ([@Darshita-04](https://github.com/Darshita-04))
- James ([@ArcaneCipher](https://github.com/ArcaneCipher))
- Javin ([@h1tokiri](https://github.com/h1tokiri))
- Kattt ([@Kattt888](https://github.com/Kattt888))

The repo: <https://github.com/ArcaneCipher/QuizQuest>

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Database Design](#database-design)
5. [Getting Started](#getting-started)
6. [Dependencies](#dependencies)
7. [Future Enhancements](#future-enhancements)

---

## About the Project

QuizQuest is a web application that allows users to:

- Create quizzes with custom questions and answers.
- Share quizzes via unique URLs.
- Attempt quizzes and view results.
- View a list of public quizzes.
- Share quiz attempt results with others.

This project was developed to simulate real-world team collaboration and software development processes, emphasizing communication, collaboration, and technical skills.

---

## Features

### Minimum Viable Product (MVP)
1. Create quizzes with custom questions and answers.
2. View a list of public quizzes.
3. Share quizzes using unique URLs.
4. Attempt quizzes and view results.
5. Share a link to quiz attempt results.

### Stretch Features
1. User authentication for managing quizzes and attempts.
2. Analytics for quiz creators (e.g., number of attempts, average scores).
3. Timer for quiz attempts.

---

## Tech Stack

### Front-End
- **HTML/CSS**: Basic structure and styling.
- **SASS**: A CSS preprocessor for enhanced styling.
- **JavaScript & jQuery**: Adds dynamic interactivity.
- **AJAX**: Asynchronous data fetching without page reloads.
- **Bootstrap**: Provides responsive UI components.

### Back-End
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for routing and server logic.
- **cookie-session**: Manages user sessions securely.
- **bcrypt**: Hashes passwords for secure authentication.
- **dotenv**: Handles environment variables.
- **morgan**: Logs HTTP requests for debugging.

### Database
- **PostgreSQL**: Relational database to store user data, quizzes, and results.
- **pg**: PostgreSQL client for Node.js.

### Other Tools
- **EJS**: Templating engine for rendering dynamic pages.
- **d3.js**: Visualizes data (e.g., quiz statistics).
- **nodemon**: Automatically restarts the server during development.
- **chalk**: Adds color to console logs for better readability.

---

## Database Design

### Entities

1. **Users**: Manages user data and authentication.
2. **Quizzes**: Stores quiz details and settings.
3. **Questions**: Stores quiz questions.
4. **Answers**: Stores potential answers and correctness.
5. **Results**: Tracks user attempts and scores.
6. **User Answers**: Tracks answers selected by users.

### Entity-Relationship Diagram (ERD)

The database design connects users, quizzes, questions, and results through a relational schema:

![Entity Relationship Diagram](./screenshots/entity-relationship-diagram.png)

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (10.x or above)
- npm (5.x or above)
- PostgreSQL (6.x or above)

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone git@github.com:ArcaneCipher/QuizQuest.git
   cd QuizQuest
   ```

2. Set up the `.env` file:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your local configuration:

   ```
   DB_USER=labber
   DB_PASSWORD=labber
   DB_NAME=midterm
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Rebuild SASS binaries (if necessary):

   ```bash
   npm rebuild node-sass
   ```

5. Reset the database:

   ```bash
   npm run db:reset
   ```

6. Start the server:

   ```bash
   npm run local
   ```

7. Open the app in your browser:

   <http://localhost:8080>

---

## Dependencies

The project relies on the following dependencies:

### Production

- **bcrypt**: `^5.1.1`
- **chalk**: `^2.4.2`
- **cookie-session**: `^2.1.0`
- **d3**: `^7.9.0`
- **dotenv**: `^2.0.0`
- **ejs**: `^2.6.2`
- **express**: `^4.17.1`
- **morgan**: `^1.9.1`
- **pg**: `^8.5.0`
- **sass**: `^1.35.1`

### Development

- **nodemon**: `^2.0.10`

---

## Future Enhancements

1. **Customizable Quiz Appearance**:
   - Allow users to add themes, colors, or multimedia to their quizzes.
2. **Real-Time Multiplayer Quizzes**:
   - Enable users to compete in quizzes simultaneously.
3. **Advanced Analytics**:
   - Provide creators with detailed insights, such as question difficulty or user performance trends.
4. **Gamification**:
   - Introduce badges, leaderboards, and achievements to enhance user engagement.
5. **Mobile Optimization**:
   - Optimize the app for mobile devices with touch-friendly interfaces.

---

For more details, visit the [QuizQuest Repository](https://github.com/ArcaneCipher/QuizQuest).
