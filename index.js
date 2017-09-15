$(document).ready(function (){
});


var renderSearchResults = (data) => data.items.map( result => renderSearchResult(result))

var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(renderSearchResults(data))
    })
}

function displayRepository(result){

}

// function displayError(){
//   $("errors").html("I'm sorry, there's been an error. Please try again.")
// }

// function showCommits(){
//   $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`=> )
// }
