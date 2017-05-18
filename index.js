function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function searchRepositories() {
  const searchTerms = document.getElementById('searchTerms').value;
  const url = `https://api.github.com/search/repositories?q=${searchTerms}`;

  $.get( url, function( data ) {
  	const temp = Handlebars.compile($('#results-template').html())
  	$('#results').html(temp(data))
	}).fail(function(error) {
		displayError()
	});
}

function displayError() {
	$('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(function(error) {
    displayError()
  })
}

$(document).ready(function (){
  
  handlebarsSetup()

});
