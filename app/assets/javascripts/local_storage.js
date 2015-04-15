//********************************************************************************
//* Local storage
//* More info:
//* https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
//********************************************************************************

if (typeof window.localStorage === 'undefined')
{
  alert('Upgrade your browser, pops (or moms ???).')
}
 
else
{
  $('body').addClass(localStorage.getItem('1'))
  $('select').val(localStorage.getItem('2'))
  // set items inside local storage
  localStorage.setItem('key', 'value');
 
  // retrieve items from local storage
  var val = localStorage.getItem('key');
 
  console.debug('heres the value', val);
 
  localStorage.setItem('nope', 'NOPE');
 
  // remove an item
  localStorage.removeItem('nope');
 
  // the item will be null if you try to get it after removing it
  var nope = localStorage.getItem('nope');
 
  console.debug('heres the value', val);
 
  // remove all local storage keys
  localStorage.clear();
 
  // a new set of local storage is kept for every domain
 
  // there's also sessionStorage that works the same way
  // except that when you close the browser it's gone
}

 function change (event) {
    var val = $(event.target).val();
    console.debug('Changed to', val);
    if (val === "Cookies"){
      $('body').addClass('red')
      localStorage.clear();
      localStorage.setItem('1', 'red');
      localStorage.setItem('2', 'Cookies');
    }
    else if (val === "Pizza"){
      $('body').removeClass()
      $('body').addClass('blue')
      localStorage.clear();
      localStorage.setItem('1', 'blue');
      localStorage.setItem('2', 'Pizza');
    }
    else if (val === "Beer"){
      $('body').removeClass()
      $('body').addClass('yellow')
      localStorage.clear();
      localStorage.setItem('1', 'yellow');
      localStorage.setItem('2', 'Beer');
    }
    else if (val === "Pie") {
    $('body').removeClass()
    $('body').addClass('brown')
      localStorage.clear();
      localStorage.setItem('1', 'brown');
      localStorage.setItem('2', 'Pie');
    }
  }
  $('select').on('change', change);