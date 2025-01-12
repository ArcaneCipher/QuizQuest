$// Client facing scripts here
$(() => {
  $(document).ready(() => {    
    const path = window.location.pathname;
    const quizUrl = path.split('/').pop();   
    $.ajax({
      method: 'GET',
      url: `/api/quiz/${quizUrl}`,
    })
    .done((response) => {
      console.log(response);
    });  
  })
});


