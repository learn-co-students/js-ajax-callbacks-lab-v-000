
function searchRepositories() {
  let searchTerm = ($("#searchTerms").val())
  $.get(`https://api.github.com/search/repositories?q=${searchTerm}`, response => {
    $.each(response.items, (index, item) => {
      $("#results").append(`<ul><a href="${item.html_url}"><li> ${item.name} </li></a><br>`)
      $("#results").append("<li>Description: " + item.description + "</li><br>")
      $("#results").append("<li>Repo Owner Login: " + item.owner.login + "</li><br>")
      $("#results").append(`<li><img src="${item.owner.avatar_url}"></img></li><br>`)
      $("#results").append(`<li><a href='${item.owner.url}'>Profile Page</a></li><br>`)
      $("#results").append(`<li><a href='#' data-repository="${item.name}" data-owner="${item.owner.login}" onclick="showCommits(this)">Show Commits</a></li><br></ul>`)
    })
  }).fail(error => {displayError()})
}

function showCommits(el) {
  console.log("in the show commits fn")
  $.get(
    `https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, response => {
      $.each(response, (index, item) => {
        $("#details").append(`<p>SHA + ${item.sha}</p>`)
        $("#details").append(`<p>author - ${item.commit.author.name}</p>`)
        $("#details").append(`<p>message - ${item.commit.message}</p>`)
        $("#details").append(`<p>login - ${item.committer.login}</p>`)
        $("#details").append(`<p>avatar - <img src ='${item.committer.avatar_url}'></p>`)
      })
    })
}

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}