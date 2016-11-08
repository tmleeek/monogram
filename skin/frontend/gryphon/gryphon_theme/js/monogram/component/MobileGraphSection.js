goog.provide('monogram.component.MobileGraphSection');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


goog.require('monogram.component.CombinationGraph04');

goog.require('monogram.component.CombinationGraphDataItem');


/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.component.MobileGraphSection = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $j.extend({}, monogram.component.MobileGraphSection.DEFAULT, options);
  this.element = element;





  /**
   * @type {monogram.component.CombinationGraph04}
   */
  this.combination_graph_04 = null;


  this.hammer = null;



  /**
   * @type {Array.<monogram.component.CombinationGraphDataItem>}
   */
  this.data_array = [];



  /**
   * @type {Array.<monogram.component.CombinationGraphDataItem>}
   */
  this.data_dictionary = [];


  /**
   * @type {Array.<monogram.component.CombinationGraphDataItem>}
   */
  this.main_array = [];
  /**
   * @type {Array.<monogram.component.CombinationGraphDataItem>}
   */
  this.sub_array = [];


  this.main_index = -1;
  this.sub_index = -1;


  this.is_main_data_item_different = true;
  this.is_sub_data_item_different = true;


  this.graph_label_array = [
    $j('#combination-graph-label .graph-label-wood'),
    $j('#combination-graph-label .graph-label-savoury'),
    $j('#combination-graph-label .graph-label-herbaceous'),
    $j('#combination-graph-label .graph-label-floral'),
    $j('#combination-graph-label .graph-label-nutty'),
    $j('#combination-graph-label .graph-label-dairy'),
    $j('#combination-graph-label .graph-label-minerality'),
    $j('#combination-graph-label .graph-label-citrus'),
    $j('#combination-graph-label .graph-label-stone-fruit'),
    $j('#combination-graph-label .graph-label-red-fruit'),
    $j('#combination-graph-label .graph-label-sweet')
  ];



  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  this.main_data_item = null;

  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  this.sub_data_item = null;


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.parse_data();

  console.log(this.element.find('#tea-layering-graph-mobile'))

  if (this.element.find('#tea-layering-graph-mobile').length != 0){
    this.combination_graph_04 = new monogram.component.CombinationGraph04({
      'scale_factor': 0.6333,
      'is_mobile': true
    }, this.element.find('#tea-layering-graph-mobile'));


    // possible optimization
    
    // TweenMax.to(this.combination_graph_04.element, 0, {z:0.1});
    TweenMax.to($j('#tea-layering-graph-mobile #combination-graph-svg svg'), 0, {z:0.1});
    

  }

  this.create_mobile_mouse();





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
  



  TweenMax.delayedCall(2, this.display_combination, ['earl-grey-neroli','shiso-mint'], this);

  console.log('init');
};
goog.inherits(monogram.component.MobileGraphSection, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
monogram.component.MobileGraphSection.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.MobileGraphSection.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.MobileGraphSection.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//



monogram.component.MobileGraphSection.prototype.parse_data = function() {

  var arr = $j('#combination-graph-data-item-container .combination-graph-data-item');
  var item = null;

  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  var data_item = null;
  var id = '';

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $j(arr[i]);

    data_item = new monogram.component.CombinationGraphDataItem({}, item);
    id = data_item.data_id;
    // main_id = data_item.data_main;

    this.data_array[i] = data_item;
    this.data_dictionary[id] = data_item;

    if(data_item.data_type == 'main') {
      this.main_array.push(data_item);
      
    }

    

  } // for



  // get all subs of the mains
  
  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  var sub_data_item = null;
  var sub_data_id = '';
  var sub_data_main = '';

  var has_sub = false;
  var current_main_index = 0;

  for (var i = 0, l=this.main_array.length; i < l; i++) {
    data_item = this.main_array[i];
    id = data_item.data_id;

    has_sub = false;

    // console.log('main: ' + id);

    for (var j = 0, jl=this.data_array.length; j < jl; j++) {
      sub_data_item = this.data_array[j];
      sub_data_id = sub_data_item.data_id;
      sub_data_main = sub_data_item.data_main;

      // console.log('sub_data_id: ' + sub_data_id);

      if(id == sub_data_main){

        has_sub = true;

        // console.log('asdf' + goog.isDefAndNotNull(this.sub_array[current_main_index]));
        if (goog.isDefAndNotNull(this.sub_array[current_main_index]) == false){
          this.sub_array[current_main_index] = [];

          var lll = this.sub_array[current_main_index].length;
          this.sub_array[current_main_index][lll] = sub_data_item;

          
        } else {

          var lll = this.sub_array[current_main_index].length;
          this.sub_array[current_main_index][lll] = sub_data_item;
        }

        

      }
    }

    if(has_sub == true){
      current_main_index++;
    }

    
  }



  // console.log(this.data_array);
  console.log(this.sub_array);

};


monogram.component.MobileGraphSection.prototype.create_mobile_mouse = function() {
  console.log('create_mobile_mouse');

  this.hammer = new Hammer($j('body')[0], {});
  this.hammer.on('swipeleft', this.on_swipe_left.bind(this));
  this.hammer.on('swiperight', this.on_swipe_right.bind(this));


  
  
};



monogram.component.MobileGraphSection.prototype.private_method_01 = function() {};
monogram.component.MobileGraphSection.prototype.private_method_02 = function() {};
monogram.component.MobileGraphSection.prototype.private_method_03 = function() {};
monogram.component.MobileGraphSection.prototype.private_method_04 = function() {};
monogram.component.MobileGraphSection.prototype.private_method_05 = function() {};
monogram.component.MobileGraphSection.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monogram.component.MobileGraphSection.prototype.sample_method_calls = function() {
  monogram.component.MobileGraphSection.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.component.MobileGraphSection.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



monogram.component.MobileGraphSection.prototype.display_combination = function(main_str, child_str) {

  if(this.is_child_of_main(main_str, child_str)){

    var target_main_index = this.get_index_of_main_str(main_str);
    var target_sub_index = this.get_index_of_child_str(child_str, target_main_index);

    this.display_combination_index(target_main_index, target_sub_index);

  }
  
};



/**
 * @param  {Number} main_index_param
 * @param  {Number} child_index_param
 */
monogram.component.MobileGraphSection.prototype.display_combination_index = function(main_index_param, child_index_param) {

  // console.log('display_combination_index');

  if (goog.isDefAndNotNull(this.main_array[main_index_param]) &&
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





      TweenMax.delayedCall(1, this.delayed_display_combination_index, [], this);




      var b_num = '' + (this.sub_index + 1);
      var b_total = '' + (this.sub_array[this.main_index].length);

      // b_num = b_num.length == 1 ? '0' + b_num : b_num;
      // b_total = b_total.length == 1 ? '0' + b_total : b_total;

      $j('#tea-layering-detail-copy-section .graph-selection-tea-mobile .graph-selection-title .number').html(b_num + ' / ' + b_total);


      
      var target_opacity = 1;
      var target_percent = 0;
      for (var i = 0, l=this.graph_label_array.length; i < l; i++) {
        item = this.graph_label_array[i];

        target_percent = (this.main_data_item.score_array[i] + this.sub_data_item.score_array[i]) / 20;
        target_percent = target_percent > 0 ? 1 : target_percent;

        target_opacity = 0.3 + 0.7* target_percent;

        TweenMax.to(item, 0.5, {opacity: 0.1});
        TweenMax.to(item, 0.5, {opacity: target_opacity, delay: 1 });
      }
      
      
     

      $j('#tea-layering-detail-copy-section').removeClass('animate-in');
      
      if(this.combination_graph_04 != null) {
        this.combination_graph_04.set_main_child_data(this.main_data_item, this.sub_data_item);           // important !
      }


    }
    

  }

};


monogram.component.MobileGraphSection.prototype.delayed_display_combination_index = function() {

  





  var name_01 = '' + this.main_data_item.element.find('h2').html();
  var name_02 = '' + this.sub_data_item.element.find('h2').html();

  $j('#tea-layering-detail-copy-section .graph-selection-tea-mobile #graph-selection-name-01 h2').html(name_01);
  $j('#tea-layering-detail-copy-section .graph-selection-tea-mobile #graph-selection-name-02 h2').html(name_02);
  
  



  var text_array = [
    'Suspendisse in enim nisl. Duis nec lacus magna. Curabitur tempus metus in libero lacinia posuere. Duis accumsan bibendum dapibus. ',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
    'Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    'In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
  ];

  

  if(this.main_data_item.data_id == 'earl-grey-neroli' && this.sub_data_item.data_id == 'shiso-mint') {
    $j('#graph-section-center-copy p').html("A interesting blend of mint and bergamot makes the experience exotic and promise of more bold creation.");
  } else if(this.main_data_item.data_id == 'earl-grey-neroli' && this.sub_data_item.data_id == 'saffronais'){
    $j('#graph-section-center-copy p').html("A elegant treat to a combination of exotic spice <br>meets the gentleman's drink.");
  } else {
    $j('#graph-section-center-copy p').html(text_array[this.fake_text_index]);
  }
  

  
  var target_html = [
    $j('#graph-selction-a .graph-selection-content h2').html(),
    ' <span style="color:#f1efee">+</span> ',
    $j('#graph-selction-b .graph-selection-content h2').html()
  ].join('');

  $j('#graph-section-center-copy h2').html(target_html);

  
  

  this.fake_text_index++;
  this.fake_text_index %= text_array.length;
  
  
 

  $j('#tea-layering-detail-copy-section').addClass('animate-in');

};




monogram.component.MobileGraphSection.prototype.public_method_01 = function() {};
monogram.component.MobileGraphSection.prototype.public_method_02 = function() {};
monogram.component.MobileGraphSection.prototype.public_method_03 = function() {};
monogram.component.MobileGraphSection.prototype.public_method_04 = function() {};
monogram.component.MobileGraphSection.prototype.public_method_05 = function() {};
monogram.component.MobileGraphSection.prototype.public_method_06 = function() {};


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
monogram.component.MobileGraphSection.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.MobileGraphSection.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.MobileGraphSection.prototype.on_swipe_left = function(event) {
  this.goto_next_sub();
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.MobileGraphSection.prototype.on_swipe_right = function(event) {
  this.goto_prev_sub();
};
















//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//






monogram.component.MobileGraphSection.prototype.goto_next_main = function() {
  var target_main_index = this.main_index + 1;
  target_main_index %= this.main_array.length;

  this.display_combination_index(target_main_index, 0);

};
monogram.component.MobileGraphSection.prototype.goto_prev_main = function() {
  var target_main_index = this.main_index - 1;
  target_main_index = target_main_index < 0 ? this.main_array.length - 1 : target_main_index;

  this.display_combination_index(target_main_index, 0);
};
monogram.component.MobileGraphSection.prototype.goto_next_sub = function() {
  var target_sub_index = this.sub_index + 1;
  target_sub_index %= this.sub_array[this.main_index].length;

  this.display_combination_index(this.main_index, target_sub_index);
};
monogram.component.MobileGraphSection.prototype.goto_prev_sub = function() {
  var target_sub_index = this.sub_index - 1;
  target_sub_index = target_sub_index < 0 ? this.sub_array[this.main_index].length - 1 : target_sub_index;

  this.display_combination_index(this.main_index, target_sub_index);
};







/**
 * @param  {String}  main_str
 * @param  {String}  child_str
 * @return {Boolean}       [description]
 */
monogram.component.MobileGraphSection.prototype.is_child_of_main = function(main_str, child_str) {

  if(goog.isDefAndNotNull(child_str) == false){
    child_str = '';
  }
  if(goog.isDefAndNotNull(main_str) == false){
    main_str = '';
  }
  

  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  var data_item = null;

  for (var i = 0, l=this.data_array.length; i < l; i++) {
    data_item = this.data_array[i];

    if (data_item.data_id == child_str && 
        data_item.data_main == main_str){
      
      return true;

    }
  }

  return false;
};

/**
 * @param  {String}  main_str
 * @return {Boolean}       [description]
 */
monogram.component.MobileGraphSection.prototype.get_index_of_main_str = function(main_str){

  /**
   * @type {monogram.component.CombinationGraphDataItem}
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
monogram.component.MobileGraphSection.prototype.get_index_of_child_str = function(child_str, main_index_param){

  if(goog.isDefAndNotNull(this.sub_array[main_index_param]) == false) {
    return -1;
  }
  

  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  var data_item = null;

  console.log('got here...')

  for (var i = 0, l=this.sub_array[main_index_param].length; i < l; i++) {
    data_item = this.sub_array[main_index_param][i];
    if(data_item.data_id == child_str) {
      return i;
    }
  }

  return -1;
};


// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
monogram.component.MobileGraphSection.prototype.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$j/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};