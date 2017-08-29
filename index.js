function searchRepositories(){
  var searchTerms = document.getElementById("searchTerms").value;

  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    const results = data.items;
    const src = document.getElementById("repository-template").innerHTML;
    const template = Handlebars.compile(src);
    const repoList = template(results);
    $("#results").html(repoList);
  }).fail(function(error) {
    displayError();
  });

}

function displayError(){
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function showCommits(el){
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, function(data) {
    const commits = data;
    const src = document.getElementById("commits-template").innerHTML;
    const template = Handlebars.compile(src);
    const commitList = template(commits);
    $("#details").html(commitList);
  }).fail(function(error) {
    displayError();
  });
}
