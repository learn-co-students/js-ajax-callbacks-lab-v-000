var git1 = "https://api.github.com/search/repositories?q="
var git2 = "+language:assembly&sort=stars&order=desc"

function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function handleClick(){
  $('#search').on('click', function(e){
    e.preventDefault();
    $('#results').html("")
    searchRepositories()

  })
}

function searchRepositories() {
  var fullTerms = git1 + $('#searchTerms').val();
  $.get(fullTerms)
    .done(function(response){
      $.each(response["items"], function(index, value){
        var compiledTemplate = Handlebars.compile($('#template').html());
        var attributes = {
          name : value["name"],
          description: value["description"],
          login: value["owner"]["login"],
          avatar_url: value["owner"]["avatar_url"],
          profile_url : value["owner"]["html_url"],
          repo_url : value["owner"]["html_url"] + "/" + value["name"],
          full_name : value["full_name"]
        }
        $('#results').append(compiledTemplate(attributes))
      })
      anchorTags();
    })
    .fail(displayError)
  }


function anchorTags(){
  $('a.commits').on('click', function(e){
    e.preventDefault();
    var array = e.currentTarget.getAttribute('href').split("/")
    var el = {
      dataset: {
        repository: array[1],
        owner: array[0]
        }
      }
    showCommits(el)
  })
}

function showCommits(el) {
  var query = "https://api.github.com/repos/" + el["dataset"]["owner"] + "/" + el["dataset"]["repository"] + "/commits"
  $.get(query)
    .done(function(response) {
      $('#details').html(" ")
      $.each(response, function(index, value) {
        var compiledTemplate = Handlebars.compile($('#template').html());
        var attributes = {
           sha: value["sha"],
           login: value["author"]["login"],
           avatar_url: value["author"]["avatar_url"],
           name: value["commit"]["author"]["name"]
         }
         $('#details').append(compiledTemplate(attributes))
      })
    })
    .fail(displayError)
}

function displayError(error) {
  $("#errors").text("I'm sorry, there's been an error. Please try again.");
}

$(document).ready(function (){
  handlebarsSetup();
  handleClick();
});
