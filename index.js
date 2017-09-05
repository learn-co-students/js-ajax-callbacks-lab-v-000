$(document).ready(function (){
});


function searchRepositories()
{
  var val=document.getElementById('searchTerms').value;
  var url='https://api.github.com/search/repositories?q='+val
  $.get(url,function(data) {
           console.log("Done");
           console.log(data);
            var repositories= data.items;
           const src = document.getElementById("repository-template").innerHTML
           const template = Handlebars.compile(src)
           const repoList = template(repositories)
          /* var repos = data;
          console.log(repos)
          const repoList = `<ul>${repos.map(r => '<li>' +
          r.name  + ' - ' + r.description + ' - ' + '- <a href=" '+ r.html_url +' ">Link to Repo</a></li>' +

          ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>` */
            document.getElementById("results").innerHTML = repoList
         }).fail(function(error){
            displayError(error);
         });
}

function showCommits(el)
{
  debugger
  var val=el.dataset.owner;
  var name = el.dataset.repo;
  console.log(el);
  console.log(el.dataset);

  var url='https://api.github.com/repos/'+ val + '/' + name + '/commits'
  $.get(url)
        .done(function(data) {
          var repositories= data;
          const src = document.getElementById("commits-template").innerHTML
          const template = Handlebars.compile(src)
          const repoList = template(repositories)
           document.getElementById("details").innerHTML = repoList
        }).fail(function(error){
              displayError(error);
        });

}

function displayError(error) {
     var msg="I'm sorry, there's been an error. Please try again."
     document.getElementById("errors").innerHTML = msg;
   }
