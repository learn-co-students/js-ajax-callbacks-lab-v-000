function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

 function searchRepositories() {
  // commented out way is better without calling onClick attribute in html, but had to change it due to the tests
   // $("a#search").click(function() {
      const searchTerms = $("#searchTerms").val();
      const baseUrl = "https://api.github.com/search/repositories?q="
      const url = baseUrl + searchTerms
 
     $.get(url, function(data) {
        const template = Handlebars.compile($("#results-template").html());
        $('#results').html(template(data));
      }).fail(displayError());
   // });
  }

function displayError() {
  $('#errors').html("Oops! There's been an error. Please try again.")
}

function showCommits(element) {
    const baseUrl = "https://api.github.com/repos/"
    const repository = element.dataset.repository
    const owner = element.dataset.owner
    const url = `${baseUrl}${owner}/${repository}/commits`

    console.log(element);
    $.get(url, function(data) {
      const template = Handlebars.compile($("#details-template").html());
      $('#details').html(template(data));
    })
}

$(document).ready(function (){
  handlebarsSetup()
  searchRepositories()
});


