function replaceNouns() {
  $('#random_noun').on("click", function() {
    $.get("noun.html", function(data){
      var nouns = data.split("\n");
      nouns.splice(-1,1);
      $('.noun').each(function(index, noun){
        var word = getWord(nouns);
        $(this).text(word);
      });
    }).fail(function(error) {
      console.log("Something went wrong.");
    });
  });
};

function getWord(words) {
    var word = words[Math.floor(Math.random() * words.length)];
    return word;
}

function replaceVerbs() {
  $('#random_verb').on("click", function() {
    $.get("verb.html", function(data){
      var verbs = data.split("\n");
      verbs.splice(-1,1);
      $('.verb').each(function(index, verb){
        var word = getWord(verbs);
        $(this).text(word);
      });
    }).fail(function(error) {
      console.log("Something went wrong.");
    });
 });
};

$(document).ready(function (){
  replaceNouns();
  replaceVerbs();
});
