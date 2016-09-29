$(document).ready(function (){
  handlebarsSetup()
  searchRepositories()
});

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  // searchTerms comes from the value of input id="searchTerms"
  const searchTerms = $("#searchTerms").val();
  // Now we start the Ajax GET request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    // Here we are getting the element on the page with the id of sentences and
    // insert the response
    const template = Handlebars.compile($("#results-template").html());
    // template(Handlebars.compile) will return a function
    $("#results").html(template(data))
    // This is called when an error occurs
  }).fail(displayError());
}

function showCommits(element) {
  const owner = element.dataset.owner
  const repo = element.dataset.repository
  // Now we start the Ajax GET request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(data) {
    // Here we are getting the element on the page with the id of sentences and
    // insert the response
    const template = Handlebars.compile($("#details-template").html())
    // template(Handlebars.compile) will return a function
    $('#details').html(template(data))
  }).fail(error => {
    // This is called when an error occurs
    displayError()
  })
}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}
