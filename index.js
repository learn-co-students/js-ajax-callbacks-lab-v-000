$(document).ready(function (){
});

function searchRepositories(){
    const search_string = document.getElementById("searchTerms").value;
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

function showCommits(el) {
    const repo = el.dataset.repository;
    const owner = el.dataset.owner;
    $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(data) {
        const source = $("#commits-template").html();
        const template = Handlebars.compile(source);
        
        $("#details").html(template(data));
        
    }).fail(function(e){
        displayError(e);
    })
}