function replaceNouns() {
    $.get('noun.html', function(data){
      var arrNouns = data.split("\n");
      arrNouns.pop();

      //creates random number
      randFactor = Math.floor((Math.random() * arrNouns.length) + 1);

      //replaces nouns
      $(".noun").each(function(index, span){
        word = (randFactor + index) % arrNouns.length;
        $(this).text(arrNouns[word]);
      });
    }).fail(function(error){
      alert("Something went wrong!");
      console.log(error);
    });
};

function replaceVerbs() {
    $.get('verb.html', function(data){
      var arrVerbs = data.split("\n");
      arrVerbs.pop();

      //creates random number
      randFactor = Math.floor((Math.random() * arrVerbs.length) + 1);

      //replaces verbs
      $(".verb").each(function(index, span){
        word = (randFactor + index) % arrVerbs.length;
        $(this).text(arrVerbs[word]);
      });
    }).fail(function(error){
      alert("Something went wrong!");
      console.log(error);
    });
};

$(document).ready(function (){
  // Code here
  $('#random_noun').on('click', replaceNouns);
  $('#random_verb').on('click', replaceVerbs);
});
