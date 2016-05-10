function replaceNouns() {
  $.get("noun.html", function(data) {
    var nouns = data.trim().split('\n');
    var rand_noun_index = Math.floor(Math.random() * nouns.length);

    $('.noun').each(function() {
      var rand_noun = nouns[rand_noun_index];
      $(this).html(rand_noun);
    });
  }).fail(function(error) {
    console.log("Error: " + error);
  });
};

function replaceVerbs() {
  $.get("verb.html", function(data) {
    var verbs = data.trim().split('\n');
    var rand_verb_index = Math.floor(Math.random() * verbs.length);

    $('.verb').each(function() {
      var rand_verb = verbs[rand_verb_index];
      $(this).html(rand_verb);
    });
  }).fail(function(error) {
    console.log("Error: " + error);
  });
};

$(document).ready(function (){
  // Code here
  $("#random_noun").click(replaceNouns);
  $("#random_verb").click(replaceVerbs);
});
