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
    $.get(link)
    .done(function(data) {
      for (var i = 0; i < data.length; i++) {
        var num = i;
        var sha = data[i].sha;    
        var author = data[i]["author"]["login"];
        var avatar = data[i]["author"]["avatar_url"];

        $("#details").append(`<div class="commits"><p><b>Commit number ${i}</b></p><p>SHA: ${sha}</p><p></p><p>Author: ${author}</p><p><img src=${avatar} style="width: 50%; height: 50%"/></p></div>`); 
      }
    })
  }


  $("form").on("submit", function(event) { 
    var searchTerms = $("#searchTerms").val();
    var gitRepos = "https://api.github.com/search/repositories?q=" + searchTerms;
      $.get(gitRepos)
        .done(function(data) {
          var repos = data.items
          $.map(repos, function(repo, index) {
            var name = repo.name;
            var description = repo.description || "None provided";
            var link = repo.html_url;
            var userLogin = repo["owner"]["login"];
            var userAvatar = repo["owner"]["avatar_url"];
            var userProfileLink = repo["owner"]["html_url"];
            var commitsLink = repo.commits_url.slice(0, -6);
            clearPage();  
            $("#results").append(`<p><b>Repo Name: ${name}</b></p><p>Description: ${description}</p><p><a href=${link} target="_blank">Repo Details Here</a></p><p>Creator: ${userLogin}</p><p><img src=${userAvatar}/></p><p><a href=${userProfileLink} target="_blank">Creator Profile</a></p><div class="commits"><button type="button"  value="View Commits" id=${commitsLink} onclick="getCommits(this.id);">View Commits</button></div></p><hr><br><br>` );
          })  
        }).fail(function(error) {
        displayError();
      })
    event.preventDefault();
  })      



  // $(".commits").on("click", function() {
  //   alert("button clicked")//, id " + this.class + ", text" + this.innerHTML); 





});


/*

  for (var i = 1; i < 100; i++) {
  .   console.log( "Hello World the " + i + " time" );
  . }

for(var key in myObject) {
    if(myObject.hasOwnProperty(key)) {
        myObject[key] *= 2;
    }
}

  function requestJSON(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
    });
  }

$(function(){
  $('#ghsubmitbtn').on('click', function(e){
    e.preventDefault();
    $('#ghapidata').html('<div id="loader"><img src="css/loader.gif" alt="loading..."></div>');
    
    var username = $('#ghusername').val();
    var requri   = 'https://api.github.com/users/'+username;
    var repouri  = 'https://api.github.com/users/'+username+'/repos';
    
    requestJSON(requri, function(json) {
  */