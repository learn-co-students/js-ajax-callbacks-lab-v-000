function replaceNouns() {
  $('#random_noun').click(function() {
    $.get("html/noun.html", function(data){
        var nouns = data.split("\n")
    debugger;
        $('.noun').each(function(index, noun) {
          $(this).text(nouns[Math.floor(Math.random() * nouns.length)])
        })
    }).fail(function(error) {
      $('div').append(error['responseText'])
    })
  })
  event.preventDefault()    
};

function replaceVerbs() {
  $('#random_verb').click(function() {
  $.get("html/verb.html", function(data){
      var verbs = data.split("\n")
  debugger;
      $('.verb').each(function(index, verb) {
        $(this).text(verbs[Math.floor(Math.random() * verbs.length)])
      })
  }).fail(function(error) {
    $('div').append(error['responseText'])
    })
  })
};

$(document).ready(function (){
  
  replaceNouns();
  replaceVerbs();
});
