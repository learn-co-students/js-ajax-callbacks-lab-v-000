function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  const search_terms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${search_terms}`, function(repos) {
    $('#details').html('');
    const template = Handlebars.compile($('#repository-template').html());
    $('#results').html(template(repos.items));
  }).fail(error => {
    displayError();
  })
}

function showCommits(elem) {
  const full_name = elem.dataset.fullname;
  $.get(`https://api.github.com/repos/${full_name}/commits`, function(commits) {
    const template = Handlebars.compile($('#commit-template').html());
    $('#details').html(template(commits));
  }).fail(error => {
    displayError();
  })
}
