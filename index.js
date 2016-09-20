function handlebarsSetup() {
  //put any handlebars setup in here
  template = Handlebars.compile($("#user-template").html());
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
  searchRepositories();
});

function searchRepositories() {
  $('#searchLink').on('click', function(){
    var search = $('#searchTerms').val();

    $.get('https://api.github.com/search/repositories?q=${search}', function(response){
        var html = template(response.items);
        $('#results').append(html);
    }).fail(function(error) {
      displayError();
    })
  })
};

function showCommits() {
}

function displayError() {
  $('#errors').append("I'm sorry, there's been an error. Please try again.");

}
