function pickRandomProperty(obj) {
  var result;
  var count = 0;
  for (var prop in obj)
    if (Math.random() < 1/++count)
      result = prop;
  return result;
}

function handleReplaceWord(data, element) {
  $('.'+element).each(function() {
    $(this).text(data[pickRandomProperty(data)]);
  });
}

function replaceNouns() {
  $.get('noun.html', function(data) {
    var dataNouns = data.split(/\W/);
    dataNouns.pop();
    handleReplaceWord(dataNouns, 'noun');
  }).fail(function(error) {
    alert(error);
  })
};

function replaceVerbs() {
  $.get('verb.html', function(data) {
    var dataVerbs = data.split(/\W/);
    dataVerbs.pop();
    handleReplaceWord(dataVerbs, 'verb');
  }).fail(function(error) {
    alert(error);
  })
};

$(document).ready(function (){
  $('#random_verb').on('click', function() {
    replaceVerbs();
  });
  $('#random_noun').on('click', function() {
    replaceNouns();
  });
});
