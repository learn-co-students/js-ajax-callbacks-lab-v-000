function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});


function searchRepositories(){
  url: "https://api.github.com/search/repositories?q=${searchTerms}"
}


function displayError(){

}