function replaceNouns() {
  $.get("noun.html", function(response) {
    $('.noun').each(function() {
      var words = response.trim().split("\n");
      var random = Math.floor(Math.random() * words.length);
      $(this).html(words[random]);
    });
  }).fail(function(error) {
    console.log('Something went wrong: ' + error);
  });
};

function replaceVerbs() {
  $.get('verb.html', function(response) {
    $('.verb').each(function() {
      var words = response.trim().split('\n');
      var random = Math.floor(Math.random() * words.length);
      $(this).html(words[random]);
    });
  }).fail(function(error) {
    console.log('Something went wrong: ' + error);
  });
};

$(document).ready(function (){
  $('input#random_noun').click(replaceNouns);
  $('input#random_verb').click(replaceVerbs);
  //$('#random_verb').click(replaceVerbs);
  //$('input#random_verb').click(replaceVerbs);
});
