$(document).ready(function () {
  let questionCounter = 0; // Keeps track of question numbers

  // Dynamically created "Add Answer" buttons
  $(document).on("click", "#addAnswer", function () {
    console.log("Adding a new answer!");

    const questionBlock = $(this).closest(".question-block");
    const answersContainer = questionBlock.find(".answers-container");
    const correctDropdown = questionBlock.find(".correct-answer-dropdown");

    // Get the current question index
    const questionIndex = questionBlock.data("question-id");

    // Get the current answer count (all answer items, including the initial one)
    const answerIndex = answersContainer.find("input[type='text']").length;

    // Create a new answer input dynamically
    const newAnswer = `
      <div class="answer-item">
        <input type="text" name="questions[${questionIndex}][answers][${answerIndex}][text]" placeholder="Enter an answer" class="form-control mb-2" required>
      </div>
    `;

    // Append the new answer to the container
    answersContainer.append(newAnswer);

    // Clear and repopulate the correct answer dropdown
    correctDropdown.empty(); // Clear existing options
    correctDropdown.append('<option value="" disabled selected>Select the correct answer</option>'); // Add default option

    // Populate the dropdown with updated options
    answersContainer.find("input[type='text']").each(function (index) {
      const optionText = `Answer ${index + 1}`;
      const newOption = `<option value="${index}">${optionText}</option>`;
      correctDropdown.append(newOption);
    });
  });

  // Dynamically created "Add Question" button
  $("#add-question").on("click", function () {
    console.log("Adding a new question!");

    // Increment question counter
    questionCounter++;

    // Create a new question block dynamically
    const newQuestion = `
      <div class="question-block" data-question-id="${questionCounter}">
        <div class="form-group mb-3">
          <label>Question</label>
          <input type="text" name="questions[${questionCounter}][text]" placeholder="Enter the question" class="form-control" required>
        </div>

        <div class="answers-container mb-3">
          <input type="text" name="questions[${questionCounter}][answers][0][text]" placeholder="Enter an answer" class="form-control mb-3" required>
        </div>

        <button type="button" id="addAnswer" class="btn btn-secondary mb-3">Add Answer</button>

        <div class="correct-answer-container mb-3">
          <label for="questions[${questionCounter}][correct]">Correct Answer</label>
          <select name="questions[${questionCounter}][correct]" class="form-control correct-answer-dropdown form-select" required>
            <option value="" disabled selected>Select the correct answer</option>
            <option value="0">Answer 1</option>
          </select>
        </div>
      </div>
    `;

    // Append the new question block to the questions container
    $("#questions-container").append(newQuestion);
  });
});
