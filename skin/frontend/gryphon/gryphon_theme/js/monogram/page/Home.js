goog.provide('monogram.page.Home');
goog.require('monogram.page.Default');

goog.require('monogram.component.GraphSection');
goog.require('monogram.component.GraphSectionMobile');

// goog.require('monogram.component.MobileGraphSection');


goog.require('monogram.graph.Data');

goog.require('monogram.graph.DataLoader');
goog.require('monogram.graph.SingleGraph');

goog.require('monogram.graph.CombinationDataLoader');
goog.require('monogram.graph.CombinationGraph');



/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {monogram.page.Default}
 */
monogram.page.Home = function(options, element) {
  monogram.page.Default.call(this, options, element);
  this.options = $j.extend(this.options, monogram.page.Home.DEFAULT, options);

  console.log('this is the home page');


  this.intro_section =          $j("#home-intro-section");
  this.tea_selection_section =  $j("#home-tea-selection-section");
  this.graph_section_element =          $j("#home-graph-section");

  this.desktop_header = $j('#desktop-header .container-fluid');
  TweenMax.to(this.desktop_header, 0.0, {autoAlpha:0});

  /**
   * @type {manic.ui.Mouse}
   */
  this.introduction_mouse = null;

  /**
   * @type {manic.ui.Mouse}
   */
  this.selection_mouse = null;



  if (manic.IS_MOBILE == true) {

  } else {

    // if desktop, listen to mouse events

    this.introduction_mouse = new manic.ui.Mouse({}, this.intro_section);

    goog.events.listen(this.introduction_mouse, manic.ui.Mouse.SWIPE_UP, function(){
      window.location.hash = '#selection';
    }.bind(this));
    goog.events.listen(this.introduction_mouse, manic.ui.Mouse.SCROLL_DOWN, function(){
      window.location.hash = '#selection';
    }.bind(this));
    
    this.selection_mouse = new manic.ui.Mouse({}, this.tea_selection_section);
    
    goog.events.listen(this.selection_mouse, manic.ui.Mouse.SWIPE_DOWN, function(){
      window.location.hash = '#intro';
    }.bind(this));
    goog.events.listen(this.selection_mouse, manic.ui.Mouse.SCROLL_UP, function(){
      window.location.hash = '#intro';
    }.bind(this));

  }


  this.has_displayed_guide = false;

  this.graph_section = null;
  //this.mobile_graph_section = null;
  

  /**
   * @type {monogram.component.GraphSectionMobile}
   */
  this.mobile_graph = null;



};
goog.inherits(monogram.page.Home, monogram.page.Default);



// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MICE
 * @const {object}
 */
monogram.page.Home.DEFAULT = {

};



/**
 * @override
 * @inheritDoc
 */
monogram.page.Home.prototype.init = function() {

  monogram.page.Home.superClass_.init.call(this);




  if (manic.IS_MOBILE == true) {

    this.create_graph_mobile();

  } else {

    // INIT DESKTOP
    this.create_intro();
    this.create_tea_selection();
    this.create_graph();

    // on guide click, remove the damn thing
    $j('#graph-desktop-guide-container').click(function(event){
      TweenMax.killTweensOf($('#graph-desktop-guide-container'));
      TweenMax.to($j('#graph-desktop-guide-container'), 0.5, {autoAlpha:0});

      TweenMax.killDelayedCallsTo(this.display_graph_section_delayed_a_little_before);
      this.display_graph_section_delayed_a_little_before();


    }.bind(this));

  }

  this.update_page_layout();    // this is called after the initial create to update the layout

};






//    ____ ___ ____  ____  _        _ __   __
//   |  _ \_ _/ ___||  _ \| |      / \\ \ / /
//   | | | | |\___ \| |_) | |     / _ \\ V /
//   | |_| | | ___) |  __/| |___ / ___ \| |
//   |____/___|____/|_|   |_____/_/   \_\_|
//

monogram.page.Home.prototype.display_intro_section = function(){
  console.log('display_intro_section');

  TweenMax.to(this.desktop_header, 0.5, {autoAlpha:0});   // this is new

  this.intro_section.addClass('slide-animate-in');
  this.tea_selection_section.removeClass('slide-animate-in');
  this.graph_section_element.removeClass('slide-animate-in');

  //this.intro_section.removeClass('animate-in');
  this.tea_selection_section.removeClass('animate-in');
  this.graph_section_element.removeClass('animate-in');

  // 0.5 waiting time & 0.5 half of slide transition
  TweenMax.delayedCall(1, this.display_intro_section_delayed, [], this);
  TweenMax.killDelayedCallsTo(this.display_selection_section_delayed);
  TweenMax.killDelayedCallsTo(this.display_graph_section_delayed);
  TweenMax.killDelayedCallsTo(this.display_graph_section_delayed_a_little_before);

  TweenMax.to(this.intro_section,0.5,           {autoAlpha:1});
  TweenMax.to(this.tea_selection_section,0.5,   {autoAlpha:0});
  TweenMax.to(this.graph_section_element,0.5,           {autoAlpha:0});

  if(this.graph_section != null){
    this.graph_section.disable_graph();
  }
};

monogram.page.Home.prototype.display_intro_section_delayed = function(){
  this.intro_section.addClass('animate-in');
};



monogram.page.Home.prototype.display_selection_section = function(){
  console.log('display_selection_section');

  TweenMax.to(this.desktop_header, 0.5, {autoAlpha:1});   // this is new
  

  this.intro_section.removeClass('slide-animate-in');
  this.tea_selection_section.addClass('slide-animate-in');
  this.graph_section_element.removeClass('slide-animate-in');

  this.intro_section.removeClass('animate-in');
  //this.tea_selection_section.removeClass('animate-in');
  this.graph_section_element.removeClass('animate-in');  


  // 0.5 waiting time & 0.5 half of slide transition
  TweenMax.delayedCall(1, this.display_selection_section_delayed, [], this);
  TweenMax.killDelayedCallsTo(this.display_intro_section_delayed);
  TweenMax.killDelayedCallsTo(this.display_graph_section_delayed);
  TweenMax.killDelayedCallsTo(this.display_graph_section_delayed_a_little_before);

  TweenMax.to(this.intro_section,0.5,           {autoAlpha:0});
  TweenMax.to(this.tea_selection_section,0.5,   {autoAlpha:1});
  TweenMax.to(this.graph_section_element,0.5,           {autoAlpha:0});

  if(this.graph_section != null){
    this.graph_section.disable_graph();
  }
};
monogram.page.Home.prototype.display_selection_section_delayed = function(){
  this.tea_selection_section.addClass('animate-in');
};





monogram.page.Home.prototype.display_graph_section = function(){
  console.log('display_graph_section');

  TweenMax.to(this.desktop_header, 0.5, {autoAlpha:1});   // this is new

  this.intro_section.removeClass('slide-animate-in');
  this.tea_selection_section.removeClass('slide-animate-in');
  
  // this.graph_section_element.addClass('slide-animate-in');   // moved


  
  
  

  this.intro_section.removeClass('animate-in');
  this.tea_selection_section.removeClass('animate-in');
  //this.graph_section_element.removeClass('animate-in');  
  
  // 0.5 waiting time & 0.5 half of slide transition
  /////  TweenMax.delayedCall(1, this.display_graph_section_delayed, [], this);       // this is new
  TweenMax.killDelayedCallsTo(this.display_selection_section_delayed);
  TweenMax.killDelayedCallsTo(this.display_intro_section_delayed);
  TweenMax.killDelayedCallsTo(this.display_graph_section_delayed_a_little_before);



  TweenMax.to(this.intro_section,0.5,           {autoAlpha:0});
  TweenMax.to(this.tea_selection_section,0.5,   {autoAlpha:0});
  TweenMax.to(this.graph_section_element,0.5,           {autoAlpha:1});



  // display guide or display actual content

  if (this.has_displayed_guide == false) {
    this.has_displayed_guide = true;
    TweenMax.killTweensOf($('#graph-desktop-guide-container'));

    TweenMax.to($j('#graph-desktop-guide-container'), 0.5, {autoAlpha:1, delay: 0});
    TweenMax.to($j('#graph-desktop-guide-container'), 0.5, {autoAlpha:0, delay: 1.5});

    TweenMax.delayedCall(2, this.display_graph_section_delayed_a_little_before, [], this);    // IMPORTANT

  } else {


    this.display_graph_section_delayed_a_little_before(); // IMPORTANT
  }
  


  

};


// for that additional delay they wanted..
monogram.page.Home.prototype.display_graph_section_delayed_a_little_before = function(){
  TweenMax.delayedCall(1, this.display_graph_section_delayed, [], this);

  this.graph_section_element.addClass('slide-animate-in');    // this was moved.

  if(this.graph_section != null){
    this.graph_section.enable_graph();

    
    if (goog.isDefAndNotNull(this.page_hash_02) == false) {
      
      this.graph_section.display_combination_index(0,0);




    } else if ( goog.isDefAndNotNull(this.page_hash_02) == true && 
                goog.isDefAndNotNull(this.page_hash_03) == false) {

      var target_main_index = this.graph_section.get_index_of_main_str(this.page_hash_02)

      if(target_main_index != -1){
        this.graph_section.display_combination_index(target_main_index,0);


        var current_url           = window.location.href;
        var twitter_share_url     = 'https://twitter.com/share?url=' + encodeURIComponent(current_url) + 
                                    '&amp;text=' + encodeURIComponent('Check this out!') + '&amp;hashtags=' + encodeURIComponent('monogram,tealayering,' + this.page_hash_02);
        var facebook_share_url    = current_url;

        var main_product_name = this.graph_section.main_data_item.data_name;
        var sub_product_name = this.graph_section.sub_data_item.data_name;        

        /*
        $j('#graph-social-icons ul li a.fa-twitter').attr('href', twitter_share_url);
        $j('#graph-social-icons ul li a.fa-facebook').attr('href', facebook_share_url);
        $j('#graph-social-icons ul li a.fa-facebook').data('main_product_name', main_product_name);
        $j('#graph-social-icons ul li a.fa-facebook').data('sub_product_name', sub_product_name);
        */

        $j('.home-customized-share-button a.fa-twitter').attr('href', twitter_share_url);
        $j('.home-customized-share-button a.fa-facebook').attr('href', facebook_share_url);
        $j('.home-customized-share-button a.fa-facebook').data('main_product_name', main_product_name);
        $j('.home-customized-share-button a.fa-facebook').data('sub_product_name', sub_product_name);


        

      } else {
        this.graph_section.display_combination_index(0,0);
      }

    } else if ( goog.isDefAndNotNull(this.page_hash_02) == true && 
                goog.isDefAndNotNull(this.page_hash_03) == true) {

      this.graph_section.display_combination(this.page_hash_02, this.page_hash_03);


      var current_url           = window.location.href;
      var twitter_share_url     = 'https://twitter.com/share?url=' + encodeURIComponent(current_url) + 
                                  '&amp;text=' + encodeURIComponent('Check this out!') + '&amp;hashtags=' + encodeURIComponent('monogram,tealayering,' + this.page_hash_02);
      var facebook_share_url    = encodeURIComponent(current_url);
              
      /*
      $j('#graph-social-icons ul li a.fa-twitter').attr('href', twitter_share_url);
      $j('#graph-social-icons ul li a.fa-facebook').attr('href', facebook_share_url);
      */

      $j('.home-customized-share-button a.fa-twitter').attr('href', twitter_share_url);
      $j('.home-customized-share-button a.fa-facebook').attr('href', facebook_share_url);

    }
    

  }
};


monogram.page.Home.prototype.display_graph_section_delayed = function(){
  this.graph_section_element.addClass('animate-in');

  
  console.log('this.page_hash_01: ' + this.page_hash_01);
  console.log('this.page_hash_02: ' + this.page_hash_02);
  console.log('this.page_hash_03: ' + this.page_hash_03);
  

  if(this.graph_section != null){
    
  }

};



//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//






monogram.page.Home.prototype.create_intro = function() {
  /**
   * @type {manic.ui.SpanSplit}
   */
  var h1_split = $j("#home-intro-section .center-content h1").data('manic.ui.SpanSplit');
  h1_split.add_numbered_classes('in-dd');
  h1_split.add_numbered_classes_reverse('out-dd');


  var arr = $j("#home-intro-section .center-content p");
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $j(arr[i]);
    /**
     * @type {manic.ui.SpanSplit}
     */
    var p_split = item.data('manic.ui.SpanSplit');
    p_split.add_numbered_classes('in-ddd', 7 + (i*3));
    p_split.add_numbered_classes_reverse('out-ddd');
    
  }
};


monogram.page.Home.prototype.create_tea_selection = function() {



  $j('#home-tea-item-container').mouseleave(function(event){

    $j('#home-tea-item-container .home-tea-item')
      .removeClass('selected')
      .removeClass('not-selected')

  }.bind(this));


  var arr = $j('#home-tea-item-container .home-tea-item');
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $j(arr[i]);
    item.mouseover(function(event){

      var target = $j(event.currentTarget);

      $j('#home-tea-item-container .home-tea-item').removeClass('selected');
      $j('#home-tea-item-container .home-tea-item').addClass('not-selected');

      target.addClass('selected');
      target.removeClass('not-selected');

    }.bind(this));
  }

};


monogram.page.Home.prototype.create_graph = function() {

  if ($j('#graph-section').length != 0) {
    this.graph_section = new monogram.component.GraphSection({}, $j('#graph-section'));
  }

  
};

















//    __  __  ___  ____ ___ _     _____
//   |  \/  |/ _ \| __ )_ _| |   | ____|
//   | |\/| | | | |  _ \| || |   |  _|
//   | |  | | |_| | |_) | || |___| |___
//   |_|  |_|\___/|____/___|_____|_____|
//





monogram.page.Home.prototype.create_both_graph = function(){

};


monogram.page.Home.prototype.create_graph_mobile = function(){


  // monogram.component.GraphSectionMobile

  // home-mobile-landing-combination-graph
  if ($j('#tea-layering-detail-graph-section').length != 0) {
    // this.mobile_graph_section = new monogram.component.MobileGraphSection({}, $j('#tea-layering-detail-graph-section'));
  }


  /**
   * @type {monogram.graph.CombinationGraph}
   */
  this.combination_graph = new monogram.graph.CombinationGraph({
    'scale_factor': 0.6333,
    'is_mobile': true
  }, $j('#home-mobile-landing-graph-container'));
  
  this.combination_data_loader = new monogram.graph.CombinationDataLoader({}, $j('#monograph-combined-graph-data'));

  
  goog.events.listen(this.combination_data_loader, monogram.graph.CombinationDataLoader.ON_COMBINED_GRAPH_DATA_LOAD_COMPLETE, function(event){

    console.log('monogram.graph.CombinationDataLoader.ON_COMBINED_GRAPH_DATA_LOAD_COMPLETE');

    // this.combination_graph.set_data
    
    /**
     * @type {monogram.graph.Data}
     */
    var graph_data_01 = this.combination_data_loader.get_data_by_id('earl-grey-neroli');

    /**
     * @type {monogram.graph.Data}
     */
    var graph_data_02 = this.combination_data_loader.get_data_by_id('shiso-mint');
    
    this.combination_graph.set_data_01(graph_data_01);
    this.combination_graph.set_data_02(graph_data_02);

  }.bind(this));




  // create tea layering mobile graph
  
  

  if ($j('#tea-layering-detail-graph-section').length != 0) {
    this.mobile_graph = new monogram.component.GraphSectionMobile({}, $j('#tea-layering-detail-graph-section'));
  }

  
  


};














//    _____ _____  __
//   |  ___|_ _\ \/ /
//   | |_   | | \  /
//   |  _|  | | /  \
//   |_|   |___/_/\_\
//


monogram.page.Home.prototype.hide_preloader = function() {

  monogram.page.Home.superClass_.hide_preloader.call(this);

  if (manic.IS_MOBILE == true) {

    // only for home page mobile (fix for snapping thingy)
    this.initial_scroll_to_target();
    

  }

};



//    __  __  ___  ____ ___ _     _____   ____ ___ ____  ____  _        _ __   __
//   |  \/  |/ _ \| __ )_ _| |   | ____| |  _ \_ _/ ___||  _ \| |      / \\ \ / /
//   | |\/| | | | |  _ \| || |   |  _|   | | | | |\___ \| |_) | |     / _ \\ V /
//   | |  | | |_| | |_) | || |___| |___  | |_| | | ___) |  __/| |___ / ___ \| |
//   |_|  |_|\___/|____/___|_____|_____| |____/___|____/|_|   |_____/_/   \_\_|
//



monogram.page.Home.prototype.display_mobile_intro_section = function() {

  this.body.removeClass('mobile-home-tea-layering-version');
  this.body.removeClass('mobile-home-graph-version');

};
monogram.page.Home.prototype.display_mobile_selection_section = function() {

  this.body.addClass('mobile-home-tea-layering-version');
  this.body.removeClass('mobile-home-graph-version');

};
monogram.page.Home.prototype.display_mobile_graph_section = function() {

  this.body.removeClass('mobile-home-tea-layering-version');
  this.body.addClass('mobile-home-graph-version');

  if(this.mobile_graph != null){
    if (goog.isDefAndNotNull(this.page_hash_02) == false) {
      
      this.mobile_graph.display_combination_index(0,0);

    } else if ( goog.isDefAndNotNull(this.page_hash_02) == true && 
                goog.isDefAndNotNull(this.page_hash_03) == false) {

      var target_main_index = this.mobile_graph.get_index_of_main_str(this.page_hash_02)

      if(target_main_index != -1){
        this.mobile_graph.display_combination_index(target_main_index,0);

        /*
        var current_url           = window.location.href;
        var twitter_share_url     = 'https://twitter.com/share?url=' + encodeURIComponent(current_url) + 
                                    '&amp;text=' + encodeURIComponent('Check this out!') + '&amp;hashtags=' + encodeURIComponent('monogram,tealayering,' + this.page_hash_02);
        var facebook_share_url    = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(current_url);
                
        $j('#graph-social-icons ul li a.fa-twitter').attr('href', twitter_share_url);
        $j('#graph-social-icons ul li a.fa-facebook').attr('href', facebook_share_url);
        */


      } else {
        this.mobile_graph.display_combination_index(0,0);
      }

    } else if ( goog.isDefAndNotNull(this.page_hash_02) == true && 
                goog.isDefAndNotNull(this.page_hash_03) == true) {

      this.mobile_graph.display_combination(this.page_hash_02, this.page_hash_03);

      /*
      var current_url           = window.location.href;
      var twitter_share_url     = 'https://twitter.com/share?url=' + encodeURIComponent(current_url) + 
                                  '&amp;text=' + encodeURIComponent('Check this out!') + '&amp;hashtags=' + encodeURIComponent('monogram,tealayering,' + this.page_hash_02);
      var facebook_share_url    = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(current_url);
              
      $j('#graph-social-icons ul li a.fa-twitter').attr('href', twitter_share_url);
      $j('#graph-social-icons ul li a.fa-facebook').attr('href', facebook_share_url);
      */

    }



  }

};




//     _____     _______ ____  ____  ___ ____  _____
//    / _ \ \   / / ____|  _ \|  _ \|_ _|  _ \| ____|
//   | | | \ \ / /|  _| | |_) | |_) || || | | |  _|
//   | |_| |\ V / | |___|  _ <|  _ < | || |_| | |___
//    \___/  \_/  |_____|_| \_\_| \_\___|____/|_____|
//




/**
 * @override
 * @inheritDoc
 */
monogram.page.Home.prototype.update_page_layout = function() {

  monogram.page.Home.superClass_.update_page_layout.call(this);  




  // TEMP GRAPH UPDATE START
    
  /*
  var target_height = $j(window).height() - 90;
  console.log('target_height: ' + target_height);

  $j('#graph-column-01-container').css({
    'height': target_height + 'px'
  });
  $j('#graph-column-02-container').css({
    'height': target_height + 'px'
  });

  $j('#graph-center-column-container').css({
    'height': target_height + 'px'
  });
  */



  var space_extra = 600 - 768;
  // var target_height = $j(window).height() - space_extra - 351 - 31;
  /// var target_height = $j(window).height() - space_extra - 211 - 31;
  var target_height = $j(window).height() - space_extra - 191 - 31;

  /*
  if ($j(window).width() <=  1200) {
    target_height -= 110;
    target_height -= 30;
  }
  */



  var offset = -1 * (target_height - 600)/2;
  

  // var target_zoom = target_height / 600;
  var target_zoom = target_height / 600;

  $j('#graph-section-combination-graph').css({
    'zoom': target_zoom,
    
  });

  $j('#graph-section-combination-graph-margin').css({
    'height': target_height + 'px',
    'width': target_height + 'px',
    'margin-left': offset + 'px',
    'margin-top': offset + 'px'
  });

  



  /*
  var mobile_target_zoom = 0.6333;
  var mobile_target_height = (mobile_target_zoom * 600);
  */
  

  // moved to css
  /*
  $j('#home-mobile-landing-combination-graph').css({
    'width': mobile_target_height + 'px',
    'height': mobile_target_height + 'px'
  });
  
  
  TweenMax.to($j('#home-mobile-landing-combination-graph .graph-name-overlay'), 0 , {scaleX: mobile_target_zoom, scaleY:mobile_target_zoom});
  
  /////////////////////
  
  $j('#tea-layering-graph-mobile').css({
    'width': mobile_target_height + 'px',
    'height': mobile_target_height + 'px'
  });

  TweenMax.to($j('#tea-layering-graph-mobile .graph-name-overlay'), 0 , {scaleX: mobile_target_zoom, scaleY:mobile_target_zoom});

  */

  
   
  
  if( manic.IS_MOBILE == true || manic.IS_TABLET_PORTRAIT == true){
    this.html.addClass('overflow-version');
  } else {
    this.html.removeClass('overflow-version');
  }
  


  // TEMP GRAPH UPDATE END
  







};


/**
 * @override
 * @inheritDoc
 */
monogram.page.Home.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  monogram.page.Home.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);


  if (manic.IS_MOBILE == true) {

    // MOBILE DISPLAY
    if (str_param == 'intro') {
      this.display_mobile_intro_section();
      this.scroll_to(0);

    } else if (str_param == 'selection') {
      this.display_mobile_selection_section();
      this.scroll_to(0);

    } else if (str_param == 'graph') {
      this.display_mobile_graph_section();
      this.scroll_to(0);
      
    }

  } else {

    // DESKTOP DISPLAY
    if (str_param == 'intro') {
      this.display_intro_section();
    } else if (str_param == 'selection') {
      this.display_selection_section();
    } else if (str_param == 'graph') {
      this.display_graph_section();
    }

  }


  /*
  // Mice venue landing - on hash change
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){

    // console.log('str_param: ' + str_param);
    if (str_param == "indoor-venue") {
      this.mice_landing_mobile_indoor_open();

    } else if (str_param == "outdoor-venue") {
      this.mice_landing_mobile_outdoor_open();

    } else if (str_param == "ballrooms-venue") {
      this.mice_landing_mobile_ballrooms_open();
    }

  }
  */

};
/**
 * @override
 * @inheritDoc
 */
monogram.page.Home.prototype.on_scroll_to_no_target = function(){

  monogram.page.Home.superClass_.on_scroll_to_no_target.call(this);

  if (manic.IS_MOBILE == true) {

    this.display_mobile_intro_section();

  } else {

    // DESKTOP DISPLAY
    this.display_intro_section();

  }


};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//



//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//


goog.exportSymbol('monogram.page.Home', monogram.page.Home);



