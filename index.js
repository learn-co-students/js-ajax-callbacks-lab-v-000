$(document).ready(function (){
  handlebarsSetup();
  searchRepositories();
});

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

function searchRepositories() {
    $('#searchlink').on('click', function(event) {
      event.preventDefault();
      var term = $('#searchTerms').val();
      var link = "https://api.github.com/search/repositories?q=" + term + "/";
    $.get(link, function(data) {
      for (var i = 0; i < data["items"].length; i++) {
      var url = data["items"][i].commits_url;
      url = url.replace('{/sha}','');
      $('#results')
      .append("Name: " + data["items"][i].name + "<br>")
      .append("URL: " + data["items"][i].html_url + "<br>")
      .append("Description: " + data["items"][i].description + "<br>")
      .append("Owner Login: " + data["items"][i].owner.login + "<br>")
      .append("Owner Profile: " + data["items"][i].owner.url + "<br>")
      .append("<img src='" + data["items"][i].owner.avatar_url + "'>" + "<br>")
      .append("<a id='showCommits' href='" + url + "'>Show Commits</a>" + "<br><br>");
      var template = Handlebars.compile($("#people-template").html());
      var context = {login: data["items"][i].owner.login, avatar: data["items"][i].owner.avatar_url};
      template(context);
  };
    showCommits();
    return data;
    }).fail(function(error) {
      displayError()
      });
    });
  }

  
function showCommits() {
  $('#showCommits').on('click', function(event) {
    event.preventDefault();
    var a = document.getElementById("showCommits");
    $.get(a.href, function(data) {
      for (var i = 0; i < data.length; i++) {
      $('#details')
      .append("Name: " + data[i].commit.author.name + "<br>")
      .append("SHA: " + data[i].sha + "<br>")
      .append("Author Login: " + data[i].author.login + "<br>")
      .append("<img src='" + data[i].author.avatar_url + "'>" + "<br>");
    };
    return data;
    }).fail(function(error) {
      displayError()
      });
  });
}

function displayError() {
  $("div#errors").append("I'm sorry, there's been an error. Please try again.");
}


