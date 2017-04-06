goog.provide('monogram.page.Default');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


goog.require('manic.page.Page');


goog.require('monogram.graph.SingleGraph');

goog.require('manic.ui.Mouse');


// goog.require('savour.component.DesktopHeader');
// goog.require('savour.component.MobileHeader');



/**
 * The Default Page constructor
 * @inheritDoc
 * @constructor
 * @extends {manic.page.Page}
 */
monogram.page.Default = function(options) {

  manic.page.Page.call(this, options);
  this.options = $j.extend(this.options, monogram.page.Default.DEFAULT, options);


  /**
   * @type {monogram.graph.SingleGraph}
   */
  this.single_graph = null;


  /**
   * @type {monogram.graph.SingleGraph}
   */
  this.single_graph_mobile = null;



  this.is_tea_matrix = false;

  if ($j('body').hasClass('cms-tea-matrix')) {
    this.is_tea_matrix = true;
  }




};
goog.inherits(monogram.page.Default, manic.page.Page);


/**
 * like jQuery options
 * @const {object}
 */
monogram.page.Default.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Default Event Constant
 * @const
 * @type {string}
 */
monogram.page.Default.EVENT_01 = '';

/**
 * Default Event Constant
 * @const
 * @type {string}
 */
monogram.page.Default.EVENT_02 = '';



//    ___ _   _ ___ _____
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |
//    | || |\  || |  | |
//   |___|_| \_|___| |_|
//



/**
 * @override
 */
monogram.page.Default.prototype.init = function() {
  monogram.page.Default.superClass_.init.call(this);

  // window.onbeforeunload = function(){ window.scrollTo(0,0); }     // from zaw's main.js

  this.create_desktop_header();

  /*
  this.desktop_header = new savour.component.DesktopHeader({}, $j('#desktop-header'));
  this.desktop_header.set_controller(this.controller);

  this.mobile_header = new savour.component.MobileHeader({}, $j('#mobile-header'));


  $j('.page-template-slider').slick({
    'speed': 350,
    'dots': false,
    'arrows': true,
    'infinite': false,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'pauseOnHover': false,
    'autoplay': true,
    'autoplaySpeed': 4000
  });
  */
  


  
  

  if ($j('#tea-matrix-combination-graph').length != 0) {
    this.single_graph = new monogram.graph.SingleGraph({}, $j('#tea-matrix-combination-graph'));
  }




  // CREATE PINNING SIDEBAR FOR FAQ
  
  if (manic.IS_MOBILE == false && $j('#monogram-page-faq-sidebar').length != 0) {

    // this.faq_sidebar_scene = new ScrollMagic.Scene({
    //   'triggerHook': 0.0,
    //   'offset': -1 * 70,                                                       // 70 = desktop header height
    //   'triggerElement': '#monogram-page-faq-content-section',
    //   // 'duration': target_duration,
    //   reverse: true
    // });

    // // this.faq_sidebar_scene.setPin('#monogram-page-faq-sidebar');
    // this.faq_sidebar_scene.addTo(this.controller);
      
  }
  






  // only if it's mobile

  if (manic.IS_MOBILE == true) {

    if ($j('#tea-matrix-combination-graph-mobile').length != 0) {
      this.single_graph_mobile = new monogram.graph.SingleGraph({
        'scale_factor': 0.6333,
        'is_mobile': true
      }, $j('#tea-matrix-combination-graph-mobile'));
    }

  }


  if($j('#tea-matrix-section-1').length != 0){

    this.tea_matrix_mouse = new manic.ui.Mouse({}, $j('#tea-matrix-section-1'));
    goog.events.listen(this.tea_matrix_mouse, manic.ui.Mouse.SWIPE_UP, function(){
      this.body.trigger('tea-matrix-mouse-down');
    }.bind(this));
    goog.events.listen(this.tea_matrix_mouse, manic.ui.Mouse.SCROLL_DOWN, function(){
      this.body.trigger('tea-matrix-mouse-down');
    }.bind(this));
    
    goog.events.listen(this.tea_matrix_mouse, manic.ui.Mouse.SWIPE_DOWN, function(){
      this.body.trigger('tea-matrix-mouse-up');
    }.bind(this));
    goog.events.listen(this.tea_matrix_mouse, manic.ui.Mouse.SCROLL_UP, function(){
      this.body.trigger('tea-matrix-mouse-up');
    }.bind(this));


  }
  


  if (manic.IS_MOBILE == true && this.is_tea_matrix == true) {
    this.create_tea_matrix_mobile_page();
  }


  if (manic.IS_MOBILE == false && this.is_tea_matrix == true) {
    $j('html').removeClass('overflow-visible-version');
  }

  


  console.log('monogram.page.Default: init');
};

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.page.Default.prototype.create_desktop_header = function() {



  $j("#desktop-header-menu-btn").click(function(event){

    event.preventDefault();
    event.stopPropagation();

    if($j('#desktop-header-menu-conainer').hasClass('open-version') == true){

      // close
      $j('#desktop-header-menu-conainer').removeClass('open-version');
      TweenMax.to($j('#desktop-header-menu-conainer'), 0.5, {autoAlpha:0});

    } else {

      // open
      $j('#desktop-header-menu-conainer').addClass('open-version');
      TweenMax.to($j('#desktop-header-menu-conainer'), 0.5, {autoAlpha:1});

    }

    
    
    


  }.bind(this));


};
monogram.page.Default.prototype.private_method_02 = function() {};
monogram.page.Default.prototype.private_method_03 = function() {};
monogram.page.Default.prototype.private_method_04 = function() {};
monogram.page.Default.prototype.private_method_05 = function() {};
monogram.page.Default.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


monogram.page.Default.prototype.public_method_01 = function() {};
monogram.page.Default.prototype.public_method_02 = function() {};
monogram.page.Default.prototype.public_method_03 = function() {};
monogram.page.Default.prototype.public_method_04 = function() {};
monogram.page.Default.prototype.public_method_05 = function() {};




// this is cheating
monogram.page.Default.prototype.create_tea_matrix_mobile_page = function() {


  console.log('create_tea_matrix_mobile_page !!');
  console.log('create_tea_matrix_mobile_page !!');
  console.log('create_tea_matrix_mobile_page !!');

  var graph_element = $j('#tea-layering-detail-graph-section #tea-matrix-combination-graph-mobile');


  /*
  this.custom_mouse = new manic.ui.Mouse({
  }, graph_element);
  goog.events.listen(this.custom_mouse, manic.ui.Mouse.SWIPE_LEFT, function(){
    // this.goto_prev_main();
  }.bind(this));
  goog.events.listen(this.custom_mouse, manic.ui.Mouse.SWIPE_RIGHT, function(){
    console.log('manic.ui.Mouse.SWIPE_RIGHT');
    // this.goto_next_main();
  }.bind(this));
  */
 

  this.tea_matrix_mobile_id_index = 0;

  this.tea_matrix_mobile_id_array = [
    'cherry-japonais',
    'uji-sencha',            
    'jasmine-silk-pearls',
    'milky-oolong',
    'lapsang-florale',
    'kashmere',
    'earl-grey-neroli',
    'morning-english',
    'provencal-herbs',
    'saffronais',
    'rose-of-ariana',
    'shiso-mint'
  ];

  this.tea_matrix_mobile_item_array = [];
  var arr = $j('.graph-selection-tea-mobile-item');
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {

    item = $j(arr[i]);
    this.tea_matrix_mobile_item_array[i] = item;

  }



  $j('#page-tea-layering-detail-next-arrow').click(function(event){
    this.show_tea_matrix_mobile_item_next();
  }.bind(this));

  $j('#page-tea-layering-detail-prev-arrow').click(function(event){
    this.show_tea_matrix_mobile_item_prev();
  }.bind(this));

  this.hammer = new Hammer($j('body')[0], {});
  this.hammer.on('swipeleft', function(event){
    this.show_tea_matrix_mobile_item_next();
  }.bind(this));
  this.hammer.on('swiperight', function(event){
    this.show_tea_matrix_mobile_item_prev();
  }.bind(this));


  $j('#page-tea-layering-detail-select-hidden-01').change(function(event){

    var target = $j(event.currentTarget);
    var value_str = target.val();
    var value_num = parseInt(value_str);

    $j('#page-tea-layering-detail-select-hidden-02').val(value_str);

    this.show_tea_matrix_mobile_item_by_index(value_num);

  }.bind(this));

  $j('#page-tea-layering-detail-select-hidden-02').change(function(event){

    var target = $j(event.currentTarget);
    var value_str = target.val();
    var value_num = parseInt(value_str);

    $j('#page-tea-layering-detail-select-hidden-01').val(value_str);
    
    this.show_tea_matrix_mobile_item_by_index(value_num);

  }.bind(this));

};

monogram.page.Default.prototype.show_tea_matrix_mobile_item_prev = function() {
  if (manic.IS_MOBILE == true && this.is_tea_matrix == true) {

    var target_index = this.tea_matrix_mobile_id_index - 1;
    target_index = target_index < 0 ? this.tea_matrix_mobile_item_array.length - 1 : target_index;
    this.show_tea_matrix_mobile_item_by_index(target_index);
    
  }
};
monogram.page.Default.prototype.show_tea_matrix_mobile_item_next = function() {
  if (manic.IS_MOBILE == true && this.is_tea_matrix == true) {
    
    var target_index = this.tea_matrix_mobile_id_index + 1;
    target_index %= this.tea_matrix_mobile_item_array.length;
    this.show_tea_matrix_mobile_item_by_index(target_index);

  }
};
monogram.page.Default.prototype.show_tea_matrix_mobile_item_by_id = function() {
  if (manic.IS_MOBILE == true && this.is_tea_matrix == true) {
    
  }
};

monogram.page.Default.prototype.show_tea_matrix_mobile_item_by_index = function(index_param) {
  if(manic.IS_MOBILE == true && this.is_tea_matrix == true) {
    if (goog.isDefAndNotNull(this.tea_matrix_mobile_item_array[index_param])) {


      if (this.tea_matrix_mobile_id_index != index_param) {

        this.tea_matrix_mobile_id_index = index_param;
        var target_id = this.tea_matrix_mobile_id_array[this.tea_matrix_mobile_id_index];


        if(this.single_graph_mobile != null) {
          this.single_graph_mobile.set_data_by_id(target_id);
        }


        $j('#tea-layering-detail-copy-section').removeClass('animate-in');

        // this.util_scroll_to(0);
        
        TweenMax.delayedCall(1, this.delayed_show_tea_matrix_mobile_item_by_index, [], this);

      }

    }
  }

};



monogram.page.Default.prototype.delayed_show_tea_matrix_mobile_item_by_index = function() {
  if(manic.IS_MOBILE == true && this.is_tea_matrix == true) {

    var item = null;
    for (var i = 0, l=this.tea_matrix_mobile_item_array.length; i < l; i++) {
      item = this.tea_matrix_mobile_item_array[i];

      if (this.tea_matrix_mobile_id_index == i){
        item.addClass('visible-version');
      } else {
        item.removeClass('visible-version');
      }
    }

    $j('#tea-layering-detail-copy-section').addClass('animate-in');

  }
};



//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
monogram.page.Default.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
monogram.page.Default.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
monogram.page.Default.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
monogram.page.Default.prototype.on_event_handler_04 = function(event) {
};






monogram.page.Default.prototype.sample_method_calls = function() {

  // sample override
  monogram.page.Default.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(monogram.page.Default.EVENT_01));
};











//    _   _ ____  ____    _  _____ _____   _        _ __   _____  _   _ _____
//   | | | |  _ \|  _ \  / \|_   _| ____| | |      / \\ \ / / _ \| | | |_   _|
//   | | | | |_) | | | |/ _ \ | | |  _|   | |     / _ \\ V / | | | | | | | |
//   | |_| |  __/| |_| / ___ \| | | |___  | |___ / ___ \| || |_| | |_| | | |
//    \___/|_|   |____/_/   \_\_| |_____| |_____/_/   \_\_| \___/ \___/  |_|
//

/**
 * @override
 * @inheritDoc
 */
monogram.page.Default.prototype.update_page_layout = function() {


  monogram.page.Default.superClass_.update_page_layout.call(this);  

  if(manic.IS_MOBILE == true && this.is_tea_matrix == true) {

    var mobile_target_zoom = 0.6333;
    var mobile_target_height = (mobile_target_zoom * 600);

    $j('#tea-matrix-combination-graph-mobile').css({
      'width': mobile_target_height + 'px',
      'height': mobile_target_height + 'px'
    });

    TweenMax.to($j('#tea-matrix-combination-graph-mobile .graph-name-overlay'), 0 , {scaleX: mobile_target_zoom, scaleY:mobile_target_zoom});


    $j('#tea-layering-graph-mobile').css({
      'width': mobile_target_height + 'px',
      'height': mobile_target_height + 'px'
    });



  } // if mobile


  
  if(manic.IS_MOBILE == false && this.is_tea_matrix == true) {

    var target_height = $j(window).height() - 123 + 100;        // 100 is the extra height of the top and bottom of the graph that is removed?


    if (manic.IS_ACTUAL_TABLET == true && manic.IS_TABLET_LANDSCAPE == true) {
      target_height *= 0.8;
    }
      
    var target_zoom = target_height / 600;
    var target_inverted_zoom = 600 /  target_height;

    var target_margin_top = -1 * 80 * target_zoom;        // 103 = top space of the 600x600 graph

    var target_margin_left = -1 * 103 * target_zoom;

    /*
    $j('#tea-matrix-section-1 #tea-matrix-content #tea-matrix-combination-graph').css({
      'zoom': target_zoom,
      // 'margin-left': target_margin_left + 'px'
      // 'margin-top': target_margin_top + 'px'
      // 'margin-bottom': target_margin_top + 'px'
    });
    */
    TweenMax.to($j('#tea-matrix-section-1 #tea-matrix-content #tea-matrix-combination-graph'), 0, {scaleX: target_zoom, scaleY: target_zoom});


    $j('#graph-zooming-style').empty();
    // $j('#graph-zooming-style').html('.graph-svg-circle .graph-svg-circle-text { zoom: ' + target_inverted_zoom + ' }');
    $j('#graph-zooming-style').html('.graph-svg-circle .graph-svg-circle-text { transform: scaleX(' + target_inverted_zoom + ') scaleY(' + target_inverted_zoom + ') translate(-50%, -50%)}');



    // #tea-matrix-combination-graph-container-another-one

  } // if


};



/**
 * @override
 * @inheritDoc
 */
monogram.page.Default.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  monogram.page.Default.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);

  if(manic.IS_MOBILE == true && this.is_tea_matrix == true) {

    var target_index = parseInt(str_param);
    target_index -= 1;
    
    this.show_tea_matrix_mobile_item_by_index(target_index);
  }
};


/**
 * @override
 * @inheritDoc
 */
monogram.page.Default.prototype.on_scroll_to_no_target = function(){

  monogram.page.Default.superClass_.on_scroll_to_no_target.call(this);

  if(manic.IS_MOBILE == true && this.is_tea_matrix == true) {
    this.show_tea_matrix_mobile_item_by_index(0);
  }
};