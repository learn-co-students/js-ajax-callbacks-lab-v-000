function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  var criteria = $("#searchTerms").val();

  $.get('https://api.github.com/search/repositories?q=' + criteria, data => {
    template = Handlebars.compile($('#results-template').html())
    $('#results').html(template(data.items))
  }).fail(error => {
    displayError()
  })
}

function showCommits(element) {
  var owner = element.dataset.owner;
  var repo = element.dataset.repository;

  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}