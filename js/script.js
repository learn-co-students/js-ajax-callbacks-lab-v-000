function replaceNouns() {
  $.get("noun.html", function(data){
    var nouns = data.trim().split("\n");
    
    nouns.forEach(function(index, noun){
      console.log(index + ": " + noun);
    });
    
    $(".noun").each(function(index, element){
      var displayIndex = Math.floor(Math.random() * nouns.length);
      $(element).text(nouns[displayIndex]);
    });  
  }).fail(function(error){
    alert("The request failed because " + error.statusText);
  });
};

function replaceVerbs() {
  $.get("verb.html", function(data){
    var verbs = data.trim().split("\n");
    
    verbs.forEach(function(index, verb){
      console.log(index + ": " + verb);
    });
    
    $(".verb").each(function(index, element){
      var displayIndex = Math.floor(Math.random() * verbs.length);
      $(element).text(verbs[displayIndex]);
    });
  }).fail(function(error){
    alert("The request failed because " + error.statusText);
  });
};

$(document).ready(function (){
  $("input#random_noun").on("click", replaceNouns);
  $("input#random_verb").on("click", replaceVerbs);
});
