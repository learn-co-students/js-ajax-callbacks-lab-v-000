$(document).ready(function (){
});

function searchRepositories() {
  const searchTerms = $("#searchTerms").val().replace(" ", "+");
  const baseURI = "https://api.github.com/search/repositories?q="
  const searchURI = baseURI + searchTerms

  const src = $("#search-results-template").html();
  const template = Handlebars.compile(src);

  // const src = document.getElementById("search-results-template").innerHTML;
  // const template = Handlebars.compile(src);

  $.get(searchURI, function(response){
    console.log(response);
    $("#results").html(template(response.items));
  }).fail(function(error) {
    displayError();
  });
}

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function showCommits(el) {
  const src = $("#show-commits-template").html();
  const template = Handlebars.compile(src);

  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, function(response) {
    console.log(response);
    $("#details").html(template(response))
  }).fail(function(error) {
    displayError();
  });
}
