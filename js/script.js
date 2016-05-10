function replaceNouns() {
  $.get('noun.html', function(data){
    var words = data.split('\n');
    $('.noun').each(function(){
      var randNum = Math.floor(Math.random() * words.length);
      var response = words[randNum];
      $(this).html(response);
    });
  }).fail(function(error){
    console.log('Something went wrong: ' + error);
  });
};

function replaceVerbs() {
  $.get('verb.html', function(data){
    var words = data.split('\n');
    $('.verb').each(function(){
      var randNum = Math.floor(Math.random() * words.length);
      var response = words[randNum]
      $(this).html(response);
    });
  }).fail(function(error){
    console.log('Something went wrong: ' + error);
  });
};

$(document).ready(function (){
  $('#random_noun').on('click', replaceNouns());
  $('#random_verb').on('click', replaceVerbs());
});
