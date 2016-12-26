function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
  Handlebars.registerPartial("result", $("#results-partial").html());
  Handlebars.registerPartial("commit", $("#commits-partial").html());
}

function searchRepositories() {
    var input = $("#searchTerms").val();
    $.get("https://api.github.com/search/repositories?q=" + input, function(data) {
      var template = Handlebars.compile($("#results-partial").html());
      $('#results').html(template(data));
    }).fail(function() {
      displayError();
    })
}

function showCommits(x) {
  var owner = x.dataset.owner;
  var repo = x.dataset.repository;
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(response) {
    var template = Handlebars.compile($("#commits-partial").html());
    $("#details").html(template(response));
  }).fail(function() {
    displayError();
  })
}

function displayError() {
  $("#errors").append("<p>I'm sorry, there's been an error. Please try again.");
}

$(document).ready(function (){
  handlebarsSetup()
});
