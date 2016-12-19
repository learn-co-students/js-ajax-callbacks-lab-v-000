"use strict"; 

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function displayError(error) {
  var message = "I'm sorry, there's been an error. Please try again."; 
  $("#errors").html(message); 
}

$(document).ready(function (){
  handlebarsSetup()
});
