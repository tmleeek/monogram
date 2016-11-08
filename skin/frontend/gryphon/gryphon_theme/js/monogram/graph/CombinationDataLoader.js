goog.provide('monogram.graph.CombinationDataLoader');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('monogram.graph.DataLoader');

/**
 * The CombinationDataLoader constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {monogram.graph.DataLoader}
 */
monogram.graph.CombinationDataLoader = function(options, element) {
  monogram.graph.DataLoader.call(this, options, element);
  this.options = $j.extend({}, monogram.graph.CombinationDataLoader.DEFAULT, options);

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
    console.log('Error: monogram.graph.DataLoader: Missing attr')
  }

  // data-graph-data-url="assets/json/graph-data.json"
  // data-combined-graph-data-url="assets/json/combined-graph-data.json">
};
goog.inherits(monogram.graph.CombinationDataLoader, monogram.graph.DataLoader);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CombinationDataLoader
 * @const {object}
 */
monogram.graph.CombinationDataLoader.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CombinationDataLoader Event Constant
 * @const
 * @type {string}
 */
monogram.graph.CombinationDataLoader.EVENT_01 = '';

/**
 * CombinationDataLoader Event Constant
 * @const
 * @type {string}
 */
monogram.graph.CombinationDataLoader.ON_COMBINED_GRAPH_DATA_LOAD_COMPLETE = 'on_combined_graph_data_load_complete';


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
monogram.graph.CombinationDataLoader.prototype.parse_data = function() {

  monogram.graph.CombinationDataLoader.superClass_.parse_data.call(this);


  this.combined_json_parser.start_load();

};

monogram.graph.CombinationDataLoader.prototype.parse_combined_data = function() {
  this.original_combined_data_array = this.combined_json_parser.data_array;


  this.dispatchEvent(new goog.events.Event(monogram.graph.CombinationDataLoader.ON_COMBINED_GRAPH_DATA_LOAD_COMPLETE));

};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



/**
 * @param  {string} str_01_param
 * @param  {string} str_02_param
 * @return {object}
 */
monogram.graph.CombinationDataLoader.prototype.get_combined_data_by_ids = function(str_01_param, str_02_param) {

  var data_obj = null;

  for (var i = 0, l=this.original_combined_data_array.length; i < l; i++) {

    data_obj = this.original_combined_data_array[i]

    if ((data_obj['tea-01'] == str_01_param && data_obj['tea-02'] == str_02_param) ||
        (data_obj['tea-01'] == str_02_param && data_obj['tea-02'] == str_01_param)) {

      return data_obj; 
    }
  }

  return null;    // if nothing is found, return null
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
monogram.graph.CombinationDataLoader.prototype.on_combined_json_load_complete = function(event) {
  this.parse_combined_data();
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.CombinationDataLoader.prototype.on_event_handler_02 = function(event) {
};
