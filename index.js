function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  const query = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${query}`, data => {
    const template = Handlebars.compile($('#results-template').html())
    $('#results').html(template(data))
  }).fail(function(error) {
    displayError()
  });
}

function showCommits(el) {
  const name = el.dataset.repository
  const owner = el.dataset.owner
  $.get(`https://api.github.com/repos/${owner}/${name}/commits`, data => {
      const template = Handlebars.compile($('#commits-template').html())
      $('#details').html(template(data))
    }).fail(function(error) {
      displayError()
  });
}

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.");
}
