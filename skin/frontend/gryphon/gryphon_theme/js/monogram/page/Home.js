goog.provide('monogram.page.Home');
goog.require('monogram.page.Default');

goog.require('monogram.component.GraphSection');

// goog.require('monogram.component.MobileGraphSection');


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

  /**
   * @type {manic.ui.Mouse}
   */
  this.introduction_mouse = null;
  this.introduction_mouse = new manic.ui.Mouse({}, this.intro_section);

  goog.events.listen(this.introduction_mouse, manic.ui.Mouse.SWIPE_UP, function(){
    window.location.hash = '#selection';
  }.bind(this));
  goog.events.listen(this.introduction_mouse, manic.ui.Mouse.SCROLL_DOWN, function(){
    window.location.hash = '#selection';
  }.bind(this));


  /**
   * @type {manic.ui.Mouse}
   */
  this.selection_mouse = null;
  this.selection_mouse = new manic.ui.Mouse({}, this.tea_selection_section);
  
  goog.events.listen(this.selection_mouse, manic.ui.Mouse.SWIPE_DOWN, function(){
    window.location.hash = '#intro';
  }.bind(this));
  goog.events.listen(this.selection_mouse, manic.ui.Mouse.SCROLL_UP, function(){
    window.location.hash = '#intro';
  }.bind(this));


  this.has_displayed_guide = false;

  this.graph_section = null;
  //this.mobile_graph_section = null;
  



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


  this.create_intro();
  this.create_tea_selection();
  this.create_graph();

  


  // on guide click, remove the damn thing
  $j('#graph-desktop-guide-container').click(function(event){
    TweenMax.killTweensOf($('#graph-desktop-guide-container'));
    TweenMax.to($j('#graph-desktop-guide-container'), 0.5, {autoAlpha:0});
  });





  // this.display_intro_section();

  // $j("#home-intro-section").hide();
  // $j("#home-graph-section").hide();

  /*
  $j("#home-tea-selection-section").hide();
  $j('#scroll-down').on("click", function(e){
    $j("#home-intro-section").slideUp();
    $j("#home-tea-selection-section").slideDown();
  });
  */
 


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

  this.intro_section.removeClass('slide-animate-in');
  this.tea_selection_section.removeClass('slide-animate-in');
  this.graph_section_element.addClass('slide-animate-in');


  if (this.has_displayed_guide == false) {
    this.has_displayed_guide = true;
    TweenMax.killTweensOf($('#graph-desktop-guide-container'));

    TweenMax.to($j('#graph-desktop-guide-container'), 0.5, {autoAlpha:1, delay: 2});
    TweenMax.to($j('#graph-desktop-guide-container'), 0.5, {autoAlpha:0, delay: 3.5});
  }
  
  

  this.intro_section.removeClass('animate-in');
  this.tea_selection_section.removeClass('animate-in');
  //this.graph_section_element.removeClass('animate-in');  
  
  // 0.5 waiting time & 0.5 half of slide transition
  TweenMax.delayedCall(1, this.display_graph_section_delayed, [], this);
  TweenMax.killDelayedCallsTo(this.display_selection_section_delayed);
  TweenMax.killDelayedCallsTo(this.display_intro_section_delayed);


  TweenMax.to(this.intro_section,0.5,           {autoAlpha:0});
  TweenMax.to(this.tea_selection_section,0.5,   {autoAlpha:0});
  TweenMax.to(this.graph_section_element,0.5,           {autoAlpha:1});


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
        var facebook_share_url    = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(current_url);
                
        $j('#graph-social-icons ul li a.fa-twitter').attr('href', twitter_share_url);
        $j('#graph-social-icons ul li a.fa-facebook').attr('href', facebook_share_url);




      } else {
        this.graph_section.display_combination_index(0,0);
      }

    } else if ( goog.isDefAndNotNull(this.page_hash_02) == true && 
                goog.isDefAndNotNull(this.page_hash_03) == true) {

      this.graph_section.display_combination(this.page_hash_02, this.page_hash_03);


      var current_url           = window.location.href;
      var twitter_share_url     = 'https://twitter.com/share?url=' + encodeURIComponent(current_url) + 
                                  '&amp;text=' + encodeURIComponent('Check this out!') + '&amp;hashtags=' + encodeURIComponent('monogram,tealayering,' + this.page_hash_02);
      var facebook_share_url    = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(current_url);
              
      $j('#graph-social-icons ul li a.fa-twitter').attr('href', twitter_share_url);
      $j('#graph-social-icons ul li a.fa-facebook').attr('href', facebook_share_url);

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

  /*
  if ($j('#tea-layering-detail-graph-section').length != 0) {
    this.mobile_graph_section = new monogram.component.MobileGraphSection({}, $j('#tea-layering-detail-graph-section'));
  }
  */

};














//    __  __  ___  ____ ___ _     _____
//   |  \/  |/ _ \| __ )_ _| |   | ____|
//   | |\/| | | | |  _ \| || |   |  _|
//   | |  | | |_| | |_) | || |___| |___
//   |_|  |_|\___/|____/___|_____|_____|
//




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



  var space_extra = 600 - 768;
  var target_height = $j(window).height() - space_extra - 351 - 31;

  

  // var target_zoom = target_height / 600;
  var target_zoom = target_height / 600;


  /*
  $j('#combination-graph-04').css({
    'zoom': target_zoom
  });
  */
  
  $j('#graph-section-combination-graph').css({
    'zoom': target_zoom
  });



  var mobile_target_zoom = 0.6333;
  var mobile_target_height = (mobile_target_zoom * 600);
  $j('#tea-layering-detail-graph-section').css({
   'height': mobile_target_height + 'px'
  });

   
  
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
    } else if (str_param == 'selection') {
      this.display_mobile_selection_section();
    } else if (str_param == 'graph') {
      this.display_mobile_graph_section();
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



