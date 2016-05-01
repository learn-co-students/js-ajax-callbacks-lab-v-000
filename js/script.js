function replaceNouns() {
  $.get('noun.html', function(data) {
    var nouns = data.split("\n").filter(v=>v!='');
    sorted = nouns.sort(function() { return 0.5 - Math.random() });
    $('.noun').each(function(index) {
      $(this).text(sorted[index]);
    });
  });
};

function replaceVerbs() {
  $.get('verb.html', function(data) {
    var verbs = data.split("\n").filter(v=>v!='');
    sorted = verbs.sort(function() { return 0.5 - Math.random() });
    $('.verb').each(function(index) {
      $(this).text(sorted[index]);
    });
  });
};

$(document).ready(function (){
  $('#random_noun').on("click", replaceNouns);
  $('#random_verb').on("click", replaceVerbs);
});
