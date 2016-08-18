function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function searchRepositories() {
    const searchTerms = $("#searchTerms").val();
    const baseUrl = "https://api.github.com/search/repositories?q="
    const url = baseUrl + searchTerms

    $.get(url, function(data) {
      const template = Handlebars.compile($("#results-template").html());
      $('#results').html(template(data));
    }).fail(displayError());
}

function displayError() {
  $('#errors').html("Oops! There's been an error. Please try again.")
}

$(document).ready(function (){
  handlebarsSetup()
});