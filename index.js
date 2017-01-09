function handlebarsSetup(context) {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
  Handlebars.registerHelper("commitsLink", function(url){
    url_piece = Handlebars.escapeExpression(url);
    //debugger;
    var result = '<a id="commits" href="#"' + `onclick=showCommits("${url_piece}")>show commits</a>`
    return new Handlebars.SafeString(result);
    //<a id="commits" onclick="showCommits(this)" href="#">show commits</a>
  });
};

$(document).ready(function (){
  handlebarsSetup();
});

function searchRepositories() {
  var searchValue = $('input#searchTerms').val();
  getRepos(searchValue);
};

function getRepos(searchValue) {
  $.get(("https://api.github.com/search/repositories?q=" + searchValue), function(response) {
    //debugger;
    var repoTemplateInfo = document.getElementById("repo-details").innerHTML;
    var repoTemplate = Handlebars.compile(repoTemplateInfo);
    $("div#results").append(repoTemplate(response));
    //debugger;
  }).fail(function(error){
    displayError(error);
  });
};

function displayError(error) {
  $("div#errors").append("I'm sorry, there's been an error.");
};

function showCommits(check) {
  $.get(("https://api.github.com/repos" + `/${check}/` + "commits" ), function(response){
    //debugger;
    var commitsTemplateInfo = document.getElementById("commit-details").innerHTML;
    var commitsTemplate = Handlebars.compile(commitsTemplateInfo);
    $("div#details").append(commitsTemplate(response));
  }).fail(function(error){
    displayError(error)
  });
};
