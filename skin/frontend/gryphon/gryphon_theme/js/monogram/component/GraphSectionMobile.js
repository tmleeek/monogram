goog.provide('monogram.component.GraphSectionMobile');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.Mouse');

goog.require('monogram.graph.Data');
goog.require('monogram.graph.CombinationGraph');

goog.require('monogram.graph.CombinationDataLoader');


/**
 * The GraphSection constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.component.GraphSectionMobile = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $j.extend({}, monogram.component.GraphSectionMobile.DEFAULT, options);
  this.element = element;

  console.log('monogram.component.GraphSectionMobile');
  console.log(this.element);


  this.is_enabled = false;



  /**
   * @type {manic.ui.Mouse}
   */
  this.custom_mouse = null;

  /**
   * @type {monogram.graph.CombinationDataLoader}
   */
  this.combination_data_loader = null;


  this.main_index = -1;
  this.sub_index = -1;

  /**
   * @type {Array.<monogram.graph.Data>}
   */
  this.main_array = [];

  /**
   * @type {Array.<monogram.graph.Data>}
   */
  this.sub_array = [];


  /**
   * @type {monogram.graph.Data}
   */
  this.main_data_item = null;

  /**
   * @type {monogram.graph.Data}
   */
  this.sub_data_item = null;



  // for animation purposes

  this.is_main_data_item_different = true;
  this.is_sub_data_item_different = true;



  this.graph_content_template = [
    '<div class="graph-selection-tea">',
      '<div class="graph-selection-tea-bg"></div>',
      '<h2>{htmlname}</h2>',
      '<div class="tea-copy-content">',
        '<p>{description}</p>',
      '</div>',
      '<div class="tea-detail tea-detail-01">',
        '<h4>Tea Type</h4>',
        '<p>{teatype}</p>',
      '</div>',
      '<div class="tea-detail tea-detail-02">',
        '<h4>Steeping Suggestion</h4>',
        '<p><span class="custom-icon steep-icon"></span>{temperature}</p>',
        '<p><span class="custom-icon time-icon"></span>{time}</p>',
      '</div>',
      '<a href="javascript:void(0);" data-id="{id}" class="add-to-cart arrow-cta">Add to cart</a>',
    '</div>'
  ].join('');



  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //



  // starts load on init
  this.combination_data_loader = new monogram.graph.CombinationDataLoader({}, $j('#monograph-combined-graph-data'));



  goog.events.listen(this.combination_data_loader, monogram.graph.CombinationDataLoader.ON_COMBINED_GRAPH_DATA_LOAD_COMPLETE, this.on_combined_data_loader_load_complete.bind(this));



  // this.create_mouse();
  this.create_graph();


  /*
  this.element.find('#graph-selection-next-tea-btn').click(function(event){
    this.goto_next_main();

  }.bind(this));
  this.element.find('#graph-selection-next-layering-btn').click(function(event){
    this.goto_next_sub();
  }.bind(this));
  */
  


  // TEMPORARY
  this.enable_graph();








  $j('.page-tea-layering-detail-next-suggestion-btn').click(function(event){
    event.preventDefault();
    this.goto_next_sub();
  }.bind(this));

  $j('#page-tea-layering-detail-next-arrow').click(function(event){
    this.goto_next_sub();
  }.bind(this));

  $j('#page-tea-layering-detail-prev-arrow').click(function(event){
    this.goto_prev_sub();
  }.bind(this));


  this.hammer = new Hammer($j('body')[0], {});
  this.hammer.on('swipeleft', function(event){
    this.goto_next_sub();
  }.bind(this));
  this.hammer.on('swiperight', function(event){
    this.goto_prev_sub();
  }.bind(this));




  console.log('init');
};
goog.inherits(monogram.component.GraphSectionMobile, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for GraphSection
 * @const {object}
 */
monogram.component.GraphSectionMobile.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * GraphSection Event Constant
 * @const
 * @type {string}
 */
monogram.component.GraphSectionMobile.ON_GRAPH_SECTION_READY = 'on_graph_section_ready';

/**
 * GraphSection Event Constant
 * @const
 * @type {string}
 */
monogram.component.GraphSectionMobile.EVENT_02 = '';



//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//


monogram.component.GraphSectionMobile.prototype.create_data_array = function(){

  // IMPORTANT
  this.combination_graph.create_gradient(this.combination_data_loader.graph_data_array);

  /**
   * @type {monogram.graph.Data}
   */
  var data_item = null;
  var id = '';

  //
  // create array of main (left side) teas
  //
  
  for (var i = 0, l=this.combination_data_loader.graph_data_array.length; i < l; i++) {
    data_item = this.combination_data_loader.graph_data_array[i];
    id = data_item.data_id;

    this.main_array[this.main_array.length] = data_item;
  }




  // 
  // create an 2D array references of the sub (right) teas
  // 
  

  /**
   * @type {monogram.graph.Data}
   */
  var sub_data_item = null;
  var sub_id = ''
  var sub_id_array = [];

  for (var i = 0, l=this.main_array.length; i < l; i++) {
    data_item = this.main_array[i];

    // check
    if (goog.isDefAndNotNull(data_item.data_pair_array) == false || data_item.data_pair_array.length == 0) {
      console.log('ERROR: monogram.component.GraphSectionMobile: sub_id_array not declared');
    }

    sub_id_array = data_item.data_pair_array;
    this.sub_array[i] = [];
    
    for (var j = 0, jl=sub_id_array.length; j < jl; j++) {
      sub_id = sub_id_array[j];
      sub_data_item = this.combination_data_loader.get_data_by_id(sub_id);

      this.sub_array[i][j] = sub_data_item;
    }

  }



};

monogram.component.GraphSectionMobile.prototype.create_mouse = function() {
  console.log('create_mouse');

  this.custom_mouse = new manic.ui.Mouse({
    // 'update_delay': 4
    //'exception_array':[
      //$j('#graph-selction-a .graph-selection-tea-slider')[0],
      //$j('#graph-selction-b .graph-selection-tea-slider')[0],
    //]
  }, this.element);

  goog.events.listen(this.custom_mouse, manic.ui.Mouse.SWIPE_UP, function(){
    console.log('manic.ui.Mouse.SWIPE_UP');
    this.goto_prev_sub();
  }.bind(this));
  goog.events.listen(this.custom_mouse, manic.ui.Mouse.SWIPE_DOWN, function(){
    console.log('manic.ui.Mouse.SWIPE_DOWN');
    this.goto_next_sub();
  }.bind(this));
  goog.events.listen(this.custom_mouse, manic.ui.Mouse.SWIPE_LEFT, function(){
    console.log('manic.ui.Mouse.SWIPE_LEFT');
    this.goto_prev_main();
  }.bind(this));
  goog.events.listen(this.custom_mouse, manic.ui.Mouse.SWIPE_RIGHT, function(){
    console.log('manic.ui.Mouse.SWIPE_RIGHT');
    this.goto_next_main();
  }.bind(this));


  goog.events.listen(this.custom_mouse, manic.ui.Mouse.SCROLL_UP, function(){
    console.log('manic.ui.Mouse.SCROLL_UP');
    this.goto_prev_sub();
  }.bind(this));
  goog.events.listen(this.custom_mouse, manic.ui.Mouse.SCROLL_DOWN, function(){
    console.log('manic.ui.Mouse.SCROLL_DOWN');
    this.goto_next_sub();
  }.bind(this));
  goog.events.listen(this.custom_mouse, manic.ui.Mouse.SCROLL_LEFT, function(){
    console.log('manic.ui.Mouse.SCROLL_LEFT');
    this.goto_prev_main();
  }.bind(this));
  goog.events.listen(this.custom_mouse, manic.ui.Mouse.SCROLL_RIGHT, function(){
    console.log('manic.ui.Mouse.SCROLL_RIGHT');
    this.goto_next_main();
  }.bind(this));

};





monogram.component.GraphSectionMobile.prototype.create_graph = function(){

  console.log('create_graph');
  console.log(this.element.find('#tea-layering-graph-mobile'));

  this.combination_graph = new monogram.graph.CombinationGraph({
    'scale_factor': 0.6333,
    'is_mobile': true
  }, this.element.find('#tea-layering-graph-mobile'));



};

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.component.GraphSectionMobile.prototype.private_method_01 = function() {};
monogram.component.GraphSectionMobile.prototype.private_method_02 = function() {};
monogram.component.GraphSectionMobile.prototype.private_method_03 = function() {};
monogram.component.GraphSectionMobile.prototype.private_method_04 = function() {};
monogram.component.GraphSectionMobile.prototype.private_method_05 = function() {};
monogram.component.GraphSectionMobile.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monogram.component.GraphSectionMobile.prototype.sample_method_calls = function() {
  monogram.component.GraphSectionMobile.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.component.GraphSectionMobile.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


monogram.component.GraphSectionMobile.prototype.public_method_01 = function() {};
monogram.component.GraphSectionMobile.prototype.public_method_02 = function() {};
monogram.component.GraphSectionMobile.prototype.public_method_03 = function() {};
monogram.component.GraphSectionMobile.prototype.public_method_04 = function() {};
monogram.component.GraphSectionMobile.prototype.public_method_05 = function() {};
monogram.component.GraphSectionMobile.prototype.public_method_06 = function() {};


monogram.component.GraphSectionMobile.prototype.enable_graph = function(){
  this.is_enabled = true;
};

monogram.component.GraphSectionMobile.prototype.disable_graph = function(){
  this.is_enabled = false;
};







//    ____ ___ ____  ____  _        _ __   __
//   |  _ \_ _/ ___||  _ \| |      / \\ \ / /
//   | | | | |\___ \| |_) | |     / _ \\ V /
//   | |_| | | ___) |  __/| |___ / ___ \| |
//   |____/___|____/|_|   |_____/_/   \_\_|
//

monogram.component.GraphSectionMobile.prototype.display_combination = function(main_str, child_str) {

  if(this.is_child_of_main(main_str, child_str)){

    var target_main_index = this.get_index_of_main_str(main_str);
    var target_sub_index = this.get_index_of_child_str(child_str, target_main_index);

    if(target_main_index == -1){
      target_main_index = 0;
      target_sub_index = 0;
    } else if(target_sub_index == -1){
      target_sub_index = 0;
    }

    console.log('target_main_index: ' + target_main_index);
    console.log('target_sub_index: ' + target_sub_index);

    this.display_combination_index(target_main_index, target_sub_index);

  }
  
};



/**
 * @param  {Number} main_index_param
 * @param  {Number} child_index_param
 */
monogram.component.GraphSectionMobile.prototype.display_combination_index = function(main_index_param, child_index_param) {

  // console.log('display_combination_index');

  if (this.is_enabled == true &&
      goog.isDefAndNotNull(this.main_array[main_index_param]) &&
      goog.isDefAndNotNull(this.sub_array[main_index_param]) &&
      goog.isDefAndNotNull(this.sub_array[main_index_param][child_index_param])){

    if( (this.main_index + '' + this.sub_index) != (main_index_param + '' + child_index_param) ){




      // check if same

      this.is_main_data_item_different = true;
      this.is_sub_data_item_different = true;

      if (goog.isDefAndNotNull(this.main_data_item) == false) {
        this.is_main_data_item_different = true;
      } else if(this.main_index == main_index_param) {
        this.is_main_data_item_different = false;
      }


      if (goog.isDefAndNotNull(this.sub_data_item) == false) {
        this.is_sub_data_item_different = true;
      } else if (this.sub_index == child_index_param) {
        this.is_sub_data_item_different = false;
      }




      this.main_index = main_index_param;
      this.sub_index = child_index_param;

      console.log('this.main_index ' + this.main_index);
      console.log('this.sub_index ' + this.sub_index);


      this.main_data_item = this.main_array[this.main_index];
      this.sub_data_item = this.sub_array[this.main_index][this.sub_index];







      var a_num = '' + (this.main_index + 1);
      var b_num = '' + (this.sub_index + 1);
      var a_total = '' + (this.main_array.length);
      var b_total = '' + (this.sub_array[this.main_index].length);
      

      $j('#tea-layering-detail-copy-section .graph-selection-title .number').html(b_num + ' / ' + b_total);
      

      

      /*


      // change text

      if (this.is_main_data_item_different == true) {
        $j('#graph-selction-a .graph-selection-tea').removeClass('animate-in');
      }

      
      // if (this.is_sub_data_item_different == true) {
        $j('#graph-selction-b .graph-selection-tea').removeClass('animate-in');
      // }
      

      

      var a_num = '' + (this.main_index + 1);
      var b_num = '' + (this.sub_index + 1);
      var a_total = '' + (this.main_array.length);
      var b_total = '' + (this.sub_array[this.main_index].length);

      a_num = a_num.length == 1 ? '0' + a_num : a_num;
      b_num = b_num.length == 1 ? '0' + b_num : b_num;
      a_total = a_total.length == 1 ? '0' + a_total : a_total;
      b_total = b_total.length == 1 ? '0' + b_total : b_total;

      $j('#graph-selction-a .graph-selection-title .number').html(a_num + ' / ' + a_total);
      $j('#graph-selction-b .graph-selection-title .number').html(b_num + ' / ' + b_total);

      var target_bg = this.hexToRgb('#766c67');
      console.log(target_bg);
      var target_bg_str = 'rgba(' + target_bg.r + ', ' + target_bg.g + ', ' + target_bg.b + ', 0.8)'

      if (this.is_main_data_item_different == true) {
        TweenMax.to($j('#graph-selction-a .graph-selection-content'), 0.5, {
          backgroundColor: target_bg_str,
          ease: Circ.easeOut
        });
      }

      // if (this.is_sub_data_item_different == true) {
        TweenMax.to($j('#graph-selction-b .graph-selection-content'), 0.5, {
          backgroundColor: target_bg_str,
          ease: Circ.easeOut
        });
      // }

      
      */

      

      $j('#graph-section-center-copy').removeClass('animate-in');





      if (this.combination_graph != null) {
        this.combination_graph.set_data_01(this.main_data_item);
        this.combination_graph.set_data_02(this.sub_data_item);
      }

      $j('#tea-layering-detail-copy-section').removeClass('animate-in');

      TweenMax.delayedCall(1, this.delayed_display_combination_index, [], this);

      
    }
    

  }

};


monogram.component.GraphSectionMobile.prototype.delayed_display_combination_index = function() {

  



  
  /*


  if (this.is_main_data_item_different == true) {
    
    $j('#graph-selction-a .graph-selection-content').empty();
    $j('#graph-selction-a .graph-selection-content').html(
        nano(this.graph_content_template, this.main_data_item.graph_section_data_obj)
      );


    $j('#graph-selction-a .graph-selection-tea').addClass('animate-in');


    var target_bg = this.hexToRgb(this.main_data_item.data_color);
    var target_bg_str = 'rgba(' + target_bg.r + ', ' + target_bg.g + ', ' + target_bg.b + ', 0.7)'

    TweenMax.to($j('#graph-selction-a .graph-selection-content'), 0.5, {
      backgroundColor: target_bg_str,
      ease: Circ.easeIn
    });

    TweenMax.to($j('#graph-selction-a .graph-selection-content h2'), 0, {
      color: this.main_data_item.data_color,
      ease: Circ.easeIn
    });

  } else {
    // $j('#graph-selction-a .graph-selection-tea').addClass('animate-in');
    // $j('#graph-selction-a .graph-selection-tea').removeClass('re-animate-in');
  }



  // if (this.is_sub_data_item_different == true) {

    $j('#graph-selction-b .graph-selection-content').empty();
    $j('#graph-selction-b .graph-selection-content').html(
      nano(this.graph_content_template, this.sub_data_item.graph_section_data_obj)
    );

    $j('#graph-selction-b .graph-selection-tea').addClass('animate-in');

    target_bg = this.hexToRgb(this.sub_data_item.data_color);
    target_bg_str = 'rgba(' + target_bg.r + ', ' + target_bg.g + ', ' + target_bg.b + ', 0.7)'

    TweenMax.to($j('#graph-selction-b .graph-selection-content'), 0.5, {
      backgroundColor: target_bg_str,
      ease: Circ.easeIn
    });
    TweenMax.to($j('#graph-selction-b .graph-selection-content h2'), 0, {
      color: this.sub_data_item.data_color,
      ease: Circ.easeIn
    });
  // }

  

  */

  
  // change description & title

  var target_combination_data_obj = this.combination_data_loader.get_combined_data_by_ids(this.main_data_item.data_id, this.sub_data_item.data_id);

  
  // console.log('target_combination_data_obj: ' + target_combination_data_obj);
  
  if (target_combination_data_obj != null) {
    // $j('#graph-section-center-copy p').html(target_combination_data_obj['description']);
    // $j('#graph-section-center-copy p').html(target_combination_data_obj['description']);
    
    $j('#tea-layering-detail-copy-section .tea-copy-content p').html(target_combination_data_obj['description']);
    
  }

  // change name


  /*
  var target_html = [
    this.main_data_item.data_html_name,
    ' <span style="color:#f1efee">+</span> ',
    this.sub_data_item.data_html_name
  ].join('');

  $j('#graph-section-center-copy h2').html(target_html);
  $j('#graph-section-center-copy').addClass('animate-in');
  */



  var name_01 = '' + this.main_data_item.data_html_name;
  var name_02 = '' + this.sub_data_item.data_html_name;

  $j('#tea-layering-detail-copy-section .graph-selection-tea-mobile #graph-selection-name-01 h2').html(name_01);
  $j('#tea-layering-detail-copy-section .graph-selection-tea-mobile #graph-selection-name-02 h2').html(name_02);

  $j('#tea-layering-detail-copy-section').addClass('animate-in');
  

  // change the cta url and name

  var target_url_01 = '' + this.main_data_item.data_url;
  var target_name_01 = 'see ' + this.main_data_item.data_name;

  var target_url_02 = '' + this.sub_data_item.data_url;
  var target_name_02 = 'see ' + this.sub_data_item.data_name;

  $j('#tea-layering-detail-copy-tea-detail-01-cta').attr('href',target_url_01).html(target_name_01);
  $j('#tea-layering-detail-copy-tea-detail-02-cta').attr('href',target_url_02).html(target_name_02);

  $j('#tea-layering-detail-copy-section .graph-selection-tea-mobile #graph-selection-name-01').attr('data-id', this.main_data_item.data_id);
  $j('#tea-layering-detail-copy-section .graph-selection-tea-mobile #graph-selection-name-02').attr('data-id', this.sub_data_item.data_id);

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
monogram.component.GraphSectionMobile.prototype.on_combined_data_loader_load_complete = function(event) {
  

  this.create_data_array();

  // this.display_combination('earl-grey-neroli', 'shiso-mint');

  this.dispatchEvent(new goog.events.Event(monogram.component.GraphSectionMobile.ON_GRAPH_SECTION_READY));
  

};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.GraphSectionMobile.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.GraphSectionMobile.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.GraphSectionMobile.prototype.on_event_handler_04 = function(event) {
};



//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//




monogram.component.GraphSectionMobile.prototype.goto_next_main = function() {
  
  if(this.is_enabled == true){
    var target_main_index = this.main_index + 1;
    target_main_index %= this.main_array.length;

    this.display_combination_index(target_main_index, 0);
    
  }
  
};
monogram.component.GraphSectionMobile.prototype.goto_prev_main = function() {
  if(this.is_enabled == true){
    var target_main_index = this.main_index - 1;
    target_main_index = target_main_index < 0 ? this.main_array.length - 1 : target_main_index;

    this.display_combination_index(target_main_index, 0);
  }
  
};
monogram.component.GraphSectionMobile.prototype.goto_next_sub = function() {
  if(this.is_enabled == true){
    var target_sub_index = this.sub_index + 1;
    target_sub_index %= this.sub_array[this.main_index].length;

    this.display_combination_index(this.main_index, target_sub_index);
  }
  
};
monogram.component.GraphSectionMobile.prototype.goto_prev_sub = function() {
  if(this.is_enabled == true){
    var target_sub_index = this.sub_index - 1;
    target_sub_index = target_sub_index < 0 ? this.sub_array[this.main_index].length - 1 : target_sub_index;

    this.display_combination_index(this.main_index, target_sub_index);
  }
  
};



/**
 * @param  {String}  main_str
 * @param  {String}  child_str
 * @return {Boolean}       [description]
 */
monogram.component.GraphSectionMobile.prototype.is_child_of_main = function(main_str, child_str) {

  if(goog.isDefAndNotNull(child_str) == false){
    child_str = '';
  }
  if(goog.isDefAndNotNull(main_str) == false){
    main_str = '';
  }

  var data_item = null;

  var temp_main_index = this.get_index_of_main_str(main_str);


  if (temp_main_index != -1) {
    var temp_sub_index = this.get_index_of_child_str(child_str, temp_main_index);

    if (temp_sub_index != -1) {
      return true;
    }
  }

  return false;
  
};



/**
 * @param  {String}  main_str
 * @return {Boolean}       [description]
 */
monogram.component.GraphSectionMobile.prototype.get_index_of_main_str = function(main_str){

  /**
   * @type {monogram.graph.Data}
   */
  var data_item = null;

  for (var i = 0, l=this.main_array.length; i < l; i++) {
    data_item = this.main_array[i];
    if(data_item.data_id == main_str) {
      return i;
    }
  }

  return -1;
};




/**
 * @param  {String}  child_str
 * @param  {Number}  main_index_param
 * @return {Boolean}       [description]
 */
monogram.component.GraphSectionMobile.prototype.get_index_of_child_str = function(child_str, main_index_param){

  if(goog.isDefAndNotNull(this.sub_array[main_index_param]) == false) {
    return -1;
  }

  /**
   * @type {monogram.graph.Data}
   */
  var data_item = null;

  for (var i = 0, l=this.sub_array[main_index_param].length; i < l; i++) {
    data_item = this.sub_array[main_index_param][i];
    if(data_item.data_id == child_str) {
      return i;
    }
  }

  return -1;
};


// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
monogram.component.GraphSectionMobile.prototype.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};