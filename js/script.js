function replaceNouns() {
  $.get('noun.html', function(response) {
    var nounList = response.trim().split("\n");

    $('.noun').each(function() {
      var randomNoun = nounList[Math.floor(Math.random() * nounList.length)];
      $(this).text(randomNoun);
    });
  }).fail(function(error) {

    console.log("Something went wrong: " + error);
  });
}

function replaceVerbs() {
  $.get('verb.html', function(response) {
    var verbList = response.trim().split("\n");

    $('.verb').each(function() {
      var randomVerb = verbList[Math.floor(Math.random() * verbList.length)];
      $(this).text(randomVerb);
    });
  }).fail(function(error) {

    console.log("Something went wrong: " + error);
  });
}

$(document).ready(function() {
  $('#random_verb').on('click', replaceVerbs);
  $('#random_noun').on('click', replaceNouns);
});
