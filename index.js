function search() {
  $("#search").on('click', searchRepositories);
}

function searchRepositories() {
  var searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(results) {
    var source = $("#results-template").html();
    var template = Handlebars.compile(source);
    $('#results').html(template(results));
  }).fail(displayError());
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}

function showCommits(el) {
  var owner = el.dataset.owner;
  var repo = el.dataset.repository;
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(results) {
    var source = $("#commits-template").html();
    var template = Handlebars.compile(source);
    $('#details').html(template(results));
  }).fail(displayError());
}


function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});
