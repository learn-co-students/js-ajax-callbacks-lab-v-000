function replaceNouns() {
     $.get('noun.html', function (data){

      var noun = data.trim().split("\n");
      $('.noun').each(function(){
        var randomizeNouns = Math.floor(Math.random() * noun.length);
        $(this).html(noun[randomizeNouns]);
      });
    }).fail(function (error){
      alert('The request has failed: ' + error.statusText);
    });
};

function replaceVerbs() {
  $.get('verb.html', function(data) {
       var verb = data.trim().split("\n");

       $('.verb').each(function(){ 
          var randomizeVerbs = Math.floor(Math.random() * verb.length);
          $(this).html(verb[randomizeVerbs]);
       });
  }).fail(function (error) { 
      alert('The request has failed: ' + error.statusText);
  });
};

$(document).ready(function (){
  // Code here
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});
