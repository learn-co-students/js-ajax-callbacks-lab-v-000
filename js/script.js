//"use strict";

function replaceNouns() {
    replaceWords('noun');
}

function replaceVerbs() {
    replaceWords('verb');
}


function replaceWords(type){
    var words_url = 'http://localhost:8000/'+type+'.html';
    
        $.get(words_url, function(data){
            $('span.'+type).each(function(){ $(this).text(getRandomElement(data.split('\n'))) })
        }).fail(function(error){console.log(error)});
    
}


function getRandomElement(array){
    return array[Math.floor(Math.random()*array.length)]
}



$(document).ready(function (){
  // Code here
  $('input#random_noun').click(replaceNouns);
  $('input#random_verb').click(replaceVerbs);

});