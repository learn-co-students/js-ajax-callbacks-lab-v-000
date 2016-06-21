function replaceNouns() {
  $.get("/noun.html", function(data) {
    var nouns = data.trim().split("\n");
    $('.noun').each(function() {
      var index = Math.floor(Math.random()*nouns.length);
      $(this).html(nouns[index]);
    });
  }).fail(function(error) {
    alert('The request failed: ' + error.statusText);
  });
};

function replaceVerbs() {
  $.get('/verb.html', function(data) {
    var verbs = data.trim().split("\n");
    $('.verb').each(function() {
      var index = Math.floor(Math.random() * verbs.length);
      $(this).html(verbs[index]);
    });
  }).fail(function(error) {
    alert("The request failed: " + error.statusText);
  });
};

$(document).ready(function (){
  // Code here
});
