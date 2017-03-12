function displayError() {
	$('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
	const url = 'https://api.github.com/search/repositories?q='
	const searchTerms = $('#searchTerms').val()
	$.get(url + searchTerms, data => {
		const template = Handlebars.compile($('#results-template').html())
		$('#results').html(template(data))
	}).fail(error => displayError())
}

function showCommits(el) {
	const owner = el.dataset.owner
	const repo = el.dataset.repository
	const url = 'https://api.github.com/repos/' + owner + '/' + repo + '/commits'
	$.get(url, data => {
		const template = Handlebars.compile($('#commits-template').html())
		$('#details').html(template(data))
	}).fail(error => displayError())
}






function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

