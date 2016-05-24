function replaceNouns() {
  $('#random_noun').on('click', function(e) {  
    $.get("noun.html", function(response) {
      //turn into array ["store", "street"...]
      var nouns = response.split(/\s/);
      //iterate over each .noun in the DOM
      $('.noun').each(function(index, noun) {
        //insert a random noun
        var randomNoun = nouns[Math.floor(Math.random()*nouns.length)];
        $(this).append(randomNoun);
      });
    });
  });
};

function replaceVerbs() {
};

$(document).ready(function (){
  // Code here
  replaceNouns();
});
