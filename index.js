function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
  // #user-details-partial is the partial template
}

$(document).ready(function (){
  handlebarsSetup()
});


function searchRepositories(){
  var search = $('#searchTerms').val();
  $.get("https://api.github.com/search/repositories?q=" + search, function(response){
    $('#results').html(response);
    console.log(response);
  })
}
