function replaceNouns() {
  $.get('noun.html',function(response){
    var nouns = response.split('\n');
    $('.noun').html(nouns[Math.floor ( Math.random() * nouns.length )]);
  });
};

function replaceVerbs() {
   $.get('verb.html',function(response){
    var verbs = response.split('\n');
    $('.verb').html(verbs[Math.floor ( Math.random() * verbs.length )]);
  });
};

$(document).ready(function (){
  $('#random_noun').on('click',replaceNouns());
  $('#random_verb').on('click', replaceVerbs());
});
