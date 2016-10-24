function handlebarsSetup() {
  //put any handlebars setup in here
  var source   = $("#results-template").html();
  var template = Handlebars.compile(source);

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
		var commitsQueryStuff = $(this).innerHtml();
		console.log(commitsQueryStuff);
		showCommits(commitsQueryStuff);
	});
}

function searchRepositories(){
	var searchTerms = $('input#searchTerms').val();
	var query = "https://api.github.com/search/repositories?q=" + searchTerms;
	var source   = $("#results-template").html();
	var template = Handlebars.compile(source);

	$.get(query, function(results) {
		$("#results").html(template(results));
		console.log(results.items);
	}).fail(displayError());
}

function displayError() {
	var errorText = "I'm sorry, there's been an error. Please try again.";
	$('div#errors').append(errorText);
}

function showCommits(commitsQueryStuff) {
	var commitsQuery = "http://api.github.com/repos/" + commitsQueryStuff + "/commits";
	$.get(commitsQuery, function(results) {
		$("#results").html(template(results));
	}).fail(displayError());
}

