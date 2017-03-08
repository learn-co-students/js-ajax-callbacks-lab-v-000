function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  var searchTerms = $("#searchTerms").val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    var src = document.getElementById('results-template').innerHTML
    var template = Handlebars.compile(src)
    $("#results").html(template(data))
  }).fail(error => {
    displayError()
  })
}

function showCommits(el) {
  var owner = el.dataset.owner
  var repo = el.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    var src = document.getElementById('commits-template').innerHTML
    var template = Handlebars.compile(src)
    $("#details").html(template(data))
  }).fail(error => {
    displayError()
  })
}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});
