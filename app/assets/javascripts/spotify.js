

function fetchArtists () {
  var artist = $.get('https://api.spotify.com/v1/search?type=artist&query=' + $('.search').val())

  console.log(artist)

  function handleArtists (response) {
  	console.debug('REQUEST FINISH', response);
      $('.print').append('<div class="artist">' + '<h3 class="art">' + response.artists.items[0].name + '</h3>' + '<img class="artimage" src="' + response.artists.items[0].images[1].url + '">' + '</div>');
  }
 
  function handleError (err1, err2, err3) {
    console.error('OH NO!!', err1, err2, err3);
  }
 
  artist.done(handleArtists);
  artist.fail(handleError);
}
 
$('.submit').on('click', function (event) {
  // Prevent form from submitting
  event.preventDefault();
 
  console.debug('SUBMITTED');
});

$('.submit').on('click', fetchArtists);	


// artist.responseJSON.artists.items[0].name