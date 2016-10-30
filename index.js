
function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

// function clear() {
//   $("#results").empty();
//   $("#details").empty();
// }

function searchRepositories() {
  // clear();
  const searchTerms = $('#searchTerms').val();

  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    const template = Handlebars.compile($('#results-template').html());
    $('#results').html(template(data))
  }).fail(function(error) {
    displayError();
  });
    // for (i in response.items) {
    //   $("#results").append("<li>" + response.items[i].name + "</li>");
    // }
}

function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    var template = Handlebars.compile($('#commits-template').html());
    $('#details').html(template(data));
  }).fail(function(error) {
    displayError();
  });
}

// ~~ This works on the browser but doesn't pass tests ~~ //
// function showCommits() {
//   searchTerms = $("#searchTerms").val();

//   $.get('https://api.github.com/search/repositories?q=' + searchTerms, function(response) {
//     for (i in response.items) {
//       var owner = response.items[i].owner.login;
//       var repoName = response.items[i].name;
//       $.get('https://api.github.com/repos/' + owner + '/' + repoName + '/commits', function(secondResponse) {
//         for (i in secondResponse) {
//           var sha = secondResponse[i].sha
//           var authorName = secondResponse[i].commit.committer.name
//           var authorLogin = secondResponse[i].author.login
//           var authorAvatar = secondResponse[i].author.avatar_url
//           $("#details").append("<li>" + sha + " | " + authorName + " | " + authorLogin + " | " +  authorAvatar + "</li>");
//         }
//       });
//     }
//   })
// }

function displayError() {
  $('#errors').text("I'm sorry, there's been an error. Please try again.");
}

$(document).ready(function() {
  handlebarsSetup();
});
