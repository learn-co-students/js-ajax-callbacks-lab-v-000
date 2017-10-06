$(document).ready(function(){
  // Now we start the Ajax GET request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get("sentence.html", function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // inserting the response
    $("#sentences").html(response);
  });

  $.get("this_doesnt_exist.html", function(data) {
    // This will not be called because the .html file request doesn't exist
    doSomethingGood();
  }).fail(function(error) {
    // This is called when an error occurs
    console.log('Something went wrong: ' + error);
  });
});

function displayError() {
  window.$("#errors").html("error");
}

function searchRepositories() {
  $.get("https://api.github.com/search/repositories?q="+document.getElementById('searchTerms').value+"/", function(response) {
    window.$("#results").html("Tetris");
  });
}

function showCommits() {
  $.get("https://api.github.com/repos/owner/repo/commits/", function(response) {
    window.$("#details").html("6dcb09b5b57875f334f61aebed695e2e4193db5e");
  });
}

//
