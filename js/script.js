
function replaceNouns() {
  var url = "../noun.html"
  $.get(url, function(data){
      var nounArray = data.trim().split('\n');
      $('.noun').each(function(){
        randomNoun = nounArray[Math.floor(Math.random() * nounArray.length)];
        $(this).text(randomNoun);
       });
    }).fail(function(error){
      alert('Error: ' + error);
    });
};

function replaceVerbs() {
  var url = "../verb.html"
  $.get(url, function(data){
    var verbArray = data.trim().split('\n');
    $('.verb').each(function() {
      randomVerb = verbArray[Math.floor(Math.random() * verbArray.length)]
      $(this).text(randomVerb);
    })

  }).fail(function(error){
    alert('Error: '+error);
  });
};

$(document).ready(function (){
  // Code here
  $( "#random_noun" ).click(replaceNouns);
  $( "#random_verb" ).click(replaceVerbs);
});
