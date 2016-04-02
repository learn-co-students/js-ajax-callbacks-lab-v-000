function replaceNouns() {

  $.get('noun.html', function (e){

    var nouns = e.trim().split("\n");

    $('.noun').each(function(){
       var noun_index = Math.floor(Math.random() * nouns.length);

       var new_noun = nouns[noun_index];

       $(this).html(new_noun);
    });

  }).fail(function(error){
     alert('The request failed: ' + error.statusText);
   });
};

function replaceVerbs() {

   $.get('verb.html', function (e){

    var verbs = e.trim().split("\n");

    $('.verb').each(function(){
       var verb_index = Math.floor(Math.random() * verbs.length);

       var new_verb = verbs[verb_index];

       $(this).html(new_verb);
    });

  }).fail(function(error){
     alert('The request failed: ' + error.statusText);
   });
};

$(document).ready(function (){
  // Code here
    $('#random_noun').click(replaceNouns);
    $('#random_verb').click(replaceVerbs);
});
