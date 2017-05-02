$(document).ready(function (){ //loads when the document loads 
  handlebarsSetup()
})

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
    var searchTerms = $('#searchTerms').val() //grabs the value of the search term using jquery
  
    $.get(`https://api.github.com/search/repositories?q=${searchTerms}` //makes the get request using GH url and serach term var
    , function(data) { //function recieves object that looks something like AJAX info below - this line should be a line above
      const template = Handlebars.compile($('#results-template').html()) //sets the template to a constant and compiles data using Handlebars
      $('#results').html(template(data)) 
    }).fail(error => {
      displayError()
    })
}

/* $.ajax({
  data: data,
  success: success,
}); */

function showCommits(commit) {
    var owner = commit.dataset.owner
    var repo = commit.dataset.repository
    
    $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(data) {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html()) //registers Handlebar partial
}

function handlebarSetup() {
    Handlebars.registerPartial("userDetails", $("user"))
}