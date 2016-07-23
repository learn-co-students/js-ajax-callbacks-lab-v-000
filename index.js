var response,
    page; // probably not needed

function handlebarsSetup() {
  //put any handlebars setup in here
  

  Handlebars.registerPartial("userDetails", $("#details").html());
  
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  var input       = document.getElementById('searchTerms'),
      searchTerms = input.value,
      url         = "https://api.github.com/search/repositories",
      html        = $("#results-template").html(),
      template    = Handlebars.compile(html),
      context     = {name: "Testing"},
      page        = template(context);

  $.get(url +'?q='+ searchTerms, function(response) {

    debugger;
    if (response != null) {
      // document.getElementById('results').innerHTML = template(response);
      $("#results").html(template(response));
      $('#results').click(function () {
        showCommits(response);
      });
    } else {
      displayError();
    };
  });
    return results;
}

function showCommits(e) {
  var source = $("#").html();
  e.items[0].git_commits_url
}

function displayError() {
  document.getElementById('errors').innerHTML = "I'm sorry, there's been an error. Please try again.";
}

