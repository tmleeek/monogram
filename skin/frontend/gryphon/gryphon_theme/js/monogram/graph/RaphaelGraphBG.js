goog.provide('monogram.graph.RaphaelGraphBG');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {paper} 
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.graph.RaphaelGraphBG = function(options, paper) {

  goog.events.EventTarget.call(this);
  this.options = $j.extend({}, monogram.graph.RaphaelGraphBG.DEFAULT, options);
  this.paper = paper;

  this.line_point_array = [];
  this.line_angle_array = [];
  this.line_shape_array = [];

  this.circle_array = [];

  this.scale_factor = this.options['scale_factor'];

  this.center_x = 300 * this.scale_factor;
  this.center_y = 300 * this.scale_factor;


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.create_lines();
  this.create_circles();


  console.log('init');
};
goog.inherits(monogram.graph.RaphaelGraphBG, goog.events.EventTarget);


/**
 * default options for CLASSNAME
 * @const {object}
 */
monogram.graph.RaphaelGraphBG.DEFAULT = {
  'scale_factor': 1
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.graph.RaphaelGraphBG.GRAPH_LINE_POSITION_ARRAY = [
  [134.9, -134.35],
  [155.85, 109.4],
  [119.65, 148.1],
  [22.95, 189.05],
  [-30.05, 188.05],
  [-125.2, 143.45],
  [-182.3, 55.2],
  [-129.45, -139.65],
  [-35.75, -187.05]
];





//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

monogram.graph.RaphaelGraphBG.prototype.create_lines = function() {


  this.line_point_array = [];
  this.line_angle_array = [];
  this.line_shape_array = [];

  var temp_arr = null;
  var data_obj = null;
  var temp_angle = 0;

  var line_shape = null;
  var line_path = null;
  var target_x = 0;
  var target_y = 0;

  for (var i = 0, l=monogram.graph.RaphaelGraphBG.GRAPH_LINE_POSITION_ARRAY.length; i < l; i++) {
    temp_arr = monogram.graph.RaphaelGraphBG.GRAPH_LINE_POSITION_ARRAY[i];

    data_obj = {
      'x': temp_arr[0] * this.scale_factor,
      'y': temp_arr[1] * this.scale_factor
    };

    temp_angle = Math.atan2(data_obj['y'], data_obj['x']);


    
    target_x = (Math.cos(temp_angle) * 190 * this.scale_factor) + this.center_x;
    target_y = (Math.sin(temp_angle) * 190 * this.scale_factor) + this.center_y;

    line_path = ["M", this.center_x, this.center_y, "L"].concat([target_x, target_y]);
    // line_shape = this.paper.path().attr({stroke: "#f1efee", opacity: 0.6});
    line_shape = this.paper.path().attr({stroke: "#f1efee", opacity: 0.3});
    line_shape.attr({path: line_path});

    this.line_point_array[i] = data_obj;
    this.line_angle_array[i] = temp_angle;
    this.line_shape_array[i] = line_shape;
  };


};
monogram.graph.RaphaelGraphBG.prototype.create_circles = function() {
  this.circle_shape_array = [];

  var circle_shape = null;
  var target_length = 0;

  for (var i = 0, l=10; i < l; i++) {

    target_length = (46 + (i * 14)) * this.scale_factor


    circle_shape = this.paper.circle(this.center_x, this.center_y, target_length);
    circle_shape.attr({
      stroke: "#f1efee", 
      // opacity: 1, 
      /// opacity: 0.7, 
      
      opacity: 0.1,

      "stroke-width":1,
      "stroke-dasharray":". ",
    });

    this.circle_shape_array[i] = circle_shape;
  }
};

/**
 * sample_method_calls
 */
monogram.graph.RaphaelGraphBG.prototype.sample_method_calls = function() {
  monogram.graph.RaphaelGraphBG.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.graph.RaphaelGraphBG.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

monogram.graph.RaphaelGraphBG.prototype.public_method_02 = function() {};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//


monogram.graph.RaphaelGraphBG.prototype.on_animate_update = function() {
  this.update_layout();
};
