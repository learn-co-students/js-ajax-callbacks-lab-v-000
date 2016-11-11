function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function displayError(error) {
  $('#errors').html("I'm sorry, there was an error: ")
}

function searchRepositories() {
  var searchTerm = $('#searchTerms').val();
  $.get('https://api.github.com/search/repositories?q=' + searchTerm, function(data) {
    var template = Handlebars.compile($('#results-template').html());
    $('#results').html(template(data));
  }).fail(function(error) {
    displayError(error);
  });
}

function showCommits(params) {
  var owner = params.dataset.owner;
  var repo = params.dataset.repository;

  $.get('https://api.github.com/repos/' + owner + '/' + repo + '/commits', function(data) {
    var template = Handlebars.compile($('#commits-template').html());
    $('#details').html(template(data));
  }).fail(function(error) {
    displayError(error);
  });
}

$(document).ready(function (){
  handlebarsSetup()
});
