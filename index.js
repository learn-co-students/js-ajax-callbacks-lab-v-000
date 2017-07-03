$(document).ready(function (){

});

function displayError(){
  $("#errors").html("error")
}

function searchRepositories(){
  // https://api.github.com/search/repositories?q=tetris
  const search_term = $("#searchTerms").val
  $.get("https://api.github.com/search/repositories?q=" + search_term, (response) => {
    console.log(response);
    var results = response.items;
    console.log(results);
    results.forEach((result) => {
      console.log(result.name, result.html_url);
    });
  }).fail((error) => {
    // This is called when an error occurs
    console.log('Something went wrong: ' + error);
    displayError();
  });
}
