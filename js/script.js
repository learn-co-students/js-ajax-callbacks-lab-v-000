function replaceNouns() {
  // Ajax request first -> getting the noun.html file
  $.get("noun.html", function (data){
    //Now we split the nouns by the newlines, data = inhalt von noun.html
    var nouns = data.trim().split("\n");
    //Now we want to put a random noun from the  nouns array into the span with the class="noun".
    $(".noun").each(function(){
      //first we create a "randomiser"
      var random_index = Math.floor(Math.random() * nouns.length);
      //now we use the random_index to get a noun from the nouns array
      var rand_noun = nouns[random_index];
      //now we replace the html of the noun span
      $(this).html(rand_noun);
    });
  }).fail(function (error){
    //If the request fails, tell user
    alert("The request failed: " + error.statusText);
  });
};

function replaceVerbs() {
  // Ajax request first -> getting the vernb.html file
  $.get("verb.html", function(data){
    //Now we split the verbs by the newlines, data = inhalt von verb.html
    var verbs = data.trim().split("\n");
    //Now we want to put a random verb from the verbs array into the span with the class="verb".
    $(".verb").each(function(){
      //first we create a "randomiser"
      var random_index = Math.floor(Math.random() * verbs.length);
      //now we use the random_index to get a verb from the nouns array
      var rand_verb = verbs[random_index];
      //now we replace the html of the verb span
      $(this).html(rand_verb);
    });
  }).fail(function (error){
    //If the request fails, tell user
    alert("The request failed: " + error.statusText);
  });
};

$(document).ready(function (){
  // Code here

  //here we bind to the click event of the random noun and verb button
  $("#random_noun").click(replaceNouns);
  $("#random_verb").click(replaceVerbs);

});
