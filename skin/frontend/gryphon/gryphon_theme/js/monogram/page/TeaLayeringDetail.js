goog.provide('monogram.page.TeaLayeringDetail');
goog.require('monogram.page.Default');

goog.require('monogram.component.GraphSection');
goog.require('monogram.component.MobileGraphSection');

/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {monogram.page.Default}
 */
monogram.page.TeaLayeringDetail = function(options, element) {
  monogram.page.Default.call(this, options, element);
  this.options = $j.extend(this.options, monogram.page.TeaLayeringDetail.DEFAULT, options);


  this.graph_section = null;
  this.mobile_graph_section = null;

};
goog.inherits(monogram.page.TeaLayeringDetail, monogram.page.Default);



// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MICE
 * @const {object}
 */
monogram.page.TeaLayeringDetail.DEFAULT = {

};



/**
 * @override
 * @inheritDoc
 */
monogram.page.TeaLayeringDetail.prototype.init = function() {

  monogram.page.TeaLayeringDetail.superClass_.init.call(this);



  if ($j('#graph-section').length != 0) {
    this.graph_section = new monogram.component.GraphSection({}, $j('#graph-section'));
  }


  if ($j('#tea-layering-detail-graph-section').length != 0) {
    this.mobile_graph_section = new monogram.component.MobileGraphSection({}, $j('#tea-layering-detail-graph-section'));
  }



  this.update_page_layout();    // this is called after the initial create to update the layout

};






//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//




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
monogram.page.TeaLayeringDetail.prototype.update_page_layout = function() {

  monogram.page.TeaLayeringDetail.superClass_.update_page_layout.call(this);


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

  $j('#combination-graph-04').css({
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

};


/**
 * @override
 * @inheritDoc
 */
monogram.page.TeaLayeringDetail.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  monogram.page.TeaLayeringDetail.superClass_.scroll_to_target.call(this, str_param);

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
monogram.page.TeaLayeringDetail.prototype.on_scroll_to_no_target = function(){

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


goog.exportSymbol('monogram.page.TeaLayeringDetail', monogram.page.TeaLayeringDetail);