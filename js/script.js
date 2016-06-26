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

  //This function accounts for the empty space in the array
  $.get('noun.html', function(response) {
    var nouns = response.split(/\n/);
    nouns.pop();
    //debugger;
    $('.noun').each(function() {
      var random_index = Math.floor(Math.random() * nouns.length);
      var random_noun = nouns[random_index];
      $(this).html(random_noun);
    });
  }).fail(function(error) {
    alert("The request failed " + error.statusText);
  });
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
  
  $.get('verb.html', function(response) {
    var verbs = response.split(/\n/);
    verbs.pop()
    //debugger;
    $('.verb').each(function() {
      var random_index = Math.floor(Math.random() * verbs.length);
      var random_verb = verbs[random_index];
      $(this).html(random_verb);
    });
  }).fail(function(error) {
    alert("The request failed " + error.statusText);
  });
};

function createArrayFrom(data) {
  return data.trim().split("\n");
}

$(document).ready(function (){
  // Code here
  // replaceNouns();
  // replaceVerbs();
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
