function replaceNouns() {
  $.get('words.html', function(response) {

    var nouns = response.trim().split("\n");

    $('.noun').each(function() {
      var random_index = Math.floor(Math.random() * nouns.length);
      var rand_noun = nouns[random_index];
      $(this).html(rand_noun);
    });
  }).fail(function(error) {
    console.log("Something went wrong:" + error);
  });
};

function replaceVerbs() {


  $.get('words.html', function(response) {
    
    var verbs = response.trim().split("\n");

    $('.verb').each(function() {
      var random_index = Math.floor(Math.random() * verbs.length);
      var rand_verb = verbs[random_index];
      $(this).html(rand_verb);
    });
  }).fail(function(error) {
    console.log("Something went wrong:" + error);
  });
};

$(document).ready(function (){
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
