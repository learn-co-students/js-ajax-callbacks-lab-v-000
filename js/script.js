function replaceNouns() {
		$.get("noun.html", function(response) {
			var noun = response.split("\n")
			var nounSelect = $(".noun")
			$(nounSelect[0]).text(noun[Math.floor(Math.random() * noun.length)]);
			$(nounSelect[1]).text(noun[Math.floor(Math.random() * noun.length)]);
	})
};

function replaceVerbs() {
		$.get("verb.html", function(response) {
			var noun = response.split("\n")
			var randomNoun = noun[Math.floor(Math.random() * noun.length)]
			var verbSelect = $(".verb");
			$(verbSelect[0]).text(noun[Math.floor(Math.random() * noun.length)]);
			$(verbSelect[1]).text(noun[Math.floor(Math.random() * noun.length)]);
			$(verbSelect[2]).text(noun[Math.floor(Math.random() * noun.length)]);

	})
};

$(document).ready(function (){
  $("#random_noun").click(replaceNouns);
  $("#random_verb").click(replaceVerbs);
});
