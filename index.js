const rootURL = "https://api.github.com"

function searchRepositories () { 
  var query = document.getElementById("searchTerms").value
$.get( `${rootURL}/search/repositories?q=${query}`, function( data ) { 
  const template = Handlebars.compile($('#main-template').html())
  $('#results').html(template(data))
}).fail(function () {
      displayError() 
  })
}

function displayError () {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function showCommits (item) { 

  debugger

  const owner = item.dataset.owner
  const repo = item.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function( data ) { 
  const commits = Handlebars.compile($('#commits-partial').html())
 $('#details').html(commits(data))
}).fail(function () {
      displayError() 
  })
}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()

});


