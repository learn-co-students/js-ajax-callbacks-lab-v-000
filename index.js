
// function searchRepositories(){
// 	var searchTerms = $('#searchTerms').val();
// 	var url = "https://api.github.com/search/repositories?q=" + searchTerms;	
// 	$.get(url, function(data){
// 		data["items"].forEach(function(item){
// 			var commits_url;
// 			$("#results")
// 			.append("Name: " + item["name"] + "<br>")
// 			.append("HTML URL: " + item["html_url"] + "<br>")
// 			.append("Description: " + item["description"] + "<br>")
// 			.append("Owner Login: " + item["owner"]["login"] + "<br>")
// 			.append('<img src="' + item["owner"]["avatar_url"] + '" width="100" />' + "<br>")
// 			.append('<a href="#" class="commits"'+ 'id="' + item["owner"]["login"]+ '_commits"> Show Commits</a>'+'<br>')
// 			commits_url = 'https://api.github.com/repos/'+ item["owner"]["login"] + '/' + item["name"] + '/commits'
// 			$('#'+ item["owner"]["login"] + "_commits").on('click', function(event){
// 				showCommits(commits_url);
// 				event.stopPropagation();
// 			});
// 		});

function searchRepositories(){
	var searchTerms = $('#searchTerms').val();
 	var url = "https://api.github.com/search/repositories?q=" + searchTerms;	
	var source = $("#repos").html();
	var template = Handlebars.compile(source);
	$.get(url, function(data){
		$("#results").html(template(data));
		$('.commits').on('click', showCommits);
	}).fail(displayError())
	

}


function showCommits(element){
	var source = $("#commits").html();
	var template = Handlebars.compile(source);
	owner = element.dataset.owner;
	item = element.dataset.repository;
	commits_url = 'https://api.github.com/repos/' + owner + '/' + item + '/commits'
	$.get(commits_url, function(data){
		$("#details").append(template(data));
	}).fail(displayError())
}

function displayError(){
	$("#errors").html("I'm sorry, there's been an error. Please try again.")
}


function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
  $('#search').on('click', searchRepositories); 
});

