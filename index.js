function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  // handlebarsSetup()
});

$("#search-repositories a").on("click", function searchRepositories(searchTerms){
  debugger;

  $.get("https://api.github.com/search/repositories?q=${searchTerms}", function(data){
  });
});
