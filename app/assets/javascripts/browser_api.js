// // Place all the behaviors and hooks related to the matching controller here.
// // All this logic will automatically be available in application.js.


// //********************************************************************************
// //* Geolocation
// //* More info:
// //* https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
// //********************************************************************************
 
// if (typeof navigator.geolocation === 'undefined') {
//   alert('Upgrade your browser, bro (or sis).');
// } else {
//   // Success handler
//   function onLocation (position) {
//     console.debug('Weve got a location.', position);
 
//     // Use position.coords
//     // For example, to place a pin on a map.
 
//     // In this case we are setting input values for later submission
//     $('.js-lat').val(position.coords.latitude);
//     $('.js-long').val(position.coords.longitude);

//     var lat = position.coords.latitude;
//     var longit = position.coords.longitude;
//     console.log(lat)
//     console.log(longit)
//     var link = "https://maps.googleapis.com/maps/api/staticmap?size=600x300&zoom=13&center=" + lat +","+ longit
//     console.log(link)
//     $('.pic').prop('src', link )

//   }
 
//   // Error handler
//   function onError (error) {
//     // Delivers an error object with information about the error
//     console.error(error);
 
//     $('.js-geolocation-container').append('<h1 class="error">No location for me? :(</h1>');
//   }
 
//   // options
//   var options = {
//     enableHighAccuracy: true  // retrieve more accurate position, takes longer
//   };
 
//   // Other options:
//   // timeout: <AMOUNT OF MILLISECONDS>
//   //   Throws an error if retrieving the position takes longer than the amount of ms
//   //   10 seconds would be -> timeout: 10000
//   // maximumAge: <AMOUNT OF MILLISECONDS>
//   //   Ensures that the position retrieved is no older than the amount of ms
//   //   10 seconds would be -> maximumAge: 10000
 
//   // Arguments are: success function, error function, options
//   // These onLocation or onError functions are called *asynchronously*
//   // They are invoked whenever the position is ready
//   // or if it's determined that there was an error
//   navigator.geolocation.getCurrentPosition(onLocation, onError, options);
 
 
//   function onWatch (position) {
//     console.debug('WATCHING', position);
//   }
 
//   var watchOptions = {
//     timeout: 5000,
//     maximumAge: 2000
//   };
 
//   // Calls onWatch multiple times as position changes
//   var watchId = navigator.geolocation.watchPosition(onWatch, onError, watchOptions);
 
//   // If you want to stop the watching
//   // navigator.geolocation.clearWatch(watchId);
// }
 
// console.debug('My JavaScript has finished.');