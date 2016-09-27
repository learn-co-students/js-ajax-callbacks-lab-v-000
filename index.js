function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
  searchRepositories();
});

// provided code above
// my code below
function searchRepositories() {
  $('a').on("click", function(){
    debugger;
    var terms = $('#searchTerms').val();
    $.get("https://api.github.com/search/repositories?q=" + terms, function(data) {
      debugger;
      // for (item in data) {
      //   debugger;
      // }
      // display data in results div
    }).fail(function(error){
      displayError();
    });
  });
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}

function showCommits() {
  $('#showCommits').on("click", function() {
    $.get(" repo link ", function(data){
      // display data in details div
    }).fail(function(error){
      displayError();
    });
  });
}