$(document).ready(function(){
  $('#random_noun').on('click', replaceNouns);
  $('#random_verb').on('click', replaceVerbs);
});

function replaceNouns() {
 $.get('noun.html', function(data){
  
  var nouns = data.split("\n");

    $('.noun').each(function(){
      $(this).html(nouns[(Math.floor(Math.random() * (nouns.length)) + 0)
])
    })

   }).fail(function(error){
      alert('Error: '+error.statusText);
    });;

}

function replaceVerbs() {
   $.get('verb.html', function(data){
  
  var verbs = data.split("\n");

    $('.verb').each(function(){
      $(this).html(verbs[(Math.floor(Math.random() * (verbs.length)) + 0)
])
    });

   }).fail(function(error){
      alert('Error: ' +error.statusText);;
    });;

}


