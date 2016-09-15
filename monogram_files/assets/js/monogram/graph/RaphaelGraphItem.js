goog.provide('monogram.graph.RaphaelGraphItem');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('monogram.graph.Data');


/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {paper} 
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.graph.RaphaelGraphItem = function(options, paper) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, monogram.graph.RaphaelGraphItem.DEFAULT, options);
  this.paper = paper;

  /**
   * @type {monogram.graph.Data}
   */
  this.graph_data = null;


  this.scale_factor = this.options['scale_factor'];

  this.center_x = 300 * this.scale_factor;
  this.center_y = 300 * this.scale_factor;
  this.original_width = 600 * this.scale_factor;
  this.original_height = 600 * this.scale_factor;


  this.circle_array = [];

  this.point_length = 0;
  this.data_x = [];
  this.data_y = [];
  this.display_percent = [];

  this.display_object = {
    'p': 1
  };

  //temp variables
  this.temp_path_array = [];


  /**
   * @type {jQuery}
   */
  this.overlay_element = null;



  this.graph_shape = null;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.graph_shape = this.paper.path().attr({stroke: "none", fill: '#ffffff', opacity: 0.6});

  this.draw_empty_graph();



  console.log('init');
};
goog.inherits(monogram.graph.RaphaelGraphItem, goog.events.EventTarget);


/**
 * default options for CLASSNAME
 * @const {object}
 */
monogram.graph.RaphaelGraphItem.DEFAULT = {
  'scale_factor': 1
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.graph.RaphaelGraphItem.GRAPH_DOTS_POSITION_ARRAY = [
  [153.8, -133.6],
  [170.95, -110.85],
  [184.7, -85.95],
  [194.85, -59.35],
  [201.15, -31.65],
  [203.65, -3.35],
  [202.1, 25.1],
  [196.6, 53],
  [187.3, 79.9],
  [174.35, 105.25],
  [158, 128.5],
  [138.55, 149.25],
  [116.4, 167.1],
  [92.05, 181.7],
  [65.95, 192.8],
  [38.4, 200.1],
  [10.15, 203.55],
  [-18.3, 202.95],
  [-46.4, 198.5],
  [-73.6, 190.15],
  [-99.35, 178.1],
  [-123.15, 162.6],
  [-144.55, 143.85],
  [-163.2, 122.4],
  [-178.75, 98.5],
  [-190.7, 72.75],
  [-198.9, 45.5],
  [-203.3, 17.4],
  [-203.8, -11],
  [-200.3, -39.25],
  [-192.85, -66.7],
  [-181.75, -92.9],
  [-167.05, -117.25],
  [-149.1, -139.35],
  [-128.25, -158.7],
  [-104.95, -174.95],
  [-79.55, -187.85],
  [-52.7, -197.05],
  [-24.8, -202.45],
  [3.65, -203.9],
  [31.95, -201.35],
  [59.7, -194.95],
  [86.25, -184.7],
  [111.05, -170.9],
  [133.75, -153.7]
];




//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//

monogram.graph.RaphaelGraphItem.prototype.create_dots = function() {

  if(goog.isDefAndNotNull(this.graph_data.data_flavor_array) == false){
    console.log('ERROR: monogram.graph.RaphaelGraphItem: missing data');
  }

  

  // remove previous circles (if any)
  

  var circle_element = null;

  for (var i = 0, l=this.circle_array.length; i < l; i++) {
    circle_element = this.circle_array[i];

    circle_element.remove();      // instant removal

  }

  this.circle_array = [];


  
  var data_obj = null;
  var data_id = '';
  var data_index = 0;

  var position_obj = null;

  var target_x = 0;
  var target_y = 0;
  var target_angle = 0;
  var target_length = 0;

  var circle_data_object = null;

  var circle_template = [
    '<div class="graph-svg-circle">',
      '<div class="graph-svg-circle-icon" style="background:{darkcolor}"></div>',
      '<div class="graph-svg-circle-text" style="background:{darkcolor}">{name}</div>',
    '</div>'
  ].join('');



  for (var i = 0, l=this.graph_data.data_flavor_array.length; i < l; i++) {

    data_obj = this.graph_data.data_flavor_array[i];



    data_index = monogram.graph.Data.get_flavor_index(data_obj['id']);
    data_name = monogram.graph.Data.SUBFLAVOR_DATA_ARRAY[data_index]['name'];

    position_obj = monogram.graph.RaphaelGraphItem.GRAPH_DOTS_POSITION_ARRAY[data_index];

    target_angle = Math.atan2(position_obj[1], position_obj[0]);
    // target_length = (46 + (data_obj['value'] * 14)) * this.scale_factor;
    target_length = (46 - 14 + (data_obj['value'] * 14)) * this.scale_factor;       // minus 1 because data was not encoded with 0 as the first line

    target_x = (Math.cos(target_angle) * target_length) + this.center_x;
    target_y = (Math.sin(target_angle) * target_length) + this.center_y;

    circle_data_object = {
      'name': data_name,
      // 'color': this.graph_data.data_color,
      'darkcolor': this.graph_data.data_color_02
    };
    
    
    // create element via template
    circle_element = $(nano(circle_template, circle_data_object));
    circle_element.mouseover(function(event){
      this.parent().append(this);
    }.bind(circle_element));

    // this is needed to modify the x & y properties of the object
    this.overlay_element.append(circle_element);      


    // position the circle
    TweenMax.to(circle_element, 0, {x: target_x , y: target_y});

    this.circle_array[i] = circle_element; 
    
  }


};


monogram.graph.RaphaelGraphItem.prototype.create_graph = function(){

  if(goog.isDefAndNotNull(this.graph_data.data_point_array) == false){
    console.log('ERROR: monogram.graph.RaphaelGraphItem: missing data');
  }

  // clear previous values;
  
  this.data_x = [];
  this.data_y = [];
  this.display_percent = [];


  var data_obj_array = null;

  for (var i = 0, l=this.graph_data.data_point_array.length; i < l; i++) {

    data_obj_array = this.graph_data.data_point_array[i];

    this.data_x[i] = data_obj_array[0];
    this.data_y[i] = data_obj_array[1];
    this.display_percent[i] = {

      // instant version
      // 'p': 1
      'p': 0
    };

  }

  this.point_length = this.graph_data.data_point_array.length;
  

  // change graph color instant
  
  TweenMax.to(this.graph_shape, 0.0, {raphael:{
    fill: this.graph_data.data_color
  }});

};




//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//





monogram.graph.RaphaelGraphItem.prototype.private_method_03 = function() {};

/**
 * sample_method_calls
 */
monogram.graph.RaphaelGraphItem.prototype.sample_method_calls = function() {
  monogram.graph.RaphaelGraphItem.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.graph.RaphaelGraphItem.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * @param {monogram.graph.Data} graph_data_param
 * @param {jQuery} element_param
 */
monogram.graph.RaphaelGraphItem.prototype.set_data_and_element = function(graph_data_param, element_param) {
  this.graph_data = graph_data_param;
  this.overlay_element = element_param;

  this.create_dots();
  this.create_graph();

  this.update_layout();     // temp...
};




//    _        _ __   _____  _   _ _____
//   | |      / \\ \ / / _ \| | | |_   _|
//   | |     / _ \\ V / | | | | | | | |
//   | |___ / ___ \| || |_| | |_| | | |
//   |_____/_/   \_\_| \___/ \___/  |_|
//

monogram.graph.RaphaelGraphItem.prototype.update_layout = function(){

  if (this.point_length == 0) {

    this.draw_empty_graph();

  } else {

    this.draw_graph();
  }

};


monogram.graph.RaphaelGraphItem.prototype.draw_graph = function(){

  var target_x = 0;
  var target_y = 0;

  this.temp_path_array = [];


  

  // move to first point
  // this.temp_path_array[this.temp_path_array.length] = 'M';
  this.temp_path_array[this.temp_path_array.length] = 'M';

  target_x = (this.center_x + (this.data_x[0] * this.display_percent[0]['p'])) * this.scale_factor;
  target_y = (this.center_y + (this.data_y[0] * this.display_percent[0]['p'])) * this.scale_factor;

  this.temp_path_array[this.temp_path_array.length] = target_x;
  this.temp_path_array[this.temp_path_array.length] = target_y;


  this.temp_path_array[this.temp_path_array.length] = 'Q';





  // starting from '1', plot out the other points

  for (var i = 1, l=this.point_length; i < l; i++) {
    
    target_x = (this.center_x + (this.data_x[i] * this.display_percent[i]['p'])) * this.scale_factor;
    target_y = (this.center_y + (this.data_y[i] * this.display_percent[i]['p'])) * this.scale_factor;

    this.temp_path_array[this.temp_path_array.length] = target_x;
    this.temp_path_array[this.temp_path_array.length] = target_y;

    // this.temp_path_array[this.temp_path_array.length] = target_x + 100;
    // this.temp_path_array[this.temp_path_array.length] = target_y + 100;
  }

  // last point is a 'z' meaning close path 
  this.temp_path_array[this.temp_path_array.length] = 'z';

  // console.log('path array:');
  // console.log(this.temp_path_array);

  this.graph_shape.attr({path: this.temp_path_array});

};

monogram.graph.RaphaelGraphItem.prototype.draw_empty_graph = function(){
  this.temp_path_array = [
    "M", 0,0,'z'
  ];

  this.graph_shape.attr({path: this.temp_path_array});

};




//       _    _   _ ___ __  __    _  _____ ___ ___  _   _
//      / \  | \ | |_ _|  \/  |  / \|_   _|_ _/ _ \| \ | |
//     / _ \ |  \| || || |\/| | / _ \ | |  | | | | |  \| |
//    / ___ \| |\  || || |  | |/ ___ \| |  | | |_| | |\  |
//   /_/   \_\_| \_|___|_|  |_/_/   \_\_| |___\___/|_| \_|
//




/**
 * @param  {Number} delay_param
 */
monogram.graph.RaphaelGraphItem.prototype.animate_in = function(delay_param){
  console.log('animate_in');
  if (goog.isDefAndNotNull(delay_param) == false) {
    delay_param = 0;
  }


  var expand_duration = 0;
  var duration = 0;
  var circular_delay = 0;

  for (var i = 0, l=this.point_length; i < l; i++) {

    expand_duration = 0.9;
    duration = 0.3;    
    circular_delay = Math.abs(Math.sin( (i / this.point_length) * 2 * Math.PI ) * 0.5);
        
    TweenMax.to(this.display_percent[i], expand_duration, {'p':1.1, ease: Quad.easeOut, delay:delay_param + circular_delay });
    TweenMax.to(this.display_percent[i], duration, {'p':1, ease: Sine.easeInOut, delay:expand_duration + delay_param + circular_delay});

  }


  this.display_object['p'] = 0;
  TweenMax.to(this.display_object, 3, {'p': 1, onUpdate: this.on_animate_update, onUpdateScope: this, delay:delay_param});


  TweenMax.to(this.graph_shape, 0, {raphael: {opacity: 0}, delay:delay_param});
  TweenMax.to(this.graph_shape, 1, {raphael: {opacity: 0.6}, ease: Quad.easeOut, delay:delay_param});

  // circle
    
  var circle_element = null;
  for (var i = 0, l=this.circle_array.length; i < l; i++) {
    circle_element = this.circle_array[i];

    TweenMax.to(circle_element, 0.5, {autoAlpha: 1, ease: Quad.easeOut, delay:delay_param + 0.9 + 0.5});
  }

};



/**
 * @param  {Number} delay_param
 */
monogram.graph.RaphaelGraphItem.prototype.animate_out = function(delay_param){
  console.log('animate_out')
  if (goog.isDefAndNotNull(delay_param) == false) {
    delay_param = 0;
  }

  var duration = 0;
  var circular_delay = 0;

  for (var i = 0, l=this.point_length; i < l; i++) {

    duration = 0.5;
    circular_delay = Math.abs(Math.sin( (i / this.point_length) * 2 * Math.PI ) * 0.2);

    TweenMax.to(this.display_percent[i], duration, {'p':0, ease: Sine.easeInOut, delay:delay_param + circular_delay});

  }


  this.display_object['p'] = 0;
  TweenMax.to(this.display_object, 1, {'p': 1, onUpdate: this.on_animate_update, onUpdateScope: this, delay:delay_param});


  TweenMax.to(this.graph_shape, 0.7, {raphael: {opacity: 0}, ease: Quad.easeOut, delay:delay_param});

  // circle
    
  var circle_element = null;
  for (var i = 0, l=this.circle_array.length; i < l; i++) {
    circle_element = this.circle_array[i];
    
    TweenMax.to(circle_element, 0.3, {autoAlpha: 0, ease: Quad.easeOut, delay:delay_param});
  }

};




monogram.graph.RaphaelGraphItem.prototype.instant_animate_in = function(){
  console.log('instant_animate_in');

  for (var i = 0, l=this.point_length; i < l; i++) {
    this.display_percent[i]['p'] = 1;
  }

  TweenMax.to(this.graph_shape, 0, {raphael: {opacity: 0.6}});
  this.update_layout();

  // circle
    
  var circle_element = null;
  for (var i = 0, l=this.circle_array.length; i < l; i++) {
    circle_element = this.circle_array[i];
    
    TweenMax.to(circle_element, 0.0, {autoAlpha: 1});
  }

};

monogram.graph.RaphaelGraphItem.prototype.instant_animate_out = function(){
  console.log('instant_animate_out');

  for (var i = 0, l=this.point_length; i < l; i++) {
    this.display_percent[i]['p'] = 0;
  }

  TweenMax.to(this.graph_shape, 0, {raphael: {opacity: 0}});
  this.update_layout();

  // circle
    
  var circle_element = null;
  for (var i = 0, l=this.circle_array.length; i < l; i++) {
    circle_element = this.circle_array[i];
    
    TweenMax.to(circle_element, 0.0, {autoAlpha: 0});
  }
};



//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//


monogram.graph.RaphaelGraphItem.prototype.on_animate_update = function() {
  this.update_layout();
};
