$(document).ready(function (){
  handlebarsSetup();

  $.ajax({
  	type: 'GET',
  	url: 'https://api.github.com/search/repositories?q=fire'
  });

  $('#search').on('click', searchRepositories);
});

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function searchRepositories(event) {
  var search = $('#searchTerms').val()
  var url = 'https://api.github.com/search/repositories?q=' + search
  $.get(url, data => {$('#results').html(Handlebars.compile($('#results-template').html())(data))})
    .fail(function(error)
      {displayError()});
}

function showCommits(repoLink){
  var user = repoLink.dataset.owner
  var repo = repoLink.dataset.repository
  $.get(`https://api.github.com/repos/${user}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error =>{
    displayError()
  })
}

function displayError(){
  $('#errors').html("There's been an error. Please try again.");
}
