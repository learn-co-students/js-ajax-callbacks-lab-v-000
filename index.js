function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
});

function searchRepositories(){
  const url = "https://api.github.com/search/repositories?q=";
  const searchTerms = sanitize(document.getElementById("searchTerms").value);
  const src = document.getElementById("repository-template").innerHTML;
  const template = Handlebars.compile(src);

  $.get(url + searchTerms, function(data){
    const repoList = template(data.items);
    $("#results").html(repoList);
  }).fail(displayError());
}

function showCommits(el){
  const repository = el.dataset.repository
  const owner = el.dataset.owner
  const src = document.getElementById("commits-template").innerHTML;
  const template = Handlebars.compile(src);

  $.get(`https://api.github.com/repos/${owner}/${repository}/commits`, function(data) {
    const commitsList = template(data)
    $("#details").html(commitsList);
  }).fail(displayError());
}

function sanitize(string){
  return string.split(" ").join("+");
}

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again. ");
}
