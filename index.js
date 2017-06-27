var displayError = function (error) {
  $("#errors").html('error went wrong:');
}

function searchRepositories(){

  var terms = document.getElementById("searchTerms").value;
  var url = `https://api.github.com/search/repositories`



  $.get(url, { q: terms}, function(response){
    var display = `<ul> ${response.items.map(d => '<li>' + d.name + "--"
    + d.description + `<a href="${d.html_url}">  url </a>`
    + "--" + d.owner.login  + `<a href="${d.owner.html_url}">  owner url </a>`
    + `<img src="${d.owner.avatar_url}" height="32" width="32">`
    + `<a href="#"  data-repository="${d.name}" data-owner="${d.owner.login}" onclick="showCommits(this)">show commits</a>`
    + '</li>')}</ul>`

    $("#results").html(display)


  });
};

//gets the repo commmits - github api & displays
function showCommits(el){
  const repo = el.dataset.repository
  const owner = el.dataset.owner
  var url = `https://api.github.com/repos/${owner}/${repo}/commits`
  $.get(url, function(response){
    var commitDetail = `<ul>${response.map(commit => '<li>' + commit.author.login + commit.sha + commit.commit.author.name
    + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`

    $("#details").html(commitDetail)
  });
}
