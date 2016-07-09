function replaceNouns() {
    $.get("noun.html", function(response) {
      var nouns = response.trim().split("\n");
      $(".noun").each(function() {
        var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        $(this).html(randomNoun);
      })
    }).fail(function(error) {
      alert('The request failed: ' + error.statusText);
    })
};

function replaceVerbs() {
    $.get("verb.html", function(response) {
      var verbs = response.trim().split("\n");
      $(".verb").each(function() {
        var randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
        $(this).html(randomVerb);
      })
    }).fail(function(error) {
      alert('The request failed: ' + error.statusText);
    })
};

$(document).ready(function (){
  // Code here
  $('#random_noun').click(replaceNouns);
    $('#random_verb').click(replaceVerbs);
});
