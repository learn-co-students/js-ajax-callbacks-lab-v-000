function replaceNouns() {
  $.get('noun.html', function(words){
    var nouns = words.trim().split("\n");
    var randomNum = getRandomInt(nouns);
    var randomNoun = nouns[randomNum];
    $('.noun').html(randomNoun);
  }).fail(function(error) {
    alert('Something went wrong: ' + error);
  });
};

function replaceVerbs() {
  $.get('verb.html', function(words){
    var verbs = words.trim().split("\n");
    var randomNum = getRandomInt(verbs);
    var randomVerb = verbs[randomNum];
    $('.verb').html(randomVerb);
  }).fail(function(error) {
    alert('Something went wrong: ' + error);
  });
};

function getRandomInt(list) {
    return Math.floor(Math.random() * list.length);
}
$(document).ready(function (){
  // Code here
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
