function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
  var context = {};
}

function searchRepositories(){
	var term = $("#searchTerms").val();
	$.get("https://api.github.com/search/repositories?q="+term, function(response) {
    	for(var i=0; i<response.items.length; i++){
	    	$("#results").append(response.items[i].name+"<br>");
	    	$("#results").append(response.items[i].description+"<br>");
	    	$("#results").append(response.items[i].html_url+"<br>");
	    	$("#results").append(response.items[i].owner.login+"<br>");
	    	$("#results").append("<img src='"+response.items[i].owner.avatar_url+"'><br>");
	    	$("#results").append(response.items[i].owner.url+"<br><br>");
	    	$("#results").append("<a class='commit' href='"+commitURL(response.items[i].owner.login, response.items[i].name)+"'>Show Commits</a><br>");
	    	//$("#results").append("<a href='#' onclick='showCommits();'>link text</a>")
	   
	    };
  	}).fail(displayError());
}

function displayError(error){
	  // This is called when an error occurs
	  console.log('Something went wrong\: ' + error);
	  $("#errors").html("error: "+error);
}

function showCommits(d){
        var url = "https://api.github.com/repos/"+d.dataset.owner+"/"+d.dataset.repository+"/commits";
        alert(url);
        $.get(url, function(response) {
        	for(var i=0; i<response.length; i++){
		    	$("#details").append(response[i].sha+"<br>");
		    	$("#details").append(response[i].author.login+"<br>");
		    	$("#details").append("<img src='"+response[i].author.avatar_url+"'><br><br>");
	    };
	    	
	  	}).fail(displayError()
		);
}

function commitURL(owner, project){
	return "https://api.github.com/repos/"+owner+"/"+project+"/commits";
}

function clickSearch(){
	$("#search").click(function(event){
		event.preventDefault();
		searchRepositories();
	})
}

function clickCommit(){
	$(".commit").click(function(event){
		event.preventDefault();
		alert('a commit has been cliked');
	})
}


$(document).ready(function (){
  handlebarsSetup();
  //searchRepositories();
  clickSearch();
  clickCommit();
  //showCommits({ dataset: { repository: "hello", owner: "jlord" } });

});
