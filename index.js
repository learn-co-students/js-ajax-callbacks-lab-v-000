function displayError() {
  $('errors').html("Error, please try again");
}

function searchRepositories() {
  const searchTerm = $('#searchTerms').val();
  const url = 'https://api.github.com/search/repositories?q=' + searchTerm;
  $.get(url, data => {
    const template = Handlebars.compile($('results-template').html())
    $('#results').html(template(data));
  }).fail(error => {
    displayError();
  })
}

function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});