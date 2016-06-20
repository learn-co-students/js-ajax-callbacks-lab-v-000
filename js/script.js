function replaceNouns() {
  $.get("/noun.html", function(response) {
    nouns = response.split("\n")
    nouns.pop();
    debugger;
    $("span.noun").each(function(index, span) {
      $(this).text(nouns[Math.floor(Math.random()*nouns.length)])
    });
  })
};

function replaceVerbs() {
  $.get("/verb.html", function(response) {
    verbs = response.split("\n")
    verbs.pop();
    debugger;
    $("span.verb").each(function(index, span) {
      $(this).text(verbs[Math.floor(Math.random()*verbs.length)])
    });
  })
};

$(document).ready(function (){
  $("#random_noun").on('click',function() {
    replaceNouns();
  })

  $("#random_verb").on('click',function() {
    replaceVerbs();
  })
});
