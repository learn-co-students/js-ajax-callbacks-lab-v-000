$(document).ready(function (){
  handlebarsSetup();
});

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function searchRepositories() {
  const searchTerms = $('#searchTerms').val();
  const url = 'https://api.github.com/search/repositories?q=' + searchTerms;

  $.get(url, function(data) {
    const template = Handlebars.compile($('#results-template').html());
    $('#results').html(template(data));
  }).fail(function(error) {
    displayError();
  });
}

function showCommits(element) {
  const user = element.dataset.owner;
  const repo = element.dataset.repository;
  const url = "https://api.github.com/repos/" + `${user}/${repo}/commits`;

  $.get(url, function(data) {
    const template = Handlebars.compile($('#commits-template').html());
    $('#details').html(template(data));
  });
}

function displayError(){
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}