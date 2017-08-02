$(document).ready(function (){
});

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=" + searchTerms + "/", data => {
    console.log(data);
    const template = Handlebars.compile($('#results-template').html())
    $('#results').html(template(data))
  }).fail(error => {
    displayError();
  });
}

function showCommits(el) {
  const repo = el.dataset.repository
  const owner = el.dataset.owner
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    console.log(data);
    const template = Handlebars.compile($('#details-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError();
  });
}