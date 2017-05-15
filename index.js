function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {

  var searchTerms = $("#searchTerms").val();
  console.log(searchTerms)
  $.get(`https://api.github.com//search/repositories?q=${searchTerms}`,  displayRepositories()).fail(displayError());
}

function displayRepositories(data) {

}

function showCommits() {

}


function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

$(document).ready(function (){
  handlebarsSetup()
});
