$(document).ready(function (){
});

var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  query = `https:api.github.com/search/repositories?q=${searchTerms}`
  $.get(query, response => {
      $("#results").html(renderSearchResults(response))
    }).fail(error => {
      displayError();
    });
}

var renderSearchResults = (results) => {
  results.items.map(result => renderSearchResult(result))
}

var renderSearchResult = (result) => {
  return `
      <div>
        <h2><a href="${result.html_url}">${result.name}</a></h2>
        <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${result.description}</p>
      </div>
      <hr>
    `
}

function showCommits(el) {
  var owner = el.dataset.owner
  var repository = el.dataset.repository
  query = `https:api.github.com/search/${owner}/${repository}/commits`
  $.get(query, response => {
    $("#details").html(renderCommits(response))
  }).fail(error => {
    displayError();
  });
}

var renderCommits = (response) => {
  var result = response.map((commit) => renderCommit(commit)).join('')
  return `<ul>${result}</ul>`
}

var renderCommit = (commit) => {
  return `
    <li><h3>${commit.sha}</h3></li>
    <li><p>${commit.commit.message}</p></li>
    <li>${commit.committer.login} - ${commit.committer.name}</li>
    <li><img src="${commit.committer.avatar_url}"></li>
  `
}

function displayError(error){
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}
