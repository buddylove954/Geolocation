

//*************************
//* Making a POST request *
//*************************
 
function addCharacter () {
  // Create object with new character's info
  var newCharacter = {
    name: $('.Swname').val(),
    occupation: $('.Swocc').val(),
    weapon: $('.Swweapon').val()
};

 
  // Make a POST request to the API with the info
  var request = $.post('https://ironhack-characters.herokuapp.com/characters', newCharacter);
 
  function onSaveSuccess (response) {
    console.debug('BOOM', response);
  }
 
  function onSaveFailure (err) {
    // Print out the error response
    console.error(err.responseJSON);
  }
 
  request.done(onSaveSuccess);
  request.fail(onSaveFailure);
}
 
$('.js-add-character').on('click', addCharacter);
 

function fetchCharacters () {
  var request = $.get('https://ironhack-characters.herokuapp.com/characters');
 
  function handleCharacters (characters) {
  	console.debug('REQUEST FINISH', characters);
    characters.forEach(function appendLi (chr) {
      $('.js-character-list').append('<li class="name">' + chr.name + '<p class="occ">' + "Occupation: " + chr.occupation + '</p>' + '<p class="weap">' + "Weapon: " + chr.weapon + '</p>' + '</li>');

    });
  }
 
  function handleError (err1, err2, err3) {
    console.error('OH NO!!', err1, err2, err3);
  }
 
  request.done(handleCharacters);
  request.fail(handleError);
}
 
$('.js-characters').on('click', fetchCharacters);