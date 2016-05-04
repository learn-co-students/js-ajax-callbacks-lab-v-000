var num = Math.floor(Math.random() * 10 + 1)

function replaceNouns() {
  $.get('noun.html', function(response){
    var array = response.split("\n");
    $('.noun').each(function(){
      $(this).html(array[num]);
    });
  }).fail(function(error) {
    alert('The request failed: ' + error.statusText);
  });
};


function replaceVerbs() {
  $.get('verb.html', function(response){
    var array = response.split("\n");
    $('.verb').each(function(){
      $(this).html(array[num]);
    });
  }).fail(function(error) {
    alert('The request failed: ' + error.statusText);
  });
}

$(document).ready(function (){
  
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);

});

