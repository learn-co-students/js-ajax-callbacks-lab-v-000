function replaceNouns() {
  $.get('noun.html', function(response){
    var nouns = response.trim().split("\n");
    $('.noun').each(function(){
      var random_index = Math.floor(Math.random() * nouns.length);
      var random_noun = nouns[random_index];
      $(this).html(random_noun);
    });
  }).fail(function (error){
    alert("The request has failed: " + error.statusText);
  });
};

function replaceVerbs() {
  $.get('verb.html', function(response){
    var verbs = response.trim().split("\n");
    $('.verb').each(function(){
      var random_index = Math.floor(Math.random() * verbs.length);
      var random_verb = verbs[random_index];
      $(this).html(random_verb);
    });
  }).fail(function (error){
    alert("The request has failed: " + error.statusText);
  });
};

$(document).ready(function (){
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
