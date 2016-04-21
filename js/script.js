function replaceNouns(e) {
  $.get('noun.html', function(data){
    var wordArray = data.split('\n');
    $('.noun').each(function(index, noun){
      $(this).text(wordArray[Math.floor(Math.random() * wordArray.length)]);
    });
  }).fail(function(error){
    alert('Something went wrong: ' + error);
  })
};

function replaceVerbs(e) {
  $.get('verb.html', function(data){
    var wordArray = data.split('\n');
    $('.verb').each(function(index, verb){
      $(this).text(wordArray[Math.floor(Math.random() * wordArray.length)]);
    });
  }).fail(function(error){
    alert('Something went wrong: ' + error);
  })
};

$(document).ready(function (){
  // Code here
  $('#random_verb').on('click', replaceVerbs());
  $('#random_noun').on('click', replaceNouns());


});
