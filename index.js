function searchRepositories() {
  const query = document.getElementById('searchTerms').value
  const url = `https://api.github.com/search/repositories?q=${query}`

  $.get(url, function(data) {
      const items = data.items
      const name = "Hola"
      $.each(items, function(i, repo) {
        $('#results')
          .append(`Name: ${repo.name} <br>`)
          .append(`Description: ${repo.description} <br>`)
          .append(`URL: ${repo.html_url} <br>`)
          .append(`<a href="#" onclick="showCommits(this)" data-repository="${repo.name}" data-owner="${repo.owner.login}" id="show-commit">Show Commits</a><br><br>`)
      });
    })
    .fail(function() {
      displayError();
    });
};


function showCommits(el) {
  const repo = el.dataset.repository
  const owner = el.dataset.owner
  const commitUrl = `https://api.github.com/repos/${owner}/${repo}/commits`

  $.get(commitUrl, function(data) {
      $.each(data, function(i, commit) {
        $("#details")
          .append(`SHA: ${commit.sha} <br>`)
          .append(`Owner: ${commit.author.login} <br><br>`);
      });
    })
    .fail(function() {
      displayError();
    });
};

function displayError() {
  $("#errors").append("I'm sorry, there's been an error. Please try again.")
};
