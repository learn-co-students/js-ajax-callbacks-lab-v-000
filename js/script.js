function replaceNouns() {
	$('#random_noun').on('click', function(e) {
		$.get("noun.html", function(response) {
			//having trouble here. i just want to see what response looks like and if i can assign it then pass that var
			//console.log("hi");
			//console.log(response);
			var nouns = response;
			var noun_arr = nouns.split("\n");
			//debugger;
			
			$('.noun').each(function(index, noun){
				$(this).html(noun_arr[Math.floor(Math.random() * (noun_arr.length - 1))]);
				//console.log("hello from inside the loop " + index);
			});

			//testing
			//$('.noun').html(noun_arr[Math.floor(Math.random() * noun_arr.length)]);
			//debugger;
		}).fail(function(error) {
			console.log("something went wrong");
		});
		
	});
};

function replaceVerbs() {
	$('#random_verb').on('click', function(e) {
		$.get("verb.html", function(response) {
			var verbs = response;
			var verb_arr = verbs.split("\n");
			
			$('.verb').each(function(index, verb){
				$(this).html(verb_arr[Math.floor(Math.random() * (verb_arr.length - 1))]);
			});

		}).fail(function(error) {
			console.log("something went wrong");
		});
		
	});
};

$(document).ready(function (){
  // Code here
	replaceNouns();
	replaceVerbs();
});
