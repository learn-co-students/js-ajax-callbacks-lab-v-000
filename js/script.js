// function replaceNouns() {
//   $.get("noun.html", function(response){
//     $('.noun').each(function(index, noun){
//       var randomNoun = response.split("\n")[0]
//       noun.textContent = randomNoun;
//     });
//   }).fail(function(error){
//     alert("Something went wrong:" + error);
//   });
// };


// function replaceVerbs() {
//   $.get("verb.html", function(response){
//     $('.verb').each(function(index, verb){
//       var randomVerb = response.split("\n")[0]
//       verb.textContent = randomVerb;
//     });
//   }).fail(function(error){
//     alert("Something went wrong:" + error);
//   });
// };

function replaceNouns() {
  $.get("noun.html", function(response){
    $('.noun').each(function(index, noun){
      var randomNoun = response.split("\n")[Math.floor(Math.random() * 10)]
      noun.textContent = randomNoun;
    });
  }).fail(function(error){
    alert("Something went wrong:" + error);
  });
};


function replaceVerbs() {
  $.get("verb.html", function(response){
    $('.verb').each(function(index, verb){
      var randomVerb = response.split("\n")[Math.floor(Math.random() * 10)]
      verb.textContent = randomVerb;
    });
  }).fail(function(error){
    alert("Something went wrong:" + error);
  });
};

// Doc Ready

$(document).ready(function (){
  $('#random_noun').on("click", function(){
    replaceNouns();
  });

  $('#random_verb').on("click", function(){
    replaceVerbs();
  });
});
