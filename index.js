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
      template    = Handlebars.compile(html);

  $.get(url +'?q='+ searchTerms, function(response) {
    
    if (response != null) {
      $("#results").html(template(response));
    } else {
      displayError();
    };
  });
}

function showCommits(element) {
  var url       = "https://api.github.com/repos/" + element.dataset.owner + "/" + element.dataset.repository + "/commits";
  var template  = Handlebars.compile($("#commits-template").html());

  $.get(url, function(response) {
    $("#details").html(template(response));
  })

}

function displayError() {
  document.getElementById('errors').innerHTML = "I'm sorry, there's been an error. Please try again.";
}

