function displayError(){
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories(){
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    const template = Handlebars.compile($('#results-template').html())
    $('#results').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })

}


function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

$(document).ready(function (){
  handlebarsSetup();
});



//$("#form-id").submit()

// "Search Repositories" button that has a text input field. It takes that field an queries through Github repository seash API. 
// searchRepositories is the function that makes the value
// searchTerms is the function that queireis github


// ** so use the id of the submit on click button 