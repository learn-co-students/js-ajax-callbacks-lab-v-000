function replaceNouns() {
  $.get("noun.html", function(response) {
    $(".noun").each(function() {
      var nouns = response.trim().split("\n");
      var random = Math.floor(Math.random() * nouns.length);
      $(this).html(nouns[random]);
    });
  }).fail(function(error) {
    console.log("Something went wrong: " + error);
  });
};

function replaceVerbs() {
  $.get("verb.html", function(response) {
    $(".verb").each(function() {
      var verbs = response.trim().split("\n");
      var random = Math.floor(Math.random() * verbs.length);
      $(this).html(verbs[random]);
    });
  }).fail(function(error) {
    console.log("Something went wrong: " + error);
  });
};

$(document).ready(function (){
  // Code here

$('random_noun').click(replaceNouns);
$('random_verb').click(replaceVerbs);

});
