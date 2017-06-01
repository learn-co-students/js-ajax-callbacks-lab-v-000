function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup(Handlebars.registerPartial('userDetails', document.getElementById("user-details-partial").innerHTML))
});

function searchRepositories() {
  var searchTerms = document.getElementById("searchTerms").value
  var url = `https://api.github.com/search/repositories?q=${searchTerms}`
  $.get(url)
    .done(function(data) {
      const src = document.getElementById("repository-template").innerHTML
      const template = Handlebars.compile(src)
      const repoList = template(data.items)
      document.getElementById("results").innerHTML = repoList
    })
}

function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository

  var url = `https://api.github.com/repos/${owner}/${repo}/commits`
  $.get(url)
    .done(function(data) {
      const src = document.getElementById("commit-template").innerHTML
      const template = Handlebars.compile(src)
      const commitList = template(data)
      document.getElementById("details").innerHTML = commitList
    })
    .fail(function(error) {
      displayError();
    })
}

function displayError() {
  document.getElementById('errors').innerHTML += "I'm sorry, there's been an error. Please try again."
}
