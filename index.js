$(document).ready(function (){
});

function searchRepositories(){
  var search = document.getElementById("searchTerms").value

  $.get("https://api.github.com/search/repositories?q=" + search, function(response){
    var template = Handlebars.compile(document.getElementById("results-template").innerHTML)
    var repoList= template(response)
    document.getElementById("results").innerHTML = repoList
  }).fail(function(error){
    displayError();
  })
}

function showCommits(el){
  debugger;
  var repo = el.dataset.repository
  var owner = el.dataset.owner

  $.get("https://api.github.com/repos/" + owner + "/" + repo +"/commits", function(response){
    var template = Handlebars.compile(document.getElementById("commits-template").innerHTML)
    var detailList = template(response)
    document.getElementById("details").innerHTML = detailList
  }).fail(function(error){
    displayError()
  })
}

function displayError(){
  document.getElementById("errors").innerHTML = "I'm sorry, there's been an error. Please try again."
}
