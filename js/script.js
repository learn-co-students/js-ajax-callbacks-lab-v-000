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
      }); // .each
    })
    ; // .get
  }); //. on
};

function replaceVerbs() {
  $('#random_verb').on('click', function(e) {  
    $.get("verb.html", function(response) {
      //turn into array ["store", "street"...]
      var verbs = response.split(/\s/);
      //iterate over each .noun in the DOM
      $('.verb').each(function(index, verb) {
        //insert a random noun
        var randomVerb = verbs[Math.floor(Math.random()*verbs.length)];
        $(this).append(randomVerb);
      }); // .each
    })
    ; // .get
  }); //. on
};

$(document).ready(function (){
  // Code here
  replaceNouns();
  replaceVerbs();
});
