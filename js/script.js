function replaceNouns() {
  $.get('words.html', function(data){
    var words = data.trim().split('\n');
    // words = words.pop();
    var wordToEnter = words[Math.floor(Math.random() * words.length)];
    $('.noun').html(wordToEnter);
  }).fail(function(error){
    alert('something went wrong');
  });
};

function replaceVerbs() {
  $.get('words.html', function(data){
    var words = data.trim().split('\n');
    var wordToEnter = words[Math.floor(Math.random() * words.length)]
    $('.verb').html(wordToEnter);
  }).fail(function(error){
    alert('something went wrong');
  });
};

$(document).ready(function(){

  $('#random_noun').on('click', replaceNouns);
  $('#random_verb').on('click', replaceVerbs);
});
