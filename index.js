$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    data.items.forEach(function(repo){
      $('#results').html(
        `<p>${repo.name}</p>`
      )
    })
  })
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again");
}

function showCommits(el) {
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, function(data) {
    $('#details').html(
      '<ul>'
      + data.map(function(c) { return `<li>${c.sha}</li>` }).join('')
      + '</ul>'
    )
  })
}
