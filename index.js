function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  var terms = $('#searchTerms')
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepoResults());
  req.open("GET", `https://api.github.com/search/repositories?q=${terms}`)
}

function showRepoResults(event, data) {
  const repos = JSON.parse(this.responseText);
  const src = document.getElementById('user-details-partial').innerHTML;
  const template = Handlebars.compile(src);
  const resultRepoList = template(repos);
  document.getElementById("results").innerHTML = resultRepoList;
}