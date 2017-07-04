$(document).ready(function (){

});

function searchRepositories(){
  let query = $('#searchTerms').val().replace(' ', '+');
  $.get("https://api.github.com/search/repositories?q="+query, (data)=>{
    $('#results').html(Handlebars.compile($('#repositories-template').html())(data));
  }).fail(displayError);
}

function showCommits(target){
  const repo = target.dataset.repository, owner = target.dataset.owner;
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, (data)=>{
    $('#details').html(Handlebars.compile($('#commits-template').html())(data));
  }).fail(displayError);
}

function displayError(error){
  $('#errors').append('I\'m sorry, there\'s been an error. Please try again.')
}
