function replaceNouns() {
     $.get('noun.html', function(response) {
       var nouns = response.split("\n");
       $('.noun').each(function() {
          var randomNum = Math.floor(Math.random() * nouns.length);
          $(this).html(nouns[randomNum]);
       });
    }).fail(function(error) {
      alert("Something went wrong " + error);
    });
}

function replaceVerbs() {
    $.get('verb.html', function(response) {
       var verbs = response.split("\n");
       $('.verb').each(function() {
          var randomNum = Math.floor(Math.random() * verbs.length);
          $(this).html(verbs[randomNum]);
       });
    }).fail(function(error) {
      alert("Something went wrong " + error);
    });
}

$(document).ready(function (){
  // Code here
  $('#random_noun').on('click', replaceNouns);
  $('#random_verb').on('click', replaceVerbs);
});
