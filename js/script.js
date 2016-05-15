function replaceNouns() {
  $.get("words.html", function(response) {
    $(".noun").each(function() {
      $(this).html(random(response));
    });
  })
};

function replaceVerbs() {
    $.get("words.html", function(response) {
    $(".verb").each(function() {
      $(this).html(random(response));
    });
  })
};

function random(string) {
  var arr = string.split("\n")
  debugger;
  return arr[Math.floor(Math.random()*arr.length)]
}

$(document).ready(function (){
  // Code here
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);

});


