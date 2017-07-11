function searchRepositories() {
  var searchUrl = "https://api.github.com/search/repositories?q=";
  var searchTerms = $('#searchTerms').val().split(" ").join("+");
  searchUrl += searchTerms;

  $.get(searchUrl, data => {
    displayRepository(data.items);
  }).fail(error => {
    displayError();
  });
}

function displayRepository(repoList) {
  var repoListHTML = [];
  repoList.forEach(repo => {
    repoListHTML.push(`
      <div style="border: 2px solid black;">
        <h2>${repo.name}</h2>
        <p>${repo.description}</p>
        <a href="${repo.html_url}">Repository Link</a><br>
        <a href="#" data-owner="${repo.owner.login}" data-repository="${repo.name}" onclick="showCommits(this)">Show Commits</a>
        <section>
          <header><strong>Owner Info</strong></header>
          <p>${repo.owner.login}</p>
          <img href="${repo.owner.avatar_url}">
          <a href="${repo.owner.html_url}">Profile Link</a>
        </section>
      </div>
      `);
  });

  $('#results').html(repoListHTML.join(""));
}

function showCommits(repo) {
  $.get(`https://api.github.com/repos/${repo.dataset.owner}/${repo.dataset.repository}/commits`, data => {
    displayCommits(data);
  });
}

function displayCommits(commitList) {
  var commitListHTML = [];
  commitList.forEach(commit => {
    commitListHTML.push(`
        <div style="border: 2px solid black;">
          <ul>
          <li>SHA: <strong>${commit.sha}</strong></li>
          <li>Author: ${commit.commit.author.name}</li>
          <li>Author Username: ${commit.author.login}</li>
          <img src="${commit.author.avatar_url}" width="100" height="100">
          </ul>
        </div>
      `);
      console.log(commit.author.avatar_url);
  });

  $('#details').html(commitListHTML.join(""))
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again");
}
