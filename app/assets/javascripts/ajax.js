function fetchCharacters () {
  var request = $.get('https://ironhack-characters.herokuapp.com/characters');
 
  function handleCharacters (characters) {
  	console.debug('REQUEST FINISH', characters);
    characters.forEach(function appendLi (chr) {
      $('.js-character-list').append('<li class="name">' + chr.name + '<p class="occ">' + chr.occupation + '</p>' + '<p class="weap">' + chr.weapon + '</p>' + '</li>');

    });
  }
 
  function handleError (err1, err2, err3) {
    console.error('OH NO!!', err1, err2, err3);
  }
 
  request.done(handleCharacters);
  request.fail(handleError);
}
 
$('.js-characters').on('click', fetchCharacters);