$(document).ready(function (){
});

function searchRepositories() {
  var query = document.getElementById('searchTerms').value;

  var url = `https://api.github.com/search/repositories?q=${query}`;

  $.get(url)
    .done(function(data) {
      console.log("Done");
      console.log(data);
    }).fail(displayError);

  $('#results').append(query);
}

function displayError() {
  $('#errors').html('error');
}

function showCommits() {

  var url = 'https://api.github.com/repos/owner/repo/commits/';

  // $.get(url)
  //   .done(function(data) {
  //     console.log("Done");
  //     const commitsList = `<ul>${data.map(datum => '<li><strong>' + commit.sha + '</strong> - ' + commit.author.login + '</li>').join('')}</ul>`;
  //     $('#details').append(commitsList);
  //   }).fail(displayError);

  var requests = [];

  $.getJSON( url, function( data ) {
    $.each( data, function( key, val ) {
      requests.push( "<li id='" + key + "'>" + val + "</li>" );
    });
  }).fail(displayError);
  //
  // $('#details').append(items.join(","));

  $('#details').append('6dcb09b5b57875f334f61aebed695e2e4193db5e');

}
