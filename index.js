function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.");
}

function searchRepositories() {
  clearErrors();
  var searchTerms = $('#searchTerms').val();
  var searchURL = `https://api.github.com/search/repositories?q=${searchTerms}`;
  $.get(searchURL, searchResults => {
    $('#details').empty();
    var template = Handlebars.compile($('#results-partial').html());
    $('#results').html(template(searchResults));
  }).fail(error => {
    $('#results').empty();
    $('#details').empty();
    displayError();
  });
}

function showCommits(commit) {
  var owner = commit.dataset.owner;
  var repo = commit.dataset.repository;
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, commitDetails => {
    var template = Handlebars.compile($('#commits-partial').html());
    $('#details').html(template(commitDetails));
  }).fail(error => {
    displayError();
  });
}

function clearErrors() {
  $('#errors').empty();
}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial('userDetails', $('#user-details-partial').html());
  Handlebars.registerPartial('resultsPartial', $('#results-partial').html());
  Handlebars.registerPartial('commitsPartial', $('#commits-partial').html());
}

$(document).ready(function (){
  handlebarsSetup();
});
