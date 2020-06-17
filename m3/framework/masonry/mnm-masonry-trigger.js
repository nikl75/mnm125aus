
var $grid = $('.mas-container').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    // options...
    itemSelector: '.mas-item',
    columnWidth: '.mas-item-sizer',
    percentPosition: true
    });
});

