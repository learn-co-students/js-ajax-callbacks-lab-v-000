function replaceNouns() {
  var url = "noun.html";
  $.get(url, function(data) {
    var nouns = data.trim().split('\n');

    $('.noun').each(function(index, item){
      $(this).html(nouns[randomNum(0, nouns.length - 1)]);
    });
  }).fail(function(error) {
    console.log('Something went wrong: ' + error);
  });
}

function replaceVerbs() {
  var url = "verb.html";
    $.get(url, function(data) {
      var verbs = data.trim().split('\n');

      $('.verb').each(function(index, item){
        $(this).html(verbs[randomNum(0, verbs.length - 1)]);
      });
    }).fail(function(error) {
      console.log('Something went wrong: ' + error);
    });
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).ready(function (){
  $('input#random_noun').click(replaceNouns);
  $('input#random_verb').click(replaceVerbs);
});