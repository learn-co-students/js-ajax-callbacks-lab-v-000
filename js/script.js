var nouns;
var verbs;

function replaceNouns() {
  $('#random_noun').click(function() {
    $('.noun').map(function(noun, index) {
       $(this).text(nouns[Math.floor(Math.random() * nouns.length)])
        })
    })
};

function replaceVerbs() {
  $('#random_verb').click(function() {
    $('.verb').each(function(index, verb) {
      $(this).text(verbs[Math.floor(Math.random() * verbs.length)])
      })
  })
};


$(document).ready(function (){
  

  $.get("html/noun.html")
    .done(function(data){
      nouns = data.trim().split("\n")
    })
    .fail(function(error) {
      $('div').append(error['responseText'])
    })

  $.get("html/verb.html")
    .done(function(data){
      verbs = data.trim().split("\n")
    })
    .fail(function(error) {
      $('div').append(error['responseText'])
    })


  replaceNouns();
  replaceVerbs();
});
