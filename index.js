function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  // handlebarsSetup()
  searchRepositories();
});
// const searchTerms = $('#searchTerms').val()
// console.log(searchTerms);
//   $.get("https://api.github.com/search/repositories"+"?q="+searchTerms, function(response) {
//     $("#results").html(response);
//   }).fail(function(error) {
//     // This is called when an error occurs
//       $('#errors').text("Im sorry there's been an error. Please try again.");
// });

function searchRepositories() {
  var searchTerms = $('#searchTerms').val();
   $.ajax({
     url: "https://api.github.com/search/repositories"+"?q="+searchTerms,
     type: "GET",
     dataType: "text",
     success: successFn,
     error: errorFn,
     complete: function(xhr, status){
      console.log("The request is completed");
     }
    //  $('#results').html('')
  });
}
function successFn(data) {
  console.log('success',data);
}
function errorFn(xhr, status, strErr) {
  $("#results").html(status + xhr +strErr + "I'm sorry, there's been an error. Please try again.");
}
