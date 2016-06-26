function replaceNouns() {
  $.get('/noun.html', function(string) {
    var Narray = string.split('\n');
    $('.noun').each(function(){
      word = Narray[Math.floor(Math.random() * Narray.length)];
      $(this).text(word);
    })
  })
  .fail(function(error){
    console.log("Something went wrong: " + error);
  });
}

function replaceVerbs() {
  $.get('/verb.html', function(string) {
    var Varray = string.split('\n');
    $('.verb').each(function(){
      word = Varray[Math.floor(Math.random() * Varray.length)];
      $(this).text(word)
    })
  })
  .fail(function(error){
    console.log("Something went wrong: " + error);
  });
}

$(document).ready(function (){
  // Code here
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
