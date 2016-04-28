function replaceNouns() {
  $.get('noun.html', function(nouns){
    var nounArray = nouns.split(/\n/).filter(function(i){return i !==''});
  $('.noun').each(function(){
    var randomNoun = Math.floor(Math.random() * nounArray.length);
    $(this).html(nounArray[randomNoun]);
    });
  }).fail(function(error) {
    console.log("There was an error: " + error);
  });
}

function replaceVerbs() {
  $.get('verb.html', function(verbs){
  var verbArray = verbs.split(/\n/).filter(function(i){return i !==''});
    $('.verb').each(function(){
      var randomVerb = Math.floor(Math.random() * verbArray.length);
      $(this).html(verbArray[randomVerb]);
    });
  }).fail(function(error) {
    console.log("There was an error: " + error);
  });
};

$(document).ready(function() {
    $('#random_noun').click(replaceNouns);
    $('#random_verb').click(replaceVerbs);
});