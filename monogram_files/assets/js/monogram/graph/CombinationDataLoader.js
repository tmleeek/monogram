goog.provide('monograph.graph.CombinationDataLoader');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('monograph.graph.DataLoader');

/**
 * The CombinationDataLoader constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {monograph.graph.DataLoader}
 */
monograph.graph.CombinationDataLoader = function(options, element) {
  monograph.graph.DataLoader.call(this, options, element);
  this.options = $.extend({}, monograph.graph.CombinationDataLoader.DEFAULT, options);

  this.combined_json_url = '';

  /**
   * @type {manic.util.JsonParser}
   */
  this.combined_json_parser = null;

  this.combined_graph_data_array = null;


  this.original_combined_data_array = [];


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');

  this.combined_json_url = this.element.attr('data-combined-graph-data-url');

  if (goog.isDefAndNotNull(this.combined_json_url)) {

    this.combined_json_parser = new manic.util.JsonParser({'json': this.combined_json_url});

    goog.events.listen(this.combined_json_parser, manic.util.JsonParser.ON_COMPLETE, this.on_combined_json_load_complete.bind(this));
    

  } else {
    console.log('Error: monograph.graph.DataLoader: Missing attr')
  }

  // data-graph-data-url="assets/json/graph-data.json"
  // data-combined-graph-data-url="assets/json/combined-graph-data.json">
};
goog.inherits(monograph.graph.CombinationDataLoader, monograph.graph.DataLoader);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CombinationDataLoader
 * @const {object}
 */
monograph.graph.CombinationDataLoader.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CombinationDataLoader Event Constant
 * @const
 * @type {string}
 */
monograph.graph.CombinationDataLoader.EVENT_01 = '';

/**
 * CombinationDataLoader Event Constant
 * @const
 * @type {string}
 */
monograph.graph.CombinationDataLoader.ON_COMBINED_GRAPH_DATA_LOAD_COMPLETE = 'on_combined_graph_data_load_complete';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


/**
 * @override
 * @inheritDoc
 */
monograph.graph.CombinationDataLoader.prototype.parse_data = function() {

  monograph.graph.CombinationDataLoader.superClass_.parse_data.call(this);


  this.combined_json_parser.start_load();

};

monograph.graph.CombinationDataLoader.prototype.parse_combined_data = function() {
  this.original_combined_data_array = this.combined_json_parser.data_array;


  this.dispatchEvent(new goog.events.Event(monograph.graph.CombinationDataLoader.ON_COMBINED_GRAPH_DATA_LOAD_COMPLETE));

};

monograph.graph.CombinationDataLoader.prototype.private_method_03 = function() {};
monograph.graph.CombinationDataLoader.prototype.private_method_04 = function() {};
monograph.graph.CombinationDataLoader.prototype.private_method_05 = function() {};
monograph.graph.CombinationDataLoader.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monograph.graph.CombinationDataLoader.prototype.sample_method_calls = function() {
  monograph.graph.CombinationDataLoader.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monograph.graph.CombinationDataLoader.EVENT_01));
  
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


monograph.graph.CombinationDataLoader.prototype.public_method_01 = function() {};
monograph.graph.CombinationDataLoader.prototype.public_method_02 = function() {};
monograph.graph.CombinationDataLoader.prototype.public_method_03 = function() {};
monograph.graph.CombinationDataLoader.prototype.public_method_04 = function() {};
monograph.graph.CombinationDataLoader.prototype.public_method_05 = function() {};
monograph.graph.CombinationDataLoader.prototype.public_method_06 = function() {};


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
monograph.graph.CombinationDataLoader.prototype.on_combined_json_load_complete = function(event) {
  this.parse_combined_data();
};

/**
 * event handler
 * @param  {object} event
 */
monograph.graph.CombinationDataLoader.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monograph.graph.CombinationDataLoader.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monograph.graph.CombinationDataLoader.prototype.on_event_handler_04 = function(event) {
};

