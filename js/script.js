function replaceNouns() {
  $.get('../noun.html', function(response){
    var nouns = response.split("\n").slice(0, -1);
    $(".noun").each(function(index, span){
      $(this).text(nouns[Math.floor(Math.random()*nouns.length)])
    })
  }).fail(function(error){
    alert("There was an error retreiving nouns.");
  });
};

function replaceVerbs() {
  $.get('../verb.html', function(response){
    var verbs = response.split("\n").slice(0, -1);
    $(".verb").each(function(index, span){
      $(this).text(verbs[Math.floor(Math.random()*verbs.length)])
    })
  })
};

$(document).ready(function (){
  $("#random_noun").on("click", replaceNouns );
  $("#random_verb").on("click", replaceVerbs );
});
