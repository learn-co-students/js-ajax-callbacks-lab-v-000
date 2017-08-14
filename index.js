var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.")

function renderCommits(data){
	let results_array = []
	for (var i = data.length - 1; i >= 0; i--) {
		let commitInfo = data[i]
		// commit info
		let commitSha = commitInfo.sha
		// author info
		let authorLogin = commitInfo.committer.login
		let authorName = commitInfo.commit.committer.name
		let authorAvitar = commitInfo.committer.avatar_url
		let div_code = `
			<div class="commit">
				<h4>Commit Info</h4>
				<h5>Commit SHA: ${commitSha}</h5>
				<h4>Commit author info</h4>
				<h5>Login: ${authorLogin}</h5>
				<h5>Name: ${authorName}</h5>
				<image class="owner_img" src="${authorAvitar}"></image>
			</div>
			<br>
			<br>
		`
		results_array.push(div_code)
	}
	return results_array
}

function showCommits(data){
	let owner = $(data).find("#owner")[0].innerHTML
	let repo_name = $(data).find("#name")[0].innerHTML
	$.get(`https://api.github.com/repos/${owner}/${repo_name}/commits`, data => {
    $('#details').html(renderCommits(data))
  }).fail(error => {
    displayError()
  })
}

function renderSearchResults(data){
	let items = data.items
	let results_array = []
	for (var i = items.length - 1; i >= 0; i--) {
		// repo data
		let repo = items[i]

		let repo_name = repo.name
		let repo_link = repo.html_url
		let repo_description = repo.description
		// owner data 
		let owner = repo.owner

		let owner_name = owner.login
		let owner_img = owner.avatar_url
		let owner_link = owner.html_url

		// return div 
		let div_code = `
      <div class="result">
      		<h4>Repository Info</h4>
					<h5 id="name">${repo_name}</h5>
					<a href="${repo_link}">${repo_link}</a>
					<h5>${repo_description}</h5>
					<a href="#" onclick="showCommits($(this).parent()); return false;">Show Commits</a>
					<h4>Owner Info</h4>
					<image src="${owner_img}" class="owner_img"></image>
					<h5 id="owner">${owner_name}</h5>
					<h5>${owner_link}</h5>
      </div>
      <br>
      <br>
		`
		results_array.push(div_code)
	}
	return results_array
}

function searchRepositories(){
	const searchTerms = $('#searchTerms').val()
	$.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
		$('#results').html(renderSearchResults(data))
		}).fail(error => {
		displayError()
	})
}

$(document).ready(function (){
});