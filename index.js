function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}
function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      const template = Handlebars.compile($('#results-template').html())
      $('#results').html(template(data))
    }).fail(error => {
      displayError()
    })
}

function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});
// var results;
//
// function handlebarsSetup() {
//   //put any handlebars setup in here
//   Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
// }
//
// function showCommits() {
//   $('.commits').on('click', function() {
//     var url = $('.commits').attr('href');
//     $.get(url) {
//       .done(function(data) {
//         var results = data;
//         var sha = results[0]["sha"];
//         var author;
//         var login;
//         var avatar;
//         console.log('commit query complete')
//
//       })
//     }
//
//   })
// }
//
// function searchRepositories(searchTerms) {
//   var queryString = "https://api.github.com/search/repositories?q=" + searchTerms;
//   $.get(queryString)
//     .done(function(data) {
//       console.log("Get Query Complete")
//       results = data;
//       var array = results["items"];
//       for (var i = 0; i < array.length; i ++) {
//         var commits = array[i]["commits_url"]
//         commits = commits.substring(0, commits.indexOf("{"))
//         var name = array[i]["name"];
//         var description = array[i]["description"];
//         var url = array[i]["html_url"];
//         var ownerLogin = array[i]["owner"]["login"];
//         var avatar = array[i]["owner"]["avatar_url"];
//         var profile = array[i]["owner"]["url"];
//         var info = "Repository Name: " + name + "<br>" + "Description: " + description + "<br>" + "URL: " + url + "<br>" + "Owner: " + ownerLogin + "<br>" + "<img src=" + avatar + "></img>" + "<a href=" + profile + ">Avatar</a>" + "<br><a href=" + commits + " class='commits'>Show Commits</a>"
//         $('#results').append('<div><p>' + info + '</p></div>')
//       }
//     });
// };
//
// $(document).ready(function (){
//   handlebarsSetup()
// });
