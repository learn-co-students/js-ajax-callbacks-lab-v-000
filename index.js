function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

function searchRepositories() {
  var searchTerms = $('#searchTerms').val();
  var searchURL = `https://api.github.com/search/repositories?q=${searchTerms}`
  $.get(searchURL, function(data) {
    var template = Handlebars.compile($('#results-handlebars-template').html());
    $('#results').html(template(data));
  }).fail(function (error) {
    $("#errors").html("I'm sorry, there's been an error. Please try again.");
  });
}

function 

$(document).ready(function (){
  handlebarsSetup();
});
