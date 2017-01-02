var responses;

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

function searchRepositories(){
  searchTerms = $('#searchTerms').val();
  $.get("https://api.github.com/repos/jquery/jquery/commits?"+searchTerms).done(function(response) {
    	var template = $('#handlebars-template').html();
      var resp = Handlebars.compile(template);
      for(var i=0;i<response.length;i++){
      	  var newValue = resp((response[i]));
          $('#results').append(newValue);
      }

  }).fail(function() {
     $("#errors").html( "I'm sorry, there's been an error. Please try again." );
  });
}

function showCommits(){
  //display details in details div

}

$(document).ready(function (){
  handlebarsSetup();
});
