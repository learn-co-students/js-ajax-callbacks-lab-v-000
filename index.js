$(document).ready(function (){
});
    function searchRepositories(){
         var term = $("#searchTerms").val();
        $.get('https://api.github.com/search/repositories?q='+term, function(data){
            data.items.forEach(element=>{ 
             $("#results").html( element.name + '<p> name: ${element.data} <br> Description: ${element.description} <br> ${element.svn_url} <br> Owner: ${element.owner.login} <br> Image: ${element.avatar.url} <br> Owner URL : ${element.owner.url} <br> <a href = "#" onclick="showCommits(this)">Show Commits</a></p>' )
            })
        }).fail(displayError())
    };

    function showCommits(el){
    $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data=>{
    data.forEach(commit=>{$("#details").html('<p><h3>'+commit.sha+'</h3><p>'+commit.commit.message+'</p></p>')})
        }).fail(displayError())
    }

  function displayError(){
        $("#errors").html("There was an error")
     };