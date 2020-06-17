$('[data-fancybox="gal"]').fancybox({
  idleTime: 99999,
  buttons: [
    // "zoom",
    //"share",
    "slideShow",
    //"fullScreen",
    //"download",
    // "thumbs",
    "close"
  ],
  iframe : {
		preload : false
	}
});


$('[data-fancybox="gallery"]').fancybox({
  idleTime: 99999,
  buttons: [
    // "zoom",
    //"share",
    "slideShow",
    //"fullScreen",
    //"download",
    // "thumbs",
    "close"
  ],
  arrows: true,
  infobar : false,
  caption : function( instance, item ) {
		return $(this).data('caption');
	}

 });