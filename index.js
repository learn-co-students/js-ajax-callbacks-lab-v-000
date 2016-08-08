function searchRepositories() {
  $.get( "https://api.github.com/search/repositories?q=${searchTerms}", function(searchTerms) {
    $( ".results" ).html(searchTerms);
    alert( "Load was performed." );
  });
}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()

});
