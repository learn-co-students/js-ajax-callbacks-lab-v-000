function replaceNouns() {
	$.get("noun.html", function(response) {
		var noun = response.trim().split(/\n/);
		$('.noun').each(function() {
			var random_noun = noun[Math.floor(Math.random() * noun.length)];
			$(this).text(random_noun);
		});
	}).fail(function(error) {
		alert("Something went wrong: " + error.statusText);
	});
};

function replaceVerbs() {
	$.get("verb.html", function(response) {	
		var verb = response.trim().split(/\n/);
		$('.verb').each(function() {
			$(this).text(verb[Math.floor(Math.random() * verb.length)]);
		});
	}).fail(function(error) {
		alert("Something went wrong: " + error.statusText);
	});
};

$(document).ready(function (){
  $("input#random_noun").on('click', replaceNouns);
  $("input#random_verb").click(replaceVerbs);
});

