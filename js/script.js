function replaceNouns() {
  $.get("noun.html", function(response) {
    var nouns = response.trim().split("\n");
    $('.noun').each(function() {
      var noun = nouns[randomWordGenerator(nouns)];
      $(this).html(noun);
    });
  }).fail(function(error) {
    alert('You have encountered an error.')
  });
};

function replaceVerbs() {
  $.get("verb.html", function(response) {
    var verbs = response.trim().split("\n");
    $('.verb').each(function() {
      var verb = verbs[randomWordGenerator(verbs)];
      $(this).html(verb);
    });
  }).fail(function(error) {
    alert('You have encountered an error.')
  });
};

function randomWordGenerator(variable) {
  return Math.floor(Math.random() * variable.length)
}

$(document).ready(function (){
  $("#random_noun").click(replaceNouns);
  $("#random_verb").click(replaceVerbs);
});
