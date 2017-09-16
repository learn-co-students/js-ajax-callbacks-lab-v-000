$(document).ready(function (){

});

function searchRepositories() {
  searchTerms = document.getElementById("searchTerms").value
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}/`, function (response) {
    const repoList = `<ul>${response.items.map(r => '<li>' + r.name + ' - <a href="#" data-owner="' + r.full_name + '" data-repository="' + r.name + '" onclick="showCommits(this)">Get Commits</a></li>').join('')}</ul>`
    $("#results").html(repoList);
  }).fail(error => displayError(error));
}


function showCommits(element) {
  const owner = element.dataset.owner.split("/")[0]
  const repo = element.dataset.repository

  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function (response) {
    const commitsList = `<ul>${response.map(commit => '<li><strong>' + commit.sha + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`

    $("#details").html(commitsList);
  }).fail(error => displayError(error))
}

function displayError(error) {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}


//
// $.get("sentence.html", function(response) {
//   // Here we are getting the element on the page with the id of sentences and
//   // inserting the response
//   $("#sentences").html(response);
// });
//
// $.get("this_doesnt_exist.html", function(data) {
//   // This will not be called because the .html file request doesn't exist
//   doSomethingGood();
// }).fail(function(error) {
//   // This is called when an error occurs
//   console.log('Something went wrong: ' + error);
// });
//
// var url = "https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078";
//
// $.get(url)
//   .done(function(data) {
//     console.log("Done");
//     console.log(data);
// });
