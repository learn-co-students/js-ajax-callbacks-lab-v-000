$(document).ready(function (){
  handlebarsSetup()
});

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function searchRepositories() {
	const searchTerms = $("#searchTerms").val();

	$.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(response) {
		const src = $("#repository-template").html()
  	const template = Handlebars.compile(src)
  	const repoList = template(response.items)
		$("#results").html(repoList);
	})
	.fail(function() {
		displayError()
	});
	
}

function displayError() {
		$("#errors").html("I'm sorry, there's been an error. Please try again.")
	}

function showCommits(el){
	const user = el.dataset.owner;
	const repo = el.dataset.repository;

	$.get(`https://api.github.com/repos/${user}/${repo}/commits`, function(response) {
			const template = Handlebars.compile($("#commits-template").html())
			const commitList = template(response)
			$("#details").html(commitList);
	})
	.fail(function() {
		displayError()
	});
}