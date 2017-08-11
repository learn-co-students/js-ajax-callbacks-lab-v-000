
$(document).ready(function (){
});

function displayError(){
  $("#errors").html("error")
}

function repoHTMLResult(repository_result){
  return `
    <div>
        <h2><a href="${repository_result.html_url}">${repository_result.name}</a></h2>
        <a href="#" data-repository="${repository_result.name}" data-owner="${repository_result.owner.login}" onclick="showCommits(this)">Show Commits</a>
        <p>${repository_result.description}</p>
    </div>`
}
function repoHTMLResults(response_results){
  return response_results.items.map( repository => repoHTMLResult(repository) )
}
function searchRepositories(){
  $.get(`https://api.github.com/search/repositories?q=${$("#searchTerms").val()}`, response => $("#results").html(repoHTMLResults(response)))
    .fail(error => displayError())
}

function showCommits(el){
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, response => {$("#details").html(commitHTMLResults(response)); debugger})
    .fail(error => displayError())
}

function commitHTMLResults(commits){
  return commits.map( commit => commitHTMLResult(commit) )
}

function commitHTMLResult(commit){
    return `
      <div>
        <h2>sha</h2>
        <p>${commit.sha}</p>
        <h2>message</h2>
        <p>${commit.commit.message}</p>
      </div>
    `
}
