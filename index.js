$(document).ready(function (){
  handlebarsSetup();
});

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

function searchRepositories() {
    var terms = $('#repo-search-terms').val();
    var url = `https://api.github.com/search/repositories?q=${terms}`;
      $.get(url, function(data) {
        var template = Handlebars.compile($('#results-template').html());

        $('#details').html(template(data));
      }).fail(function(error) {
        displayError(error);
  });
}

function displayError(){
   $('#errors').html("I'm sorry, there's been an error. Please try again.");
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
