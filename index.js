$(document).ready(function (){
})

  function displayError(error) {
    $('#errors').html("I'm sorry, there's been an error. Please try again.");
  }

  function searchRepositories() {
    const searchTerms = $('#searchTerms').val()

    $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
      data.items.forEach(function(repo){
        $('#results').append(
          `<div>
            <p>${repo.name}</p>
            <p>${repo.description}</p>
            <a href=${repo.html_url}>link</a>
            <p>${repo.owner.login}</p>
            <img src=${repo.owner.avatar_url}>
            <a href=${repo.owner.url}>Owner link</a>
            <a hr
            ef='#' id=${repo.name}>Show Commits</a>
          </div>`
        );
        let login = repo.owner.login;
        let repo_name = repo.name;
        $(`#${repo.name}`).click(showCommits(repo));
      });
    }).fail(displayError);
  }

  function showCommits(repo) {
    const url = `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`;

    $.get(url).done((data) => {
      $('#details').html(commitsList(data));
    }).fail(displayError);
  }

  function commitsList(data){
    let html = '';
    data.forEach(function(d){
      html +=
      `<div>
        <p>${d.sha}</p>
        <p>${d.commit.author}</p>
        <p>${d.author.login}</p>
        <img src=${d.author.avatar_url}>
      </div>`
    });
    return html
  }

  // For each commit, list the SHA, the author, the author's login, and the author's avatar as an image.
