function replaceNouns() {
  $.get("../noun.html", function(response){
    var nouns = response.split("\n");

    $('.noun').each(function(){
      var noun = nouns[Math.floor(Math.random() * nouns.length)];
      $(this).html(noun);
    });
  }).fail(function(error){
    alert("Error")
  })
};

function replaceVerbs() {
  $.get("../verb.html", function(response){
    var verbs = response.split("\n");

    $('.verb').each(function(){
      var verb = verbs[Math.floor(Math.random() * verbs.length)];
      $(this).html(verb);
    });
  }).fail(function(error){
    alert("Error")
  });


};

$(document).ready(function (){
  // Code here
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
