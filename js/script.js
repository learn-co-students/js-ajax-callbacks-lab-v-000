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
  var arr = string.split(",")
  return arr[Math.floor(Math.random()*arr.length)]
}

$(document).ready(function (){
  // Code here
  replaceNouns();
  replaceVerbs();

});


