function handlebarsSetup() {
  //put any handlebars setup in here
  var source   = $("#results-template").html();
  var template = Handlebars.compile(source);

  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
	searchRepositories();
  	handlebarsSetup()
});

function searchRepositories(){
	$('a#searchLink').on('click', function(event) {
		event.preventDefault();
		var searchTerms = $('input#searchTerms').val();
		var query = "https://api.github.com/search/repositories?q=" + searchTerms;
		$.get(query, function(results) {
			$("#results").html(template());
		}).fail(displayError(error));
		return false;
	});
}

function displayError(error) {
	var errorText = "I'm sorry, there's been an error. Please try again.";
	$('div#errors').append(errorText);
}


