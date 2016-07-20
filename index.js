function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#details").html());
}

function Item(attributes) {
  this.name         = attributes.name;
  this.description  = attributes.description;
  this.html_url     = attributes.html_url;
  this.owner_login  = attributes.owner.login;
  this.avatar       = attributes.avatar_url;
  this.owner_url    = attributes.owner.html_url
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  var input       = document.getElementById('searchTerms'),
      searchTerms = input.value,
      url         = "https://api.github.com/search/repositories";

  $.get(url +'?utf8=✓&q='+ searchTerms, function(response) {
    var html      = $("#results").html();
    var template  = Handlebars.compile(html);

    debugger;

  if (response != null) {
    $("#results").append(template(response));
    // document.getElementById('results').innerHTML = results;
    $('#results').click(function () {
    showCommits();
    });
  } else {
    displayError();
    };
  });
  
    return results;
}

function showCommits() {
}

function displayError() {
  document.getElementById('errors').innerHTML = "I'm sorry, there's been an error. Please try again.";
}