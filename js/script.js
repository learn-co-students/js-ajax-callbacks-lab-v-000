function replaceNouns() {
    $.get("noun.html", function(response){
      var words = response.split("\n");
    
      $('.noun').each(function(index, element){
        var num = Math.floor(Math.random() * words.length);
        var noun = words[num];
        $(this).html(noun);    
      });
    }).fail(function(error){
      alert("Something's wrong: " + error);
    });
};

function replaceVerbs() {
  $.get("verb.html", function(response){
    var words = response.split("\n");
    
    $('.verb').each(function(index, element){
      var num = Math.floor(Math.random() * words.length);
      var verb = words[num];
      $(this).html(verb);    
    });
  }).fail(function(error){
      alert("Something's wrong: " + error);
  });
};

function handleNounClick() {
  $('#random_noun').on("click", replaceNouns);
}

function handleVerbClick() {
  $('#random_verb').on("click", replaceVerbs);
}


$(document).ready(function (){
  // Code here
  handleNounClick();
  handleVerbClick();
});
