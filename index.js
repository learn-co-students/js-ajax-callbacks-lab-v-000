function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
  // #user-details-partial is the partial template
}


function search(){
  $("#search").on('click', function(){
    searchRepositories();
  })
}


function searchRepositories(searchTerm){
  var searchTerm = $("#searchTerms").val();
  $.get('https://api.github.com/search/repositories?q=' + searchTerm, function(response){
    const template = Handlebars.compile($('#results-template').html());
    $('#results').html(template(response))
  }).fail(displayError());
}


function displayError(){
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}

function showCommits(){
  $('.linkToCommits').on('click', function(){
    console.log("hello");
//    var test = $(this).attr("url")
//    console.log(test);
  })
//  $.get('https://api.github.com/repos/' + owner + repo + '/commits')

}


$(document).ready(function (){
  handlebarsSetup();
  search();
});
