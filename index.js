function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}
function searchRepositories(searchTerms){
  $.get("https://api.github.com/repos/jquery/jquery/commits?author="+searchTerm, function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // inserting the response
    $("#results").html(response);
  });
}

function showCommits(){
  //display details in details div

}

$(document).ready(function (){
  handlebarsSetup()
});
