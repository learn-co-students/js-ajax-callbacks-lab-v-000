function replaceNouns() {
  $.get('noun.html', function (response) {
    var nouns = response.trim().split("\n");

    $('.noun').each(function() {
      var random_index = Math.floor(Math.random() * nouns.length)
      var noun = nouns[random_index];
      $(this).html(noun);
    });
  }).fail(function (error){
    alert('The request failed: ' + error.statusText);
  });
};

function replaceVerbs() {
  $.get('verb.html', function (response) {
    var verbs = response.trim().split("\n");

    $('.verb').each(function() {
      var random_index = Math.floor(Math.random() * verbs.length)
      var verb = verbs[random_index];
      $(this).html(verb);
    });
  }).fail(function (error){
    alert('The request failed: ' + error.statusText);
  });
};

$(document).ready(function (){
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
