function replaceNouns() {
  $.get('noun.html', function(data) {
     var nouns = data.trim().split("\n");
    $(".noun").each(function() {
        var random = Math.floor(Math.random() * nouns.length);
        var pick_random = nouns[random];
      $(this).html(pick_random)
      });
    }).fail(function(error){
      console.log("Woops, something went wrong" + error)
    });
};

function replaceVerbs() {
  $.get('verb.html', function(data){
    var verbs = data.trim().split("\n")
    var random = Math.floor(Math.random() * verbs.length)
    var pick_random = verbs[random]
    $(".verb").each(function(){
      $(this).html(pick_random)
    });
  }).fail(function(error){
    console.log("Whoops, something went wrong:" + error.statusText)
  });
};

$(document).ready(function (){
  // Code here
  $("#random_noun").click(replaceNouns);
  $("#random_verb").click(replaceVerbs);

});
