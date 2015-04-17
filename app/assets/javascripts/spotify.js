

function fetchArtists (event) {
  var artist = $.get('https://api.spotify.com/v1/search?type=artist&query=' + $('.search').val())

  console.log(artist)

  function handleArtists (response) {
  	console.debug('REQUEST FINISH', response);
      $('.print').append('<div class="artist">' + '<h3 class="art">' +
       response.artists.items[0].name + '</h3>' + '<img class="artimage" src="' + 
       response.artists.items[0].images[1].url + '">' + '<button class="butt" value=' + 
       response.artists.items[0].id + '>' + "Album" + '</button>' + '</div>');
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

function addAlbum (event) {
	var album = $.get("https://api.spotify.com/v1/artists/" + $(event.target.value) + "/albums")
	console.log("event pussy", event.target.value)
		$('.artimage').append('<li>' + album + '</li>')
};

$('.butt').on('click', addAlbum);