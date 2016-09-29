$(document).ready(function (){
  handlebarsSetup();
});

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

// provided code above
// my code below

function searchRepositories() {
  const url = "https://api.github.com/search/repositories?q=" + $('#searchTerms').val();
  $.get(url, function(data) {
    const template = Handlebars.compile($('#results-template').html());
    $('#results').html(template(data));
  }).fail(function(error){
    displayError();
  });
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}

function showCommits(a_tag) {
  const owner = a_tag.dataset.owner;
  const repo = a_tag.dataset.repository;
  const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
  $.get(url, function(data){
    const template = Handlebars.compile($('#details-template').html());
    $('#details').html(template(data));
  }).fail(function(error){
    displayError();
  });
}