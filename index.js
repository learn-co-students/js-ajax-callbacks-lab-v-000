function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
};

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories(element) {
  var searchTerm = $("input#searchTerms")[0].value.split(" ").join("+");
  $.get("https://api.github.com/search/repositories?q=" + searchTerm, function(response) {
    var template = Handlebars.compile($("#repoTemplate").html());
    const results = template(response.items);
    $("#results").html(results);
    $("#details").html("");
  }).fail(function(error) {
    displayError();
  });
};

function displayError() {
  $("div#errors").html("error");
}

function showCommits(element) {
  var repo = element.dataset.repository;
  var owner = element.dataset.owner;
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(response) {
    var template = Handlebars.compile($("#commitTemplate").html());
    const commits = template(response);
    $("#details").html(commits);
  }).fail(function(error) {
    displayError();
  });
}
