function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories(){
  var searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data =>
    {const template = Handlebars.compile($('#results-template').html())
    $('#results').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function showCommits(){
  
}

function displayError() {
  $('#errors').append("I'm sorry, there's been an error. Please try again.");
}
