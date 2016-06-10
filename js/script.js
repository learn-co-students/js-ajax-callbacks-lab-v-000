function replaceNouns() {
  $.get('noun.html', function (response) {
    var nouns = response.trim().split("\n");

    $(".noun").each(function ()  {
      var randI = Math.floor(Math.random() * nouns.length),
          randNoun = nouns[randI];

      $(this).html(randNoun);
    });

  }).fail(function (error) {
    alert("The request failed: " + error.statusText);
  });
};

function replaceVerbs() {
  $.get('verb.html', function (response) {
    var verbs = response.trim().split("\n");

    $(".verb").each(function () {
      var randI = Math.floor(Math.random() * verbs.length),
          randVerb = verbs[randI];

      $(this).html(randVerb);
    });

  }).fail(function (error) {
    alert("The request failed: " + error.statusText);
  });
};

$(document).ready(function () {

  $("#random_noun").on('click', replaceNouns);
  $("#random_verb").on('click', replaceVerbs);

});
