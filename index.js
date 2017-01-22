function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
  runSearch();
});

var url = "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}";

function runSearch(){
  $('a').on('click', searchRepositories);
}

function searchRepositories(){
  $.get(url, function(data) {
    $('div#results').html(data);

    alert("Data was loaded.");
  });
}


// $('.course').on('click', function(){
//   $(this).find('.detail').slideToggle();
// });
 
// $('.course .delete').on('click', function(event){
//   alert("about to delete");
//   event.stopPropagation();
// });




//    $.get("sentence.html", function(response) {
//     // Here we are getting the element on the page with the id of sentences and
//     // inserting the response
//     $("#sentences").html(response);


// $.get( "ajax/test.html", function( data ) {
//   $( ".result" ).html( data );
//   alert( "Load was performed." );
// });