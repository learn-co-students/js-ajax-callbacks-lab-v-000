var nouns, verbs;
function replaceNouns() {
  $.get('noun.html', function(response){
    nouns = response.split('\n');
    nouns.pop();
    $('.noun').each(function(){
      $(this).text(nouns[Math.floor(Math.random()*nouns.length)]);
    });
  });
};

function replaceVerbs() {
  $.get('verb.html', function(response){
    verbs = response.split('\n');
    verbs.pop();
    $('.verb').each(function(){
      $(this).text(verbs[Math.floor(Math.random()*verbs.length)]);
    });
  });
};

$(document).ready(function (){
  // Code here
  $('#random_noun').on('click', replaceNouns);
  $('#random_verb').on('click', replaceVerbs);
});
