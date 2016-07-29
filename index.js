function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
});

function searchRepositories(event) {
  var query = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${query}`, data => {$('#results').html(Handlebars.compile($('#results-template').html())(data))}).fail(error => {displayError()})
}

function displayError() {
  $('#errors').html('error');
}

function showCommits(repoLink) {
  var user = repoLink.dataset.owner
  var repo = repoLink.dataset.repository
  $.get(`https://api.github.com/repos/${user}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}
