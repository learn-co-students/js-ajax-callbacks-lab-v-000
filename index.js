function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", Handlebars.compile($("#user-details-partial").html()))
}

function searchRepositories() {
	var terms = $("#searchTerms").val().replace(/ /g, '+');
	$.get("https://api.github.com/search/repositories?q=" + terms,
	function(data) {
		$("#results").html("<ul>");
	//	$("#results ul").append(Handlebars.partials.userDetails({login: "alexanderklimov", html_url: "https://github.com/alexanderklimov", avatar_url: "https://avatars.githubusercontent.com/u/5619004?v=3"}));
		data["items"].forEach(function(repo) {
			var context = {login: repo["owner"]["login"], html_url: repo["owner"]["html_url"], avatar_url: repo["owner"]["avatar_url"]};
			var ownerContent = Handlebars.partials.userDetails(context);
			$("#results ul").append("<li><a href='" + repo["html_url"] + "'>" + repo["name"] + "</a><br>&emsp;" + repo["description"] + "<br>&emsp;" + "<a href='#' class='commits-link' id='" + repo["full_name"] + "'>Show Commits</a><br>&emsp;&emsp;Owner:<br>&emsp;&emsp;" + ownerContent + "</li>");
		});
	}).fail(function(error) {
		displayError(error);
	});
}

function onSearchLinkClick() {
	$("#searchLink").on("click", function(event) {
		searchRepositories();
	});
}

function onCommitsLinkClick() {
	$("body").on("click", ".commits-link" , function(event) {
		var ownerRepoArray = event.target.id.split('/');
		showCommits({ dataset: { repository: ownerRepoArray[1], owner: ownerRepoArray[0] } });
	});
}

function showCommits(ownerRepoHash) {
	$.get("https://api.github.com/repos/" + ownerRepoHash["dataset"]["owner"] + "/" + ownerRepoHash["dataset"]["repository"] + "/commits",
		function(data) {
			console.log(data);
			$("#details").html("<ul>");
			data.forEach(function(commit) {
				console.log(commit);
				var context = {login: commit["committer"]["login"], html_url: commit["committer"]["html_url"], avatar_url: commit["committer"]["avatar_url"]};
				var committerContent = Handlebars.partials.userDetails(context);
				$("#details").append("<li>" + commit["sha"] + "<br>&emsp;Committer:<br>&emsp;&emsp;" + committerContent + "</li>")
			});
		});
}

function displayError(error) {
	$("#errors").html("I'm sorry, there's been an error. Please try again.");
}

$(document).ready(function (){
	handlebarsSetup();
  onSearchLinkClick();
  onCommitsLinkClick();
});
