// function replaceNouns() {
//   .get("noun.html", function(response){

//       $('.noun').html(response);
//   });

// }

function replaceVerbs() {
  $('#random_verb').on('click', function(){
      $.get("verb.html", function(response){
          $('.verb').html(response);
      });
   });
}

$(document).ready(function (){
  replaceVerbs();
  // replaceNouns();

});


 