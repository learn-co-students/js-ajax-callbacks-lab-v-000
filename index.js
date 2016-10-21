// Use as reference: https://www.sitepoint.com/a-beginners-guide-to-handlebars/

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});
