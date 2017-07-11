$(document).ready(function (){
});

function searchRepositories() {
  var query = $("#searchTerms").val();
  $.get("https://api.github.com/search/repositories?q="+query,
    function(response){
      var data = response.items;
      // var template = $("#repository-template").html();
      // var handle = Handlebars.compile(template);
      // var output = handle(data);

      var output = data.map(result => `
        <a href="${result.html_url}">${result.name}</a> -
        <a href="#" id="commits-link" onclick="showCommits(this)"
        data-owner="${result.owner.login}" data-repository="${result.name}">Show Commits</a>
        <p>${result.description}</p>
        <a href="${result.owner.html_url}">${result.owner.login}</a>
        <img src="${result.owner.avatar_url}" height="64" width="64">
      `).join("");

      $("#results").html(output);
    }).fail(function(error){
      alert(error);
      displayError();
    });
}

function showCommits(el) {
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`,
    function(response){

      // var template = $("#commits-template").html();
      // var handle = Handlebars.compile(template);
      // var output = handle(response);

      var output = response.map(result => `
        <p>${result.sha}</p>
        <p>${result.commit.author.name}</p>
        <p>${result.author.login}</p>
        <p><img src="${result.author.avatar_url}" /></p>
      `).join("");

      $("#details").html(output);
    }).fail(function(error){
      alert(error);
      displayError();
    });
}

function displayError(error) {
  $("#errors").html("I'm sorry, there's been an error. Please try again.");
}
