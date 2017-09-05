$(document).ready(function (){
  $.get("index.html", function(response) {
   $("#results").html(response);
  }).fail(function(error) {
    // This is called when an error occurs
    $("#errors").html(displayError());
  });
});

function searchRepositories() {
  const searchTerm = document.getElementById("searchTerms").value
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayRepositories);
  req.open("GET", `https://api.github.com/search/repositories?q=${searchTerm}`)
  req.send()
}

function displayRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const repoList = '<ul>' + repos.items.map(r => {
   return (`
          <li>
            <h2><a href="${r.html_url}">${r.name}</a></h2>
            <p>${r.owner.login}</p>
            <p>${r.owner.avatar_url}</p>
            <p>${r.owner.html_url}</p>
            <p>${r.description}</p>
            <a href="#" data-owner="${r.owner.login}" data-repository="${r.name}" onclick="showCommits(this)">Show Commits</a>
          </li>`
          )
    }).join('') + "</ul>"
  document.getElementById("results").innerHTML = repoList
}


function showCommits(el) {
  const req = new XMLHttpRequest()
  debugger;
  req.addEventListener("load", displayCommits)
  req.open("GET", `https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`)
  req.send()
}

function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.avatar_url + " " + commit.sha + " " + commit.commit.author.name + " " + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = commitsList
}


// function getCommits(el) {
//   const req = new XMLHttpRequest()
//   req.addEventListener("load", showCommits)
//   req.open("GET", `https://api.github.com/repos/${el.dataset.username}/${el.dataset.repository}/commits`)
//   req.send()
// }
//
// function showCommits(el) {
//   const commits = JSON.parse(this.responseText)
//   const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.avatar_url + " " + commit.sha + " " + commit.commit.author.name + " " + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
//   document.getElementById("details").innerHTML = commitsList
// }

function displayError() {
  var error = "I'm sorry, there's been an error. Please try again.";
  document.getElementById("errors").innerHTML += error;
}
