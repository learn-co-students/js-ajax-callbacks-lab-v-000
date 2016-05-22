function replaceNouns() {

   $.get("noun.html", function(data){
    var nouns = data.split("\n");

    $('.noun').each(function(){ 
      var noun = nouns[Math.floor(Math.random() * nouns.length)];
      $(this).html(noun);
    });
  });

};

function replaceVerbs() {

  $.get("verb.html", function(data){
    var verbs = data.split("\n");

    $('.verb').each(function(){ 
      var verb = verbs[Math.floor(Math.random() * verbs.length)];
      $(this).html(verb);
    });
  });
};

$(document).ready(function (){
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
