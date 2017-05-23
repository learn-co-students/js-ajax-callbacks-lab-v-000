function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});


function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories(link) {
  //let searchTerms = link.nextElementSibling.value
  $.get(`https://api.github.com/search/repositories?q=${searchTerms.value}`, function(response) {
    var source = $('#results-template').html()
    var template = Handlebars.compile(source)
    var html = template(response)
    $("#results").html(html)

  }).fail(displayError)

}

function showCommits(link) {
  $.get(`https://api.github.com/repos/${link.dataset.owner}/${link.dataset.repository}/commits`, function(response) {
    let source = $('#commits-template').html()
    let template = Handlebars.compile(source)
    let html = template(response)
    $('#details').html(html)
  })
}
