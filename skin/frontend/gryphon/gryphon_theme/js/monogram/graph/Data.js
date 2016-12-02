goog.provide('monogram.graph.Data');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Data constructor
 * @param {object} options The object extendable like jquery plugins
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.graph.Data = function(data_obj_param) {
  
  goog.events.EventTarget.call(this);

  this.data_object = data_obj_param;

  // parse the data

  this.data_id                = this.data_object["id"];

  this.data_product_id        = this.data_object["product-id"];

  this.data_name              = this.data_object["name"];
  this.data_url               = this.data_object["url"];


  this.data_html_name         = this.data_object["html-name"];
  this.data_type              = this.data_object["type"];
  this.data_color             = this.data_object["color"];
  this.data_color_02          = this.data_object["color-02"];
  this.data_flavor_array      = this.data_object["flavor-array"];

  this.data_flavor_complexity         = this.data_object["flavor-complexity"];       // this is optional, and not used


  this.calculated_flavor_score_array = {
    'floral': 0,
    'creamy': 0,
    'marine': 0,
    'mineral': 0,
    'citrus': 0,
    'fruity': 0,
    'sweet': 0,
    'wood': 0,
    'herbaceous': 0
  };
  
  this.calculate_flavor_score();


  this.data_point_array               = this.data_object["point-array"];

  this.data_pair_array                = this.data_object["pair-array"];
  this.data_description               = this.data_object["description"];




  this.data_steeping_time             = this.data_object["steeping-time"] + monogram.graph.Data.STEEPING_TIME_STRING;

  this.data_steeping_temperature      = monogram.graph.Data.STEEPING_TEMPERATURE_NAME_ARRAY['lesstb'];    // default
  
  if (goog.isDefAndNotNull(monogram.graph.Data.STEEPING_TEMPERATURE_NAME_ARRAY[this.data_object["steeping-temperature"]])) {

    this.data_steeping_temperature = monogram.graph.Data.STEEPING_TEMPERATURE_NAME_ARRAY[this.data_object["steeping-temperature"]];

  }



  /*
  this.dot_data_object = {
    'name': this.data_name,
    'color': this.data_color,
    'dark-color': this.data_color_02
  };
  */




  this.graph_section_data_obj = {
    'htmlname': this.data_html_name,
	'dataid': this.data_id,
    'description': this.data_description,
    'teatype': this.data_type, 
    'temperature': this.data_steeping_temperature,
    'time': this.data_steeping_time
  };

  
  

  

  
  console.log('init');
};
goog.inherits(monogram.graph.Data, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...



/**
 * Data Event Constant
 * @const
 * @type {string}
 */
monogram.graph.Data.EVENT_01 = '';




/**
 * Data Event Constant
 * @const
 * @type {string}
 */
monogram.graph.Data.STEEPING_TIME_STRING = ' minutes';

/**
 * Data Event Constant
 * @const
 * @type {Array}
 */
monogram.graph.Data.STEEPING_TEMPERATURE_NAME_ARRAY = [];
monogram.graph.Data.STEEPING_TEMPERATURE_NAME_ARRAY['lesstb']   = '< 80&deg; Celcius';
monogram.graph.Data.STEEPING_TEMPERATURE_NAME_ARRAY['80cel']    = '< 90&deg; Celcius';
monogram.graph.Data.STEEPING_TEMPERATURE_NAME_ARRAY['90cel']    = 'Less than boiling';



/**
 * Data Event Constant
 * @const
 * @type {Array}
 */
monogram.graph.Data.FLAVOR_NAME_ARRAY = [];
monogram.graph.Data.FLAVOR_NAME_ARRAY['floral']       = 'Floral';
monogram.graph.Data.FLAVOR_NAME_ARRAY['creamy']       = 'Creamy';
monogram.graph.Data.FLAVOR_NAME_ARRAY['marine']       = 'Marine';
monogram.graph.Data.FLAVOR_NAME_ARRAY['mineral']      = 'Mineral';
monogram.graph.Data.FLAVOR_NAME_ARRAY['citrus']       = 'Citrus';
monogram.graph.Data.FLAVOR_NAME_ARRAY['fruity']       = 'Fruity';
monogram.graph.Data.FLAVOR_NAME_ARRAY['sweet']        = 'Sweet';
monogram.graph.Data.FLAVOR_NAME_ARRAY['wood']         = 'Wood';
monogram.graph.Data.FLAVOR_NAME_ARRAY['herbaceous']   = 'Herbaceous';

/**
 * Data Event Constant
 * @const
 * @type {Array}
 */
monogram.graph.Data.SUBFLAVOR_DATA_ARRAY = [
  {'id': 'floral--cherry-blossom','name': 'Cherry Blossom'},
  {'id': 'floral--dried-flowers','name': 'Dried Flowers'},
  {'id': 'floral--hyacinth','name': 'Hyacinth'},
  {'id': 'floral--jasmine','name': 'Jasmine'},
  {'id': 'floral--lavender','name': 'Lavender'},
  {'id': 'floral--lily','name': 'Lily'},
  {'id': 'floral--orange-blossom','name': 'Orange Blossom'},
  {'id': 'floral--orchid','name': 'Orchid'},
  {'id': 'floral--rose','name': 'Rose'},
  {'id': 'floral--saffron','name': 'Saffron'},
  {'id': 'creamy--vanilla','name': 'Vanilla'},
  {'id': 'creamy--white-chocolate','name': 'White Chocolate'},
  {'id': 'marine--dried-kelp','name': 'Dried Kelp'},
  {'id': 'marine--iodine','name': 'Iodine'},
  {'id': 'marine--mineral','name': 'Mineral'},
  {'id': 'marine--seaweed','name': 'Seaweed'},
  {'id': 'mineral--earth','name': 'Earth'},
  {'id': 'mineral--mushroom','name': 'Mushroom'},
  {'id': 'citrus--bergamot','name': 'Bergamot'},
  {'id': 'citrus--grapefruit','name': 'Grapefruit'},
  {'id': 'citrus--lemon','name': 'Lemon'},
  {'id': 'citrus--orange','name': 'Orange'},
  {'id': 'fruity--cherry','name': 'Cherry'},
  {'id': 'fruity--lychee','name': 'Lychee'},
  {'id': 'fruity--orange','name': 'Orange'},
  {'id': 'fruity--promegranate','name': 'Promegranate'},
  {'id': 'sweet--biscuit','name': 'Biscuit'},
  {'id': 'sweet--bread','name': 'Bread'},
  {'id': 'sweet--butterscotch','name': 'Butterscotch'},
  {'id': 'sweet--chestnut','name': 'Chestnut'},
  {'id': 'sweet--honey','name': 'Honey'},
  {'id': 'sweet--molasses','name': 'Molasses'},
  {'id': 'sweet--rosehip','name': 'Rosehip'},
  {'id': 'sweet--vanilla','name': 'Vanilla'},
  {'id': 'wood--new-wood-cedar','name': 'New Wood Cedar'},
  {'id': 'wood--oak','name': 'Oak'},
  {'id': 'wood--pine','name': 'Pine'},
  {'id': 'wood--smoke','name': 'Smoke'},
  {'id': 'herbaceous--bamboo','name': 'Bamboo'},
  {'id': 'herbaceous--cut-grass','name': 'Cut Grass'},
  {'id': 'herbaceous--eucalyptus','name': 'Eucalyptus'},
  {'id': 'herbaceous--green-stem','name': 'Green Stem'},
  {'id': 'herbaceous--peppermint','name': 'Peppermint'},
  {'id': 'herbaceous--shiso','name': 'Shiso'},
  {'id': 'herbaceous--peppery','name': 'Peppery'}
];
  


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.graph.Data.prototype.calculate_flavor_score = function() {

  var flavor_item = null;
  var original_id = '';
  var cropped_id = '';
  var parsed_value = 0;

  for (var i = 0, l=this.data_flavor_array.length; i < l; i++) {


    flavor_item = this.data_flavor_array[i];

    original_id = flavor_item['id'];
    cropped_id = original_id.split('--')[0];
    parsed_value = parseInt(flavor_item['value']);
    
    this.calculated_flavor_score_array[cropped_id] += parsed_value;
  }

  // console.log(this.calculated_flavor_score_array);
  
};


/**
 * sample_method_calls
 */
monogram.graph.Data.prototype.sample_method_calls = function() {
  monogram.graph.Data.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.graph.Data.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


monogram.graph.Data.prototype.public_method_01 = function() {};
monogram.graph.Data.prototype.public_method_02 = function() {};


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
monogram.graph.Data.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.Data.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.Data.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.Data.prototype.on_event_handler_04 = function(event) {
};

//    ____ _____  _  _____ ___ ____
//   / ___|_   _|/ \|_   _|_ _/ ___|
//   \___ \ | | / _ \ | |  | | |
//    ___) || |/ ___ \| |  | | |___
//   |____/ |_/_/   \_\_| |___\____|
//



/**
 * @type {function}
 * @param  {string} str_param
 * @return {number}
 */
monogram.graph.Data.get_flavor_index = function(str_param) { 
  
  for (var i = 0, l=monogram.graph.Data.SUBFLAVOR_DATA_ARRAY.length; i < l; i++) {
    if (monogram.graph.Data.SUBFLAVOR_DATA_ARRAY[i]['id'] == str_param) {
      return i;
    }
  }

  return -1;
};




/**
 * @type {function}
 * @param  {monogram.graph.Data} data_01
 * @param  {monogram.graph.Data} data_02
 * @return {Array}
 */
monogram.graph.Data.get_combined_calculated_score = function(data_01, data_02) { 

  // this might fail...

  try {

    return [
      data_01.calculated_flavor_score_array['floral'] + data_02.calculated_flavor_score_array['floral'],
      data_01.calculated_flavor_score_array['creamy'] + data_02.calculated_flavor_score_array['creamy'],
      data_01.calculated_flavor_score_array['marine'] + data_02.calculated_flavor_score_array['marine'],
      data_01.calculated_flavor_score_array['mineral'] + data_02.calculated_flavor_score_array['mineral'],
      data_01.calculated_flavor_score_array['citrus'] + data_02.calculated_flavor_score_array['citrus'],
      data_01.calculated_flavor_score_array['fruity'] + data_02.calculated_flavor_score_array['fruity'],
      data_01.calculated_flavor_score_array['sweet'] + data_02.calculated_flavor_score_array['sweet'],
      data_01.calculated_flavor_score_array['wood'] + data_02.calculated_flavor_score_array['wood'],
      data_01.calculated_flavor_score_array['herbaceous'] + data_02.calculated_flavor_score_array['herbaceous']
    ];

  } catch (e) {

    return [0,0,0,0,0,0,0,0,0];

  }

};

/**
 * @type {function}
 * @param  {monogram.graph.Data} data_01
 * @return {Array}
 */
monogram.graph.Data.get_solo_calculated_score = function(data_01) {

  // this might fail...

  try {

    return [
      data_01.calculated_flavor_score_array['floral'],
      data_01.calculated_flavor_score_array['creamy'],
      data_01.calculated_flavor_score_array['marine'],
      data_01.calculated_flavor_score_array['mineral'],
      data_01.calculated_flavor_score_array['citrus'],
      data_01.calculated_flavor_score_array['fruity'],
      data_01.calculated_flavor_score_array['sweet'],
      data_01.calculated_flavor_score_array['wood'],
      data_01.calculated_flavor_score_array['herbaceous']
    ];

  } catch (e) {

    return [0,0,0,0,0,0,0,0,0];

  }

};
