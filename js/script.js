function replaceNouns() {
  $.get('noun.html',function(response){
    var nouns = response.trim().split('\n');
    $('.noun').each(function(){
      $(this).html(nouns[Math.floor ( Math.random() * nouns.length )]);
    });    
  }).fail(function(error){
    alert("Function Failed: " + error.statusText);
  });
};

function replaceVerbs() {
  $.get('verb.html',function(response){
    var verbs = response.trim().split('\n');
    $('.verb').each(function(){
      $(this).html(verbs[Math.floor ( Math.random() * verbs.length )]);
    });
  }).fail(function(error){
    alert("Function Failed: " + error.statusText);
  });
};

$(document).ready(function (){
  $('#random_noun').on('click', replaceNouns);
  $('#random_verb').on('click', replaceVerbs);
});
