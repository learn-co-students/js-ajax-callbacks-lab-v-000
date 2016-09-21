function handlebarsSetup() {
  //put any handlebars setup in here
  template = Handlebars.compile($("#user-template").html());
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
  searchHandler();
});

function searchHandler() {
  $('#searchLink').on('click', function(){
    searchRepositories();
  })
}

function searchRepositories() {
    var search = "https://api.github.com/search/repositories?q="+ $("#searchTerms").val()
    $.get(search, function(response){
      
        var html = template(response.items);
        $('#results').append(html);
    }).fail(function(error) {
      displayError();
    })
};

function showCommits() {
  var commits =
  $.get(search, function(response){
      var html = template(response.items);
      $('#results').append(html);
  }).fail(function(error) {
    displayError();
  })
}

function displayError() {
  $('#errors').append("I'm sorry, there's been an error. Please try again.");

}
