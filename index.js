function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function displayError() {
  return $('#errors').html("<h3>I'm sorry, there's been an error. Please try again.</h3>");
}

function searchTerms() {
  return $('#searchTerms').val();
}

function searchRepositories() {
  $('form').on('submit', function(e){
    runSearch(searchTerms());
    e.preventDefault();
  })
}

function runSearch(terms) {
  $.get('https://api.github.com/search/repositories?q=' + terms, function(data) {
    var template = Handlebars.compile($('#results-template').html());
    $('#results').html(template(data));        
  })
  .fail(function() {
    displayError();    
  });
}

function getCommits(link) {
  $.get(link, function(data) {
    var template = Handlebars.compile($('#commits-template').html());
    $('#details').html(template(data));    
  })
  .fail(function() {
    displayError();    
  });
}

function showCommits() {
  $(document).on('click', 'a.commits-link', (function(e) {
      e.preventDefault();
      getCommits(this.href);      
    })
  );
}

$(document).ready(function() {
  searchRepositories();
  showCommits();
  handlebarsSetup();
});