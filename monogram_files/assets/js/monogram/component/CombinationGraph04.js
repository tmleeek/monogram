goog.provide('monogram.component.CombinationGraph04');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('monogram.component.CombinationGraphDataItem');

goog.require('monogram.component.CombinationGraphItem04');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.component.CombinationGraph04 = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, monogram.component.CombinationGraph04.DEFAULT, options);
  this.element = element;


  this.svg_element = this.element.find('#combination-graph-svg');


  this.scale_factor = this.options['scale_factor'];
  this.is_mobile = this.options['is_mobile'];
  

  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  this.main_data_item = null;

  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  this.sub_data_item = null;


  this.is_main_data_item_different = true;
  this.is_sub_data_item_different = true;


  

  this.original_center_x = 300 * this.scale_factor;
  this.original_center_y = 300 * this.scale_factor;
  this.original_width = 600 * this.scale_factor;
  this.original_height = 600 * this.scale_factor;


  /**
   * @type {monogram.component.CombinationGraphItem04}
   */
  this.graph_01 = null;

  /**
   * @type {monogram.component.CombinationGraphItem04}
   */
  this.graph_02 = null;


  /**
   * @type {monogram.component.CombinationGraphItem04}
   */
  this.graph_01b = null;

  /**
   * @type {monogram.component.CombinationGraphItem04}
   */
  this.graph_02b = null;

  
 

  
  this.graph_point_array = [];
  this.graph_angle_array = [];
  this.graph_angle_mid_array = [];


  this.line_array = [];
  this.circle_array = [];
  


  this.paper = Raphael(this.svg_element[0],this.original_width, this.original_height);


  this.create_lines();
  this.create_circles();

  // animate label
  this.graph_label = this.element.find('#combination-graph-label');
  TweenMax.to(this.graph_label, 0.5, {opacity:1, delay:3, ease: Circ.easeIn});
  


  this.create_index = 0;







  // this.create_graph_01();
  

  this.graph_01 = new monogram.component.CombinationGraphItem04({
    'scale_factor': this.scale_factor,
    'is_mobile': this.is_mobile
    //'fill_color': '#b3c5cd'
  }, this.paper);
  this.graph_01.i = 0;

  this.graph_01.graph_angle_array = this.graph_angle_array;
  this.graph_01.graph_angle_mid_array = this.graph_angle_mid_array;
  this.graph_01.original_center_x = this.original_center_x;
  this.graph_01.original_center_y = this.original_center_y;

  




  this.graph_01b = new monogram.component.CombinationGraphItem04({
    'scale_factor': this.scale_factor,
    'is_mobile': this.is_mobile
    //'fill_color': '#b3c5cd'
  }, this.paper);
  this.graph_01b.i = 0;

  this.graph_01b.graph_angle_array = this.graph_angle_array;
  this.graph_01b.graph_angle_mid_array = this.graph_angle_mid_array;
  this.graph_01b.original_center_x = this.original_center_x;
  this.graph_01b.original_center_y = this.original_center_y;







  this.graph_02 = new monogram.component.CombinationGraphItem04({
    'scale_factor': this.scale_factor,
    'is_mobile': this.is_mobile
    //'fill_color': '#bcc197'
  }, this.paper);

  this.graph_02.i = 1;

  this.graph_02.graph_angle_array = this.graph_angle_array;
  this.graph_02.graph_angle_mid_array = this.graph_angle_mid_array;
  this.graph_02.original_center_x = this.original_center_x;
  this.graph_02.original_center_y = this.original_center_y;







  this.graph_02b = new monogram.component.CombinationGraphItem04({
    'scale_factor': this.scale_factor,
    'is_mobile': this.is_mobile
    //'fill_color': '#bcc197'
  }, this.paper);

  this.graph_02b.i = 1;

  this.graph_02b.graph_angle_array = this.graph_angle_array;
  this.graph_02b.graph_angle_mid_array = this.graph_angle_mid_array;
  this.graph_02b.original_center_x = this.original_center_x;
  this.graph_02b.original_center_y = this.original_center_y;



  /*
  TweenMax.delayedCall(0.6 + 2, this.create_graph_01, [], this);
  TweenMax.delayedCall(0.6 + 5, this.create_graph_01_no, [], this);
  TweenMax.delayedCall(0.6 + 5.5, this.create_graph_02, [], this);
  TweenMax.delayedCall(0.6 + 8.5, this.create_graph_02_no, [], this);
  */



  







  










  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(monogram.component.CombinationGraph04, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
monogram.component.CombinationGraph04.DEFAULT = {
  'scale_factor': 1,
  'is_mobile': false
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.CombinationGraph04.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.CombinationGraph04.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.component.CombinationGraph04.prototype.create_lines = function() {

  
  /*
  this.graph_point_array = [
    {x: 0, y: -227},
    {x: 114, y: -198},
    {x: 189, y: -134},
    {x: 225, y: -40},
    {x: 198, y: 114},
    {x: 116, y: 198},
    {x: 41, y: 225},
    {x: -96, y: 207},
    {x: -185, y: 130},
    {x: -226, y: -20},
    {x: -113, y: -197}
  ];
  */

  this.graph_point_array = [
    {x: 0 * this.scale_factor, y: -227 * this.scale_factor},
    {x: 114 * this.scale_factor, y: -198 * this.scale_factor},
    {x: 189 * this.scale_factor, y: -134 * this.scale_factor},
    {x: 225 * this.scale_factor, y: -40 * this.scale_factor},
    {x: 198 * this.scale_factor, y: 114 * this.scale_factor},
    {x: 116 * this.scale_factor, y: 198 * this.scale_factor},
    {x: 41 * this.scale_factor, y: 225 * this.scale_factor},
    {x: -96 * this.scale_factor, y: 207 * this.scale_factor},
    {x: -185 * this.scale_factor, y: 130 * this.scale_factor},
    {x: -226 * this.scale_factor, y: -20 * this.scale_factor},
    {x: -113 * this.scale_factor, y: -197 * this.scale_factor}
  ];

  


  
  this.graph_angle_array = [];

  var graph_angle = 0;
  var graph_point = null;

  var graph_mid_point = {x:0, y:0};
  var graph_mid_angle = 0;
  var next_index = 0;
  var next_point = null;

  for (var i = 0, l=this.graph_point_array.length; i < l; i++) {
    graph_point = this.graph_point_array[i];
    //console.log('x: ' + graph_point.y + 'y: ' + graph_point.y);
    
    graph_angle = Math.atan2(graph_point.y, graph_point.x);
    
    this.graph_angle_array[i] = graph_angle;

    // get middle point and angle
    next_index = i + 1;
    next_index = next_index >= this.graph_point_array.length ? 0 : next_index;
    next_point = this.graph_point_array[next_index];
    graph_mid_point = {
      x: (graph_point.x + next_point.x) / 2,
      y: (graph_point.y + next_point.y) / 2
    };
    graph_mid_angle = Math.atan2(graph_mid_point.y, graph_mid_point.x);
    
    this.graph_angle_mid_array[i] = graph_mid_angle;

  }



  





  var target_x = 0;
  var target_y = 0;

  var line_shape = null;
  var line_path = [];

  for (var i = 0, l=this.graph_angle_array.length; i < l; i++) {
    graph_angle = this.graph_angle_array[i];
    target_x = (Math.cos(graph_angle) * 227 * this.scale_factor) + this.original_center_x;
    target_y = (Math.sin(graph_angle) * 227 * this.scale_factor) + this.original_center_y;

    line_shape = this.paper.path().attr({stroke: "#f1efee", opacity: 0.6});

    line_path = ["M", this.original_center_x, this.original_center_y, "L"].concat([target_x, target_y]);
    line_shape.attr({path: line_path});

    if (this.is_mobile == false) {
      TweenMax.to(line_shape, 0, {raphael:{opacity:0}});
    }
    // TweenMax.to(line_shape, 1.4, {raphael:{opacity:0.6}, ease: Sine.easeInOut, delay: 2.1 + i*0.07 });

    // TweenMax.to(line_shape, 0, {raphael:{scaleX: 0, scaleY: 0}});
    // TweenMax.to(line_shape, 0.5, {raphael:{scaleY: 1, scaleY: 1}, delay: 1.5 + i*0.1 });


    this.line_array[i] = line_shape;

  }







  
  // f1efee

  // draw lines
  
  
};
monogram.component.CombinationGraph04.prototype.create_circles = function() {

  var circle_shape = null;

  var target_opacity = 0;

  if (this.is_mobile == true) {
    target_opacity = 1;
  }

  for (var i = 0, l=10; i < l; i++) {
    circle_shape = this.paper.circle(this.original_center_x, this.original_center_y, (i+1) * 20 * this.scale_factor);
    circle_shape.attr({
      stroke: "#f1efee", 
      // opacity: 0.6, 
      opacity: target_opacity, 
      "stroke-width":1,
      "stroke-dasharray":". ",
    });

    /*
    TweenMax.to(circle_shape, 0, {raphael:{opacity:0}});
    TweenMax.to(circle_shape, 0.8, {raphael:{opacity:0.6}, ease: Sine.easeInOut, delay: 2 + i*0.1 });
    */

    this.circle_array[i] = circle_shape;

  }

};


monogram.component.CombinationGraph04.prototype.reanimate_lines = function(){
  
  var line_shape = null;

  var inc = 0.05;

  for (var i = 0, l=this.line_array.length; i < l; i++) {

    line_shape = this.line_array[i];

    // TweenMax.to(line_shape, 1.4, {raphael:{opacity:0.6}, ease: Sine.easeInOut, delay: 2.1 + i*0.07 });

    var custom_delay = (i * inc);
    //var custom_delay = (this.line_array.length * inc) * Math.random() * 0.8;

    TweenMax.to(line_shape, 0.9 , {raphael:{opacity:0.0}, delay: 0.1 });
    //TweenMax.to(line_shape, 0.8, {raphael:{opacity:0.6}, ease: Sine.easeInOut, delay: 0.9 + custom_delay });
    TweenMax.to(line_shape, 0.8, {raphael:{opacity:0.4}, ease: Sine.easeInOut, delay: 0.9 + custom_delay });

  }
  
};

monogram.component.CombinationGraph04.prototype.reanimate_circles = function(){
  var circle_shape = null;

  // var inc = 0.1;
  var inc = 0.05;

  for (var i = 0, l=this.circle_array.length; i < l; i++) {
    circle_shape = this.circle_array[i];


    var custom_delay = (this.circle_array.length * inc) - (i * inc);

    TweenMax.to(circle_shape, 0.3, {raphael:{opacity:0.05}, delay: custom_delay});
    TweenMax.to(circle_shape, 0.8, {raphael:{opacity:0.6}, ease: Sine.easeInOut, delay: 0.3 + (this.circle_array.length * inc) + (i * inc) });
  }
};















































monogram.component.CombinationGraph04.prototype.create_graph_01 = function() {
  
  /*
  8.5 wood 
  0.0 savoury
  0.0 herbaceous
  0.0 floral
  8.0 nutty 
  0.0 dairy
  0.0 minerality
  7.5 citrus 
  0.0 stone-fruit
  9.0 red-fruit
  0.0 sweet
  */


  // this.graph_01.set_score([9,5.5,4.5,6.5,9,5,6,8.5,5,9,6]);
  this.graph_01.set_score([8.5, 0.0, 0.0, 0.0, 8.0, 0.0, 0.0, 7.5, 0.0, 9.0, 0.0]);

  // this.graph_01.update_layout();
  this.graph_01.animate_in();
  this.graph_01.set_fill_color('#b3c5cd');




  //console.log('path_array: ' + path_array);

  /*
  0.0 wood
  0.0 savoury
  8.5 herbaceous
  0.0 floral
  0.0 nutty
  8.0 dairy
  0.0 minerality
  0.0 citrus
  0.0 stone-fruit
  0.0 red-fruit
  8.5 sweet
  */
  
  

  // this.graph_02.set_score([5.5,5.5,9.5,5.5,6,9,7,5.5,4,5,8.5]);
  this.graph_02.set_score([0.0, 0.0, 8.5, 0.0, 0.0, 8.0, 0.0, 0.0, 3.0, 0.0, 8.5]);
  // this.graph_02.update_layout();
  this.graph_02.animate_in(0.3);
  this.graph_02.set_fill_color('#bcc197');
  



};


monogram.component.CombinationGraph04.prototype.create_graph_01_no = function(){
  this.graph_01.animate_out(0.1);
  this.graph_02.animate_out();
};

monogram.component.CombinationGraph04.prototype.create_graph_02 = function() {


  this.graph_01b.set_score([0.0, 0.0, 8.0, 0.0, 5.0, 0.0, 6.5, 0.0, 8.5, 0.0, 0.0]);
  // this.graph_01.update_layout();
  this.graph_01b.animate_in();
  this.graph_01b.set_fill_color('#c7874d');




  this.graph_02b.set_score([9.0, 0.0, 0.0, 6.0, 0.0, 0.0, 7.0, 0.0, 0.0, 9.0, 0.0]);
  // this.graph_02.update_layout();
  this.graph_02b.animate_in(0.3);
  this.graph_02b.set_fill_color('#9f90b6');

};


monogram.component.CombinationGraph04.prototype.create_graph_02_no = function(){
  this.graph_01b.animate_out(0.1);
  this.graph_02b.animate_out();

  /*
  TweenMax.delayedCall(2, this.create_graph_01, [], this);
  TweenMax.delayedCall(5, this.create_graph_01_no, [], this);
  TweenMax.delayedCall(7, this.create_graph_02, [], this);
  TweenMax.delayedCall(10, this.create_graph_02_no, [], this);
  */
  
  /*
  TweenMax.delayedCall(2 - 1.5, this.create_graph_01, [], this);
  TweenMax.delayedCall(5 - 1.5, this.create_graph_01_no, [], this);
  TweenMax.delayedCall(5.5 - 1.5, this.create_graph_02, [], this);
  TweenMax.delayedCall(8.5 - 1.5, this.create_graph_02_no, [], this);
  */

};

monogram.component.CombinationGraph04.prototype.private_method_05 = function() {};
monogram.component.CombinationGraph04.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monogram.component.CombinationGraph04.prototype.sample_method_calls = function() {
  monogram.component.CombinationGraph04.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.component.CombinationGraph04.EVENT_01));
};






















//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * @param {monogram.component.CombinationGraphDataItem} main_data_param
 * @param {monogram.component.CombinationGraphDataItem} child_data_param
 */
monogram.component.CombinationGraph04.prototype.set_main_child_data = function(main_data_param, child_data_param) {

  
  

  // check if same

  this.is_main_data_item_different = true;
  this.is_sub_data_item_different = true;

  if (goog.isDefAndNotNull(this.main_data_item) == false) {
    this.is_main_data_item_different = true;
  } else if(this.main_data_item.data_id == main_data_param.data_id) {
    this.is_main_data_item_different = false;
  }


  if (goog.isDefAndNotNull(this.sub_data_item) == false) {
    this.is_sub_data_item_different = true;
  } else if (this.sub_data_item.data_id == child_data_param.data_id) {
    this.is_sub_data_item_different = false;
  }

  

  this.main_data_item = main_data_param;
  this.sub_data_item = child_data_param;


  /*
  if( this.create_index%2 == 0){
    TweenMax.delayedCall(0.1, this.hide_actual_02, [], this);
    TweenMax.delayedCall(0.6, this.create_actual_01, [], this);
  } else {
    TweenMax.delayedCall(0.1, this.hide_actual_01, [], this);
    TweenMax.delayedCall(0.6, this.create_actual_02, [], this);
  }
  */

  if (this.is_mobile == false) {
    this.reanimate_lines();
    this.reanimate_circles();
  }



  if( this.create_index%2 == 0){

    if (this.is_main_data_item_different == true) {

      TweenMax.delayedCall(0.1, this.hide_actual_02_main, [], this);
      TweenMax.delayedCall(0.1, this.hide_actual_02_sub, [], this);
      TweenMax.delayedCall(0.6, this.create_actual_01_main, [], this);
      TweenMax.delayedCall(0.6, this.create_actual_01_sub, [], this);

    } else {

      this.instant_hide_actual_02_main();
      this.instant_show_actual_01_main();
      TweenMax.delayedCall(0.2, this.reanimate_actual_01_main, [], this);

      TweenMax.delayedCall(0.1, this.hide_actual_02_sub, [], this);
      TweenMax.delayedCall(0.6, this.create_actual_01_sub, [], this);

    }

  } else {
    if (this.is_main_data_item_different == true) {

      TweenMax.delayedCall(0.1, this.hide_actual_01_main, [], this);
      TweenMax.delayedCall(0.1, this.hide_actual_01_sub, [], this);
      TweenMax.delayedCall(0.6, this.create_actual_02_main, [], this);
      TweenMax.delayedCall(0.6, this.create_actual_02_sub, [], this);

    } else {
      

      this.instant_hide_actual_01_main();
      this.instant_show_actual_02_main();
      TweenMax.delayedCall(0.2, this.reanimate_actual_02_main, [], this);

      TweenMax.delayedCall(0.1, this.hide_actual_01_sub, [], this);
      TweenMax.delayedCall(0.6, this.create_actual_02_sub, [], this);
    }

  }

  this.create_index++;



};







monogram.component.CombinationGraph04.prototype.hide_actual_01 = function() {

  // if (this.is_main_data_item_different == true) {
    this.graph_01.animate_out(0.1);
  // }

  // if (this.is_sub_data_item_different == true) {
    this.graph_02.animate_out();
  // }

};
monogram.component.CombinationGraph04.prototype.create_actual_01 = function() {

  // if (this.is_main_data_item_different == true) {
    this.graph_01.set_score(this.main_data_item.score_array);
    this.graph_01.animate_in();
    this.graph_01.set_fill_color(this.main_data_item.data_color);

  // }

  // if (this.is_sub_data_item_different == true) {
    this.graph_02.set_score(this.sub_data_item.score_array);
    this.graph_02.animate_in(0.3);
    this.graph_02.set_fill_color(this.sub_data_item.data_color);
    
  // }



};
monogram.component.CombinationGraph04.prototype.hide_actual_02 = function() {

  // if (this.is_main_data_item_different == true) {
    this.graph_01b.animate_out(0.1);
  // }

  // if (this.is_sub_data_item_different == true) {
    this.graph_02b.animate_out();
  // }

};
monogram.component.CombinationGraph04.prototype.create_actual_02 = function() {

  // if (this.is_main_data_item_different == true) {
    this.graph_01b.set_score(this.main_data_item.score_array);
    this.graph_01b.animate_in();
    this.graph_01b.set_fill_color(this.main_data_item.data_color);

  // }

  // if (this.is_sub_data_item_different == true) {
    this.graph_02b.set_score(this.sub_data_item.score_array);
    this.graph_02b.animate_in(0.3);
    this.graph_02b.set_fill_color(this.sub_data_item.data_color);
    
  // }



};



//    __  __  ___  ____ ___ _____ ___ _____ ____
//   |  \/  |/ _ \|  _ \_ _|  ___|_ _| ____|  _ \
//   | |\/| | | | | | | | || |_   | ||  _| | | | |
//   | |  | | |_| | |_| | ||  _|  | || |___| |_| |
//   |_|  |_|\___/|____/___|_|   |___|_____|____/
//






monogram.component.CombinationGraph04.prototype.hide_actual_01_main = function() {
  this.graph_01.animate_out(0.1);
};
monogram.component.CombinationGraph04.prototype.hide_actual_01_sub = function() {
  this.graph_02.animate_out();
};

monogram.component.CombinationGraph04.prototype.create_actual_01_main = function() {
  this.graph_01.set_score(this.main_data_item.score_array);
  this.graph_01.animate_in();
  this.graph_01.set_fill_color(this.main_data_item.data_color);
};
monogram.component.CombinationGraph04.prototype.create_actual_01_sub = function() {
  this.graph_02.set_score(this.sub_data_item.score_array);
  this.graph_02.animate_in(0.3);
  this.graph_02.set_fill_color(this.sub_data_item.data_color);
};





monogram.component.CombinationGraph04.prototype.hide_actual_02_main = function() {
  this.graph_01b.animate_out(0.1);
};
monogram.component.CombinationGraph04.prototype.hide_actual_02_sub = function() {
  this.graph_02b.animate_out();
};
monogram.component.CombinationGraph04.prototype.create_actual_02_main = function() {
  this.graph_01b.set_score(this.main_data_item.score_array);
  this.graph_01b.animate_in();
  this.graph_01b.set_fill_color(this.main_data_item.data_color);
};
monogram.component.CombinationGraph04.prototype.create_actual_02_sub = function() {
  this.graph_02b.set_score(this.sub_data_item.score_array);
  this.graph_02b.animate_in(0.3);
  this.graph_02b.set_fill_color(this.sub_data_item.data_color);
};





monogram.component.CombinationGraph04.prototype.instant_hide_actual_01_main = function() {
  console.log('instant_hide_actual_01_main');
  this.graph_01.instant_hide();
};
monogram.component.CombinationGraph04.prototype.instant_hide_actual_02_main = function() {
  console.log('instant_hide_actual_02_main');
  this.graph_01b.instant_hide();
};

monogram.component.CombinationGraph04.prototype.instant_show_actual_01_main = function() {
  console.log('instant_show_actual_01_main');
  this.graph_01.set_score(this.main_data_item.score_array);
  this.graph_01.set_fill_color(this.main_data_item.data_color);

  this.graph_01.instant_show();
};
monogram.component.CombinationGraph04.prototype.instant_show_actual_02_main = function() {
  console.log('instant_show_actual_02_main');
  this.graph_01b.set_score(this.main_data_item.score_array);
  this.graph_01b.set_fill_color(this.main_data_item.data_color);

  this.graph_01b.instant_show();
};

monogram.component.CombinationGraph04.prototype.reanimate_actual_01_main = function(){
  this.graph_01.bounce();
};
monogram.component.CombinationGraph04.prototype.reanimate_actual_02_main = function(){
  this.graph_01b.bounce();
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
monogram.component.CombinationGraph04.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.CombinationGraph04.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.CombinationGraph04.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.CombinationGraph04.prototype.on_event_handler_04 = function(event) {
};

