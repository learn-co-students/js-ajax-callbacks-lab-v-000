function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

$(document).ready(function (){
  handlebarsSetup();
});

function displayError() {
  $("#errors").append("I'm sorry, there's been an error. Please try again.");
};

function searchRepositories() {
  var searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    var template = Handlebars.compile($('#results-partial').html())
    $('#results').html(template(data))
  }).fail(function() {
    displayError()
  })
};

function showCommits(commit) {
  var owner = commit.dataset.owner
  var repo = commit.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(data) {
    var template = Handlebars.compile($('#commits-partial').html())
    $('#details').html(template(data))
  }).fail(function(error) {
    displayError()
  });
};
