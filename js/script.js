function replaceNouns() {
  $.get('noun.html', function(data){
    var nouns = data.trim().split('\n');
    $('.noun').each(function(){
      var random_index = Math.floor(Math.random() * nouns.length);
      var the_noun = nouns[random_index];

      $(this).html(the_noun);
    });
  });
};

function replaceVerbs() {
  $.get('verb.html', function(data){
    var verbs = data.trim().split('\n');
    $('.verb').each(function(){
      var random_index = Math.floor(Math.random() * verbs.length);
      var the_verb = verbs[random_index];

      $(this).html(the_verb);
    });
  });
};

$(document).ready(function (){
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
