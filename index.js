$(document).ready(function (){
  handlebarsSetup();

});


function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function displayError(){
  $('#errors').append("I'm sorry, there's been an error. Please try again.");
}

function showCommits(x){
  var repo = x['attributes']['repo-name']['value']
  var owner = x['attributes']['owner']['value']

  var url = `https://api.github.com/repos/${owner}/${repo}/commits`

  $.get(url, function(response){
    displayCommits(response);
  }).fail(function(){
    displayError();
  });
}

function searchRepositories(){

  var searchTerms = $('#searchTerms').val();
  var url = "https://api.github.com/search/repositories?q=" + searchTerms + "&sort=stars&order=desc"

  $.get(url, function(response){
    displayResults(response);
  }).fail(function(){
    displayError();
  });
}

function displayResults(response){
  console.log(response)
  var template = $('#results-template').html();
  var compiled_template = Handlebars.compile(template);

  $('#results').html(compiled_template(response));

}

function displayCommits(response){
  console.log(response)
  var template = $('#commits-template').html();
  var compiled_template = Handlebars.compile(template);

  $('#details').html(compiled_template(response));
}
