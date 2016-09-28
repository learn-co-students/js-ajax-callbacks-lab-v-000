function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

function displayError() {
  $('#errors').append("I'm sorry, there's been an error. Please try again.");
}

function searchRepositories() {
  var query = $('#searchTerms').val();
  var endpoint = `https://api.github.com/search/repositories?q=${query}`;
  $.get(endpoint, function(response) {
    var source = $("#results-template").html();
    var template = Handlebars.compile(source);
    $('#results').html(template(response))
  }).fail(function(error) {
    displayError();
  });
}

function showCommits(el) {
  var owner = el.dataset.owner;
  var repo = el.dataset.repository;
  var endpoint = `https://api.github.com/repos/${owner}/${repo}/commits`;
  $.get(endpoint, function(response) {
    var source = $("#commits-template").html();
    var template = Handlebars.compile(source);
    $('#details').html(template(response))
  }).fail(function(error) {
    displayError();
  });
}

$(document).ready(function (){
  handlebarsSetup();
});
