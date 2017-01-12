function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
  searchRepositories();
});


function searchRepositories() {
	$("form a").on("click", function(event) {
		var searchTerm = $("input").val();

		$.get('https://api.github.com/search/repositories?q=' + searchTerm, function(data) {
			var source = $("#results-template").html()
			var template = Handlebars.compile(source);
			displaySuccess(searchTerm);
			$('#results').html(template(data))
		}).fail(function(error) {
			displayError();
		});
	});
}


function showCommits(repo) {
	// reads the data-attributes of the link
	var owner = repo.dataset.owner
	var repository = repo.dataset.repository
	$.get(`https://api.github.com/repos/${owner}/${repository}/commits`, function(data) {
		var source = $('#commits-template').html();
		var template = Handlebars.compile(source);
		$('#details').html(template(data));
	}).fail(function(error) {
		displayError();
	});
}

function displaySuccess(term) {
	// $("#errors").text("Here is what we found for " + term + "!");
	$("#errors").text(`Here is what we found for ${term}!`);
}

function displayError() {
	$("#errors").text("I'm sorry, there's been an error. Please try again.");
}