$(document).ready(function (){

});

function searchRepositories() {
  var searchTerm = document.getElementById("searchTerms").value

  $.get(`https://api.github.com/search/repositories?q=${searchTerm}/`, function(response) {
    const repoList = `<ul>${response.items.map(r => '<li>' + r.name + ' - <a href="#" data-owner="' + r.full_name + '" data-repository="' + r.name + '" onclick="showCommits(this)">Get Commits</a></li>').join('')}</ul>`

    $("#results").html(repoList);
  }).fail(error => displayError(error));
}

function displayError(error) {
  $("#errors").html("There has been an error")
}

function showCommits(el) {
  const owner = el.dataset.owner.split("/")[0];
  const repo = el.dataset.repository;

  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(response) {
    const commitList = `<ul>${response.map(commit => '<li><strong>' + commit.sha + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
    $("#details").html(commitList);
  }).fail(error => displayError(error));
}
