function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function searchRepositories() {
  let searchTerms = $("#searchTerms").val();
  let queryString = "q=" + encodeURIComponent(searchTerms);
  let url = "https://api.github.com/search/repositories";

  $.get(url, queryString, function (data) {
    let repos = data.items;
    let template = Handlebars.compile($( "#repos-template" ).html());
    let results = template(repos);
    $( "#results" ).html(results);
  }).fail( displayError );
}

function showCommits(el) {
  let repo = el.dataset.repository
  let owner = el.dataset.owner
  let url = "https://api.github.com/repos/" + owner + "/" + repo + "/commits"

  $.get(url, {}, function(data) {
    let commits = data;
    let template = Handlebars.compile($( "#commits-template" ).html());
    let details = template(commits);

    $( "#details" ).html(details);
  }).fail( displayError );
}

function displayError () {
  let message = "I'm sorry, there's been an error. Please try again.";
  $( "#errors" ).html("<p>" + message + "</p>");
}

$(document).ready(function (){
  handlebarsSetup()
});




