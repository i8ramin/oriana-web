require.config({
  paths: {
    underscore: '../bower_components/underscore-amd/underscore',
    jquery: '../bower_components/jquery/jquery',
    bootstrapAffix: '../bower_components/sass-bootstrap/js/affix',
    bootstrapAlert: '../bower_components/sass-bootstrap/js/alert',
    bootstrapButton: '../bower_components/sass-bootstrap/js/button',
    bootstrapCarousel: '../bower_components/sass-bootstrap/js/carousel',
    bootstrapCollapse: '../bower_components/sass-bootstrap/js/collapse',
    bootstrapDropdown: '../bower_components/sass-bootstrap/js/dropdown',
    bootstrapPopover: '../bower_components/sass-bootstrap/js/popover',
    bootstrapScrollspy: '../bower_components/sass-bootstrap/js/scrollspy',
    bootstrapTab: '../bower_components/sass-bootstrap/js/tab',
    bootstrapTooltip: '../bower_components/sass-bootstrap/js/tooltip',
    bootstrapTransition: '../bower_components/sass-bootstrap/js/transition',
    intention: '../bower_components/intentionjs/intention',
    context: '../bower_components/intentionjs/context',
    snapjs: '../bower_components/snapjs/snap'
  },
  shim: {
    bootstrapAffix: {
      deps: [
        'jquery'
      ]
    },
    bootstrapAlert: {
      deps: [
        'jquery'
      ]
    },
    bootstrapButton: {
      deps: [
        'jquery'
      ]
    },
    bootstrapCarousel: {
      deps: [
        'jquery'
      ]
    },
    bootstrapCollapse: {
      deps: [
        'jquery'
      ]
    },
    bootstrapDropdown: {
      deps: [
        'jquery'
      ]
    },
    bootstrapPopover: {
      deps: [
        'jquery'
      ]
    },
    bootstrapScrollspy: {
      deps: [
        'jquery'
      ]
    },
    bootstrapTab: {
      deps: [
        'jquery'
      ]
    },
    bootstrapTooltip: {
      deps: [
        'jquery'
      ]
    },
    bootstrapTransition: {
      deps: [
        'jquery'
      ]
    }
  }
});

require(['app', 'underscore', 'jquery', 'context', 'snapjs'], function (app, _, $, context, snap) {
  'use strict';

  var snapper = new Snap({
    element: $('#content')[0],
    hyperextensible: false,
    touchToDrag: false
  });

  $('.landing-page').on('click', '.menu-toggle', function (e) {
    // e.preventDefault();
    snapper.open('right');
  });

  // use app here
  console.log(app);
  console.log('Running jQuery %s', $().jquery);
});
