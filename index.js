function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  	handlebarsSetup();
  	handleSearchLink();
  	handleCommitsLink();
});

function handleSearchLink() {
	$('a#searchLink').on('click', function(event) {
		event.preventDefault();
		searchRepositories();
	});
}

function handleCommitsLink() {
	$('a#commitsLink').on('click', function(event) {
		event.preventDefault();
		showCommits();
	});
}

function searchRepositories(){
	var searchTerms = $('input#searchTerms').val();
	var query = "https://api.github.com/search/repositories?q=" + searchTerms;
	var source = $("#results-template").html();
	var template = Handlebars.compile(source);

	$.get(query, function(results) {
		$("#results").append(template(results));
		for (var i = 0, len = results.items.length; i < len; i++) {
			$('a#commitsLink').data({owner: results.items[i].owner.login, repo: results.items[i].name});
			// console.log(results.items[i].owner.login);
			console.log(results.items[i].commits_url);
		}
		 console.log(results.items);
	}).fail(displayError());
}

function displayError() {
	var errorText = "I'm sorry, there's been an error. Please try again.";
	$('div#errors').append(errorText);
}

function showCommits() {
	var source   = $("#results-template").html();
	var template = Handlebars.compile(source);
	var owner = $('a#commitsLink').data.owner;
	var repo = $('a#commitsLink').data.repo;
	var commitsQuery = "http://api.github.com/repos/" + owner + "/" + repo + "/commits";
	$.get(commitsQuery, function(results) {
		$("#results").html(template(results));
	}).fail(displayError());
}

