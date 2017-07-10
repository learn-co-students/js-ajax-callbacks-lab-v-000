function displayError() {
    $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

var searchRepositories = () => {
    const searchValue = document.getElementById('searchTerms').value
    const baseURL = "https://api.github.com/search/repositories?q="

    $.get(baseURL + searchValue, data => {
        $("#results").html(displayResults(data))
    }).fail(error => {
      displayError()
    })

}

var displayResults = (data) =>
    data.items.map(result => {
        return `
            <div>
                <h2>${result.name}</h2>
                <p>${result.description}</p>
                <p><a href="${result.html_url}">${result.html_url}</a></p>
                <p><img src="${result.owner.avatar_url}" width="50">By: <a href="${result.owner.url}">${result.owner.login}</a></p>
                <p><a href="#" data-username="${result.owner.login}" data-repository="${result.name}" onclick="showCommits(this)">Show Commits</a></p>
            </div>
        `
    })

var showCommits = (el) => {
    const username = el.dataset.owner;
    const repo = el.dataset.repository;

    $.get(`https://api.github.com/repos/${username}/${repo}/commits`, data => {
        $("#details").html(displayCommits(data))
    })
}

var displayCommits = (data) => 
    data.map(commit => {
        return `
            <div>
                <h3>${commit.sha}</h3>
                <p>${commit.commit.author.name}</p>
                <p>${commit.author.login}<p>
                <p><img src="${commit.author.avatar_url}"></p>
            </div>
        `
    })

$(document).ready(function (){
});