function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  // handlebarsSetup()
});

$("a #search-repositories").on("click", function searchRepositories(searchTerms){

  $.get("https://api.github.com/search/repositories?q=${searchTerms}", function(data){
    debugger;
  });
});
