

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  var repoSearch = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${repoSearch}`, function(data) {
    const template = Handlebars.compile($('#results-template').html());
    $('#results').html(template(data));
  }).fail(error => {
    displayError();
  })
}

function showCommits(el) {
  var owner = el.dataset.owner;
  var repo = el.dataset.repository;
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(data) {
    const template = Handlebars.compile($('#commits-template').html());
    $('#details').html(template(data));
  });
}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});
