function replaceNouns() {
    $.get("/noun.html", function(response){
      var nouns = response.split("\n");
      nouns.splice(nouns.length-1, 1);
      for (var i = 0; i <= $(".noun").length-1; i++) {
        var noun = nouns[Math.floor(Math.random()*nouns.length)];
        $(".noun:eq(" + i + ")").html(noun);
      }
    }).fail(function(error){
      alert("Something went wrong:" + error.statusText);
    });
}

function replaceVerbs() {
    $.get("/verb.html", function(response){
      var verbs = response.split("\n");
      verbs.splice(verbs.length-1, 1);
      for (var i = 0; i <= $(".verb").length-1; i++) {
        var verb = verbs[Math.floor(Math.random()*verbs.length)];
        $(".verb:eq(" + i + ")").html(verb);
      }
    }).fail(function(error){
      alert("Something went wrong:" + error.statusText);
    });
}

$(document).ready(function (){
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
