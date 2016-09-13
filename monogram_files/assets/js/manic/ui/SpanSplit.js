goog.provide('manic.ui.SpanSplit');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.util.StringUtil');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.SpanSplit = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.SpanSplit.DEFAULT, options);
  this.element = element;

  this.original_html = this.element.html();

  var str = '' + this.original_html;
  str = manic.util.StringUtil.trim(str);

  str = str.split(' ').join('</span> <span>');
  str = '<span>' + str + '</span>';
  
  
  
  this.element.data('manic.ui.SpanSplit', this);

  // this.element.revert_original = this.revert_original.bind(this);
  // this.element.add_numbered_classes = this.add_numbered_classes.bind(this);


  this.element.html(str);


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(manic.ui.SpanSplit, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
manic.ui.SpanSplit.DEFAULT = {
  
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.SpanSplit.prototype.revert_original = function() {

};

/**
 * @param {String} prefix_str
 */
manic.ui.SpanSplit.prototype.add_numbered_classes = function(prefix_str, offset_param) {
  var arr = this.element.find('span');
  var item = null;

  var offset = 0;
  if (goog.isDefAndNotNull(offset_param) == true) {
    offset = offset_param;
  }

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    item.addClass(prefix_str + (i + 1 + offset) );
  }
};
/**
 * @param {String} prefix_str
 */
manic.ui.SpanSplit.prototype.add_numbered_classes_reverse = function(prefix_str, offset_param) {
  var arr = this.element.find('span');
  var item = null;
  var target_i = 0;

  var offset = 0;
  if (goog.isDefAndNotNull(offset_param) == true) {
    offset = offset_param;
  }
  

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    target_i = (l) - i + offset;
    item.addClass(prefix_str + target_i);
  }
};


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
manic.ui.SpanSplit.prototype.on_event_handler_01 = function(event) {
};

