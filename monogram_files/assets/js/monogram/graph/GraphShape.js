
// this is essentially a different class from
// combination graph item 04,
// because it will not draw things depending on the score array

goog.provide('monogram.component.GraphShape');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {paper} 
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.component.GraphShape = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, monogram.component.GraphShape.DEFAULT, options);
  this.paper = paper;

  this.scale_factor = this.options['scale_factor'];
  this.is_mobile = this.options['is_mobile'];



  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(monogram.component.GraphShape, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
monogram.component.GraphShape.DEFAULT = {
  'scale_factor': 1,
  'is_mobile': false
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.GraphShape.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.GraphShape.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.component.GraphShape.prototype.private_method_01 = function() {};
monogram.component.GraphShape.prototype.private_method_02 = function() {};
monogram.component.GraphShape.prototype.private_method_03 = function() {};
monogram.component.GraphShape.prototype.private_method_04 = function() {};
monogram.component.GraphShape.prototype.private_method_05 = function() {};
monogram.component.GraphShape.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monogram.component.GraphShape.prototype.sample_method_calls = function() {
  monogram.component.GraphShape.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.component.GraphShape.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


monogram.component.GraphShape.prototype.public_method_01 = function() {};
monogram.component.GraphShape.prototype.public_method_02 = function() {};
monogram.component.GraphShape.prototype.public_method_03 = function() {};
monogram.component.GraphShape.prototype.public_method_04 = function() {};
monogram.component.GraphShape.prototype.public_method_05 = function() {};
monogram.component.GraphShape.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * event handler
 * @param  {object} event
 */
monogram.component.GraphShape.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.GraphShape.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.GraphShape.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.GraphShape.prototype.on_event_handler_04 = function(event) {
};

