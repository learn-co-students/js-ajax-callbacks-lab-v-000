function replaceNouns(){
  $.get('noun.html', function(data){
    var nouns = data.trim().split('\n');
    var noun = nouns[Math.floor(Math.random() * nouns.length)];

    $('.noun').each(function(){
      $(this).html(noun);
    });
  }).fail(function(error){
    alert('Failed request: ' + error.statusText);
  });
};

function replaceVerbs(){
  $.get('verb.html', function(data){
    var verbs = data.trim().split('\n');
    var verb = verbs[Math.floor(Math.random() * verbs.length)];

    $('.verb').each(function(){
      $(this).html(verb);
    });
  }).fail(function(error){
    alert('Failed request: ' + error.statusText);
  });
};

$(document).ready(function (){
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
