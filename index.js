const githubUrl = "https://api.github.com"


// Gets the element w/ the errors id, then inserts text.
function displayError() {
  $('#errors').html("There has been an error")
}

// Create a "Search Repositories" link that calls a searchRepositories function on
// click, takes the value of a searchTerms text input, and queries the GitHub
// repository search API.

function searchRepositories() {
  // Get the value from the input w/ searchTerms id.
  const searchTerms = $('#searchTerms').val()
  // Make the Ajax GET Request.
  // 1st param: The requested url.
  // 2nd param: function that handles the response.
  $.get(`${githubUrl}/search/repositories?q=${searchTerms}`, function(data) {
      // Inserts the response in the div w/ the results id, after passing the
      // response data to the renderResults callback.
      $('#results').html(renderResults(data))
    }).fail(function(error) {
      // This is called when an error occurs.
      displayError()
    })
  }

// Takes array of matching data objects, calls map() on each nested items object,
// passing each as an argument to the renderResult callback.
var renderResults = (data) => data.items.map(result => renderResult(result))

// Builds the HTML structure of each data.items object.
var renderResult = function(data) {
  return (`
  <div>
    <h2><a href="${data.html_url}">${data.name}</a></h2>
    <p><a href="#" data-repository="${data.name}" data-owner="${data.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
    <p>${data.description}</p>
  </div>
  `)
}

function showCommits(data) {
  const owner = data.dataset.owner
  const repo = data.dataset.repository
  $.get(`${githubUrl}/repos/${owner}/${repo}/commits`, function(data) {
    $("#details").html(renderCommits(data))
  }).fail(function(error) {
    displayError()
  })
}

var renderCommits = (data) => data.map(commit => renderCommit(commit))

var renderCommit = function(data) {
  return (`
  <div>
    <h4>SHA: ${data.sha}</h4>
    <p>Author: ${data.author.login}</p>
    <img src="${data.author.avatar_url}">
  </div>
  `)
}

$(document).ready(function (){

});
