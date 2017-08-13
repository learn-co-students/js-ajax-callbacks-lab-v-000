/* Display the collection of repositories inside the results div. Include repository name, description, and a link to the HTML URL. Also include repository owner login,
repository owner avatar as an image, and a link to the owner's profile page. Hint: Pay close attention to the structure of the search results! */
var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(renderSearchResults(data))
    }).fail(error => {
      displayError()
    })
}

var renderSearchResults = (data) => data.items.map( result => renderSearchResult(result))

var renderSearchResult = function(result) {
  return `
    <div>
      <h2><a href="${result.html_url}">${result.name}</a></h2>
      <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
      <p>${result.description}</p>
    </div>
  `
}

/* Add a "Show Commits" link to each repository result that will call a showCommits function that gets the repository's commits from the GitHub API and display them in the details div.
For each commit, list the SHA, the author, the author's login, and the author's avatar as an image. */

var showCommits = function(element) {
  $.get(`https://api.github.com/repos/${element.dataset.owner}/${element.dataset.repository}/commits`, function(data) {
    $('#details').html(renderCommits(data))
  }).fail(function(error) {
    displayError()
  })
}

var renderCommits = function(data) {
  var result = data.map((commit)=>renderCommit(commit)).join('')
  return `<ul>${result}</ul>`
}

var renderCommit = function(commit) {
  return `<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>`
}

/* Handle errors on each API call. If $.get fails, call a function displayError and display "I'm sorry, there's been an error. Please try again." in the errors div.
Hint: You can test your error callbacks by turning off Wi-Fi or temporarily changing the URL you use in the $.get request. */

var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.")

$(document).ready(function (){
});
