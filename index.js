function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
});

var searchTerms = $('#searchTerms').val()
var $results = $('#results');

$(function searchRepositories(){
  $.ajax({
    type: 'GET',
    url: "https://api.github.com/search/repositories?q=${searchTerms}",
    success: function(repos){
      $.each(repos, function(i, repodata){
        $results.append('<li> ' + repodata +  '</li>')
      });
    }
  });
});


// $(function searchRepositories(){
//     $.get("https://api.github.com/search/repositories?q=${searchTerms}"), function(repos){
//       $.each(repos, function(i, repodata){
//         $results.append('<li> ' + repodata +  '</li>')
//       });
//     }
// });



// function searchRepositories(){
//   url: "https://api.github.com/search/repositories?q=${searchTerms}"
// }


// function displayError(){

// }


// $.get("this_doesnt_exist.html", function(data) {
//   // This will not be called because the .html file request doesn't exist
//   doSomethingGood();
// }).fail(function(error) {
//   // This is called when an error occurs
//   console.log('Something went wrong: ' + error);
// });