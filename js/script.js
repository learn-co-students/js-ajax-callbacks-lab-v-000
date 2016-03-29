function replaceNouns() {
  $.get("noun.html",function(data) {
    $('.noun').each(function() {
      var words = data.split("\n");
      var random = words[Math.floor(Math.random() * words.length)];
      $(this).text(random);
    });
  }).fail(function(error) {
    console.log("Something went wrong: " + error);
  });
};

function replaceVerbs() {
  $.get("verb.html",function(data) {
    $('.verb').each(function() {
      var words = data.split("\n");
      var random = words[Math.floor(Math.random() * words.length)];
      $(this).text(random);
    });
  }).fail(function(error) {
    console.log("Something went wrong: " + error);
  });
};

$(document).ready(function (){
  $('input#random_noun').click(replaceNouns);
  $('input#random_verb').click(replaceVerbs);
});