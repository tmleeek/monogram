



goog.provide('monogram.component.GraphSection');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.Mouse');

goog.require('monogram.component.CombinationGraph04');

goog.require('monogram.component.CombinationGraphDataItem');




/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.component.GraphSection = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, monogram.component.GraphSection.DEFAULT, options);
  this.element = element;


  /**
   * @type {manic.ui.Mouse}
   */
  this.custom_mouse = null;


  this.is_enabled = false;
  

  /**
   * @type {monogram.component.CombinationGraph04}
   */
  this.combination_graph_04 = null;




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


  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  this.main_data_item = null;

  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  this.sub_data_item = null;



  /**
   * @type {jQuery}
   */
  this.main_slider_element = null;

  /**
   * @type {jQuery}
   */
  this.sub_slider_element = null;



  this.main_slider_element = $('#graph-selction-a .graph-selection-tea-slider');
  this.sub_slider_element = $('#graph-selction-b .graph-selection-tea-slider');

  this.current_sub_slider_main_id = 'none';

  this.is_main_data_item_different = true;
  this.is_sub_data_item_different = true;


  this.fake_text_index = 0;


  this.graph_label_array = [
    $('#combination-graph-label .graph-label-wood'),
    $('#combination-graph-label .graph-label-savoury'),
    $('#combination-graph-label .graph-label-herbaceous'),
    $('#combination-graph-label .graph-label-floral'),
    $('#combination-graph-label .graph-label-nutty'),
    $('#combination-graph-label .graph-label-dairy'),
    $('#combination-graph-label .graph-label-minerality'),
    $('#combination-graph-label .graph-label-citrus'),
    $('#combination-graph-label .graph-label-stone-fruit'),
    $('#combination-graph-label .graph-label-red-fruit'),
    $('#combination-graph-label .graph-label-sweet')
  ];


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.parse_data();


  /*
  if (this.element.find('#combination-graph').length != 0) {
    this.combination_graph = new monogram.component.CombinationGraph({}, this.element.find('#combination-graph'));
  }
  

  if (this.element.find('#combination-graph-02').length != 0){
    this.combination_graph_02 = new monogram.component.CombinationGraph02({}, this.element.find('#combination-graph-02'));
  }

  if (this.element.find('#combination-graph-03').length != 0){
    this.combination_graph_03 = new monogram.component.CombinationGraph03({}, this.element.find('#combination-graph-03'));
  }
  */

  if (this.element.find('#combination-graph-04').length != 0){
    this.combination_graph_04 = new monogram.component.CombinationGraph04({}, this.element.find('#combination-graph-04'));
  }

  
  // this.create_main_slider();


  this.create_mouse();




  // this.display_combination('earl-grey-neroli','shiso-mint');
  // TweenMax.delayedCall(2, this.display_combination, ['earl-grey-neroli','shiso-mint'], this);
  // TweenMax.delayedCall(2, this.display_combination, ['earl-grey-neroli','shiso-mint'], this);    // THIS IS THE ANIMATE IN
  


  console.log('init');
};
goog.inherits(monogram.component.GraphSection, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
monogram.component.GraphSection.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.GraphSection.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.component.GraphSection.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.component.GraphSection.prototype.parse_data = function() {

  // var arr = this.element.find('#combination-graph-data-item-container .combination-graph-data-item');
  var arr = $('#combination-graph-data-item-container .combination-graph-data-item');
  var item = null;

  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  var data_item = null;
  var id = '';

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);

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
monogram.component.GraphSection.prototype.create_mouse = function() {
  console.log('create_mouse');

  this.custom_mouse = new manic.ui.Mouse({
    // 'update_delay': 4
    'exception_array':[
      $('#graph-selction-a .graph-selection-tea-slider')[0],
      $('#graph-selction-b .graph-selection-tea-slider')[0],
    ]
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



monogram.component.GraphSection.prototype.create_main_slider = function() {


  if (this.main_slider_element.hasClass('slick-initialized')) {

    this.main_slider_element.slick('unslick');
    this.main_slider_element.empty();

    this.main_slider_element.off('afterChange', this.on_main_slider_element_slide_change.bind(this));
  }

  // TODO: CREATE HTML OF MAIN SLIDER
  
  var fragment = $(document.createDocumentFragment());

  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  var data_item = null;
  var slider_element = null;
  var str = '';

  for (var i = 0, l=this.main_array.length; i < l; i++) {

    data_item = this.main_array[i];
    str = '' + data_item.data_html;
    // str = $.trim(str)
    // console.log(typeof(str))
    slider_element = $(str);

    TweenMax.to(slider_element.find('.graph-selection-tea-bg'), 0.0, {
      backgroundColor: data_item.data_color
    });

    fragment.append(slider_element);
  }  

  this.main_slider_element.append(fragment);


  // create slider

  this.main_slider_element.slick({
    'speed': 350,
    'dots': false,
    'arrows': false,
    'infinite': false,
    'slidesToShow': 1,
    'slidesToScroll': 1
    // 'pauseOnHover': true,
    // 'autoplay': true,
    // 'autoplaySpeed': 4000
  });

  this.main_slider_element.off('afterChange', this.on_main_slider_element_slide_change.bind(this));


};


monogram.component.GraphSection.prototype.create_sub_slider = function() {
  
  console.log('create_sub_slider');
  console.log('create_sub_slider');
  console.log('create_sub_slider');

  if (this.sub_slider_element.hasClass('slick-initialized')) {

    this.sub_slider_element.slick('unslick');
    this.sub_slider_element.empty();

    this.sub_slider_element.off('afterChange', this.on_sub_slider_element_slide_change.bind(this));
  }


  var fragment = $(document.createDocumentFragment());

  /**
   * @type {monogram.component.CombinationGraphDataItem}
   */
  var data_item = null;
  var slider_element = null;
  var str = '';
    

  for (var i = 0, l=this.sub_array[this.main_index].length; i < l; i++) {

    data_item = this.sub_array[this.main_index][i];
    str = '' + data_item.data_html;
    // str = $.trim(str);
    slider_element = $(str);

    TweenMax.to(slider_element.find('.graph-selection-tea-bg'), 0.0, {
      backgroundColor: data_item.data_color
    });

    fragment.append(slider_element);
  }

  this.sub_slider_element.append(fragment);


  // create slider

  this.sub_slider_element.slick({
    'speed': 350,
    'dots': false,
    'arrows': false,
    'infinite': false,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'vertical': true,
    'verticalSwiping': true
  });

  this.sub_slider_element.on('afterChange', this.on_sub_slider_element_slide_change.bind(this));
  


};






monogram.component.GraphSection.prototype.on_main_slider_element_slide_change = function(event, slick, currentSlide) {
  var target_main_index = currentSlide;
  this.display_combination_index(target_main_index, 0);
};

monogram.component.GraphSection.prototype.on_sub_slider_element_slide_change = function(event, slick, currentSlide) {
  var target_sub_index = currentSlide;
  this.display_combination_index(this.main_index, target_sub_index);
};


/**
 * sample_method_calls
 */
monogram.component.GraphSection.prototype.sample_method_calls = function() {
  monogram.component.GraphSection.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.component.GraphSection.EVENT_01));
};

























//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



monogram.component.GraphSection.prototype.enable_graph = function(){
  this.is_enabled = true;
};

monogram.component.GraphSection.prototype.disable_graph = function(){
  this.is_enabled = false;
};


monogram.component.GraphSection.prototype.display_combination = function(main_str, child_str) {

  if(this.is_child_of_main(main_str, child_str)){

    var target_main_index = this.get_index_of_main_str(main_str);
    var target_sub_index = this.get_index_of_child_str(child_str, target_main_index);

    if(target_main_index == -1){
      target_main_index = 0;
      target_sub_index = 0;
    } else if(target_sub_index == -1){
      target_sub_index = 0;
    }

    // console.log('target_main_index: ' + target_main_index);
    // console.log('target_sub_index: ' + target_sub_index);

    this.display_combination_index(target_main_index, target_sub_index);

  }
  
};


/**
 * @param  {Number} main_index_param
 * @param  {Number} child_index_param
 */
monogram.component.GraphSection.prototype.display_combination_index = function(main_index_param, child_index_param) {

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









      // change text

      if (this.is_main_data_item_different == true) {
        $('#graph-selction-a .graph-selection-tea').removeClass('animate-in');
      } else {
        // $('#graph-selction-a .graph-selection-tea').removeClass('animate-in');
        // $('#graph-selction-a .graph-selection-tea').addClass('re-animate-in');
      }

      
      // if (this.is_sub_data_item_different == true) {
        $('#graph-selction-b .graph-selection-tea').removeClass('animate-in');
      // }
      

      TweenMax.delayedCall(1, this.delayed_display_combination_index, [], this);
      
      

      


      var a_num = '' + (this.main_index + 1);
      var b_num = '' + (this.sub_index + 1);
      var a_total = '' + (this.main_array.length);
      var b_total = '' + (this.sub_array[this.main_index].length);

      a_num = a_num.length == 1 ? '0' + a_num : a_num;
      b_num = b_num.length == 1 ? '0' + b_num : b_num;
      a_total = a_total.length == 1 ? '0' + a_total : a_total;
      b_total = b_total.length == 1 ? '0' + b_total : b_total;

      $('#graph-selction-a .graph-selection-title .number').html(a_num + ' / ' + a_total);
      $('#graph-selction-b .graph-selection-title .number').html(b_num + ' / ' + b_total);


      
      /*
      TweenMax.to($('#graph-selction-a .graph-selection-tea .graph-selection-tea-bg'), 0.0, {
        backgroundColor: this.main_data_item.data_color
      });
      TweenMax.to($('#graph-selction-b .graph-selection-tea .graph-selection-tea-bg'), 0.0, {
        backgroundColor: this.sub_data_item.data_color
      });
      */
     

      
      var target_bg = this.hexToRgb('#766c67');
      var target_bg_str = 'rgba(' + target_bg.r + ', ' + target_bg.g + ', ' + target_bg.b + ', 0.8)'

      if (this.is_main_data_item_different == true) {
        TweenMax.to($('#graph-selction-a .graph-selection-content'), 0.5, {
          backgroundColor: target_bg_str,
          ease: Circ.easeOut
        });
      }

      // if (this.is_sub_data_item_different == true) {
        TweenMax.to($('#graph-selction-b .graph-selection-content'), 0.5, {
          backgroundColor: target_bg_str,
          ease: Circ.easeOut
        });
      // }

      


      
      var target_opacity = 1;
      var target_percent = 0;
      for (var i = 0, l=this.graph_label_array.length; i < l; i++) {
        item = this.graph_label_array[i];

        

        target_percent = (this.main_data_item.score_array[i] + this.sub_data_item.score_array[i]) / 20;
        //target_percent *= 1.2;
        target_percent = target_percent > 0 ? 1 : target_percent;

        target_opacity = 0.3 + 0.7* target_percent;

        TweenMax.to(item, 0.5, {opacity: 0.1});
        //TweenMax.to(item, 0.5, {opacity: target_opacity, delay: 1 + 0.05*i});
        TweenMax.to(item, 0.5, {opacity: target_opacity, delay: 1 });
        // TweenMax.to(item, 0.5, {opacity: target_opacity, delay: 1 + 0.04*i});
      }
      
      
      // animation of transparent svg too slow, causing lag
      /*
      var target_opacity = 1;
      var target_percent = 0;
      var target_x = 0;
      var target_y = 0;
      var graph_angle = 0;

      for (var i = 0, l=this.graph_label_array.length; i < l; i++) {
        item = this.graph_label_array[i];

        

        target_percent = (this.main_data_item.score_array[i] + this.sub_data_item.score_array[i]) / 20;
        //target_percent *= 1.2;
        target_percent = target_percent > 0 ? 1 : target_percent;

        target_opacity = 0.3 + 0.7* target_percent;

        graph_angle = this.combination_graph_04.graph_angle_mid_array[i];
        target_x = (Math.cos(graph_angle) * 25);
        target_y = (Math.sin(graph_angle) * 25);

        TweenMax.to(item, 0.5, {opacity: 0});
        TweenMax.to(item, 0.5, {opacity: target_opacity, delay: 1 + 0.05*i});

        TweenMax.to(item, 0.5, {x: target_x, y:target_y, delay: 0.05*i, ease: Sine.easeInOut});
        TweenMax.to(item, 0.7, {x: 0, y: 0, delay: 1 + 0.05*i, ease: Sine.easeInOut});
      }
      */


      

      
      

      $('#graph-section-center-copy').removeClass('animate-in');
      

      // $('#graph-selction-a .graph-selection-tea').addClass('animate-in');
      



      /*
      console.log('this.sub_data_item.data_main: ' + this.sub_data_item.data_main);

      if(this.current_sub_slider_main_id != this.sub_data_item.data_main){
        this.current_sub_slider_main_id = this.sub_data_item.data_main;

        this.create_sub_slider();

      } else {
        // slider goes to thingy
      }
      
      // assumes there is a main slider and sub slider
      this.main_slider_element.slick('slickGoTo', this.main_index);
      this.sub_slider_element.slick('slickGoTo', this.sub_index);
      */
      



      if(this.combination_graph_04 != null) {
        this.combination_graph_04.set_main_child_data(this.main_data_item, this.sub_data_item);           // important !
      }
      
    }
    

  }

};

monogram.component.GraphSection.prototype.delayed_display_combination_index = function() {

  if (this.is_main_data_item_different == true) {
  }
  if (this.is_sub_data_item_different == true) {
  }


  if (this.is_main_data_item_different == true) {
    $('#graph-selction-a .graph-selection-content').empty();
    $('#graph-selction-a .graph-selection-content').html(this.main_data_item.data_html);

    $('#graph-selction-a .graph-selection-tea').addClass('animate-in');


    var target_bg = this.hexToRgb(this.main_data_item.data_color);
    var target_bg_str = 'rgba(' + target_bg.r + ', ' + target_bg.g + ', ' + target_bg.b + ', 0.7)'

    TweenMax.to($('#graph-selction-a .graph-selection-content'), 0.5, {
      backgroundColor: target_bg_str,
      ease: Circ.easeIn
    });

    TweenMax.to($('#graph-selction-a .graph-selection-content h2'), 0, {
      color: this.main_data_item.data_color,
      ease: Circ.easeIn
    });

  } else {
    // $('#graph-selction-a .graph-selection-tea').addClass('animate-in');
    // $('#graph-selction-a .graph-selection-tea').removeClass('re-animate-in');
  }



  // if (this.is_sub_data_item_different == true) {
    $('#graph-selction-b .graph-selection-content').empty();
    $('#graph-selction-b .graph-selection-content').html(this.sub_data_item.data_html);

    $('#graph-selction-b .graph-selection-tea').addClass('animate-in');

    target_bg = this.hexToRgb(this.sub_data_item.data_color);
    target_bg_str = 'rgba(' + target_bg.r + ', ' + target_bg.g + ', ' + target_bg.b + ', 0.7)'

    TweenMax.to($('#graph-selction-b .graph-selection-content'), 0.5, {
      backgroundColor: target_bg_str,
      ease: Circ.easeIn
    });
    TweenMax.to($('#graph-selction-b .graph-selection-content h2'), 0, {
      color: this.sub_data_item.data_color,
      ease: Circ.easeIn
    });
  // }

  


  var text_array = [
    'Suspendisse in enim nisl. Duis nec lacus magna. Curabitur tempus metus in libero lacinia posuere. Duis accumsan bibendum dapibus. ',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
    'Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    'In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
  ];

  

  if(this.main_data_item.data_id == 'earl-grey-neroli' && this.sub_data_item.data_id == 'shiso-mint') {
    $('#graph-section-center-copy p').html("A interesting blend of mint and bergamot makes the experience exotic and promise of more bold creation.");
  } else if(this.main_data_item.data_id == 'earl-grey-neroli' && this.sub_data_item.data_id == 'saffronais'){
    $('#graph-section-center-copy p').html("A elegant treat to a combination of exotic spice <br>meets the gentleman's drink.");
  } else {
    $('#graph-section-center-copy p').html(text_array[this.fake_text_index]);
  }
  

  
  var target_html = [
    $('#graph-selction-a .graph-selection-content h2').html(),
    ' <span style="color:#f1efee">+</span> ',
    $('#graph-selction-b .graph-selection-content h2').html()
  ].join('');

  $('#graph-section-center-copy h2').html(target_html);

  

  $('#graph-section-center-copy').addClass('animate-in');



  

  
  



  this.fake_text_index++;
  this.fake_text_index %= text_array.length;


};
monogram.component.GraphSection.prototype.public_method_04 = function() {};
monogram.component.GraphSection.prototype.public_method_05 = function() {};
monogram.component.GraphSection.prototype.public_method_06 = function() {};


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
monogram.component.GraphSection.prototype.on_mouse_down = function(event) {

};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.GraphSection.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.component.GraphSection.prototype.on_event_handler_04 = function(event) {
};






//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//






monogram.component.GraphSection.prototype.goto_next_main = function() {
  var target_main_index = this.main_index + 1;
  target_main_index %= this.main_array.length;

  this.display_combination_index(target_main_index, 0);

};
monogram.component.GraphSection.prototype.goto_prev_main = function() {
  var target_main_index = this.main_index - 1;
  target_main_index = target_main_index < 0 ? this.main_array.length - 1 : target_main_index;

  this.display_combination_index(target_main_index, 0);
};
monogram.component.GraphSection.prototype.goto_next_sub = function() {
  var target_sub_index = this.sub_index + 1;
  target_sub_index %= this.sub_array[this.main_index].length;

  this.display_combination_index(this.main_index, target_sub_index);
};
monogram.component.GraphSection.prototype.goto_prev_sub = function() {
  var target_sub_index = this.sub_index - 1;
  target_sub_index = target_sub_index < 0 ? this.sub_array[this.main_index].length - 1 : target_sub_index;

  this.display_combination_index(this.main_index, target_sub_index);
};





/**
 * @param  {String}  main_str
 * @param  {String}  child_str
 * @return {Boolean}       [description]
 */
monogram.component.GraphSection.prototype.is_child_of_main = function(main_str, child_str) {

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
monogram.component.GraphSection.prototype.get_index_of_main_str = function(main_str){

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
monogram.component.GraphSection.prototype.get_index_of_child_str = function(child_str, main_index_param){

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
monogram.component.GraphSection.prototype.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};