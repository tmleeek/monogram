goog.provide('monograph.graph.DataLoader');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.util.JsonParser');


goog.require('monogram.graph.Data');


/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monograph.graph.DataLoader = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, monograph.graph.DataLoader.DEFAULT, options);
  this.element = element;

  this.json_url = '';

  /**
   * @type {manic.util.JsonParser}
   */
  this.json_parser = null;

  this.graph_data_array = [];


  this.original_data_array = [];


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');

  this.json_url = this.element.attr('data-graph-data-url');

  if (goog.isDefAndNotNull(this.json_url)) {

    this.json_parser = new manic.util.JsonParser({'json': this.json_url});

    goog.events.listen(this.json_parser, manic.util.JsonParser.ON_COMPLETE, this.on_json_load_complete.bind(this));
    

  } else {
    console.log('Error: monograph.graph.DataLoader: Missing attr')
  }

  


  this.json_parser.start_load();
  

  
  
};
goog.inherits(monograph.graph.DataLoader, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
monograph.graph.DataLoader.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monograph.graph.DataLoader.ON_GRAPH_DATA_LOAD_COMPLETE = 'on_graph_data_load_complete';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monograph.graph.DataLoader.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monograph.graph.DataLoader.prototype.parse_data = function() {
  this.original_data_array = this.json_parser.data_array;


  /**
   * @type {monogram.graph.Data}
   */
  var graph_data = null;

  
  var original_data_object = null;

  for (var i = 0, l=this.original_data_array.length; i < l; i++) {

    original_data_object = this.original_data_array[i];
    graph_data = new monogram.graph.Data(original_data_object);


    this.graph_data_array[i] = graph_data;  
  }

  console.log('graph data array: ');
  console.log(this.graph_data_array);


  this.dispatchEvent(new goog.events.Event(monograph.graph.DataLoader.ON_GRAPH_DATA_LOAD_COMPLETE));
  
};
monograph.graph.DataLoader.prototype.private_method_02 = function() {};
monograph.graph.DataLoader.prototype.private_method_03 = function() {};
monograph.graph.DataLoader.prototype.private_method_04 = function() {};
monograph.graph.DataLoader.prototype.private_method_05 = function() {};
monograph.graph.DataLoader.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monograph.graph.DataLoader.prototype.sample_method_calls = function() {
  monograph.graph.DataLoader.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monograph.graph.DataLoader.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * @param  {[type]} str_param [description]
 * @return {[type]}           [description]
 */
monograph.graph.DataLoader.prototype.get_data_by_id = function(str_param) {

  /**
   * @type {monogram.graph.Data}
   */
  var graph_data = null;

  for (var i = 0, l=this.graph_data_array.length; i < l; i++) {

    graph_data = this.graph_data_array[i];

    if(str_param == graph_data.data_id){
      return graph_data;
    }
  }

  return null;
};
monograph.graph.DataLoader.prototype.public_method_02 = function() {};
monograph.graph.DataLoader.prototype.public_method_03 = function() {};
monograph.graph.DataLoader.prototype.public_method_04 = function() {};
monograph.graph.DataLoader.prototype.public_method_05 = function() {};
monograph.graph.DataLoader.prototype.public_method_06 = function() {};


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
monograph.graph.DataLoader.prototype.on_json_load_complete = function(event) {
  this.parse_data();
};

/**
 * event handler
 * @param  {object} event
 */
monograph.graph.DataLoader.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monograph.graph.DataLoader.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monograph.graph.DataLoader.prototype.on_event_handler_04 = function(event) {
};

