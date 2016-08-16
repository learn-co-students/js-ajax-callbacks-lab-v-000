function searchRepositories(){
  errorClear();
  var term = $('#searchTerms').val();
  var url = `https://api.github.com/search/repositories?q=${term}`;
  $.get( url, function(data) {
  var source = $("#result-template").html();
  var template = Handlebars.compile(source);
   $('#results').html(template(data));
  })
  .fail(function(error) {
    displayError();
  })
}

function showCommits(item) {

  // var url = item.dataset.url;
  var url = `${item.dataset.url}`+ "/commits";
    console.log(url);
 $.get( url, function(data){
   console.log("success");
   const template = Handlebars.compile($('#commits-template').html())
   $('#details').html(template(data));
 }).fail(function(error) {
   console.log(error);
   displayError();
 })
}

function displayError() {
  $('#errors').text("I'm sorry, there's been an error. Please try again.");
}

function errorClear() {
  $('#errors').text('');
}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
});
