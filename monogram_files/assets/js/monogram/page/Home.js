goog.provide('monogram.page.Home');
goog.require('monogram.page.Default');

/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {monogram.page.Default}
 */
monogram.page.Home = function(options, element) {
  monogram.page.Default.call(this, options, element);
  this.options = $.extend(this.options, monogram.page.Home.DEFAULT, options);

  console.log('this is the home page');

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



  $("#home-intro-section").hide();
  $("#home-graph-section").hide();

  /*
  $("#home-tea-selection-section").hide();
  $('#scroll-down').on("click", function(e){
    $("#home-intro-section").slideUp();
    $("#home-tea-selection-section").slideDown();
  });
  */

  this.create_desktop_home_tea_item();

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
};
monogram.page.Home.prototype.display_selection_section = function(){
  console.log('display_selection_section');
};
monogram.page.Home.prototype.display_graph_section = function(){
  console.log('display_graph_section');
};



//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//



monogram.page.Home.prototype.create_desktop_home_tea_item = function(){

  $('.home-tea-item').mouseover(function(event){
    var target = $(event.currentTarget);

    $('.home-tea-item').addClass('dark-version');

    target.removeClass('dark-version');

  }.bind(this));
};


//    __  __  ___  ____ ___ _     _____
//   |  \/  |/ _ \| __ )_ _| |   | ____|
//   | |\/| | | | |  _ \| || |   |  _|
//   | |  | | |_| | |_) | || |___| |___
//   |_|  |_|\___/|____/___|_____|_____|
//



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

};


/**
 * @override
 * @inheritDoc
 */
monogram.page.Home.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  monogram.page.Home.superClass_.scroll_to_target.call(this, str_param);


  if (str_param == 'intro') {
    this.display_intro_section();
  } else if (str_param == 'selection') {
    this.display_selection_section();
  } else if (str_param == 'graph') {
    this.display_graph_section();
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

  this.display_intro_section();

  // Mice venue landing
  /*
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){
    // console.log('go home!!');
    this.mice_landing_mobile_both_close();
  }
  */

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