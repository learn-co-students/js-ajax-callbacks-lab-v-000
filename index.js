function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function displayError(error) {
    console.log('Something went wrong: ' + error);
    $("#errors").html("I'm sorry, there's been an error. Please try again.")
  }

function searchRepositories() {
  const search = document.getElementById("searchTerms").value
  const url = "https://api.github.com/search/repositories?q="+search

    $.get(url, function(response) {
      const template = Handlebars.compile($("#results-template").html())
      $("#results").html(template(response))
    }).fail(error => {
      displayError()
    })
}

function showCommits(ele) {
  const owner = ele.dataset.owner
  const repo = ele.dataset.repository
  const url = "https://api.github.com/repos/"+owner+"/"+repo+"/commits"

  $.get(url, function(data) {
    const template = Handlebars.compile($("#commits-template").html())
    $("#details").html(template(data))
  }).fail(error => {
    displayError()
  })
}
