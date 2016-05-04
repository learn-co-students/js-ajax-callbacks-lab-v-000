function replaceNouns() {
  $.get('noun.html', function(response) {

    var nounArray = response.split("\n");

    $('.noun').each(function(index, element) {
      var nounRandom = Math.floor(Math.random() * nounArray.length);      
      var noun = nounArray[nounRandom];
      $(this).html(noun);
    });
  })
};

function replaceVerbs() {
  $.get('verb.html', function(response) {
    var verbArray = response.split("\n");

    $('.verb').each(function(index, element) {
      var verbRandom = Math.floor(Math.random() * verbArray.length);
      var verb = verbArray[verbRandom];
      $(this).html(verb);
    });
  })
};

function clickNoun() {
  $('#random_noun').on("click", replaceNouns);
}

function clickVerb() {
  $('#random_verb').on("click", replaceVerbs);
}

$(document).ready(function (){

  clickNoun();
  clickVerb();
  
});
