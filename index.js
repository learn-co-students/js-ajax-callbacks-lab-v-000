const rootURL = "https://api.github.com"
const searchURL = "https://api.github.com/search/repositories?q="

function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  const searchTerms = document.getElementById("searchTerms").value
  const uri = searchURL + searchTerms

  $.get(uri, data => {
    const template = Handlebars.compile($('#results-template').html())
    $('#results').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  const uri = `${rootURL}/repos/${owner}/${repo}/commits`

  $.get(uri, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function displayError() {
  const error = "I'm sorry, there's been an error. Please try again."
  document.getElementById('errors').innerHTML = error
}
