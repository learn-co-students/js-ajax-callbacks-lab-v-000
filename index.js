function displayError() {
  const errorMessage = "I'm sorry, there's been an error. Please try again."
  $("#errors").html(errorMessage)
}

function searchRepositories() {
  const searchTerms = $("#searchTerms").val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, response => {
    const template = Handlebars.compile($("#repository-template").html())
    $("#results").html(template(response));
  }).fail(error => {
    displayError()
  });
};

function showCommits(el) {
  const repo = el.dataset.repository
  const user = el.dataset.owner
  $.get(`https://api.github.com/repos/${user}/${repo}/commits`, response => {
    const template = Handlebars.compile($("#commits-template").html())
    $("#details").html(template(response));
  }).fail(error => {
    displayError()
  });
};

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});
