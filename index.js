$(document).ready(function (){
});

function displayError() {
  $("#errors").html("I'm sorry there was an error.");
}

function searchRepositories() {
  const searchterm = document.getElementById("searchTerms").value;
  const url =`https://api.github.com/search/repositories?q=${searchterm}`
      $.get(url, data=> {
      const template = Handlebars.compile($('#results-template').html())
      $('#results').html(template(data))
    }).fail(error => {
   displayError()

 })
}

function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($("#commits-template").html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}
