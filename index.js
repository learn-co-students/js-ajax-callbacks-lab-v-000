function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  // handlebarsSetup()
  searchRepositories();
});

var context = {title: "My New Post", body: "This is my first post!"};
var html    = template(context);

// function searchRepositories() {
//   const searchTerms = $('#searchTerms').val()
//   $('form').on()
//     $.get("https://api.github.com/search/repositories"+"?q="+searchTerms, function(data) {
//       $("#results").html(data);
//       var template = Handlebars.compile(data);
//
//     }).fail(function(error) {
//       $('#errors').text("Im sorry there's been an error. Please try again.");
//   });
// }

function searchRepositories() {
  $('form').on('submit', function(){
  var searchTerms = $('#searchTerms').val();
   $.ajax({
     url: "https://api.github.com/search/repositories?q=${searchTerms}",
     type: "GET",
     dataType: "text",
     success: successFn,
     error: errorFn,
     complete: function(xhr, status){
      console.log("The request is completed");
     }
    //  $('#results').html('')
  });
});
}
function successFn(data) {
  console.log('success',data);
}
function errorFn(xhr, status, strErr) {
  $("#results").html(status + xhr +strErr + "I'm sorry, there's been an error. Please try again.");
}
