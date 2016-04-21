function replaceNouns() {
  $('#random_noun').on('click', function(e){
    $.get('noun.html', function(data){
      var wordArray = data.split('\n');
      $('.noun').each(function(index, noun){
        $(this).text(wordArray[Math.floor(Math.random() * wordArray.length)]);
      })
      debugger;
    }).fail(function(error){
      alert('Something went wrong: ' + error);
    })
  })
};

function replaceVerbs() {
  $('#random_verb').on('click', function(e){
    $.get('verb.html', function(data){
      var wordArray = data.split('\n');
      $('.verb').text(function(index, verb){
        $(this).text(wordArray[Math.floor(Math.random() * wordArray.length)]);
      })
    }).fail(function(error){
      alert('Something went wrong: ' + error);
    })
  })
};

$(document).ready(function (){
  // Code here
  replaceNouns();
  replaceVerbs();
});
