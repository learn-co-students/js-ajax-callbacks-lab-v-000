function randomItem(array){
  var i = Math.floor((Math.random() * array.length));
  return array[i];
}

function replaceNouns() {
  $('input:first').click(function(event){
  $.get("noun.html", function(response){
    var content = response;
    var noun_array = content.trim().split("\n");
    noun_array.filter(Boolean);
    $(".noun").each(function(index, noun){
      $(this).html(randomItem(noun_array));
    });
 }).fail(function(error){
   alert('Something went wrong: ' + error);
 })
});
}

function replaceVerbs() {
  $('input:last').click(function(event){
  $.get("verb.html", function(response){
    var content = response;
    var noun_array = content.trim().split("\n");
    noun_array.filter(Boolean);
    $(".verb").each(function(index, noun){
      $(this).html(randomItem(noun_array));
    });
 }).fail(function(error){
   alert('Something went wrong: ' + error);
 })
});
}




$(document).ready(function (){
  // Code here
  replaceNouns();
  replaceVerbs();




});
