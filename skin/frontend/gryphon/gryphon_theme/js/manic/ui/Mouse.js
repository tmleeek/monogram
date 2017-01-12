// needs mousewheeel
// 


goog.provide('manic.ui.Mouse');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Mouse constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.Mouse = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $j.extend({}, manic.ui.Mouse.DEFAULT, options);
  this.element = element;


  // mouse related variables
  this.is_mouse_down = false;

  this.document_mouse_x = 0;
  this.document_mouse_y = 0;

  this.mousedown_x = 0;
  this.mousedown_y = 0;
  this.mouseup_x = 0;
  this.mouseup_y = 0;

  this.mousemove_x = 0;
  this.mousemove_y = 0;



  this.is_updating = false;

  this.update_delay =     this.options['update_delay'];
  this.exception_array =  this.options['exception_array'];



  this.mouseup_time = 0;
  this.mousedown_time = 0;


  this.map_x = 0;
  this.map_y = 0;
  this.mousedown_map_x = 0;
  this.mousedown_map_y = 0;

  this.document_element = $j(document);


  this.mouse_scroll_array = [
    {x:0,y:0, time: new Date()},
    {x:0,y:0, time: new Date()},
    {x:0,y:0, time: new Date()},
    {x:0,y:0, time: new Date()},
    {x:0,y:0, time: new Date()}
  ];





  if(manic.IS_ACTUAL_MOBILE == false) {
    this.element.mousedown(this.on_mousedown.bind(this));
    this.document_element.on('mousemove', this.on_document_mousemove.bind(this));

    this.element.on('mousewheel', this.on_mousewheel.bind(this));
  } else {
    this.element.on('vmousedown', this.on_mousedown_mobile.bind(this));
    this.document_element.on('vmousemove', this.on_document_mousemove_mobile.bind(this));
  }



  

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(manic.ui.Mouse, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Mouse
 * @const {object}
 */
manic.ui.Mouse.DEFAULT = {

  // 'update_delay': 1.8,
  /// 'update_delay': 0.5,
  
  'update_delay': 1.4,

  'exception_array': []
};

/**
 * Mouse Event Constant
 * @const
 * @type {string}
 */
manic.ui.Mouse.SWIPE_UP = 'swipe_up';

/**
 * Mouse Event Constant
 * @const
 * @type {string}
 */
manic.ui.Mouse.SWIPE_DOWN = 'swipe_down';

/**
 * Mouse Event Constant
 * @const
 * @type {string}
 */
manic.ui.Mouse.SWIPE_LEFT = 'swipe_left';

/**
 * Mouse Event Constant
 * @const
 * @type {string}
 */
manic.ui.Mouse.SWIPE_RIGHT = 'swipe_right';

/**
 * Mouse Event Constant
 * @const
 * @type {string}
 */
manic.ui.Mouse.SCROLL_UP = 'scroll_up';

/**
 * Mouse Event Constant
 * @const
 * @type {string}
 */
manic.ui.Mouse.SCROLL_DOWN = 'scroll_down';

/**
 * Mouse Event Constant
 * @const
 * @type {string}
 */
manic.ui.Mouse.SCROLL_LEFT = 'scroll_left';

/**
 * Mouse Event Constant
 * @const
 * @type {string}
 */
manic.ui.Mouse.SCROLL_RIGHT = 'scroll_right';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.Mouse.prototype.private_method_01 = function() {};
manic.ui.Mouse.prototype.private_method_02 = function() {};
manic.ui.Mouse.prototype.private_method_03 = function() {};
manic.ui.Mouse.prototype.private_method_04 = function() {};
manic.ui.Mouse.prototype.private_method_05 = function() {};
manic.ui.Mouse.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
manic.ui.Mouse.prototype.sample_method_calls = function() {
  manic.ui.Mouse.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(manic.ui.Mouse.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.Mouse.prototype.public_method_01 = function() {};
manic.ui.Mouse.prototype.public_method_02 = function() {};
manic.ui.Mouse.prototype.public_method_03 = function() {};
manic.ui.Mouse.prototype.update = function() {
  this.is_updating = true;
  // TweenMax.killDelayedCallsTo(this.on_update_complete);
  TweenMax.delayedCall(this.update_delay, this.on_update_complete, [], this);
};
manic.ui.Mouse.prototype.on_update_complete = function() {
  this.is_updating = false;
};


manic.ui.Mouse.prototype.check_swipe = function() {
  var diff = this.mouseup_time - this.mousedown_time;
  if(diff < 800){
    var diff_x = this.mouseup_x - this.mousedown_x;
    var diff_y = this.mouseup_y - this.mousedown_y;
    
    console.log('this.mousedown_map_x' + diff_x);
    console.log('this.mousedown_map_y' + diff_y);
    
    if(diff_y > 80){

      this.update();
      this.dispatchEvent(new goog.events.Event(manic.ui.Mouse.SWIPE_DOWN));
      return;
    } else if(diff_y < -80) {

      this.update();
      this.dispatchEvent(new goog.events.Event(manic.ui.Mouse.SWIPE_UP));
      
      return;
    }

    if(diff_x > 80){

      this.update();
      this.dispatchEvent(new goog.events.Event(manic.ui.Mouse.SWIPE_RIGHT));
      return;
    } else if(diff_x < -80) {

      this.update();
      this.dispatchEvent(new goog.events.Event(manic.ui.Mouse.SWIPE_LEFT));
      return;
    }


  }

};



/**
 * @param {Number} param_x
 * @param {Number} param_y
 */
manic.ui.Mouse.prototype.set_position = function(param_x, param_y) {
  //('set_position: x: ' + this.map_x);

  /*
  var max_x = this.map_width - this.container_width;
  var max_y = this.map_height - this.container_height;

  var target_x = param_x;

  //target_x += 265/2;

  target_x = target_x > 0 ? 0 : target_x;
  target_x = target_x < -max_x ? -max_x : target_x;

  var target_y = param_y;
  target_y = target_y > 0 ? 0 : target_y;
  target_y = target_y < -max_y ? -max_y : target_y;
  */

  this.map_x = param_x;
  this.map_y = param_y;
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
manic.ui.Mouse.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.Mouse.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.Mouse.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.Mouse.prototype.on_event_handler_04 = function(event) {
};
















//    __  __  ___  _   _ ____  _____   _______     _______ _   _ _____ ____
//   |  \/  |/ _ \| | | / ___|| ____| | ____\ \   / / ____| \ | |_   _/ ___|
//   | |\/| | | | | | | \___ \|  _|   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |  | | |_| | |_| |___) | |___  | |___  \ V / | |___| |\  | | |  ___) |
//   |_|  |_|\___/ \___/|____/|_____| |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * event handler
 * @param  {object} event
 */
manic.ui.Mouse.prototype.on_document_mousemove = function(event){
  //console.log('on_document_mousemove');
  if(this.is_mouse_down) {

    // console.log('on_mouse_move');

    this.document_mouse_x = event['pageX'];
    this.document_mouse_y = event['pageY'];

    this.mousemove_x = (this.document_mouse_x - this.mousedown_x);
    this.mousemove_y = (this.document_mouse_y - this.mousedown_y);

    this.set_position(
      this.mousedown_map_x + this.mousemove_x, 
      this.mousedown_map_y + this.mousemove_y
    );

  }
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.Mouse.prototype.on_mousedown = function(event) {

  /*
  var target = $j(event.target);
  for (var i = 0, l=this.exception_array.length; i < l; i++) {
    if ($j.contains(this.exception_array[i], target[0]) == true) {
      return;
    }
  }
  */
  
  console.log('mouse down');

  if(this.is_updating == false){
    event.preventDefault();

    this.mousedown_time = new Date(); //time in milliseconds

    //console.log('on_mousedown');
    this.is_mouse_down = true;

    this.mousedown_x = event['pageX'];
    this.mousedown_y = event['pageY'];

    this.mousedown_map_x = this.map_x;
    this.mousedown_map_y = this.map_y;

    // this.element.addClass('mouse-down-version');

    //this.document_element.off('mouseup', this.on_document_mouseup.bind(this));    // just in case
    //this.document_element.on('mouseup', this.on_document_mouseup.bind(this));
    this.document_element.one('mouseup', this.on_document_mouseup.bind(this));
  }


};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.Mouse.prototype.on_document_mouseup = function(event) {
  //console.log('on_document_mouseup');

  this.is_mouse_down = false;

  this.mousemove_x = 0;
  this.mousemove_y = 0;

  this.mouseup_x = event['pageX'];
  this.mouseup_y = event['pageY'];

  this.mouseup_time = new Date();

  this.check_swipe();

  // this.element.removeClass('mouse-down-version');
  // this.document_element.off('mouseup', this.on_document_mouseup.bind(this));

};




/**
 * event handler
 * @param  {object} event
 */
manic.ui.Mouse.prototype.on_mousewheel = function(event) {
  console.log('is_updating: ' + this.is_updating);


  var mouse_object = this.normalizeWheel(event);
  var xxx = mouse_object.spinX;
  var yyy = mouse_object.spinY;



  var current_time = new Date();

  this.mouse_scroll_array[0] = this.mouse_scroll_array[1]
  this.mouse_scroll_array[1] = this.mouse_scroll_array[2]
  this.mouse_scroll_array[2] = this.mouse_scroll_array[3]
  this.mouse_scroll_array[3] = this.mouse_scroll_array[4]
  this.mouse_scroll_array[4] = {
    x: xxx,
    y: yyy,
    time: new Date()
  };

  var total_xxx = 0;
  var total_yyy = 0;

  for (var i = 0, l=this.mouse_scroll_array.length; i < l; i++) {

    if(this.mouse_scroll_array[i].time > current_time - 800){
      total_xxx += this.mouse_scroll_array[i].x;
      total_yyy += this.mouse_scroll_array[i].y;
    }
  }
  

  console.log('xxx: ' + xxx);
  console.log('yyy: ' + yyy);
  
  console.log('total_xxx: ' + total_xxx);
  console.log('total_yyy: ' + total_yyy);



  // https://github.com/jquery/jquery-mousewheel/tree/4.0.x

  if (this.is_updating == false) {


    //var xxx = event['deltaX'] * event['deltaFactor'];
    //var yyy = event['deltaY'] * event['deltaFactor'];




    if (total_xxx >= 3) {
      this.update();
      this.dispatchEvent(new goog.events.Event(manic.ui.Mouse.SCROLL_LEFT));
      return;

    } else if (total_xxx <= -3) {
      this.update();
      this.dispatchEvent(new goog.events.Event(manic.ui.Mouse.SCROLL_RIGHT));
      return;
    }


    if( total_yyy >= 3 ) {
      /*
      var target_zoom = this.zoom_factor + 0.2;
      target_zoom = Math.round(target_zoom * 10) / 10;

      this.set_zoom(target_zoom);
      this.update_layout();
      */
      
      this.update();
      this.dispatchEvent(new goog.events.Event(manic.ui.Mouse.SCROLL_UP));
      return;


    } else if( total_yyy <= -3 ){
      //this.set_zoom(this.zoom_factor - 0.2);
      /*
      var target_zoom = this.zoom_factor - 0.2;
      target_zoom = Math.round(target_zoom * 10) / 10;

      this.set_zoom(target_zoom);
      this.update_layout();
      */
      
      this.update();
      this.dispatchEvent(new goog.events.Event(manic.ui.Mouse.SCROLL_DOWN));
      return;

    }

  }

};






// http://stackoverflow.com/questions/5527601/normalizing-mousewheel-speed-across-browsers

/**
 * event handler
 * @param  {object} event
 */
manic.ui.Mouse.prototype.normalizeWheel = function(event){

  // Reasonable defaults
  var PIXEL_STEP  = 10;
  var LINE_HEIGHT = 40;
  var PAGE_HEIGHT = 800;

  var sX = 0, sY = 0,       // spinX, spinY
      pX = 0, pY = 0;       // pixelX, pixelY

  // Legacy
  if ('detail'      in event) { sY = event.detail; }
  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

  // side scrolling on FF with DOMMouseScroll
  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) { pY = event.deltaY; }
  if ('deltaX' in event) { pX = event.deltaX; }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {          // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {                             // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

  return { spinX  : sX,
           spinY  : sY,
           pixelX : pX,
           pixelY : pY };
};



//    __  __  ___  ____ ___ _     _____   __  __  ___  _   _ ____  _____   _______     _______ _   _ _____ ____
//   |  \/  |/ _ \| __ )_ _| |   | ____| |  \/  |/ _ \| | | / ___|| ____| | ____\ \   / / ____| \ | |_   _/ ___|
//   | |\/| | | | |  _ \| || |   |  _|   | |\/| | | | | | | \___ \|  _|   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |  | | |_| | |_) | || |___| |___  | |  | | |_| | |_| |___) | |___  | |___  \ V / | |___| |\  | | |  ___) |
//   |_|  |_|\___/|____/___|_____|_____| |_|  |_|\___/ \___/|____/|_____| |_____|  \_/  |_____|_| \_| |_| |____/
//



/**
 * event handler
 * @param  {object} event
 */
manic.ui.Mouse.prototype.on_mousedown_mobile = function(event) {

  if(this.is_updating == false) {
    // event.preventDefault();

    // http://stackoverflow.com/questions/1360818/how-to-measure-the-milliseconds-between-mousedown-and-mouseup
    this.mousedown_time = new Date(); //time in milliseconds

    //console.log('on_mousedown');
    this.is_mouse_down = true;

    this.mousedown_x = event['pageX'];
    this.mousedown_y = event['pageY'];

    this.mousedown_map_x = this.map_x;
    this.mousedown_map_y = this.map_y;

    // this.document_element.off('vmouseup', this.on_document_mouseup_mobile.bind(this));
    // this.document_element.on('vmouseup', this.on_document_mouseup_mobile.bind(this));
    this.document_element.one('vmouseup', this.on_document_mouseup_mobile.bind(this));
  }
  
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.Mouse.prototype.on_document_mousemove_mobile = function(event) {
  if(this.is_mouse_down) {

    this.document_mouse_x = event['pageX'];
    this.document_mouse_y = event['pageY'];

    this.mousemove_x = (this.document_mouse_x - this.mousedown_x);
    this.mousemove_y = (this.document_mouse_y - this.mousedown_y);

    this.set_position(
      this.mousedown_map_x + this.mousemove_x,
      this.mousedown_map_y + this.mousemove_y
    );
    
    // this.update_layout(true);
    
  }
};


/**
 * event handler
 * @param  {object} event
 */
manic.ui.Mouse.prototype.on_document_mouseup_mobile = function(event) {
  this.is_mouse_down = false;

  this.mousemove_x = 0;
  this.mousemove_y = 0;

  this.mouseup_x = event['pageX'];
  this.mouseup_y = event['pageY'];

  this.mouseup_time = new Date();

  this.check_swipe();

  // this.document_element.off('vmouseup', this.on_document_mousemove_mobile.bind(this));
};
