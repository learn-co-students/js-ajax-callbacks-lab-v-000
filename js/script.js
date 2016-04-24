function replaceNouns() {
  $.get("noun.html", function(data){
    var nouns = data.split(/[\n\s]/).filter(Boolean);

    var nounSpans = $(".noun");

    // Assign each noun span a random noun from nouns array
    nounSpans.each(function(){
      var randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
      $(this).append(randomNoun);
    });

  // Error with source
  }).fail(function(error){
    console.log(error);
    alert("Something went wrong: " + error);
  });

};

function replaceVerbs() {
  $.get("verb.html", function(data){
    var verbs = data.split(/[\n\s]/).filter(Boolean);

    var verbSpans = $(".verb");

    // Assign each verb span a random verb from the verbs array
    verbSpans.each(function(){
      var randomVerb = verbs[Math.floor(Math.random() * verbs.length)]
      $(this).append(randomVerb);
    });

  // Error with source
  }).fail(function(error){
    console.log(error);
    alert("Something went wrong: " + error);
  });

};

$(document).ready(function (){
    $("#random_noun").on("click", function(){
      replaceNouns();
    });
    $("#random_verb").on("click", function(){
      replaceVerbs();
    });
});
