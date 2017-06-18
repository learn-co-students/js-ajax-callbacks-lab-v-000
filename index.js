$(document).ready(function (){
});

function searchRepositories(){
  var searchTerms = document.getElementById("searchTerms").value
  var url = `https://api.github.com/search/repositories?q=${searchTerms}`
  var req = new XMLHttpRequest()
  req.addEventListener("load", displayRepositories)
  req.open("GET", url)
  req.send()
  return false;
}

function displayRepositories(data, event){
  debugger
}

var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.")