function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()

  function searchRepositories(query) {
    var url = 'https://api.github.com/search/repositories?q=' + query
    $.get(url, function(response) {
      $('#results').html(response);
      // return console.log(response);
    }).fail(function(error) {
      console.log('Something went wrong: ' + error);
    });
  }

  $('#submit').on('click', function(){
    var searchTerm = $('#searchTerms').val();
    return searchRepositories(searchTerm);
  });
});