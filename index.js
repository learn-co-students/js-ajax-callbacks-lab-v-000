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
  //array of terms to place in url
  var searchTerms = $('#searchTerms').val().split(' ').join('+')
  var baseUrl = "https://api.github.com/search/repositories?q="  
      //ajax get request. first parameter is the URL with the search terms
      // second parameter is a function handles the returned data from the API
  $.get((baseUrl + searchTerms), function (data){
    console.log(data)
  // Instructions: Display the collection of repositories inside the results div.

    //create a template variable to hold the compiled template. 
    //pass id of the element holding the template
    var template = Handlebars.compile( $('#results-template').html() )

    //pass template and data to the div in the index where you to display your results
    $('#results').html(template(data))

  // when there is an error with the ajax request this gets called
  }).fail(function(error){
    displayError();
  })
};

function displayError(){
  $('#errors').text("I'm sorry, there's been an error. Please try again." )
};

//Handlebars.registerPartial('userDetails', '{{owner}} </{{tagName}}>')


