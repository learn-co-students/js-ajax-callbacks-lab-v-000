
function handleSearchLink() {
	$('a#searchLink').on('click', function(event) {
		event.preventDefault();
		searchRepositories();
	});
}

function searchRepositories(){
	var searchTerms = $('input#searchTerms').val();
	var query = "https://api.github.com/search/repositories?q=" + searchTerms;
	var source = $("#results-template").html();

	$.get(query, data => {
      const template = Handlebars.compile($('#results-template').html());
      $('#results').html(template(data));
	}).fail(displayError());
}

function displayError() {
	var errorText = "I'm sorry, there's been an error. Please try again.";
	$('div#errors').append(errorText);
}

function showCommits(element) {
	var owner = element.dataset.owner;
	var repo = element.dataset.repository;
	var commitsQuery = `https://api.github.com/repos/${owner}/${repo}/commits`;
	$.get(commitsQuery, data => {
      const template = Handlebars.compile($('#commits-template').html());
      $('#details').html(template(data));
    }).fail(displayError());
}
function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
  
}

$(document).ready(function (){
  	handlebarsSetup();
  	handleSearchLink();
  	
});

