function replaceNouns() {
  $.get('noun.html', function(data){
    noun_list = data.split('\n');
    noun_list.pop();
    $('span.noun').each(function(index,item) {
      $(this).html(noun_list[Math.floor(Math.random()*noun_list.length)])
    });
  }).fail(function(error) {
    console.log("the error is:" + error);
  })
}

function replaceVerbs() {
  $.get('verb.html', function(data){
    verb_list = data.split('\n');
    verb_list.pop();
    $('span.verb').each(function(index,item) {
      $(this).html(verb_list[Math.floor(Math.random()*verb_list.length)])
    });
  });
};

$(document).ready(function (){
  $('#random_noun').on('click', replaceNouns);
  $('#random_verb').on('click', replaceVerbs);
});
