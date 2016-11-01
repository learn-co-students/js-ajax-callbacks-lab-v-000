function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

function searchRepositories() {
  var searchTerms = $("#searchTerms").val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    var template = Handlebars.compile($("#results-template").html());
    $("#results").html(template(data));
  }).fail(function(error) {
    displayError(error);
  });
}

function showCommits(el) {
  var owner = el.dataset.owner;
  var repo = el.dataset.repository;
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(data) {
    var template = Handlebars.compile($("#commits-template").html());
    $("#details").html(template(data));
  }).fail(function(error) {
    displayError(error);
  });
}

function displayError(){
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}

$(document).ready(function (){
  handlebarsSetup();
});