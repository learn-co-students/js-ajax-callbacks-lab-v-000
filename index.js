function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", resultsData);
  console.log(this)
  req.open("GET", `https://api.github.com/search/repositories?q=`)
  req.send()
}

function resultsData(event, data) {
  const results = JSON.parse(this.responseText)
  console.log(results)
  // const src = document.getElementById("").innerHTML
}
