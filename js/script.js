
$(document).ready(function (){

  $('#random_noun').click(replaceNouns)

  $('#random_verb').click(replaceVerbs)


});



function replaceNouns() {
  $.get("html/noun.html", function(data) {
      var nouns = data.trim().split("\n")
    
      $('.noun').each(function() {
        $(this).text(nouns[Math.floor(Math.random() * nouns.length)])
      })


    }).fail(function(error) {
      $('div').append(error['responseText'])
    })

};


function replaceVerbs() {
  $.get("html/verb.html", function(data){
    var verbs = data.trim().split("\n")
    $('.verb').each(function(index, verb) {
      $(this).text(verbs[Math.floor(Math.random() * verbs.length)])
    })
  }).fail(function(error) {
    $('div').append(error['responseText'])
  }) 
  
};



