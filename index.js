function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  const req = new XMLHttpRequest()
  $("form").on("submit", function() {
    const searchTerm = document.getElementById('search-term').value
  });

  $.get( `https://api.github.com/search/repositories?q=${searchTerm}`,resultsData)
}

function resultsData(event, data) {
  const results = JSON.parse(this.responseText)
  console.log(this)
  // const src = document.getElementById("").innerHTML
}
