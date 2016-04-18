function replaceNouns() {
  $.get("noun.html", function(response){
      var nouns = response.trim().split("\n");
      $('.noun').each(function(){
        $(this).html(nouns[Math.floor(Math.random() * nouns.length)]);
      })
  })
};

function replaceVerbs() {
  $.get("verb.html", function(response){
      var verbs = response.trim().split("\n");
      $('.verb').each(function(){
        $(this).html(verbs[Math.floor(Math.random() * verbs.length)]);
      })
  })
};

$(document).ready(function (){
  // Code here
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);

});
