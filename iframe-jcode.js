
// $(document).ready(function(){
//   var h;
//   function autoHeight() {
//     // KNOWN ISSUE: inserting a newline at the end of the value string causes it to jump.
//     // but the good news is that text wrapping does not cause it to jump.
//     var body = $('body');
//     body.height(0);
//     var unseen = body.scrollTop(999).scrollTop();
//     // body.scrollTop(0);
//     console.log('unseen: ',unseen);
//     body.height(unseen);


//     if(h !== unseen) {
//       // $('.box').css('min-height',body.outerHeight());
//       window.parent.postMessage(unseen + 'px', "http://localhost:8000");
//     }
//     h = unseen;

//   }

//   $(document).on('ready', autoHeight);
//   $(window).on('resize', autoHeight);

// });


$(document).ready(function(){
  var h,
      clientHeight,
      storedScrollHeight,
      thisOrigin = (window.location.origin || window.location.protocol + '//' + window.location.host + ':' + window.location.port);

  console.log('iframes origin: ', thisOrigin);

  function getScrollSize(elem) {
    var value,
        scrollSize = 'scroll' + 'Height',// + this._capitalizeFirstLetter(this.getSize()),
        scrollSide = 'scroll' + 'Left',// + this._capitalizeFirstLetter(this.getSide()),
        scrollValueStorage,
        bigNumber = 999999999;// any number larger than a reasonable size for very big content

    if(typeof elem[scrollSize] !== 'undefined') {
      // console.log('has ' + scrollSize);
      value = elem[scrollSize];
    } else {
      // console.log('does not have ' + scrollSize + ' used ' + scrollSide + ' instead');
      scrollValueStorage = elem[scrollSide];
      // value = this.scroller[scrollSide](bigNumber)[scrollSide](); // this is the jquery version, I dont remember why Im not just always using it
      this.scroller[scrollSide] = bigNumber;
      value = this.scroller[scrollSide];
      elem[scrollSide] = scrollValueStorage;
    }
    return value;
  }

  var body = $('body');
  var html = $('html');

  function autoHeight() {
    var elem1 = html[0] ;
    var elem2 = body[0];
    var elem3 = document.documentElement;
    var elem = elem2;
    // console.log("html.css('height'): ", html.css('height'));
    // console.log("elem.scrollHeight: ", elem.scrollHeight);
    // console.log("elem.clientHeight: ", elem.clientHeight);
    // console.log("elem.offsetHeight: ", elem.offsetHeight);

    console.log('scroll:',elem1.scrollHeight, '  client:',elem1.clientHeight, '  offset:',elem1.offsetHeight);
    console.log('scroll:',elem2.scrollHeight, '  client:',elem2.clientHeight, '  offset:',elem2.offsetHeight);
    console.log('. . . . . . . . . . . . . . . . . . . . . . ');
    // console.log(elem.scrollHeight, elem.clientHeight, elem.offsetHeight);

    // console.log(": ", );
    // console.log(": ", );

    // var delta = Math.min(parseInt(html.css('height'),10), elem.scrollHeight - elem.clientHeight);
    // var delta = Math.min(elem.scrollHeight, elem.clientHeight, elem.offsetHeight);
    // var delta = Math.max(elem.scrollHeight, elem.clientHeight, elem.offsetHeight);

      // var delta = Math.max(elem1.scrollHeight, Math.min(elem1.clientHeight, elem1.offsetHeight) );
      // var delta = Math.max(elem2.scrollHeight, Math.min(elem2.clientHeight, elem2.offsetHeight) );
      var delta = Math.min(elem2.clientHeight, elem2.offsetHeight);

      // Math.max(elem.clientHeight, elem.offsetHeight);
    // if(delta !== 0) {
    // alert(thisOrigin);
      window.parent.postMessage(delta + 'px', thisOrigin);
    // }
  }

  $(document).on('ready', autoHeight);
  $(window).on('resize',  autoHeight);

});

