function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function searchRepositories() {
  const terms = $("#searchTerms").val()
  $.get("https://api.github.com/search/repositories?q=" + terms)
    .done(displayRepositories)
    .fail(displayError)
}

function displayRepositories(response) {
  console.log(response)
  const src = $("#repository-template").html()
  const template = Handlebars.compile(src)
  $("#results").html(template(response.items))
}

function displayError(error) {
  $("#errors").html("<p>I'm sorry, there's been an error. Please try again.</p>")
}

function showCommits(el) {
  const repo = el.dataset.repository
  const username = el.dataset.owner
  $.get(`https://api.github.com/repos/${username}/${repo}/commits`)
    .done(displayCommits)
    .fail(displayError)
}

function displayCommits(response) {
  console.log(response)
  const src = $("#commits-template").html()
  const template = Handlebars.compile(src)
  $("#details").html(template(response))
}

$(document).ready(function (){
  handlebarsSetup()
});
