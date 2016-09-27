function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

// provided code above
// my code below
function searchFor() {
  $('a').on("click", searchRepositories(){
    var terms = $('#searchTerms').val();
    // query github search api with above
  });
}

$.get("https://api.github.com", function(data) {
  // use data
}).fail(function(error){
  // use error
});

// function searchFor() {
//   $('a').on("click", searchRepositories(){
//     var terms = $('#searchTerms').val();
//     // query github search api with above
//     $.get("https://api.github.com", function(data) {
//       // use data
//     }).fail(function(error){
//       // use error
//     });
//   });
// }