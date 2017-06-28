$(document).ready(function (){
});

function searchRepositories() {
  const query = $('#searchQuery').val()
  $.get(`https://api.github.com/search/repositories?q=${searchQuery}`, function(data) {
    $('#results').html(
      `
      <div>
        <h3><a href="${data.html_url}">${data.name}</a></h3>
        <p><a href="#" data-repository="${data.name}" data-owner="${data.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${data.description}</p>
      </div>
      <hr>
      `
    )
  }).fail(function(error) {
    $('#errors').html("I'm sorry, there's been an error. Please try again.");
  });

  function showCommits(el) {
    $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, function(data) {
      $('#details').html(
        '<ul>'
        + data.map(function(c) { return `<li><h3>${c.sha}</h3><p>${c.commit.message}</p></li>` }).join('')
        + '</ul>'
      )
    }).fail(function(error) {
      $('#errors').html("I'm sorry, there's been an error. Please try again.");
    });
  }
}
