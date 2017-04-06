goog.provide('monogram.page.Default');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


goog.require('manic.page.Page');




/**
 * The Default Page constructor
 * @inheritDoc
 * @constructor
 * @extends {manic.page.Page}
 */
monogram.page.Default = function(options) {

  manic.page.Page.call(this, options);
  this.options = $.extend(this.options, monogram.page.Default.DEFAULT, options);




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


  $('body').on('custom-page-update-layout', function(event){

    console.log('custom-page-update-layout');
    this.create_image_container();
    
  }.bind(this));

  this.mobile_header();
  this.mobile_specific();
  this.others();

  if(manic.IS_MOBILE == false){
    this.sticky_sidebar();
  }

  // $('p > img').unwrap();
  // console.log('unwrap');

  console.log('monogram.page.Default: init');
};

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.page.Default.prototype.private_method_04 = function() {};
monogram.page.Default.prototype.private_method_05 = function() {};
monogram.page.Default.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



monogram.page.Default.prototype.public_method_03 = function() {};
monogram.page.Default.prototype.public_method_04 = function() {};
monogram.page.Default.prototype.public_method_05 = function() {};
monogram.page.Default.prototype.public_method_06 = function() {};




//    _        _ __   _____  _   _ _____
//   | |      / \\ \ / / _ \| | | |_   _|
//   | |     / _ \\ V / | | | | | | | |
//   | |___ / ___ \| || |_| | |_| | | |
//   |_____/_/   \_\_| \___/ \___/  |_|
//


/**
 * @override
 * @inheritDoc
 */
monogram.page.Default.prototype.update_page_layout = function(){
  monogram.page.Default.superClass_.update_page_layout.call(this);

  if(manic.IS_MOBILE == false){
    
  }



  if (manic.IS_MOBILE == false && this.desktop_header != null) {
    // this.desktop_header.update_layout();
  }


};

monogram.page.Default.prototype.mobile_header = function(){  

  if(manic.IS_MOBILE == true){
    $("#mobile-header").find("#mobile-header-menu-btn").on("click", function(e){
      e.preventDefault(); 
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      $('html').toggleClass("mobile-menu-open");
    }); 

    $('.header-mobile-subscribe-form').find('.subscribe_email').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13') 
        $('.header-mobile-subscribe-form').find('.subscribe_newsletter').trigger('click');
    });

    $('.header-mobile-subscribe-form').find('.subscribe_newsletter').click(function(e){
      e.preventDefault();        
      var subscribe_email = $(this).prev('.subscribe_email').val();

      console.log(subscribe_email);

      if(subscribe_email!=="" && subscribe_email!=="Enter Your Email Address") {

        $('.newsletter_ajax_loader').show();

        var request = $.ajax({
            url: "//www.monogramtea.com/discovertea/index/subscribe/",
            method: "POST",
            data: { subscribe_email : subscribe_email },
            dataType: "html"
        });
         
        request.done(function( msg ) {
          var message = JSON.parse(msg);
          console.log(message);
          $('.newsletter_ajax_loader').hide();
          if(message.error_messages)
            $('span.ajax_msg').html('<p>'+message.error_messages+'</p>').show().delay(5000).fadeOut();              
            else
            $('span.ajax_msg').html('<p>Successfully subscribed to newsletter</p>').show().delay(5000).fadeOut();
        });

      }
    });   
  }  

};

monogram.page.Default.prototype.mobile_specific = function(){  

  // if(manic.IS_MOBILE == true){
    console.log('slick')
    $("#page-index-carousel").slick({
      'speed': 350,
      'dots': false,
      'infinite': true,
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'pauseOnHover': true,
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('#mobile-blog-sidebar').gryphon_mobile_wp_sidebar({});
  // }  

};

monogram.page.Default.prototype.others = function(){

  $('#footer-newsletter-input').find('.subscribe_email').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') 
      $('#footer-newsletter-input').find('.subscribe_newsletter').trigger('click');
  });

  $('#footer-newsletter-input').find('.subscribe_newsletter').click(function(e){
    e.preventDefault();        
    var subscribe_email = $(this).prev('.subscribe_email').val();

    console.log(subscribe_email);

    if(subscribe_email!=="" && subscribe_email!=="Enter Your Email Address") {

      $('.newsletter_ajax_loader').show();

      var request = $.ajax({
          url: "http://www.monogramtea.com/discovertea/index/subscribe/",
          method: "POST",
          data: { subscribe_email : subscribe_email },
          dataType: "html"
      });
       
      request.done(function( msg ) {
        var message = JSON.parse(msg);
        console.log(message);
        $('.newsletter_ajax_loader').hide();
        if(message.error_messages)
          $('span.ajax_msg').html('<p>'+message.error_messages+'</p>').show().delay(5000).fadeOut();
        else
          $('span.ajax_msg').html('<p>Successfully subscribed to newsletter</p>').show().delay(5000).fadeOut();
      });

    }
  });

  jQuery("#desktop-header-cart").find(".cart-count-update").removeClass('animated fadeIn').addClass('animated flipOutX');

  $.ajax({
      url: 'http://www.monogramtea.com/discovertea/index/cartpreview',
      dataType: 'json',
      type : 'get',
      success: function(data){

          // update product count in cart
          $("#desktop-header-cart").find(".count").text("("+data.cart_qty+")");
          $("#mobile-header-cart-btn-container").find(".count").text("("+data.cart_qty+")");

          jQuery("#desktop-header-cart").find(".cart-count-update").removeClass('animated flipOutX').addClass('animated fadeIn');
    
      }
  });     

};

monogram.page.Default.prototype.sticky_sidebar = function(){
  var controller = new ScrollMagic.Controller();
  var about_height = $('.widget_monogram_about').height();  


  var multiply_by;
  if(window.innerWidth > 1280) {
    multiply_by = 2.2;
  }else {
    multiply_by = 2.7;
  }

  var intViewportHeight = parseInt((window.innerHeight / 3) * multiply_by);

  var duration = parseInt($("#page-index-content").height()) - intViewportHeight; // 300 = sidebar about section height

  console.log(duration);
  $('#trigger1').css({'top' : intViewportHeight + 'px'});

  if($("#page-index-content").height() > 1000) {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: duration})
            .setPin("#sticky-sidebar")
            // .addIndicators({name: "1 (duration: "+duration+")"}) // add indicators (requires plugin)
            .addTo(controller);  
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

  // desktop-header-spacer
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