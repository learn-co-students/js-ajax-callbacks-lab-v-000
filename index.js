function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories(){
    const search_string = document.getElementById("searchTerm").value;
    $.get("https://api.github.com/search/repositories?q=" + search_string, function(data) {
        const source = $("#repository-template").html();
        const template = Handlebars.compile(source);
        
        $("#results").html(template(data.items));
        
    }).fail(function(e){
        displayError(e);
    })
}
function displayError(e) {
    $("#errors").html("error")
}