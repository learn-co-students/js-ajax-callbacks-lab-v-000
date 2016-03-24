function replaceNouns() {
  $.get("../noun.html",function(data) {
    $('.noun').each(function() {
      var nouns = data.split("\n");
      var i = Math.floor(Math.random() * nouns.length);
      $(this).html(nouns[i]);
    });
  }).fail(function(error) {
    console.log("Something went wrong: " + error);
  });
};

function replaceVerbs() {
  $.get("../verb.html",function(data) {
    $('.verb').each(function() {
      var verbs = data.split("\n");
      var i = Math.floor(Math.random() * verbs.length);
      $(this).html(verbs[i]);
    });
  }).fail(function(error) {
    console.log("Something went wrong: " + error);
  });
};

$(document).ready(function (){
  // Code here
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
