goog.provide('monogram.graph.SingleGraph');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('monogram.graph.Data');
goog.require('monogram.graph.RaphaelGraphBG');
goog.require('monogram.graph.RaphaelGraphItem');

goog.require('monogram.graph.DataLoader');


/**
 * The SingleGraph constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.graph.SingleGraph = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $j.extend({}, monogram.graph.SingleGraph.DEFAULT, options);
  this.element = element;

  this.element.data('monogram.graph.SingleGraph', this);


  this.data_loader = new monogram.graph.DataLoader({}, $j('#monograph-graph-data'));
  console.log($j('#monograph-graph-data'));
  console.log($j('#monograph-graph-data'));


  this.label_element_array = this.element.find('.graph-name-overlay .graph-name-item');


  this.data_id = '';

  /**
   * @type {jQuery}
   */
  this.svg_element = this.element.find('.graph-svg');

  /**
   * @type {jQuery}
   */
  this.overlay_element = this.element.find('.graph-overlay');


  


  /**
   * @type {monogram.graph.Data}
   */
  this.graph_data = null;


  this.scale_factor = this.options['scale_factor'];



  this.center_x = 300 * this.scale_factor;
  this.center_y = 300 * this.scale_factor;
  this.original_width = 600 * this.scale_factor;
  this.original_height = 600 * this.scale_factor;


  /**
   * @type {monogram.graph.RaphaelGraphItem}
   */
  this.graph_item = null;  


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  goog.events.listen(this.data_loader, monogram.graph.DataLoader.ON_GRAPH_DATA_LOAD_COMPLETE, this.on_graph_data_load_complete.bind(this));


  if (goog.isDefAndNotNull(this.element.attr('data-id'))) {
    this.data_id = this.element.attr('data-id');
  } else {
    console.log('Error: monogram.graph.SingleGraph: missing attr');
  }

  var id_array = [
    'cherry-japonais',
    'uji-sencha',            
    'jasmine-silk-pearls',
    'milky-oolong',
    'lapsang-florale',
    'kashmere',
    'earl-grey-neroli',
    'morning-english',
    'rose-of-ariana',
    'shiso-mint',
    'saffronais',
    'provencal-herbs'
  ];

  var hash = window.location.hash.replace('#', '');
  if (hash != '') {
    this.data_id = id_array[hash-1];
  } else {
    // do nothing
  }



  // create raphaelJS
  this.paper = Raphael(this.svg_element[0],this.original_width, this.original_height);


  this.raphael_bg = new monogram.graph.RaphaelGraphBG({
    'scale_factor': this.scale_factor
  }, this.paper);


  this.graph_item = new monogram.graph.RaphaelGraphItem({
    'scale_factor': this.scale_factor
  }, this.paper);

  
  

  console.log('init');
};
goog.inherits(monogram.graph.SingleGraph, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for SingleGraph
 * @const {object}
 */
monogram.graph.SingleGraph.DEFAULT = {
  'scale_factor': 1
};

/**
 * SingleGraph Event Constant
 * @const
 * @type {string}
 */
monogram.graph.SingleGraph.EVENT_01 = '';

/**
 * SingleGraph Event Constant
 * @const
 * @type {string}
 */
monogram.graph.SingleGraph.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.graph.SingleGraph.prototype.private_method_01 = function() {};
monogram.graph.SingleGraph.prototype.private_method_02 = function() {};
monogram.graph.SingleGraph.prototype.private_method_03 = function() {};
monogram.graph.SingleGraph.prototype.private_method_04 = function() {};
monogram.graph.SingleGraph.prototype.private_method_05 = function() {};
monogram.graph.SingleGraph.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monogram.graph.SingleGraph.prototype.sample_method_calls = function() {
  monogram.graph.SingleGraph.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.graph.SingleGraph.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * @param {monogram.graph.Data} graph_data_param
 */
monogram.graph.SingleGraph.prototype.set_data = function(graph_data_param) {

  this.graph_data = graph_data_param;
  this.graph_item.set_data_and_element(this.graph_data, this.overlay_element);
  this.graph_item.animate_in();

  // update label array

  var item = null;
  var target_opacity = 0;
  var graph_flavor_score = monogram.graph.Data.get_solo_calculated_score(this.graph_data);


  for (var i = 0, l=this.label_element_array.length; i < l; i++) {

    item = $j(this.label_element_array[i]);
    target_opacity = 0.3 + ( 0.7 * (graph_flavor_score[i] / 20) * 1.8 );
    target_opacity = target_opacity > 1 ? 1 : target_opacity;

    
    TweenMax.killTweensOf(item);
    TweenMax.to(item, 0.5, {opacity:target_opacity});
  }
  

  /*
  TweenMax.delayedCall(5, this.test_01, [], this);
  TweenMax.delayedCall(10, this.test_02, [], this);
  TweenMax.delayedCall(15, this.test_03, [], this);
  TweenMax.delayedCall(20, this.test_04, [], this);
  */
  
};
monogram.graph.SingleGraph.prototype.set_data_by_id = function(str_param) {
  /**
   * @type {monogram.graph.Data}
   */
  var target_graph_data = this.data_loader.get_data_by_id(str_param);

  if (target_graph_data != null) {
    this.set_data(target_graph_data);
  }
};

/*
monogram.graph.SingleGraph.prototype.test_01 = function() {
  this.graph_item.animate_in();
};
monogram.graph.SingleGraph.prototype.test_02 = function() {
  this.graph_item.animate_out();
};
monogram.graph.SingleGraph.prototype.test_03 = function() {
  this.graph_item.instant_animate_in();
};
monogram.graph.SingleGraph.prototype.test_04 = function() {
  this.graph_item.instant_animate_out();
};
*/


monogram.graph.SingleGraph.prototype.public_method_04 = function() {};
monogram.graph.SingleGraph.prototype.public_method_05 = function() {};
monogram.graph.SingleGraph.prototype.public_method_06 = function() {};


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
monogram.graph.SingleGraph.prototype.on_graph_data_load_complete = function(event) {
  this.set_data_by_id(this.data_id);
  

};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.SingleGraph.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.SingleGraph.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.SingleGraph.prototype.on_event_handler_04 = function(event) {
};

