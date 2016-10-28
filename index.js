function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}


function searchRepositories() {
    var repos = $('#searchTerms').val();
    var url = "https://api.github.com/search/repositories?q="+repos;

    $.get(url)
      .done(function(data){
        var template = $('#results-template').html();
        var context = data;
        var templateScript = Handlebars.compile(template);
        //Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
        var html = templateScript(context);
        
        $('div[id=results] tbody').html(html);
        $('#errors').html('')
    })
    .fail(function() {
      displayError();

    });



}

function showCommits(el) {
    var repos = el.dataset.repository;
    var owner = el.dataset.owner;
    var url = "https://api.github.com/repos/" + owner + "/" + repos + "/commits\?";

    $.get(url)
      .done(function(data){
        var template = $('#commits-template').html();
        var context = data;
        var templateScript = Handlebars.compile(template);
        var html = templateScript(context);

        $('div[id=details] tbody').html(html);
    })
    .fail(function () {
      displayError();
    });

}



function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}
$(document).ready(function (){
  handlebarsSetup();
});