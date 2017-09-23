$(document).ready(function (){
});

function searchRepositories(){
    var searchTerm = document.getElementById("searchTerms").value;
    $.get("https://api.github.com/search/repositories?q=" + searchTerm, function(response) {
        const repoList = `<ul>${response.items.map(r =>
            '<li>' + r.full_name + ' - <a href="#" data-owner="' + r.owner.login + '" data-repository="' + r.name + '" onclick="showCommits(this)">Get Commits</a></li>').join('')}
        </ul>`;
        $("#results").html(repoList);
    }).fail(error => displayError(error));
}

function displayError(error) {
    $("#errors").html("There has been an error" + error);
}

function showCommits(el) {
    var owner = el.dataset.owner;
    var repository = el.dataset.repository;
    var uri = "https://api.github.com/repos/" + owner + "/" + repository + "/commits";
    $.get(uri, function(data) {
        const commitsList = `<ul>${data.map(commit =>
            '<li><strong>' + '<img src="' + commit.author.avatar_url + '" width="30" height="30"> ' + commit.author.login + '<br>' + commit.sha + '</strong> - ' + commit.commit.message  + '</li>').join('')}</ul>`;
        $("#details").html(commitsList);
    }).fail(error => displayError(error));
}
