function searchRepositories() {
  const searchTerms = $("#searchTerms").val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    const template = Handlebars.compile($("#results-template").html());
    $("#results").html(template(data));
  }).fail(displayError());
}

function showCommits(element){
  const owner = element.dataset.owner
  const repo = element.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#show-commits-template').html());
    $('#details').html(template(data));
  })
}

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.");
}


function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});
