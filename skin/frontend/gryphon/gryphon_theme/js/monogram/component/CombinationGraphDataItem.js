goog.provide('monogram.component.CombinationGraphDataItem');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.component.CombinationGraphDataItem = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $j.extend({}, monogram.component.CombinationGraphDataItem.DEFAULT, options);
  this.element = element;

  this.data_id          = this.element.attr('data-id');
  this.data_color       = '#' + this.element.attr('data-color');
  this.data_type        = this.element.attr('data-type');
  this.data_main        = this.element.attr('data-main');

  this.data_wood        = this.element.attr('data-wood');
  this.data_savoury     = this.element.attr('data-savoury');
  this.data_herbaceous  = this.element.attr('data-herbaceous');
  this.data_floral      = this.element.attr('data-floral');
  this.data_nutty       = this.element.attr('data-nutty');
  this.data_dairy       = this.element.attr('data-dairy');
  this.data_minerality  = this.element.attr('data-minerality');
  this.data_citrus      = this.element.attr('data-citrus');
  this.data_stone_fruit = this.element.attr('data-stone-fruit');
  this.data_red_fruit   = this.element.attr('data-red-fruit');
  this.data_sweet       = this.element.attr('data-sweet');

  this.data_html = $j.trim(this.element.html());
  


  this.score_array = [
    parseFloat(this.data_wood),
    parseFloat(this.data_savoury),
    parseFloat(this.data_herbaceous),
    parseFloat(this.data_floral),
    parseFloat(this.data_nutty),
    parseFloat(this.data_dairy),
    parseFloat(this.data_minerality),
    parseFloat(this.data_citrus),
    parseFloat(this.data_stone_fruit),
    parseFloat(this.data_red_fruit),
    parseFloat(this.data_sweet)
  ];

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(monogram.component.CombinationGraphDataItem, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
monogram.component.CombinationGraphDataItem.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.CombinationGraphDataItem.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.CombinationGraphDataItem.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.component.CombinationGraphDataItem.prototype.private_method_01 = function() {};
monogram.component.CombinationGraphDataItem.prototype.private_method_02 = function() {};
monogram.component.CombinationGraphDataItem.prototype.private_method_03 = function() {};
monogram.component.CombinationGraphDataItem.prototype.private_method_04 = function() {};
monogram.component.CombinationGraphDataItem.prototype.private_method_05 = function() {};
monogram.component.CombinationGraphDataItem.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monogram.component.CombinationGraphDataItem.prototype.sample_method_calls = function() {
  monogram.component.CombinationGraphDataItem.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.component.CombinationGraphDataItem.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


monogram.component.CombinationGraphDataItem.prototype.public_method_01 = function() {};
monogram.component.CombinationGraphDataItem.prototype.public_method_02 = function() {};
monogram.component.CombinationGraphDataItem.prototype.public_method_03 = function() {};
monogram.component.CombinationGraphDataItem.prototype.public_method_04 = function() {};
monogram.component.CombinationGraphDataItem.prototype.public_method_05 = function() {};
monogram.component.CombinationGraphDataItem.prototype.public_method_06 = function() {};


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
monogram.component.CombinationGraphDataItem.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.CombinationGraphDataItem.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.CombinationGraphDataItem.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.CombinationGraphDataItem.prototype.on_event_handler_04 = function(event) {
};

