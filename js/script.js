function replaceNouns() {
    $.get('noun.html', function(data){
      var nounsArray = data.split('\n');
      jQuery('.noun').each(function(){
        noun = nounsArray[Math.floor(Math.random() * nounsArray.length)];
        jQuery(this).text(noun);
       });
    }).fail(function(error){
      alert('Something went wrong. Error: ' + error);
    });
};

function replaceVerbs() {
    $.get('verb.html', function(data){
      var verbsArray = data.split('\n');
      jQuery('.verb').each(function(){
        verb = verbsArray[Math.floor(Math.random() * verbsArray.length)];
        jQuery(this).text(verb);
      });
    }).fail(function(error){
      alert('Something went wrong. Error: ' + error);
    });
};

$(document).ready(function (){
  jQuery('#random_noun').click(replaceNouns);
  jQuery('#random_verb').click(replaceVerbs);
});