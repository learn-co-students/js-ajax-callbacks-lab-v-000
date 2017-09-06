const githubSearchUrl = "https://api.github.com/search/repositories?q=";

var displayError = (error) => {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

var buildHtmlForCommit = (data) => {

  let items = data.map( (commit)=> {
    let str = `${commit.sha}, ${commit.commit.message}`
    return str
  });
  return `${items}<br>`
}

var showCommits = (link) => {

  $.get(`https://api.github.com/repos/${link.dataset.owner}/${link.dataset.repository}/commits`, data => {
    $('#details').html(buildHtmlForCommit(data))
  }).fail(error => {
    displayError()
  })
}

var buildHtmlForRepo = (data) => {
  let items = data.items.map( item => {
  let str = `<a href="#" data-repository="${item.name}" data-owner="${item.owner.login}"" onclick="showCommits(this)">${item.name}</a>, ${item.description}, ${item.html_url}, ${item.owner.login}, ${item.owner.html_url} <img src="${item.owner.avatar_url}"><br>`
    return str
  });
  $('#results').html(items);
}

var searchRepositories = () => {
  const query = $('#searchTerms').val();
  $.get(`${githubSearchUrl}${query}`, data => {
    $("#results").html(buildHtmlForRepo(data));
  }).fail((error)=> {
    displayError(error);
  });
}

$(document).ready(function (){
});
