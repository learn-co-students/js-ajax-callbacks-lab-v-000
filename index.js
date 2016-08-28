function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function searchRepositories() {
  var searchTerms = $('#searchTerms').val();
  var url = 'https://api.github.com/search/repositories?q=' + searchTerms;
  $.get(url, function(data) {
    var template = Handlebars.compile($('#results-template').html());
    $('#results').html(template(data));
  }).fail(function(error) {
    displayError(error);
  });
}

function showCommits(obj) {
  var owner = obj.dataset.owner;
  var repo = obj.dataset.repository;
  var url = 'https://api.github.com/repos/'+ owner + '/' + repo + '/commits';
  $.get(url, function(data) {
    var template = Handlebars.compile($('#commits-template').html());
    $('#details').html(template(data));
  }).fail(function(error) {
    displayError(error);
  });
}

function displayError(error) {
  $('#errors').html("<p>I'm sorry, there's been an error. Please try again.</p>");
}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
});
