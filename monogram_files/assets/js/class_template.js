goog.provide('sga.template.CLASSNAME');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sga.template.CLASSNAME = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sga.template.CLASSNAME.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sga.template.CLASSNAME.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(sga.template.CLASSNAME, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sga.template.CLASSNAME.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sga.template.CLASSNAME.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sga.template.CLASSNAME.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sga.template.CLASSNAME.prototype.private_method_01 = function() {};
sga.template.CLASSNAME.prototype.private_method_02 = function() {};
sga.template.CLASSNAME.prototype.private_method_03 = function() {};
sga.template.CLASSNAME.prototype.private_method_04 = function() {};
sga.template.CLASSNAME.prototype.private_method_05 = function() {};
sga.template.CLASSNAME.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sga.template.CLASSNAME.prototype.sample_method_calls = function() {
  sga.template.CLASSNAME.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sga.template.CLASSNAME.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sga.template.CLASSNAME.prototype.public_method_01 = function() {};
sga.template.CLASSNAME.prototype.public_method_02 = function() {};
sga.template.CLASSNAME.prototype.public_method_03 = function() {};
sga.template.CLASSNAME.prototype.public_method_04 = function() {};
sga.template.CLASSNAME.prototype.public_method_05 = function() {};
sga.template.CLASSNAME.prototype.public_method_06 = function() {};


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
sga.template.CLASSNAME.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sga.template.CLASSNAME.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sga.template.CLASSNAME.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sga.template.CLASSNAME.prototype.on_event_handler_04 = function(event) {
};

