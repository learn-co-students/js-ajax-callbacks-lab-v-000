function searchRepositories(){
    const searchTerms = document.getElementById("searchTerms").value.split(' ').join('+');
    let githubAPI = `https://api.github.com/search/repositories?q=${searchTerms}`;
    console.log(githubAPI);
    // AJAX call
    $(document).ready(()=>{
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
                <h4><a href="#" onclick="showCommits('${result.commits_url.slice(0,-6)}', '${divId}');return false;">Show Commits</a></h4>
                <hr>
                </div>`
            });
            $("#results").html(stringsArray);
          });
    });
};

function showCommits(commitsURL, divId){
    let commitsAPI = commitsURL;
    console.log(commitsAPI);
    
    // AJAX GET request
    $.ajax(commitsAPI, (response)=> {
        console.log(response)
        let commitsStr= response.map(commit =>{
            return `<li>
                <p>SHA: ${commit.sha}</p>
                <p>Author: ${commit.author.login}
                <img src="${commit.author.avatar_url}" height="50" width="50"></p>
            </li>`
        }).join('');
        document.getElementById("details").innerHTML = `<ul>${commitsStr}</ul>`;
      });
};