function replaceNouns() {
  $.get("noun.html", function(response){
    var nouns = response.split(",");

    $(".noun").each(function(){
      $(this).html(nouns[Math.floor(Math.random()*nouns.length)]);
    });
  });
}
///////////////////////////// this works//////////////////////////////
// function replaceVerbs() {
//   $.get("verb.html", function(response){
//     var verbs = response.split(",");
//
//     $(".verb").each(function(){
//       $(this).html(verbs[Math.floor(Math.random()*verbs.length)]);
//     });
//   });
// }
/////////////////////////// so does this ////////////////////////
function replaceVerbs() {
  $.get("verb.html", function(response){
    $(".verb").each(function(){
      $(this).html(response.split(",")[Math.floor(Math.random()*response.split(",").length)]);
    });   // just playing around with what works
  });
}

$(document).ready(function (){
  $("#random_noun").click(replaceNouns);
  $("#random_verb").click(replaceVerbs);
});
