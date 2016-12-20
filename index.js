"use strict"; 

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html()); 
  Handlebars.registerPartial("resultsTemplate", $("#results-template").html()); 
  Handlebars.registerPartial("commitsTemplate", $("#commits-template").html()); 
}

function handleSearchClick(){
  $("#search").on("click", searchRepositories);  
}

function searchRepositories(){
  var searchTerm = $("#searchTerms").val(); 
  var url = "https://api.github.com/search/repositories?q=" + searchTerm; 
  $.get(url, function(data){
    var template = Handlebars.compile($('#results-template').html()); 
    $('#results').html(template(data)); 
  }).fail(function(error) {
    displayError(error);  
  }); 
}

function showCommits(e){
  var owner = e.dataset.owner; 
  var repo = e.dataset.repository; 
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(data) {
    var template = Handlebars.compile($('#commits-template').html()); 
    $('#details').html(template(data)); 
  }).fail(function(error) {
    displayError(error);  
  })
}

function displayError(error) {
  var message = "I'm sorry, there's been an error. Please try again."; 
  $("#errors").html(message); 
}

$(document).ready(function (){
  handleSearchClick(); 
  handlebarsSetup(); 
});
