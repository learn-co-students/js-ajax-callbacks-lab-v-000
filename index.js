const githubUrl = "https://api.github.com"

var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`${githubUrl}/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(renderSearchResults(data))
    }).fail(error => {
      displayError()
    })
  }

function displayError() {
  $('#errors').html("There has been an error")
}

var renderSearchResults = (data) => data.items.map( result => renderSearchResult(result))

var renderSearchResult = function(data){
  return `
  <div>
    <h2><a href="${data.html_url}">${data.name}</a></h2>
    <p><a href="#" data-repository="${data.name}" data-owner="${data.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
    <p>${data.description}</p>
  </div>
  `
}

var renderCommit = function(data){
    return `
  <div>
    <h2>SHA: ${data.sha}</a></h2>
    <p>Author: ${data.author.login}</p>
    <span><img src="${data.author.avatar_url}"></span>
  </div>
  `
}

var renderCommits = (data) => data.map( result => renderCommit(result))

function showCommits(data){
  const repo = data.dataset.repository
  const owner = data.dataset.owner
  $.get(`${githubUrl}/repos/${owner}/${repo}/commits`, data => {
      $('#details').html(renderCommits(data))
    }).fail(error => {
      displayError()
    })
}

$(document).ready(function (){
});

