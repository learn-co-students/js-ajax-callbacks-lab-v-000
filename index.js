function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function () {
  handlebarsSetup()
  $('#search').on('click', searchRepositories);
});

function searchRepositories() {

  var searchTerms = $('#searchTerms').val();

  $.get('https://api.github.com/search/repositories', { q: searchTerms })
    .done(function (data) {
      var template = Handlebars.compile($("#repo-partial").html());
      $('#results').html(template(data));
    })

    .fail(function (error) {
      displayError();
    });
}

function showCommits(element) {
  var owner = element.dataset.owner;
  var repo = element.dataset.repository;

  $.get('https://api.github.com/repos/' + owner + '/' + repo + '/commits')
    .done(function (data) {
      var template = Handlebars.compile($('#commits-template').html())
      $('#details').html(template(data))
    })

    .fail(function (error) {
      displayError()
    });
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}
