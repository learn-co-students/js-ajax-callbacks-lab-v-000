// $(document).ready(function (){
// });

var displayError = (function(error) {
  $('#errors').html("error. something went wrong");
})

function searchRepositories() {
  var searchTerm = $("#searchTerms").val()
  var url = "https://api.github.com/search/repositories"

  $.get(url, {q: searchTerm}, function(response){
    // console.log(response.items.map(r=> r.description))
    // var display = "<ul> ${response.items.map(r => '<li>' +r.name +)}"
    $("#results").html(renderSearchResults(response))
  }).fail(error => {
    displayError()
  })
}

var renderSearchResult = (result) => {
  return `
        <div>
          <h2><a href="${result.html_url}">${result.name}</a> </h2>
          <p>${result.description}</p>
          <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        </div>
        <hr>
        `
      }

var renderSearchResults = (response) => response.items.map(result => renderSearchResult(result))


function showCommits(el){
  var owner = el.dataset.owner
  var repo = el.dataset.repository

  var url = `https://api.github.com/repos/${owner}/${repo}/commits`

  $.get(url, response => {
    $('#details').html(renderCommits(response))
  }).fail(error => {
    displayError()
  })
}

var renderCommits = (response) =>{
  let result = response.map(result => renderCommit(result)).join('')
  return `<ul>${result}</ul>`
}

var renderCommit = (result) => {
  return `<li><h3>${result.sha}</h3><p>${result.commit.message}</p></li>`

}
