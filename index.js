function handlebarsSetup() {
  //put any handlebars setup in here
  reposTemplate = Handlebars.compile($('#repos-template').html());
  commitsTemplate = Handlebars.compile($('#commits-template').html());
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
  Handlebars.registerPartial("commitDetails", $("#commit-details-partial").html())
}

function displayError() {
  $('#errors').append("I'm sorry, there's been an error. Please try again.");
}

function searchRepositories() {
  var searchTerm = $('#searchTerms').val();
  var url = 'https://api.github.com/search/repositories?q=' + searchTerm;

  $.get(url, function(response) {
    var context = {items: response['items']}
    $('#results-list').append(reposTemplate(context));
  }).fail(function(error) {
  // This is called when an error occurs
    displayError();
  });
}

// the SHA, the author, the author's login, and the author's avatar as an image

function showCommits(e) {
  //e = { dataset: { repository: "repo", owner: "owner" } }
  // https://api.github.com/repos/jquery/jquery/commits
  var url = 'https://api.github.com/repos/';
  url += e['dataset']['owner'];
  url += '/' + e['dataset']['repository'] + '/commits/';
  $.get(url, function(response) {
    var context = {items: response};
    $('#details').append(commitsTemplate(context));
  });
}


$(document).ready(function (){
  var reposTemplate;
  var commitsTemplate;
  handlebarsSetup();
  $('#search').on('click', searchRepositories);
  $('show-commits').on('click', showCommits);
});
