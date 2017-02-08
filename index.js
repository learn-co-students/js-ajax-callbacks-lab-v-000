function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});


// where to start # 1
//search repositories link = 'https://api.github.com/search/repositories?q='

function searchRepositories(){
  var searchTerms = $('#searchTerms').val().split(' ').join('+')
  var baseUrl = "https://api.github.com/search/repositories?q="  
  
  //ajax get request. first parameter is the URL with the search terms
  // second parameter is a function handles the returned data from the API
    // Instructions: Display the collection of repositories inside the results div.

  //$.get((baseUrl + searchTerms), function (data){
    
    //create a template variable to hold the compiled template. 
    //pass id of the element holding the template
    //var template = Handlebars.compile( $('#results-template').html() )

    //pass template and data to the div in the index where you are to display your results
    //$('#results').html(template(data))

  // when there is an error with the ajax request call the error displaying function
  //}).fail(function(error){
    //displayError();
  //})

  $.get(baseUrl + searchTerms)
    .done( data => {
      var template = Handlebars.compile( $('#results-template').html())
      $('#results').html(template(data))
    })
    .fail(err => displayError() )
};

function displayError(){
  $('#errors').text("I'm sorry, there's been an error. Please try again." )
};

function showCommits(item){
  //get commits from github api
  const owner = item.dataset.owner
  const repo = item.dataset.repository
  var commitsUrl = `https://api.github.com/repos/${owner}/${repo}/commits`
  
  $.get(commitsUrl, data => {
      //compile a template 
      var template = Handlebars.compile( $("#show-commits-template").html())
      //pass template and data to the id of the div that is to display it
      $("#details").html(template(data))
  //handle errors    
  }).fail(error => {
    displayError()
  })
 
};

