function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-temp").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function displayError() {
  $("#errors").append("There has been an error, please try again.");
};

function searchRepositories() {
  var searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    var temp = Handlebars.compile($('#results-temp').html())
    $('#results').html(temp(data))
  }).fail(function() {
    displayError()
  })
};

function showCommits(commit) {
  var owner = commit.dataset.owner
  var repo = commit.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(data) {
    var temp = Handlebars.compile($('#commits-temp').html())
    $('#details').html(temp(data))
  }).fail(function(error) {
    displayError()
  });
};
