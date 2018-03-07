$(document).ready(function (){
});

function searchRepositories() {
    searchTerms = document.getElementById("searchTerms").value;
    $.get(`https://api.github.com/search/repositories?q=${searchTerms}/`,
      function(response) {
        const repoList = `<ul>${response.items.map(r => '<li>' + r.name + ' - <a href="#" data-owner="' + r.full_name + '" data-repository="' + r.name + '" onclick="showCommits(this)">Get Commits</a></li>').join('')}</ul>`;
        $("#results").html(repoList);
      }).fail(error => displayError(error));
  }

function showCommits(el) { 
    const owner = el.dataset.owner.split("/")[0];
    const repo = el.dataset.repository;

    $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, 
    function(response){ 
        const commitsList = `<ul>${response.map(commit => '<li><strong>' + commit.sha + '</strong> - ' + commit.commit.message+ '</li>').join('')}</ul>`
        $("#details").html(commitsList);
    }).fail(error => displayError(error));
}

function displayError(error) {
    $("#errors").html("I'm sorry, there's been an error. Please try again.")
}
