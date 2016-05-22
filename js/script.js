function replaceNouns() {
  $('#random_noun').on('click', function () {
    $.get("noun.html", function(data) {
      var nounArray = data.split(/\n/);
      console.log(Math.floor(Math.random() * nounArray.length));
      $(".noun").each(function(index, noun) {
        //randomly selects from the noun list and adds to each .noun class
        $(this).text(nounArray[Math.round(Math.random() * (nounArray.length - 1))]);
      });
    }).fail(function(error) {
      // This is called when an error occurs
      $("#errors").append('Something went wrong: ' + error);
    });
  })
};

function replaceVerbs() {
  $('#random_verb').on('click', function () {
    $.get("verb.html", function(data) {
      var verbArray = data.split(/\n/);
      console.log(verbArray);
      $(".verb").each(function(index, noun) {
        //randomly selects from the noun list and adds to each .noun class
        $(this).text(verbArray[Math.round(Math.random() * (verbArray.length - 1))]);
      });
    }).fail(function(error) {
      // This is called when an error occurs
      $("#errors").append('Something went wrong: ' + error);
    });
  })
};

$(document).ready(function (){
  // Code here
  replaceNouns();
  replaceVerbs();
});
