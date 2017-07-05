$(document).ready(function (){
});

function searchRepositories(searchTerms) {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  //debugger
  req.open("GET", 'https://api.github.com/search/repositories?q=' + searchTerms)
  req.send()
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  var repoTemp = ""
  
  for (var i = 0; i < repos.items.length; i++) {
    repoTemp += '<li>' + repos.items[i].full_name + '</li><br><li>' + repos.items[i].description + '</li><br><li>'
                + repos.items[i].html_url + '</li><br><li>' + repos.items[i].owner['login'] + '</li><br><img src= '
                + repos.items[i].owner["avatar_url"] + '></li><br><a href = "#" onclick="showCommits(' +
                repos.items[i].owner['login'] + ',' + repos.items[i].id + ')">Show Commits</a><br>'
  }
  const repoList = `<ul>${repoTemp}</ul>`
  //debugger
  //const repoList = `<ul>${repos.map(r => '<li>' + r.full_name + '<br>' + r.description + '<br>' + r.html_url + '<br>' + r.owner["login"] + '<br>' + r.homepage + '<br>' + '<img src=' + r.owner["avatar_url"] + '>' + '</li>' + '<a href="#" onclick="showCommits()">Show Commits</a><br>').join('')}</ul>)}`
  document.getElementById("results").innerHTML = repoList
}

function showCommits(owner, repo) {
  debugger
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayCommits);
  //req.open("GET", 'https://api.github.com/repos/mojombo/git/commits')
  req.open("GET", 'https://api.github.com/repos/' + owner + '/' + repo + 'git/commits')
  req.send()
}

function displayCommits(event, data) {
  const repos = JSON.parse(this.responseText)
  debugger
  //const repoList = `<ul>${repos.map(r => '<li>' + 'SHA: ' + r.sha + '<br>' + 'Author: ' + r.commit["author"]["name"] + '<br>' + 'Login: ' + r.aurhor["login"] + '<img src=' + r.author["avatar_url"] + '>').join('')}</ul>)}`
  const repoList = `<ul>${repos.map(r => '<li>' + 'SHA: ' + r.sha + '<br>' + 'Author: ' + r.commit["author"]["name"] + '<br>' + 'Login: ' + r.committer["login"] + '<br>' + '<img src=' + r.committer["avatar_url"] + '>' + '<br>').join('')}</ul>)}`
  //debugger
  document.getElementById("details").innerHTML = repoList
}