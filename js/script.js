function replaceNouns() {
  $('#random_noun').on('click', function(e) {  
    $.get("noun.html", function(response) {
      //turn into array ["store", "street"...] and remove empties ""
      var nouns = response.split(/\s/).filter(function(word){return word!==""});
      //iterate over each .noun in the DOM
      $('.noun').each(function(index, noun) {
        //insert a random noun
        var randomNoun = nouns[Math.floor(Math.random()*nouns.length)];
        $(this).append(randomNoun);
      }); // .each
    }).fail(function(error) {
      console.log('Something went wrong:' + error);
    }); // .get .fail
  }); //. on
};

function replaceVerbs() {
  $('#random_verb').on('click', function(e) {  
    $.get("verb.html", function(response) {
      //turn into array ["store", "street"...] and remove empties ""
      var verbs = response.split(/\s/).filter(function(word){return word!==""});
      //iterate over each .noun in the DOM
      $('.verb').each(function(index, verb) {
        //insert a random noun
        var randomVerb = verbs[Math.floor(Math.random()*verbs.length)];
        $(this).append(randomVerb);
      }); // .each
    }).fail(function(error) {
      console.log('Something went wrong:' + error);
    }); // .get .fail
  }); //. on
};

$(document).ready(function (){
  // Code here
  replaceNouns();
  replaceVerbs();
});
