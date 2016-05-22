//Note: This script currently works as described. Not sure why the test specs are fail but I'll return later to fix

function replaceNouns() {
  $('#random_noun').on('click', function () {
    $.get("noun.html", function(data) {
      var nounArray = data.trim().split(/\n/);
      console.log(Math.floor(Math.random() * nounArray.length));
      $(".noun").each(function(index, noun) {
        //randomly selects from the noun list and adds to each .noun class
        $(this).html(nounArray[Math.round(Math.random() * (nounArray.length - 1))]);
      });
    }).fail(function(error) {
      // This is called when an error occurs
      alert('Something went wrong: ' + error.statusText);
    });
  })
};

function replaceVerbs() {
  $('#random_verb').on('click', function () {
    $.get("vrb.html", function(data) {
      var verbArray = data.trim().split(/\n/);
      console.log(verbArray);
      $(".verb").each(function(index, noun) {
        //randomly selects from the noun list and adds to each .noun class
        $(this).html(verbArray[Math.round(Math.random() * (verbArray.length - 1))]);
      });
    }).fail(function(error) {
      // This is called when an error occurs
      alert('Something went wrong: ' + error.statusText);
    });
  })
};

$(document).ready(function (){
  // Code here
  replaceNouns();
  replaceVerbs();
});
