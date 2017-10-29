function searchRepositories() {
    const searchTerms = document.getElementById("searchTerms").value.split(' ').join('+');
    let githubAPI = `https://api.github.com/search/repositories?q=${searchTerms}`;
    // AJAX call
    $.get(githubAPI, (response) => {
        let results = response.items;
        let stringsArray = results.map(result => {
            let divId = `github-repo-${result.id}`;
            return `<div id="${divId}">
            <p><strong>Repo name:</strong> ${result.name}</p>
            <p><strong>Description:</strong> ${result.description}</p>
            <p><strong>URL:</strong> ${result.url} </p>
            <p><img src="${result.owner.avatar_url}" height="50" width="50">
                ${result.owner.login}'s 
                <a href="${result.owner.url}">profile page</a>
                </p>
            <h4><a href="#" onclick="showCommits({dataset: {owner: '${result.owner.login}', repository: '${result.name}' }});return false;">Show Commits</a></h4>
            <hr>
            </div>`
        });
        $("#results").html(stringsArray);
    }).fail(error => {
        displayError();
    });
};

// { dataset: { repository: "repo", owner: "owner" } }
function showCommits(args) {
    if (!args.dataset) throw new Error('I expected a dataset attribute');
    if (!args.dataset.owner) throw new Error('I expected a dataset.owner attribute');
    if (!args.dataset.repository) throw new Error('I expected a dataset.repository attribute');
    let { dataset: { repository, owner } } = args;
    let commitsAPI = `https://api.github.com/repos/${owner}/${repository}/commits`;

    // AJAX GET request
    $.get(commitsAPI, (response) => {
        let commitsStr = response.map(commit => {
            return `<li>
                <p>SHA: ${commit.sha}</p>
                <p>Author: ${commit.author.login}
                <img src="${commit.author.avatar_url}" height="50" width="50"></p>
            </li>`
        }).join('');
        document.getElementById("details").innerHTML = `<ul>${commitsStr}</ul>`;
    }).fail(error => {
        displayError();
    });
};

function displayError() {
    $('#errors').html("<p>I'm sorry, there's been an error. Please try again.</p>");
};