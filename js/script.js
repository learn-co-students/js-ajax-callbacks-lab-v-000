ffunction replaceNouns() {
  $.get('noun.html', function (data){
    var nouns = data.trim().split("\n");

    $('.noun').each(function(){
      // Use the random index to get a noun from the nouns array
      var random_index = Math.floor(Math.random() * nouns.length);
      // Use the random index to get a noun from the nouns array
      var rand_noun = nouns[random_index];
      // Replace the html of the noun span
      $(this).html(rand_noun);
    });
  }).fail(function (error){
    // If the request fails, tell the user
    alert('The request failed: ' + error.statusText);
  });

};

function replaceVerbs() {

  $.get('verb.html', function(data){
    var verbs = data.trim().split("\n");
    $('.verb').each(function(){
      var random_index = Math.floor(Math.random() * verbs.length);
      var rand_verb = verbs[random_index];
        $(this).html(rand_verb);
    });
  }).fail(function(error){
      alert('The request failed: ' + error.statusText);
  });
};

$(document).ready(function (){
  // Code here
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
