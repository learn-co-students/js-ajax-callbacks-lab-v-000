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
      //debugger;
  $.get((baseUrl + searchTerms), function (data){
    //do something with the data?
    
    // Display the collection of repositories inside the results div.
    $('#results').text(data) //????
    //Include:
      //repository name, 
      //description, and a 
      //link to the HTML URL
      //repository owner login, 
      //repository owner 
      //avatar as an image, and a 
      //link to the owner's profile page.
     console.log(data)
  }).fail(function(error){
    displayError();
  })
};

function displayError(){
  $('#errors').text("I'm sorry, there's been an error. Please try again." )
};


