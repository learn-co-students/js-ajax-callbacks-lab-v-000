

function searchRepositories() {

  const query = document.getElementById("searchTerms").value;
  const url = `https://api.github.com/search/repositories?q=${query}`;

  $.get(url, function(data) {

  $('#results').html(showResults(data))

  }).fail(function(error) {
  displayError();
  });

}

function showResults(data) {

  return data.items.map(result => {

    return '<h2><a href="' + result.html_url +'">' + result.name + '</a></h2>'
    + " - " + '<a href="#" data-repository="' + result.name + '"data-owner="'
    + result.owner.login + '" onclick="showCommits(this)">show commits</a>'
	});

}

function showCommits(el){
  const repo = el.dataset.repository
  const owner = el.dataset.owner
  var url = `https://api.github.com/repos/${owner}/${repo}/commits`

  $.get(url, function(response){
    var commits = `<ul>${response.map(commit => '<li>' + commit.sha + commit.commit.author.name
    + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`

    $("#details").html(commits)
  });
}

function displayError(){
   $('#errors').html("There's been an error.")
}

$(document).ready(function (){
});
