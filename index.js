$(document).ready(function (){
});

function displayError() {
  $("#errors").html("<h3>An error occured.</h3>");
}

function searchRepositories() {
  const search = document.getElementById("searchTerms").value;
  const url = "https://api.github.com/search/repositories?q=" + search;

  $.get(url, data => {
    const template = Handlebars.compile($("#results-template").html());
    $("#results").html(template(data));
  }).fail(error => {
    displayError();
  })
}

function showCommits(el) {
  const owner = el.dataset.owner;
  const repo = el.dataset.repository;
  const url = "https://api.github.com/repos/"+owner+"/"+repo+"/commits";

  $.get(url, data => {
    const template = Handlebars.compile($("#commits-template").html());
    $("#details").html(template(data));
  }).fail(error => {
    displayError();
  })
}