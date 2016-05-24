//Note: My commented out code below works fine. But does not satisfy tests.

function replaceNouns() {
  // $('#random_noun').on('click', function(e) {  
  //   $.get("noun.html", function(response) {
  //     //turn into array ["store", "street"...] and remove empties ""
  //     var nouns = response.split(/\s/).filter(function(word){return word!==""});
  //     //iterate over each .noun in the DOM
  //     $('.noun').each(function(index, noun) {
  //       //insert a random noun
  //       var randomNoun = nouns[Math.floor(Math.random()*nouns.length)];
  //       $(this).append(randomNoun);
  //     }); // .each
  //   }).fail(function(error) {
  //     console.log('Something went wrong:' + error);
  //   }); // .get .fail
  // }); //. on

  $.get('noun.html', function(data) {
    var nouns = data.trim().split("\n");
    $('.noun').each(function() {
      var random_index = Math.floor(Math.random()*nouns.length);
      var rand_noun = nouns[random_index];
      $(this).html(rand_noun);
    }); //.each
  }).fail(function(error) {
    alert('The request failed: ' + error.statusText);
  }); //.get .fail
};

function replaceVerbs() {
  // $('#random_verb').on('click', function(e) {  
  //   $.get("verb.html", function(response) {
  //     //turn into array ["store", "street"...] and remove empties ""
  //     var verbs = response.split(/\s/).filter(function(word){return word!==""});
  //     //iterate over each .noun in the DOM
  //     $('.verb').each(function(index, verb) {
  //       //insert a random noun
  //       var randomVerb = verbs[Math.floor(Math.random()*verbs.length)];
  //       $(this).append(randomVerb);
  //     }); // .each
  //   }).fail(function(error) {
  //     console.log('Something went wrong:' + error);
  //   }); // .get .fail
  // }); //. on
  $.get('verb.html', function(data) {
    var verbs = data.trim().split("\n");
    $('.verb').each(function() {
      var random_index = Math.floor(Math.random()*verbs.length);
      var rand_verb = verbs[random_index];
      $(this).html(rand_verb);
    }); //.each
  }).fail(function(error) {
    alert('The request failed: ' + error.statusText);
  }); //.get .fail
};

$(document).ready(function (){
  // Code here
  // replaceNouns();
  // replaceVerbs();
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
