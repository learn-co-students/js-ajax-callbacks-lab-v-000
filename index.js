function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
});

var searchTerms = $('#searchTerms').val()
var $results = $('#results');

function searchRepositories(){
  $.get("https://api.github.com/search/repositories?q=${searchTerms}", function(repos) {
    $.each(repos.items, function(i, repodata){
      $results.append('<li> ' + repodata.name +  '</li>');
      $results.append('<li> ' + repodata.full_name +  '</li>');
    });
  }).fail(function(error){
      console.log('An error occured:' + error)
  });
};

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

// <!-- JS built in function for "fetching" api requests -->
// fetch("https://api.github.com/search/repositories?q=${searchTerms}")
//   .then(function(res) {
//     return res.json()
//   })
//   .then(function(repos) {
//     console.log(repos.items)
//   })
  
