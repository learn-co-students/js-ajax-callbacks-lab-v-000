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
        console.log("Hurrah!");  
      }).fail(function(error) {
        console.log("Poop!");
      })
    event.preventDefault();
  })      
});




/*

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