$(document).ready(function (){
  handlebarsSetup()
  $('#search').on('click', searchRepositories);
});

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function searchRepositories() {
  var searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      var template = Handlebars.compile($('#results-template').html())
      $('#results').html(template(data))
    }).fail(error => {
      displayError()
    })
}

function showCommits(repoData) {
  var owner = repoData.dataset.owner
  var repo = repoData.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    var template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}