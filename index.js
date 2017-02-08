function handlebarsSetup() {
  //put any handlebars setup in here
  //Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  //handlebarsSetup()

  function clearPage() {
    $("#results").empty();
    $("#details").empty();
    $("#errors").empty();
  }

  function displayError() {
    $("#errors").append("I'm sorry, there's been an error. Please try again.");
  }

  getCommits = function(link) {
    $("#details").empty();
    $("#errors").empty();
    $.get(link)
    .done(function(data) {
      for (var i = 0; i < data.length; i++) {
        console.log(data[i])
        var num = i + 1
        var sha = data[i].sha || "None provided";    
        var author = data[i]["author"]["login"] || "None provided";
        var avatar = data[i]["author"]["avatar_url"] || "None provided";
        $("#details").append(`<div class="commits"><p><b>Commit number ${num}</b></p><p>SHA: ${sha}</p><p></p><p>Author: ${author}</p><p><img src=${avatar} style="width: 50%; height: 50%"/></p></div>`); 
        }
      }).fail(function(error) {
        displayError();
    })
  }


  $("form").on("submit", function(event) { 
    clearPage(); 
    var searchTerms = $("#searchTerms").val();
    var gitRepos = "https://api.github.com/search/repositories?q=" + searchTerms;
      $.get(gitRepos)
        .done(function(data) {
          var repos = data.items
          $.map(repos, function(repo, index) {
            var name = repo.name;
            var description = repo.description || "None provided";
            var link = repo.html_url;
            var userLogin = repo["owner"]["login"] || "None provided";
            var userAvatar = repo["owner"]["avatar_url"] || "None provided";
            var userProfileLink = repo["owner"]["html_url"] || "None provided";
            var commitsLink = repo.commits_url.slice(0, -6);
            
          
             
            $("#results").append(`<p><b>Repo Name: ${name}</b></p><p>Description: ${description}</p><p><a href=${link} target="_blank">Repo Details Here</a></p><p>Creator: ${userLogin}</p><p><img src=${userAvatar}/></p><p><a href=${userProfileLink} target="_blank">Creator Profile</a></p><div class="commits"><button type="button"  value="View Commits" id=${commitsLink} onclick="getCommits(this.id);">View Commits</button></div></p><hr><br><br>` );
          })  
        }).fail(function(error) {
        displayError();
      })
    event.preventDefault();
  })   
})     











