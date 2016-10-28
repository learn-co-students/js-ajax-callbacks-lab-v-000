function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  var searchTerms = $('#searchTerms').val()
  // console.log(searchTerms);
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`).done(function(data) {

      var templateScript = $('#results-template').html();
      var template = Handlebars.compile(templateScript);

      $('#results').html(template(data));
    }).fail(function(error) {
      displayError();
    });
}

function showCommits(el) {
  const owner = el.dataset.owner;
  const repo = el.dataset.repository;

  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`).done(function(data) {
    var templateScript = $('#commits-template').html();
    const template = Handlebars.compile(templateScript);

    $('#details').html(template(data));
  }).fail(function(error) {
    displayError();
  });
}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){

  handlebarsSetup();

  document.getElementById('searchLink').addEventListener("click", searchRepositories);

});
