function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  var searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    var template = Handlebars.compile($('#results-template').html())
    $('#results').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function showCommits(rep) {
  var owner = rep.dataset.owner
  var repo = rep.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    var template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}

$(document).ready(function (){
  handlebarsSetup()
});
