$(document).ready(function (){
});

function searchRepositories(){
  query = `https://api.github.com/search/repositories?q=${document.getElementById("searchTerms").value}`
  $.get(query, function (response){
    document.getElementById("results").innerHTML = ""
    var repoList = response.items.forEach((currRepo)=>{
    document.getElementById("results").innerHTML += `<h5>${currRepo.name}</h5>` +
      `<p>${currRepo.description}</p>` +
      `<ul>` +
        `<li>${currRepo.html_url}</li>` +
        `<li><a href="${currRepo.owner.html_url}">${currRepo.owner.login}</a></li>` +
        `<li><img src="${currRepo.owner.avatar_url}" width="30" height="30"></li>` +
        `<li><a href="#" data-repository="${currRepo.name}" data-owner="${currRepo.owner.login}" onclick="showCommits(this)">Show Commits</a></li>` +
      `</ul>`
    })
  }).fail(function(response){
    document.getElementById("results").innerHTML = ""
    displayError(response)
  })
}

function showCommits(link){    
  query = `https://api.github.com/repos/${link.dataset.owner}/${link.dataset.repository}/commits`
  $.get(query, function (response){
    document.getElementById("details").innerHTML = ""
    var commitList = response.forEach((currCommit)=>{
    document.getElementById("details").innerHTML +=  `<p>${currCommit.sha}</p>` +
      `<p>${currCommit.commit.message}<p>` +
      `<ul>` +
        `<li>${currCommit.committer.name}</li>` +
        `<li>${currCommit.committer.login}</li>` +
        `<li><img src="${currCommit.committer.avatar_url}" width="30" height="30"></li>` +
      `</ul>`
    })
  }).fail(function(response){
    document.getElementById("details").innerHTML = ""
    displayError(response)
  })
}

function displayError(error){
  document.getElementById("errors").innerHTML = "I'm sorry, there's been an error. Please try again: " 
  //+ error.responseText
}