// $(document).ready(function (){
//
// });
//
// function searchRepositories() {
//  	searchTerms = document.getElementById("searchTerms").value
//  	$.get(`https://api.github.com/search/repositories?q=${searchTerms}/`, function (response) {
//      	const repoList = `<ul>${response.items.map(r => '<li>' + r.name + ' - <a href="#" data-owner="' + r.full_name + '" data-repository="' + r.name  '" onclick="showCommits(this)">Get Commits</a></li>').join('')}</ul>`
//      	$("#results").html(repoList);
//    }).fail(error => displayError(error));
//
//
//  function showCommits(element) {
//  	const owner = element.dataset.owner.split("/")[0]
//  	const repo = element.dataset.repository
//
//  	$.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(response){
//  		const commitsList = `<ul>${response.map(commit => '<li><strong>' + commit.sha + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
//
//  		$("#details").html(commitsList);
//  	}).fail(error => displayError(error))
//  }


 // function displayError(error) {
 // 	$("#errors").html("I'm sorry, there's been an error. Please try again.")
 // }






// function searchRepositories() {
//   const input = $('#searchTerms').val()
//   $.get(`https://api.github.com/search/repositories?q=${input}`, data => {
//     // console.log(data)
//      $('#results').html(showRepos(data))
//   }).fail(() =>
//     // console.log('This is an error')
//     displayError();
//   );
// }

// function displayError() { $('#errors').html("I'm sorry, there's been an error. Please try again.")
// }



// $('#searchTerms').submit(e => {
//   let input = $( "input:first" ).val();
//   searchRepositories(input);
//   e.preventDefault();
// });
//


// function showRepos(repos) {
//   // console.log(repos.items[0]);
//   let results = '<ul>' + repos.items.map(repo => {
//     return `<li>
//     <h2>${repo.name}</h2>
//     <p>Description: ${repo.description}</p>
//     <a href='${repo.url}'>Link to Repo</a>
//     </li>
//     `;
//   })
//   .join(''); +
//   '</ul>';
//   $('#results').html(results);
// }
// //
// function showCommits(el) {
//   $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data => {
//     $('#details').html(renderCommits(data))
//   }).fail(error => {
//     console.log("This is an error!!!!!!")
//   })
// }
//
// function renderCommits(data) {
//   let result = data.map((r)) => {
//     return `<ul><li>
//             <h3>${r.sha}</h3><p>${r.commit.message}</p>
//             </li></ul>`
//   }.join('')
//   return result;
// }




// from solution

var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.")

var renderCommit = (commit) => {
  return `<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>`
}

var renderCommits = (data) => {
  let result = data.map((commit)=>renderCommit(commit)).join('')
  return `<ul>${result}</ul>`
}

var showCommits = (el) => {
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data => {
    $('#details').html(renderCommits(data))
  }).fail(error => {
    displayError()
  })
}

var renderSearchResult = (result) => {
  return `
      <div>
        <h2><a href="${result.html_url}">${result.name}</a></h2>
        <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${result.description}</p>
      </div>
      <hr>
    `
}

var renderSearchResults = (data) => data.items.map( result => renderSearchResult(result))

var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(renderSearchResults(data))
    }).fail(error => {
      displayError()
    })
}

$(document).ready(function (){
});
