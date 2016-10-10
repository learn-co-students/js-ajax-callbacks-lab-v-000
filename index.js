$(document).ready(function (){
  handlebarsSetup();
  searchRepositories();
});

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

function searchRepositories() {
      var term = $('#searchTerms').val();
      var link = "https://api.github.com/search/repositories?q=" + term + "/";
    $.get(link, function(data) {
      const template = Handlebars.compile($('#results-template').html())
      $('#results').html(template(data))
    }).fail(function(error) {
      displayError()
      });
  }

  
function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
    }).fail(function(error) {
      displayError()
      });
}

function displayError() {
  $("div#errors").append("I'm sorry, there's been an error. Please try again.");
}


