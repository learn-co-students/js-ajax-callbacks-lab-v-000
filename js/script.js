// function replaceNouns() {
//   $.get("noun.html", function(response){
//     $('.noun').each(function(index, noun){
//       var randomNoun = response.split("\n")[Math.floor(Math.random() * 10)]
//       noun.textContent = randomNoun;
//     });
//   });
// };

function replaceNouns() {
  $.get("noun.html", function(response){
    var randomNoun = response.split("\n")[Math.floor(Math.random() * 10)];
    $('.noun').html(randomNoun)
  });
}

function replaceVerbs() {
  $.get("verb.html", function(response){
    $('.verb').each(function(index, verb){
      var randomVerb = response.split("\n")[Math.floor(Math.random() * 10)]
      verb.textContent = randomVerb;
    });
  });
};

// function randomFromResponse(response){
//   return response.split("\n")[Math.floor(Math.random() * 10)];
// }

$(document).ready(function (){
  $('#random_noun').on("click", function(){
    replaceNouns();
  });

  $('#random_verb').on("click", function(){
    replaceVerbs();
  });
});
