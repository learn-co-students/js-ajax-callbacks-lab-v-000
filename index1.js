const url_prefix = "https://api.github.com/search/repositories?q=";

function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

$(document).ready(function (){
  handlebarsSetup();
});

function searchRepositories(){
  const searchName = document.getElementById("searchTerms").value;
  const url = url_prefix + searchName;
 
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open("GET", url);
  req.send();
  return false;
}

function showRepositories(){
  const repos = JSON.parse(this.responseText);
  const src = document.getElementById('results-template').innerHTML;
  const template = Handlebars.compile(src);
  const repoList = template(repos);
  document.getElementById("repositories").innerHTML = repoList;

}
