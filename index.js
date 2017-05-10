function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

$(document).ready(function() {
  handlebarsSetup();
});

function repoList(context) {
  const template = Handlebars.compile($('#repo-list').html());
  return template(context);
}

function searchRepositories() {
  const query = $('#searchTerms').val();
  const url = `https://api.github.com/search/repositories?q=${query}`;

  $.get(url).done((data) => {
    $('#results').html(repoList(data.items));
  }).fail(displayError);
}

function commitsList(context) {
  const template = Handlebars.compile($('#commits-list').html());
  return template(context);
}

function showCommits(elem) {
  const user = elem.dataset.owner;
  const repo = elem.dataset.repository;
  const url = `https://api.github.com/repos/${user}/${repo}/commits`;

  $.get(url).done((data) => {
    $('#details').html(commitsList(data));
  }).fail(displayError);
}

function displayError(error) {
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}
