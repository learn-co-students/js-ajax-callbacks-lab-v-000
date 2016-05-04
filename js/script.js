var nounNum = Math.floor(Math.random() * 10 + 1)
var verbNum = Math.floor(Math.random() * 9 + 1)

function replaceNouns() {
  $.get('noun.html', function(response){
    var array = response.split("\n");
    $('.noun').each(function(){
      $(this).html(array[nounNum]);
    });
  }).fail(function(error) {
    alert('The request failed: ' + error.statusText);
  });
};


function replaceVerbs() {
  $.get('verb.html', function(response){
    var array = response.split("\n");
    $('.verb').each(function(){
      $(this).html(array[verbNum]);
    });
  }).fail(function(error) {
    alert('The request failed: ' + error.statusText);
  });
}

$(document).ready(function (){
  
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);

});

