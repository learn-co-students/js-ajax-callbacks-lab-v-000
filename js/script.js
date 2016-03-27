function replaceNouns() {
  $('#random_noun').on('click', function(event) {
    $.get("noun.html", function(response) {
      var nouns = response.trim().split("\n");

      $(".noun").each(function(index, value) {
        $(this).text(nouns[Math.floor(Math.random() * words.length)]);
      });
    });

    event.preventDefault();
  });
};

function replaceVerbs() {
  $('#random_verb').on('click', function(event) {
    $.get("verb.html", function(response) {
      var verbs = response.trim().split("\n");

      $(".verb").each(function(index, value) {
        $(this).text(verbs[Math.floor(Math.random() * words.length)]);
      });
    });

    event.preventDefault();
  });
};

$(document).ready(function (){
  replaceNouns();
  replaceVerbs();
});
