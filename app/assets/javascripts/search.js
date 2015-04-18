function fetchTracks (event) {
  var track = $.get('https://api.spotify.com/v1/search?type=track&q=' + $('.tracklists').val())

  console.log(track)

  function handletracks (response) {
  	console.debug('REQUEST FINISH', response);
    var artistName = response.tracks.items[0].artists[0].name;
    var trackName = response.tracks.items[0].name;
    
      $('.par').remove()
      $('.par1').remove()
      $('.albumpic').remove()
      $('.metadata').prepend(
        '<p class="par1">' + artistName + '</p>' +
        '<p class="par">' + trackName + '</p>'
      )
      $('.cover').prepend('<img class="albumpic" src="' + response.tracks.items[0].album.images[0].url + '">' )
      $('#audio').attr('src', response.tracks.items[0].preview_url )
  }
 
  function handleError (err1, err2, err3) {
    console.error('OH NO!!', err1, err2, err3);
  }
 
  track.done(handletracks);
  track.fail(handleError);
}
 
$('.tracksearch').on('click', function (event) {
  // Prevent form from submitting
  event.preventDefault();
  console.debug('SUBMITTED');
});

function playAudio () {
  if ($('.btn-play').hasClass("playing") ) {
      $('.btn-play').removeClass("playing")
      $('#audio').trigger("pause")
  } else {
  $('.btn-play').addClass("playing") 
 $('#audio').trigger("play")
   }
}

function printTime () {
  var current = $('#audio').prop('currentTime');
  console.log('Current time: ' + current);
  $('.js-player').attr('value', current)
}

// Have printTime be called when the time is updated
$('#audio').on('timeupdate', printTime);

// n.responseJSON.tracks.items[0].preview_url
// n.responseJSON.tracks.items[0].artists[0].name
// n.responseJSON.tracks.items[0].album.href

$('.tracksearch').on('click', fetchTracks)
  $('.btn-play').on('click', playAudio )
