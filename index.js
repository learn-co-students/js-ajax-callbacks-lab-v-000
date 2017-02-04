function handlebarsSetup() {
  //put any handlebars setup in here
  //Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  //handlebarsSetup()

  $("form").on("submit", function(event) { 
    var searchTerms = $("#searchTerms").val();
    var gitRepos = "https://api.github.com/search/repositories?q=" + searchTerms;
      $.get(gitRepos, function(data) {
        var repos = data.items
        $.map(repos, function(repo, index) {
          var name = repo.name;
          var description = repo.description;
          var link = repo.svn_url;
          $("#results").append("<p>Name: " + name.name + "</p><p>Description: " + name.description + `</p><p>Link: <a href="${name.svn_url}"></a><br>` );
        })  
      }).fail(function(error) {
        console.log("Something didn't work: " + error);
      })
    event.preventDefault();
  })      
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