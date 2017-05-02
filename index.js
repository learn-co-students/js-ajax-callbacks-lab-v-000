function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  var search = document.getElementById("searchTerms").value

  $.get("https://api.github.com/search/repositories?q=" + search, function(response) {
    var template = Handlebars.compile(document.getElementById("results-template").innerHTML)
    var repoList = template(response)
    document.getElementById("results").innerHTML = repoList
  }).fail(function(error) {
    displayError();
  })
}

function displayError() {
  document.getElementById("errors").innerHTML =  "I'm sorry, there's been an error. Please try again."
}

function showCommits(el) {
  $.get("https://api.github.com/repos/" + el.dataset.owner + "/" + el.dataset.repository +"/commits", function(response) {
    var template = Handlebars.compile(document.getElementById("commits-template").innerHTML)
    var detailList = template(response)
    document.getElementById("details").innerHTML = detailList
  }).fail(function(error) {
    displayError()
  })
}
