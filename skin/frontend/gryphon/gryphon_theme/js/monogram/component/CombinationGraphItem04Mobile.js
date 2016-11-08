goog.provide('monogram.component.CombinationGraphItem04Mobile');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {paper} 
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.component.CombinationGraphItem04Mobile = function(options, paper) {

  goog.events.EventTarget.call(this);
  this.options = $j.extend({}, monogram.component.CombinationGraphItem04Mobile.DEFAULT, options);
  this.paper = paper;

  this.score_array = [];

  // this.decorative_x = [];
  // this.decorative_y = [];
  
  this.new_decorative_x = [];
  this.new_decorative_y = [];

  this.new_decorative_circle_x = [];
  this.new_decorative_circle_y = [];

  this.data_x = [];
  this.data_y = [];

  this.displayed_data_x = [];
  this.displayed_data_y = [];
  this.displayed_i = [];

  this.displayed_circle_x = [];
  this.displayed_circle_y = [];


  this.displayed_data_percent = [];
  this.displayed_data_object = {
    percent: 0
  };

  this.i = 0;


  this.path_array = [];

  this.is_visible = false;

  this.fill_color = this.options['fill_color'];

  this.graph_angle_array = [];
  this.graph_angle_mid_array = [];
  this.original_center_x = 0;
  this.original_center_y = 0;


  this.path_shape = this.paper.path().attr({stroke: "none", fill: this.fill_color, opacity: 0.6});


  this.path_array = ["M", 0, 0].concat(['z']);
  this.path_shape.attr({path: this.path_array});



  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(monogram.component.CombinationGraphItem04Mobile, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
monogram.component.CombinationGraphItem04Mobile.DEFAULT = {
  'fill_color': '#b3c5cd',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.CombinationGraphItem04Mobile.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.CombinationGraphItem04Mobile.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.component.CombinationGraphItem04Mobile.prototype.update_layout = function() {


  this.path_array = [];

  var target_x = 0;
  var target_y = 0;

  var decorative_x = 0;
  var decorative_y = 0;

  // without the first element
  for (var i = 1, l=this.displayed_data_x.length; i < l; i++) {


    target_x = (this.displayed_data_x[i] * this.displayed_data_percent[i].x) + 
               (this.displayed_circle_x[i] * (1-this.displayed_data_percent[i].x)) +
                this.original_center_x;

    target_y = (this.displayed_data_y[i] * this.displayed_data_percent[i].y) + 
               (this.displayed_circle_y[i] * (1-this.displayed_data_percent[i].y)) + 
                this.original_center_y;

    decorative_x = (this.new_decorative_x[i] * this.displayed_data_percent[i].x) + 
                   (this.new_decorative_circle_x[i] * (1-this.displayed_data_percent[i].x)) + 
                    this.original_center_x;

    decorative_y = (this.new_decorative_y[i] * this.displayed_data_percent[i].y) + 
                   (this.new_decorative_circle_y[i] * (1-this.displayed_data_percent[i].y)) + 
                    this.original_center_y;


    
    
    

    this.path_array.push(
      target_x, 
      target_y
    );
    
    this.path_array.push(
      decorative_x, 
      decorative_y
    );

  }

  // plain
  // path_array = ["M", this.data_x[0], this.data_y[0], "R"].concat(path_array).concat(['z']);
  
  // decorated
  // this.path_array = ["M", this.data_x[0], this.data_y[0], "R", this.decorative_x[0], this.decorative_y[0]].concat(this.path_array).concat(['z']);
  

  var first_target_x = 0;
  var first_target_y = 0;

  var first_decorative_x = 0;
  var first_decorative_y = 0;

  
  if(this.path_array.length != 0){

    // new decorated
    this.path_array = [
      "M", 
      (this.displayed_data_x[0] * this.displayed_data_percent[0].x) + this.original_center_x, 
      (this.displayed_data_y[0] * this.displayed_data_percent[0].y) + this.original_center_y, 
      "R", 
      (this.new_decorative_x[0] * this.displayed_data_percent[0].x) + this.original_center_x, 
      (this.new_decorative_y[0] * this.displayed_data_percent[0].y) + this.original_center_y
    ].concat(this.path_array).concat(['z']);


    this.path_shape.attr({path: this.path_array});
  } else {
    this.path_array = [
      "M", 0,0,'z'
    ];
    this.path_shape.attr({path: this.path_array});
  }

};
monogram.component.CombinationGraphItem04Mobile.prototype.private_method_02 = function() {};
monogram.component.CombinationGraphItem04Mobile.prototype.private_method_03 = function() {};
monogram.component.CombinationGraphItem04Mobile.prototype.private_method_04 = function() {};
monogram.component.CombinationGraphItem04Mobile.prototype.private_method_05 = function() {};
monogram.component.CombinationGraphItem04Mobile.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monogram.component.CombinationGraphItem04Mobile.prototype.sample_method_calls = function() {
  monogram.component.CombinationGraphItem04Mobile.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.component.CombinationGraphItem04Mobile.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * @param {Array.<Number>} score_param
 */
monogram.component.CombinationGraphItem04Mobile.prototype.set_score = function(score_param) {

  this.score_array = score_param;


  var target_x = 0;
  var target_y = 0;

  var circle_x = 0;
  var circle_y = 0;


  // clear the tables
  this.displayed_data_x = [];
  this.displayed_data_y = [];
  this.displayed_i = [];

  this.displayed_circle_x = [];
  this.displayed_circle_y = [];

  this.displayed_data_percent = [];

  this.new_decorative_x = [];
  this.new_decorative_y = [];

  this.new_decorative_circle_x = [];
  this.new_decorative_circle_y = [];


  for (var i = 0, l=this.score_array.length; i < l; i++) {

    // graph_angle = this.graph_angle_array[i];
    graph_angle = this.graph_angle_mid_array[i];



    ////////////////////////////////
    // decoration start
    // 
    var next_index = i + 1;
    next_index = next_index >= this.score_array.length ? 0 : next_index;

    // var next_score = this.score_array[next_index];
    // var decorative_score = ((this.score_array[i] + this.score_array[next_index]) / 2) * 0.7;

    var temp_angle = this.graph_angle_array[next_index];

    // var target_length = 

    // target_x = (Math.cos(temp_angle) * ((decorative_score + 1) * 20)) + this.original_center_x;
    // target_y = (Math.sin(temp_angle) * ((decorative_score + 1) * 20)) + this.original_center_y;    
    // this.decorative_x[i] = target_x;
    // this.decorative_y[i] = target_y;
    //
    // decoration end
    ////////////////////////////////

    /*
    var circle_shape = this.paper.circle(target_x, target_y, 10 );
    circle_shape.attr({
      fill: "#ff0000"
    });
    */
   



    target_x = (Math.cos(graph_angle) * ((this.score_array[i]) * 20));// + this.original_center_x;
    target_y = (Math.sin(graph_angle) * ((this.score_array[i]) * 20));// + this.original_center_y;

    circle_x = (Math.cos(graph_angle) * (2 * 20));
    circle_y = (Math.sin(graph_angle) * (2 * 20));

    this.data_x[i] = target_x;
    this.data_y[i] = target_y;

    if(this.score_array[i] != 0){
      this.displayed_data_x.push(target_x);
      this.displayed_data_y.push(target_y);
      this.displayed_i.push(i);

      this.displayed_circle_x.push(circle_x);
      this.displayed_circle_y.push(circle_y);

    }

    /*
    // for debugging purposes
    var circle_shape = this.paper.circle(target_x + this.original_center_x, target_y + this.original_center_y, 5 );
    circle_shape.attr({
      stroke: "none",
      fill: "#ff0000",
      opacity: 0.7
    });
    */

    
  }







  var target_x = 0;
  var target_y = 0;
  var target_i = 0;
  

  for (var i = 0, l=this.displayed_data_x.length; i < l; i++) {
    target_x = this.displayed_data_x[i];
    target_y = this.displayed_data_y[i];
    target_i = this.displayed_i[i];

    var next_index = i + 1;
    next_index = next_index >= this.displayed_data_x.length ? 0 : next_index;

    next_x = this.displayed_data_x[next_index];
    next_y = this.displayed_data_y[next_index];

    var graph_mid_point = {
      x: (target_x + next_x) / 2,
      y: (target_y + next_y) / 2
    };
    var graph_mid_angle = Math.atan2(graph_mid_point.y, graph_mid_point.x);
    //console.log('graph_mid_angle: ' + graph_mid_angle) ;
    

    
    
    var next_i = this.displayed_i[next_index];
    var score = this.score_array[target_i];
    var next_score = this.score_array[next_i];
    // var decorative_score = ((score + next_score) / 2) * 0.7;
    var decorative_score = ((score + next_score) / 2) * 0.5;
    //console.log('decorative_score: ' + decorative_score);
    

    var mid_x = (Math.cos(graph_mid_angle) * decorative_score * 20);// + this.original_center_x;
    var mid_y = (Math.sin(graph_mid_angle) * decorative_score * 20);// + this.original_center_y;

    this.new_decorative_x[i] = mid_x;
    this.new_decorative_y[i] = mid_y;


    this.new_decorative_circle_x[i] = (Math.cos(graph_mid_angle) * 2 * 20);
    this.new_decorative_circle_y[i] = (Math.sin(graph_mid_angle) * 2 * 20);

    this.displayed_data_percent[i] = {
      x: 0,
      y: 0
    };

    /*
    // for debugging purposes
    var circle_shape = this.paper.circle(mid_x + this.original_center_x, mid_y + this.original_center_y, 5 );
    circle_shape.attr({
      stroke: "none",
      fill: "#00ff00",
      opacity: 0.7
    });
    */


  }


  


};




/**
 * @param {String} color_param
 */
monogram.component.CombinationGraphItem04Mobile.prototype.set_fill_color = function(color_param) {          // this doesn't work..
  this.fill_color = color_param;
  // this.path_shape = this.paper.path().attr({fill: this.fill_color});     // this alone doesn't work
  
  //this.paper.path().attr({stroke: "none", fill: this.fill_color, opacity: 0.6});
  
  TweenMax.to(this.path_shape, 0.0, {raphael:{
    fill: this.fill_color
  }});
};


/**
 * @param  {Number} delay_param
 */
monogram.component.CombinationGraphItem04Mobile.prototype.animate_in = function(delay_param) {
  // this.update_layout();
  
  if(this.is_visible == false){
    this.is_visible = true;


    if (goog.isDefAndNotNull(delay_param) == false) {
      delay_param = 0;
    }


    for (var i = 0, l=this.displayed_data_percent.length; i < l; i++) {

      // var duration = 0.4 * Math.random() * 0.6 * 3;
      // var expand_duration = 0.4 + (Math.random() * 0.3);
      // var expand_duration = 0.8 + (Math.random() * 0.3);
      // var duration = 0.5;
      // 0.4 * Math.random() * 0.6 * 3;
      
      var expand_duration = 0.9 + (Math.random() * 0.5);
      var duration = 0.5;

      //TweenMax.to(this.displayed_data_percent[i], duration, {x:1,y:1, ease: Sine.easeInOut});
      //
      // TweenMax.to(this.displayed_data_percent[i], expand_duration, {x:1.1,y:1.1, ease: Quad.easeOut, delay:delay_param});
      // TweenMax.to(this.displayed_data_percent[i], duration, {x:1,y:1, ease: Sine.easeInOut, delay:expand_duration + delay_param});

      // TweenMax.to(this.displayed_data_percent[i], expand_duration, {x:1,y:1, ease: Sine.easeInOut, delay: delay_param});
      
      
      //TweenMax.to(this.displayed_data_percent[i], expand_duration, {x:1.1,y:1.1, ease: Quad.easeOut, delay:delay_param});
      TweenMax.to(this.displayed_data_percent[i], expand_duration, {x:1.1,y:1.1, ease: Quad.easeOut, delay:delay_param});
      TweenMax.to(this.displayed_data_percent[i], duration, {x:1,y:1, ease: Sine.easeInOut, delay:expand_duration + delay_param});

      
    }


    this.displayed_data_object = {
      percent: 0
    };
    TweenMax.to(this.displayed_data_object, 3, {percent: 1, onUpdate: this.on_animate_update, onUpdateScope: this, delay:delay_param});
    
    /*
    if(this.i == 0) {
      TweenMax.to(this.path_shape, 0, {raphael: {rotation: 30}});
    } else if(this.i == 0) {
      TweenMax.to(this.path_shape, 0, {raphael: {rotation: -30}});
    }

    TweenMax.to(this.path_shape, 1, {raphael: {rotation: 0}});
    */
    TweenMax.to(this.path_shape, 0, {raphael: {opacity: 0}, delay:delay_param});
    TweenMax.to(this.path_shape, 1, {raphael: {opacity: 0.6}, ease: Quad.easeOut, delay:delay_param});
  }


};
monogram.component.CombinationGraphItem04Mobile.prototype.animate_out = function(delay_param) {

  if(this.is_visible == true){
    this.is_visible = false;
    
    if (goog.isDefAndNotNull(delay_param) == false) {
      delay_param = 0;
    }

    for (var i = 0, l=this.displayed_data_percent.length; i < l; i++) {

      // var duration = 0.4 * Math.random() * 0.6 * 3;
      //var duration = 0.5 + (Math.random() * 0.2);
      //var duration = 0.6 + i*0.03;
      // var duration = 0.35 + (Math.random() * 0.15);
      var duration = 0.5 + (Math.random() * 0.2);
      var expand_duration = 0.2 + (Math.random() * 0.1);

      // TweenMax.to(this.displayed_data_percent[i], duration, {x:0,y:0, ease: Back.easeIn});
      // 
      // TweenMax.to(this.displayed_data_percent[i], expand_duration, {x:1.1,y:1.1, ease: Quad.easeOut, delay: delay_param});
      //
      TweenMax.to(this.displayed_data_percent[i], duration, {x:0,y:0, ease: Sine.easeInOut, delay:delay_param});
      
    }


    this.displayed_data_object = {
      percent: 0
    };
    TweenMax.to(this.displayed_data_object, 1, {percent: 1, onUpdate: this.on_animate_update, onUpdateScope: this, delay: delay_param});


    TweenMax.to(this.path_shape, 0.7, {raphael: {opacity: 0.0}, ease: Quad.easeIn, delay: delay_param});
  }

};


//    ___ _   _ ____ _____  _    _   _ _____
//   |_ _| \ | / ___|_   _|/ \  | \ | |_   _|
//    | ||  \| \___ \ | | / _ \ |  \| | | |
//    | || |\  |___) || |/ ___ \| |\  | | |
//   |___|_| \_|____/ |_/_/   \_\_| \_| |_|
//


monogram.component.CombinationGraphItem04Mobile.prototype.instant_show = function() {
  if(this.is_visible == false){
    this.is_visible = true;
    for (var i = 0, l=this.displayed_data_percent.length; i < l; i++) {
      this.displayed_data_percent[i].x = 1;
      this.displayed_data_percent[i].y = 1;
    }

    TweenMax.to(this.path_shape, 0, {raphael: {opacity: 0.6}});
    this.update_layout();
  }
};

monogram.component.CombinationGraphItem04Mobile.prototype.instant_hide = function() {
  if(this.is_visible == true){
    this.is_visible = false;
    
    for (var i = 0, l=this.displayed_data_percent.length; i < l; i++) {
      this.displayed_data_percent[i].x = 0;
      this.displayed_data_percent[i].y = 0;
    }
    

    TweenMax.to(this.path_shape, 0, {raphael: {opacity: 0.0}});

    this.update_layout();
  }
};


//    ____   ___  _   _ _   _  ____ _____
//   | __ ) / _ \| | | | \ | |/ ___| ____|
//   |  _ \| | | | | | |  \| | |   |  _|
//   | |_) | |_| | |_| | |\  | |___| |___
//   |____/ \___/ \___/|_| \_|\____|_____|
//

monogram.component.CombinationGraphItem04Mobile.prototype.bounce = function(delay_param){

  if (goog.isDefAndNotNull(delay_param) == false) {
    delay_param = 0;
  }

  for (var i = 0, l=this.displayed_data_percent.length; i < l; i++) {
    //var expand_duration = 0.9 + (Math.random() * 0.5);
    // var expand_duration = 0.5 + (Math.random() * 0.3);
    var expand_duration = (0.5 + (Math.random() * 0.3)) * 2;
    //var duration = 0.5;
    var expand_01 = expand_duration * 0.3;
    var expand_02 = expand_duration * 0.7;
    var duration = (0.4) * 2;


    //TweenMax.to(this.displayed_data_percent[i], expand_duration, {x:1.2,y:1.2, ease: Back.easeIn, delay:delay_param});
    
    TweenMax.to(this.displayed_data_percent[i], expand_01, {x:0.8,y:0.8, ease: Sine.easeIn, delay:delay_param});
    TweenMax.to(this.displayed_data_percent[i], expand_02, {x:1.2,y:1.2, ease: Sine.easeInOut, delay:delay_param + expand_01});

    TweenMax.to(this.displayed_data_percent[i], duration, {x:1,y:1, ease: Sine.easeInOut, delay:expand_duration + delay_param});
  }

  this.displayed_data_object = {
    percent: 0
  };
  TweenMax.to(this.displayed_data_object, 3, {percent: 1, onUpdate: this.on_animate_update, onUpdateScope: this, delay:delay_param});



  // TweenMax.to(this.path_shape, 0, {raphael: {opacity: 0.3}, delay:delay_param + 0.3});
  // TweenMax.to(this.path_shape, 1, {raphael: {opacity: 0.6}, ease: Quad.easeOut, delay:delay_param + 0.3});
  
};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//


monogram.component.CombinationGraphItem04Mobile.prototype.on_animate_update = function() {
  this.update_layout();
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.CombinationGraphItem04Mobile.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.CombinationGraphItem04Mobile.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.CombinationGraphItem04Mobile.prototype.on_event_handler_04 = function(event) {
};

