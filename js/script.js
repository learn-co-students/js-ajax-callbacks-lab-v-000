
function replaceNouns() {
  $.get("noun.html", function(response){
    var nouns = response.trim().split("\n");

    $('.noun').each(function(index, span){
      var selectedNoun = nouns[Math.floor(Math.random() * nouns.length)];
      $(this).html(selectedNoun);
    });
  }).fail(function(error){
    alert("Something went wrong:" + error);
  });
};

function replaceVerbs() {
  $.get("verb.html", function(response){
    var verbs = response.trim().split("\n");

    $('.verb').each(function(index, span){
      var selectedVerb = verbs[Math.floor(Math.random() * verbs.length)];
      $(this).html(selectedVerb);
    });
  }).fail(function(error){
    alert("Something went wrong:" + error);
  });
};

$(document).ready(function (){
  // Code here
  $("#random_noun").on("click", replaceNouns);
  $("#random_verb").on("click", replaceVerbs);
});
