// Client facing scripts here
$(() => {
  $(document).ready(() => {
    const path = window.location.pathname;
    const quizUrl = path.split('/').pop();
    let resultId;
    let totalQuestions = 0;

    // fetch quiz data
    $.ajax({
      method: 'GET',
      url: `/api/quiz/${quizUrl}`,
    })
      .done((response) => {

        const quizData = response.quiz[0];
        const questionAnswers = quizData.questions_and_answers;
        totalQuestions = questionAnswers.length
        let currentQuestionIndex = 0;

        // payload to send to /api/start-quiz
        const payLoad = {
          user_id: 1, // hardcoding user_id to 1 until user authentication is implemented
          quiz_id: quizData.quiz_id,
          question_total: totalQuestions,
        };

        // DOM Elements
        const nextQuestion = $('#next-question');
        const answersContainer = $('#answers-container');
        const questionTracker = $('#question-tracker');

        // set quiz title and description
        $('.quiz-title').text(quizData.title);
        $('.quiz-description').text(quizData.description);

        // start Quiz
        $('#startQuiz').on('click', () => {
          $.ajax({
            method: 'POST',
            url: '/api/start-quiz',
            data: payLoad,
          })
            .done((response) => {
              // console.log(response) // response contains result_id and attempt_url
              resultId = response.result_id
              $('#startQuiz').hide();
              $('.quiz-wrapper').show();
              renderQuestion();
            });
        });

        // question tracker

        const updateQuestionTracker = () => {
          questionTracker.text(`Question ${currentQuestionIndex + 1} of ${totalQuestions}`);

          // update the "Next" button to "Finish" on the last question
          if (currentQuestionIndex === totalQuestions - 1) {
            nextQuestion.text('Finish');
          } else {
            nextQuestion.text('Next Question');
          }
        };

        // render a question and its answers.
        
        const renderQuestion = () => {
          const currentQuestion = questionAnswers[currentQuestionIndex];

          // update question tracker
          updateQuestionTracker();

          // set question text
          $('#question-title').text(currentQuestion.question);
          nextQuestion.attr('disabled', true);

          // clear previous answers
          answersContainer.empty();

          // render answer options
          
          currentQuestion.answers.forEach((answer) => {
            const answerOption = $(`
              <div class="answer-option">
                <input type="radio" id="${answer.answer_id}" value="${answer.answer_id}" class="answer" name="answers">
                <label for="${answer.answer_id}">${answer.answer}</label>
              </div>
            `);

            answersContainer.append(answerOption);
          });

          // handle answer selection
          $('input[name="answers"]').on('change', function () {
            $('input[name="answers"]').prop('disabled', true);
            nextQuestion.attr('disabled', false);

            const selectedAnswerId = $(this).val();
            const selectedAnswer = currentQuestion.answers.find((answer) => answer.answer_id == selectedAnswerId);
            const correctAnswer = currentQuestion.answers.find((answer) => answer.is_correct);

            // highlight correct and incorrect answers
            if (selectedAnswer.answer_id === correctAnswer.answer_id) {
              $(this).addClass('correct-answer');
            } else {
              $(`input[name="answers"]#${correctAnswer.answer_id}`).addClass('correct-answer');
              $(this).addClass('wrong-answer');
            }

            // submit answer
            const answerPayLoad = {
              result_id: resultId,
              question_id: currentQuestion.question_id,
              selected_answer_id: selectedAnswerId,
              is_correct: selectedAnswer.is_correct,
            };

            $.ajax({
              method: 'POST',
              url: '/api/submit-answer',
              data: answerPayLoad,
            })
              .done((response) => {
              });
          });
        };

        // show the next question or display the completion message.
        const showNextQuestion = () => {
          if (currentQuestionIndex < totalQuestions - 1) {
            currentQuestionIndex++;
            renderQuestion({ result_id: payLoad.result_id });
          } else {

            $.ajax({
              method: 'POST',
              url: '/api/update-score',
              data: { result_id: resultId },
            })
              .done((response) => {
                console.log("Score updated")
              });

            $('#quiz-container').html('<h3 class="text-center">You have completed the quiz!</h3>');
            nextQuestion.remove(); // remove the next button
          }
        };

        nextQuestion.on('click', showNextQuestion);
      });
  });
});
