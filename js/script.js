function replaceNouns() {
  $.get("noun.html", function(response){
    // console.log(response);
    var nouns = response.trim().split("\n")

    $('.noun').each(function(){
      var rand = nouns[Math.floor(Math.random() * nouns.length)];
      $(this).html(rand);
    }); 
  }).fail(function(error){
    alert("Something went wrong: " + error.statusText);
  });
};

function replaceVerbs() {
  $.get("verb.html", function(response){
    // console.log(response);
    var verbs = response.trim().split("\n")

    $('.verb').each(function(){
      var rand = verbs[Math.floor(Math.random() * verbs.length)];
      $(this).html(rand);
    }); 
  }).fail(function(error){
    alert("Something went wrong: " + error.statusText);
  });
};

$(document).ready(function (){
  $('#random_noun').on('click', replaceNouns);
  $('#random_verb').on('click', replaceVerbs);
});
