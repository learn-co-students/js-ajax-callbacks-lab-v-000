function replaceNouns() {
  $.get('noun.html', function(data){
    var noun_arr = data.split(/\n/).filter(function(i){return i !==''});
  $('.noun').each(function(){
    var rand = Math.floor(Math.random() * noun_arr.length);
    $(this).html(noun_arr[rand]);
    });
  });
}

function replaceVerbs() {
  $.get('verb.html', function(data){
  var verb_arr = data.split(/\n/).filter(function(i){return i !==''});
    $('.verb').each(function(){
      var rand = Math.floor(Math.random() * verb_arr.length);
      $(this).html(verb_arr[rand]);
    });
  });
};

$( document ).ready(function() {
    alert('ready');
    $('#random_noun').click(replaceNouns);
    $('#random_verb').click(replaceVerbs);
});
