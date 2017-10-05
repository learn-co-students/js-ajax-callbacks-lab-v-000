$(document).ready(function (){
});

function searchRepositories() {
  query = `https:api.github.com/search/repositories?q=${document.selectElementById("searchTerms").value}`
  $.get(query, function(response) {
    var repoList = response.items.forEach((repo) => {
      document.getElementById("results").innerHTML =
      `
      <h1>${repo.name}</h1>
      <p>${repo.description}</p>
      <ul>
        <li>${repo.html_url}</li>
        <li><a href="${repo.owner.html_url}">${repo.owner.login}</a></li>
        <li><img src="${repo.owner.avatar_url}"></li>
        <li><a href="#" data-repository="${repo.name}" data-owner="${repo.owner.login}" onclick="showCommits(); return false">Show Commits</a></li>
      </ul>
      `
    })
  }).fail(function(error) {
    displayError(error);
  });
}

function showCommits(el) {
  var owner = el.dataset.owner
  var repository = el.dataset.repository
  query = `https:api.github.com/search/${owner}/${repository}/commits`
  $.get(query, function(response) {
    var commitList = response.items.forEach((commit) => {
      document.getElementById("details").innerHTML =
      `
      <h3>${commit.SHA}</h3>
      <p>${commit.commit.message}</p>
      <ul>
        <li>${commit.committer.name}</li>
        <li>${commit.committer.login}</li>
        <li><img src="${commit.committer.avatar_url}"></li>
      </ul>
      `
    })
  }).fail(function(error) {
    displayError(error);
  });
}

function displayError(error){
  document.getElementById("errors").innerHTML = "I'm sorry, there's been an error. Please try again."
}
