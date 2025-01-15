$(document).ready(function () {
  let questionCounter = 0; // Keeps track of question numbers

  // Dynamically created "Add Answer" buttons
  $(document).on("click", "#addAnswer", function () {
    console.log("Adding a new answer!");

    const answersContainer = $(this).closest('.question-block').find('.answers-container');

    // Get the current question index
    const questionIndex = $(this).closest('.question-block').data('question-id') || 0;

    // Get the current answer count
    const answerIndex = answersContainer.children().length;

    // Create a new answer input dynamically
    const newAnswer = `
      <div class="answer-item">
        <label>Answer:</label>
        <input type="text" name="questions[${questionIndex}][answers][${answerIndex}][text]" placeholder="Enter an answer" class="form-control mb-2" required />
        <input type="radio" name="questions[${questionIndex}][correct]" value="${answerIndex}" required />
        <small>Mark as correct</small>
      </div>
    `;

    // Append the new answer to the container
    answersContainer.append(newAnswer);
  });

  // Dynamically created "Add Question" button
  $("#add-question").on("click", function () {
    console.log("Adding a new question!");

    // Increment question counter
    questionCounter++;

    // Create a new question block dynamically
    const newQuestion = `
      <div class="question-block" data-question-id="${questionCounter}">
        <label>Question:</label>
        <input type="text" name="questions[${questionCounter}][text]" placeholder="Enter the question" class="form-control mb-2" required />

        <div class="answers-container">
          <label>Answer:</label>
          <input type="text" name="questions[${questionCounter}][answers][0][text]" placeholder="Enter an answer" class="form-control mb-2" required />
          <input type="radio" name="questions[${questionCounter}][correct]" value="0" required />
          <small>Mark as correct</small>
        </div>

        <button type="button" id="addAnswer" class="btn btn-secondary btn-sm add-answer mt-2">Add Answer</button>
      </div>
    `;

    // Append the new question block to the questions container
    $("#questions-container").append(newQuestion);
  });
});

