$(document).ready(function (){
});


function searchRepositories(){
  const searchTerms = $('#searchTerms').val()

  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    $('#results').html(displayRepositories(data));
  }).fail( error => {
    console.log(error)
  });
}

var displayRepositories = (repos) => repos.items.map( (repo) => displayRepository(repo) )


function displayRepository(result){
console.log(result)
  return `
        <div>
          <h2><a href=${result.html_url} target="_blank">${result.name}</a></h2>
          <p>${result.description}</p>
          <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a>
        </div>
        <hr>
      `
}

var showCommits = (el) => {

  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data => {
    $('#details').html(renderCommits(data));
  }).fail( error => {
    console.log(error)
  });
}

var renderCommits = (data) => {
  let result = data.map((commit)=>renderCommit(commit)).join('')
  return `<ul>${result}</ul>`
}

var renderCommit = (commit) => {
  return `<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>`
}
