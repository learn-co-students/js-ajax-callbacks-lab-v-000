
  var itemTemplate;
  var commitTemplate;


function handlebarsSetup() {

  //put any handlebars setup in here
  itemTemplate = Handlebars.compile($("#item-template").html());
  commitTemplate = Handlebars.compile($("#commits-template").html());
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());


}


$(document).ready(function (){

  handlebarsSetup()

  $('#searchbtn').on('click', searchRepositories)

})


function searchRepositories() {


  var searchURL = $('#searchTerms').val(); //tetris
  var reqURL = "https://api.github.com/search/repositories?q=" + searchURL;
  //var repositories;

  $.get(reqURL, function(data, status){
  //  alert(status)

    $('#results').html(itemTemplate(data));

    })
    .fail(function() {
      displayError();
    });

}

function showCommits(commitURL) {

    $.get(commitURL.replace("{/sha}", ""), function(data, status){


      $('#details').html(commitTemplate(data));
      return true
    })
    .fail(function() {
      displayError();
      return false
    });
}


function displayError(){

  $('#errors').html("I/'m sorry, there/'s been an error. Please try again.");
}
