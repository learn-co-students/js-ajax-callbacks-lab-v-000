function replaceNouns() {
  $.get('noun.html', function(data) {
    var nouns = data.trim().split("\n");
    var i = Math.floor(Math.random() * nouns.length);

    $('.noun').each(function() {
      $(this).html(nouns[i]);
    });
  }).fail(function(error) {
    alert("Something went wrong:" + error);
  });
};

function replaceVerbs() {
  $.get('verb.html', function(data) {
    var verbs = data.trim().split("\n");
    var i = Math.floor(Math.random() * verbs.length);

    $('.verb').each(function() {
      $(this).html(verbs[i]);
    });
  }).fail(function(error) {
    alert("Something went wrong:" + error);
  });
};

$(document).ready(function (){
  $('input#random_noun').click(replaceNouns);
  $('input#random_verb').click(replaceVerbs);
});
