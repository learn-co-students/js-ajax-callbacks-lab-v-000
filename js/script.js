function replaceNouns() {
  $.get("noun.html", function(data){
    // var nouns = (data.split("\n"));
    // nouns = nouns.filter(Boolean);
    var nouns = data.trim().split("\n");
    $('.noun').each(function(index, span){
      var randNoun = nouns[Math.floor(Math.random() * nouns.length)];
      $(this).html(randNoun);
    });
  }).fail(function(error){
    alert("Something went wrong:" + error);
  });
};

function replaceVerbs() {
  $.get("verb.html", function(data){
    // var verbs = (data.split("\n"));
    // verbs = verbs.filter(Boolean);
    var verbs = data.trim().split("\n");
    $('.verb').each(function(index, span){
      var randVerb = verbs[Math.floor(Math.random() * verbs.length)];
      $(this).html(randVerb);
    });
  }).fail(function(error){
    alert("Something went wrong:" + error);
  });
};

$(document).ready(function (){
  // Code here
  $("#random_noun").on("click", function(){
    replaceNouns();
  });
  // alternate syntax (shortcut)
  // $('#random_verb').click(replaceVerbs);

  $("#random_verb").on("click", function(){
    replaceVerbs();
  });
});
