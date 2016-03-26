function replaceNouns() {
  $('#random_noun').on('click', function() {
    $.get('noun.html', function(data) {
      var nouns = data.split('\n');
      var rand = Math.floor(Math.random()*11);
      $('.noun').text(nouns[rand]);
    }).fail(function(error) {
      alert("Error: " + error.status + ": " + error.statusText);
    });
  });
};

function replaceVerbs() {
  $('#random_verb').on('click', function() {
    $.get('verb.html', function(data) {
      var verbs = data.split('\n');
      var rand = Math.floor(Math.random()*10);
      $('.verb').text(verbs[rand])
    }).fail(function(error) {
      alert("Error: " + error.status + ": " + error.statusText);
    });
  });
};

$(document).ready(function() {
  replaceVerbs();
  replaceNouns();
});
