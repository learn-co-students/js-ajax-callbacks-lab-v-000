function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}


function showCommits(el) {
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, function(data) {
    $("#details").html(
      data.map(function(commit) {
        return `<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>`
      }).join(''))
  }).fail(function error() {
      displayError()
  })
}

function searchResults(data) {
	return data.items.map(function(result) {
		return `
      <div>
        <h2><a href="${result.html_url}">${result.name}</a></h2>
        <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${result.description}</p>
      </div>
      <hr>
    `
	});
}

function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  const url = `https://api.github.com/search/repositories?q=${searchTerms}`
  $.get(url, function(data) {
      $('#results').html(searchResults(data))
    }).fail(error => {
      displayError()
    })
}

$(document).ready(function (){

});
