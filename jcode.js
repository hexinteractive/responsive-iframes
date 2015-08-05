
$(document).ready(function(){

  // function autoHeight() {
  //   // KNOWN ISSUE: inserting a newline at the end of the value string causes it to jump.
  //   // but the good news is that text wrapping does not cause it to jump.
  //   var textarea = $('textarea');
  //   textarea.height(0);
  //   var unseen = textarea.scrollTop(999).scrollTop();
  //   // textarea.scrollTop(0);
  //   console.log('unseen: ',unseen);
  //   textarea.height(unseen);
  //   $('.box').css('min-height',textarea.outerHeight());
  // }




  // $(document).on('ready focus keydown keyup mousedown mouseup', autoHeight);

  var storedMinHeight = 0,
      thisOrigin = (window.location.origin || window.location.protocol + window.location.host);

  console.log('parent origin: ', thisOrigin);



  function receiveMessage (event) {
    // if its a jQuery event then
    if(event instanceof jQuery.Event) {
      event = event.originalEvent;
    }
    console.log(event.data);
    console.log(event.origin);
    console.log(event.source);
    console.log('received');
    // var m = (event.data).match(/\d+px/,'i');
    var m = (event.data).match(/\d+px/,'i');
    var delta = parseInt(event.data, 10);
    // var newValue = storedMinHeight + delta;
    var newValue = delta;
    console.log('m: ',m);
    // $('iframe').css('min-height', m[0]);
    // if(storedMinHeight !== m[0]) {
    //   $('iframe').css('min-height', m[0]);
    //   storedMinHeight = m[0];
    // }

    $('iframe').css('min-height', newValue + 'px');
    storedMinHeight = newValue;

  }

  $(window).on("message", receiveMessage);










});