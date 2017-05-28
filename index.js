function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`,resultsData))
}

function resultsData(event, data) {
  const results = JSON.parse(this.responseText)
  console.log(this)
  // const src = document.getElementById("").innerHTML
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}
