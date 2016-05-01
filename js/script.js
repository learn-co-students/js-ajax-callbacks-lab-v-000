function replaceNouns() {
  $.get('noun.html',function(data){
    var nouns = data.trim().split("\n");

    $('.noun').each(function(){
      var random_num = Math.floor(Math.random()*nouns.length)
      var noun = nouns[random_num];

      $(this).html(noun);
    });
  });
};

function replaceVerbs() {
  $.get("verb.html",function(data){
    var verbs = data.trim().split('\n');

  $('.verb').each(function(){
    var random_num = Math.floor(Math.random()*verbs.length);
    var verb = verbs[random_num];
    $(this).html(verb);
  });
});
};

$(document).ready(function (){
  // Code here
  $("#random_noun").click(replaceNouns);
  $("#random_verb").click(replaceVerbs);
});
