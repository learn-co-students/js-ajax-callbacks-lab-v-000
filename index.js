function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())

}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  var terms = $('#searchTerms')[0].value
  var url = `https://api.github.com/search/repositories?q=${terms}`
  $.get(url, function(data) {
    var stuff = JSON.stringify(data);
    showRepoResults(stuff);
  }).fail(function(error) {
    displayError();
  });
}

function showRepoResults(data) {
  const repos = JSON.parse(data);
  const src = document.getElementById('repo-template').innerHTML;
  const template = Handlebars.compile(src);
  const resultRepoList = template(repos.items);
  document.getElementById("results").innerHTML = resultRepoList;
}

function displayError() {
  $('#errors')[0].innerHTML = "<p>I'm sorry, there's been an error.  Please try again.</p>";
}

function showCommits() {
  var url = "/https://api.github.com/repos/owner/repo/commits/"

  $.get(url, function(data) {
    var stuff = JSON.stringify(data);
    displayCommits(stuff)
  }).fail(function(error) {
    displayError();
  });
}

function displayCommits(data) {
  const commits = JSON.parse(data);
  const src = document.getElementById('commits-template').innerHTML;
  const template = Handlebars.compile(src);
  const resultRepoList = template(commits.items);
  document.getElementById("results").innerHTML = resultRepoList;
}

function displayCommits(data) {

}
