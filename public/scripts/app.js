// Client facing scripts here
$(() => {

  // quiz iteration

  const quizIteration = (quizParam) => {
    const $quizzes = $('#quizzes');
    $quizzes.empty();
    for (let i = 0; i < quizParam.quizzes.length; i++) {
      const anchor = quizParam.quizzes[i].category;
      const quizzes = quizParam.quizzes[i].quizzes;

      // create category section
      const quizSection = $(`
        <div class="category quizzes-group py-4" id="${anchor.toLowerCase().replace(/ +/g, "")}">
          <h3 class="category-title mb-3 pb-3">${anchor}</h3>
          <div class="quiz-list"></div>
        </div>
      `);

      // select `.quiz-list` container
      const $quizList = quizSection.find('.quiz-list');

      // nested loop for quizzes within the current category
      for (let j = 0; j < quizzes.length; j++) {
        const quiz = quizzes[j];

        // create each quiz
        // updated by Javin for quiz sharing button
        const quizItem = $(`
          <a class="quiz" href="quiz/${quiz.quiz_url}">
            <h4>${quiz.title}</h4>
          </a>
        `);

        // append the quiz item to the quiz list
        $quizList.append(quizItem);
      }

      // append the entire category section to the main container
      $quizzes.append(quizSection);
    }
  }

  // get all quizzes

  const getAllQuizzes = () => {
    $.ajax({
      method: 'GET',
      url: '/api/all-quizzes'
    })
      .done((response) => {
        console.log(response);
        quizIteration(response);
      });
  }

  // get all categories

  const getAllCategories = () => {
    $.ajax({
      method: 'GET',
      url: '/api/category'
    })
      .done((response) => {
        const $categories = $('#categories');
        $categories.empty();

        // iterate through categories
        for (let i = 0; i < response.quizzes.length; i++) {
          const anchor = response.quizzes[i].category;
          $(`<a href="#${anchor.toLowerCase().replace(/ +/g, "")}" class="category">`).text(response.quizzes[i].category).appendTo($categories);
        }
      });
  }


  $(document).ready(() => {
    getAllQuizzes();
    getAllCategories();
  });

  // quiz search

  $(".search-quiz,.search-close").click(() => {
    $(".search-area").slideToggle();
  });


  $('#searchQuiz').on('keydown', (event) => {
    const query = $('#quiz').val();
    const clearSearch = $('#clearSearch');
    if (query.length > 0) {
      clearSearch.fadeIn();
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      $.ajax({
        url: '/api/search-quiz',
        method: 'GET',
        data: { query }
      }).done((response) => {
        const $quizzes = $('#quizzes');
        $quizzes.empty();
        console.log(response)
        if (response.quizzes && response.quizzes.length > 0) {
          quizIteration(response);
          $('html, body').animate({
            scrollTop: $('#quizzes').offset().top
          }, 500);
        } else {
          $quizzes.html('<p>No quizzes found.</p>');
        }
      });
    }
  });

  // clear search

  $('#clearSearch').on('click', function () {
    $(this).fadeOut();
    // clear the search input field
    $('#quiz').val('');
    // show all quizzes
    getAllQuizzes();

  });



  // scroll to top

  function scrollTop() {
    // 500 -> This is the value in px of the distance to be scrolled for the 'scroll-to-top' button to show-up
    if ($(window).scrollTop() > 500) {
      $(".backToTopBtn").addClass("active");
    } else {
      $(".backToTopBtn").removeClass("active");
    }
  }
  $(function () {
    // show and hide btn
    scrollTop();
    $(window).on("scroll", scrollTop);

    // body scroll on btn click
    $(".backToTopBtn").click(() => {
      $("html, body").animate({ scrollTop: 0 }, 1);
      return false;
    });
  });
});
