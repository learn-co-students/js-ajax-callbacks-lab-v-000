function replaceNouns() {
  $.get('noun.html', function(data){
    var noun = data.trim().split("\n");
    $('.noun').each(function(){
      var random = Math.floor(Math.random() * noun.length);
      var random_noun = noun[random];
      $(this).html(random_noun);
    })
  }).fail(function(error){
    alert('The request failed: ' + error.statusText);
  });
};

function replaceVerbs() {
  $.get('verb.html', function(data){
    var verb = data.trim().split("\n");
    $('.verb').each(function(){
      var random = Math.floor(Math.random() * verb.length);
      var random_verb = verb[random];
      $(this).html(random_verb);
    })
  }).fail(function(error){
    alert('The request failed: ' + error.statusText);
  });
};

$(document).ready(function (){
  $('#random_noun').click(replaceNouns);
  // Code here
  $('#random_verb').click(replaceVerbs);
});
