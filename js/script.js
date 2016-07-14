$( document ).ready( function ( ) {

  $( '#random_noun' ).on( 'click', replaceNouns );
  $( '#random_verb' ).on( 'click', replaceVerbs );

});

function replaceNouns() {
  $.get( 'noun.html', function( response ) {
    assignRandomNoun( response );
  } ).fail( errorMessage );
}

function replaceVerbs() {
  $.get( 'verb.html', function( response ) {
    assignRandomVerb( response );
  } ).fail( errorMessage );
}

function assignRandomNoun( data ) {
  var memo = data.split( "\n" );
  $( '.noun' ).html( randomFrom( memo ) );
}

function assignRandomVerb( data ) {
  var note = data.split( "\n" );
  $( '.verb' ).html( randomFrom( note ) );
}

function errorMessage(error) {
  console.log( 'Something went wrong ' + error );
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
