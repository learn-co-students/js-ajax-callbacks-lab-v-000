function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function searchRepositories(){
  const searchTerms = $('#searchTerms').val()
  $.get('https://api.github.com/search/repositories?q=${searchTerms}', data => {
    const template = Handlebars.compile($('#results-template').html())
    $('#results').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function showCommits(user){
  const owner = user.dataset.owner
  const repo = user.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#results-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function displayError(){
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function handlebarsSetup(){
  Handlebars.registerPartial("userDetails", $("user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});
