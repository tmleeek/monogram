goog.provide('monogram.graph.CombinationGraph');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('monogram.graph.Data');
goog.require('monogram.graph.RaphaelGraphBG');
goog.require('monogram.graph.RaphaelGraphItem');


/**
 * The CombinationGraph constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.graph.CombinationGraph = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $j.extend({}, monogram.graph.CombinationGraph.DEFAULT, options);
  this.element = element;


  /**
   * @type {jQuery}
   */
  this.svg_element = this.element.find('.graph-svg');

  

  /**
   * @type {jQuery}
   */
  this.overlay_element = this.element.find('.graph-overlay');


  this.scale_factor = this.options['scale_factor'];


  this.center_x = 300 * this.scale_factor;
  this.center_y = 300 * this.scale_factor;
  this.original_width = 600 * this.scale_factor;
  this.original_height = 600 * this.scale_factor;

  /*
  this.overlay_element.css({
    'width': this.original_width + 'px',
    'height': this.original_height + 'px',
  });
  */

  this.label_element_array = this.element.find('.graph-name-overlay .graph-name-item');



  /**
   * @type {monogram.graph.Data}
   */
  this.graph_data_01 = null;

  /**
   * @type {monogram.graph.Data}
   */
  this.graph_data_02 = null;


  /**
   * @type {monogram.graph.RaphaelGraphItem}
   */
  this.graph_item_01 = null;  

  /**
   * @type {monogram.graph.RaphaelGraphItem}
   */
  this.graph_item_02 = null;  



  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('>>>>>>>>>');
  console.log(this.element)
  console.log(this.svg_element);
  console.log('>>>>>>>>>');
    
  // create raphaelJS
  this.paper = Raphael(this.svg_element[0],this.original_width, this.original_height);


  this.raphael_bg = new monogram.graph.RaphaelGraphBG({
    'scale_factor': this.scale_factor
  }, this.paper);


  // layering, graph item 02 is lower than graph item 01
  
  this.graph_item_02 = new monogram.graph.RaphaelGraphItem({
    'scale_factor': this.scale_factor
  }, this.paper);

  this.graph_item_01 = new monogram.graph.RaphaelGraphItem({
    'scale_factor': this.scale_factor
  }, this.paper);



  console.log('init');
};
goog.inherits(monogram.graph.CombinationGraph, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CombinationGraph
 * @const {object}
 */
monogram.graph.CombinationGraph.DEFAULT = {
  'scale_factor': 1
};

/**
 * CombinationGraph Event Constant
 * @const
 * @type {string}
 */
monogram.graph.CombinationGraph.EVENT_01 = '';

/**
 * CombinationGraph Event Constant
 * @const
 * @type {string}
 */
monogram.graph.CombinationGraph.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.graph.CombinationGraph.prototype.private_method_01 = function() {};
monogram.graph.CombinationGraph.prototype.private_method_02 = function() {};
monogram.graph.CombinationGraph.prototype.private_method_03 = function() {};
monogram.graph.CombinationGraph.prototype.private_method_04 = function() {};
monogram.graph.CombinationGraph.prototype.private_method_05 = function() {};
monogram.graph.CombinationGraph.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monogram.graph.CombinationGraph.prototype.sample_method_calls = function() {
  monogram.graph.CombinationGraph.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.graph.CombinationGraph.EVENT_01));
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
monogram.graph.CombinationGraph.prototype.set_data_01 = function(graph_data_param) {

  this.graph_data_01 = graph_data_param;

  this.graph_item_01.set_data_and_element(this.graph_data_01, this.overlay_element);

  // temp
  this.graph_item_01.animate_in();



  this.update_label_opacity();


};

/**
 * @param {monogram.graph.Data} graph_data_param
 */
monogram.graph.CombinationGraph.prototype.set_data_02 = function(graph_data_param) {

  this.graph_data_02 = graph_data_param;

  this.graph_item_02.set_data_and_element(this.graph_data_02, this.overlay_element);

  // temp
  this.graph_item_02.animate_in();

  this.update_label_opacity();

};



monogram.graph.CombinationGraph.prototype.update_label_opacity = function() {

  if(this.graph_data_01 != null && this.graph_data_02 != null){

    var item = null;
    var target_opacity = 0;
    var graph_flavor_score = monogram.graph.Data.get_combined_calculated_score(this.graph_data_01, this.graph_data_02);


    for (var i = 0, l=this.label_element_array.length; i < l; i++) {

      item = $j(this.label_element_array[i]);

      target_opacity = 0.3 + ( 0.7 * (graph_flavor_score[i] / 20) * 1.8 );
      target_opacity = target_opacity > 1 ? 1 : target_opacity;

      if (graph_flavor_score[i] == 0) {
        target_opacity = 0.3;
      } else {
        target_opacity = 1.0;
      }

      TweenMax.killTweensOf(item);
      TweenMax.to(item, 0.5, {opacity:target_opacity});
    }
  }
};


monogram.graph.CombinationGraph.prototype.public_method_04 = function() {};
monogram.graph.CombinationGraph.prototype.public_method_05 = function() {};
monogram.graph.CombinationGraph.prototype.public_method_06 = function() {};


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
monogram.graph.CombinationGraph.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.CombinationGraph.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.CombinationGraph.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.CombinationGraph.prototype.on_event_handler_04 = function(event) {
};

