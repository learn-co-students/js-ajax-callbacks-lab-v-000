
$(document).ready(function() {
  // $.get("index.html", function(response) {
  //   $("#searchTerms").html(response)
  // })
});

var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.")

function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    $('#results').html(renderSearchResults(data))
  }).fail(error => {
    displayError()
  })
}

var renderSearchResults = (data) => data.items.map(result => renderSearchResult(result))

var renderSearchResult = (result) => {
  return `
    <div>
      <h2><a href="${result.html_url}">${result.name}</a></h2>
      <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
      <p>${result.description}</p>
    </div>
  `
}

// function showRepositories(event, data) {
//   var repos = JSON.parse(this.responseText)
//   const repoList = `<ul>${repos
//     .map(
//       r =>
//         "<li>" +
//         r.name +
//         ' - <a href="#" data-repo="' +
//         r.name +
//         '" onclick="getCommits(this)">Get Commits</a></li>'
//     )
//     .join("")}</ul>`
//   document.getElementById("results").innerHTML = repoList
// }