"use strict";

function replaceNouns() {
  $.get("noun.html", function(response) {
    var nouns = response.trim().split('\n');

    $('.noun').each(function(index, item){
      $(this).html(nouns[randomInt(0, nouns.length - 1)]);
    });
  }).fail(function(error) {
    console.log('Something went wrong: ' + error);
  });
}

function replaceVerbs() {
  $.get("verb.html", function(response) {
    var verbs = response.trim().split('\n');

    $('.verb').each(function(index, item){
      $(this).html(verbs[randomInt(0, verbs.length - 1)]);
    });
  }).fail(function(error) {
    console.log('Something went wrong: ' + error);
  });
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).ready(function (){
  $('input#random_noun').click(replaceNouns);
  $('input#random_verb').click(replaceVerbs);
});
