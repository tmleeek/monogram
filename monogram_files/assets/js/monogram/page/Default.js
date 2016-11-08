goog.provide('monogram.page.Default');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


goog.require('manic.page.Page');


goog.require('monogram.graph.SingleGraph');


// goog.require('savour.component.DesktopHeader');
// goog.require('savour.component.MobileHeader');



/**
 * The Default Page constructor
 * @inheritDoc
 * @constructor
 * @extends {manic.page.Page}
 */
monogram.page.Default = function(options) {

  manic.page.Page.call(this, options);
  this.options = $.extend(this.options, monogram.page.Default.DEFAULT, options);


};
goog.inherits(monogram.page.Default, manic.page.Page);


/**
 * like jQuery options
 * @const {object}
 */
monogram.page.Default.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Default Event Constant
 * @const
 * @type {string}
 */
monogram.page.Default.EVENT_01 = '';

/**
 * Default Event Constant
 * @const
 * @type {string}
 */
monogram.page.Default.EVENT_02 = '';



//    ___ _   _ ___ _____
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |
//    | || |\  || |  | |
//   |___|_| \_|___| |_|
//



/**
 * @override
 */
monogram.page.Default.prototype.init = function() {
  monogram.page.Default.superClass_.init.call(this);

  window.onbeforeunload = function(){ window.scrollTo(0,0); }     // from zaw's main.js

  this.create_desktop_header();

  /*
  this.desktop_header = new savour.component.DesktopHeader({}, $('#desktop-header'));
  this.desktop_header.set_controller(this.controller);

  this.mobile_header = new savour.component.MobileHeader({}, $('#mobile-header'));


  $('.page-template-slider').slick({
    'speed': 350,
    'dots': false,
    'arrows': true,
    'infinite': false,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'pauseOnHover': false,
    'autoplay': true,
    'autoplaySpeed': 4000
  });
  */
  

  if($('#tea-matrix-combination-graph').length != 0){

    this.single_graph = new monogram.graph.SingleGraph({}, $('#tea-matrix-combination-graph'));
  }

  console.log('monogram.page.Default: init');
};

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.page.Default.prototype.create_desktop_header = function() {



  $("#desktop-header-menu-btn").click(function(event){

    event.preventDefault();
    event.stopPropagation();

    if($('#desktop-header-menu-conainer').hasClass('open-version') == true){

      // close
      $('#desktop-header-menu-conainer').removeClass('open-version');
      TweenMax.to($('#desktop-header-menu-conainer'), 0.5, {autoAlpha:0});

    } else {

      // open
      $('#desktop-header-menu-conainer').addClass('open-version');
      TweenMax.to($('#desktop-header-menu-conainer'), 0.5, {autoAlpha:1});

    }

    
    
    


  }.bind(this));


};
monogram.page.Default.prototype.private_method_02 = function() {};
monogram.page.Default.prototype.private_method_03 = function() {};
monogram.page.Default.prototype.private_method_04 = function() {};
monogram.page.Default.prototype.private_method_05 = function() {};
monogram.page.Default.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


monogram.page.Default.prototype.public_method_01 = function() {};
monogram.page.Default.prototype.public_method_02 = function() {};
monogram.page.Default.prototype.public_method_03 = function() {};
monogram.page.Default.prototype.public_method_04 = function() {};
monogram.page.Default.prototype.public_method_05 = function() {};
monogram.page.Default.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
monogram.page.Default.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
monogram.page.Default.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
monogram.page.Default.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
monogram.page.Default.prototype.on_event_handler_04 = function(event) {
};






monogram.page.Default.prototype.sample_method_calls = function() {

  // sample override
  monogram.page.Default.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(monogram.page.Default.EVENT_01));
};