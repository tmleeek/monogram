

<!--
<div id="mobile-header-spacer"></div>
<header id="mobile-header">

  <div class="white-bg"></div>

  <a href="<?php echo get_home_url(); ?>" id="mobile-header-logo">
  </a>
  <div id="mobile-header-menu-btn">
    <span></span><span></span><span></span>
  </div>

</header>




<header id="mobile-header-expanded">

  <div id="mobile-header-search-form-container">
    
    <form id="mobile-header-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>" method="GET" class="simple-form-check" autocomplete="false">
      <div class="form-group">
        <input type="text" name="s" id="mobile-header-search-txt" value="" placeholder="Search" class="required">
      </div>

      <input type="submit" value="" id="mobile-header-search-submit-btn">
    </form>
  </div>

  <div id="mobile-header-menu-container">

    <div id="mobile-menu">
      <nav>

        <?php wp_nav_menu(array(
          'container' => false,                           // remove nav container
          'menu' => 'Mobile Menu',                       // nav name
          'menu_class' => '',                             // adding custom nav class
          'theme_location' => 'mobile-menu',             // where it's located in the theme
          'before' => '',                                 // before the menu
          'after' => '',                                  // after the menu
          'link_before' => '',                            // before each link
          'link_after' => '',                             // after each link
          'depth' => 0,                                   // limit the depth of the nav
          'fallback_cb' => ''                             // fallback function (if there is one)
        )); ?>

      </nav>
    </div>

  </div>

</header>
-->

<div id="mobile-header-spacer" class="visible-sm visible-xs"></div>
<header id="mobile-header" class="visible-sm visible-xs">
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-3">

        <div id="mobile-header-menu-btn-container">
          <div id="mobile-header-menu-btn" class="fa fa-bars"></div>
        </div>

      </div>
      <div class="col-xs-6">

        <a id="mobile-header-monogram-name-container" href="http://www.monogramtea.com">
          <div id="mobile-header-monogram-name"></div>
        </a>

      </div>
      <div class="col-xs-3">

        <div id="mobile-header-cart-btn-container">
          <a href="http://www.monogramtea.com/checkout/cart/">
            <div id="mobile-header-cart-btn" class="fa fa-shopping-cart"></div>            
            <div class="counter">
              <span class="count">(0)</span>
            </div>
          </a>
        </div>

      </div>
    </div>
  </div>

  <div id="mobile-expand-container">

      <div class="mobile-submenu">
        <div class="mobile-submenu-header">         
          Welcome                     
        </div>
        <ul>
          <li><a href="http://www.monogramtea.com/customer/account/login/">Join | Log In</a></li>
        </ul>
      </div>

      <div class="mobile-submenu">
        <div class="mobile-submenu-header">About Monogram</div>
        <ul>          
          <li><a href="http://www.monogramtea.com/experience/">Experience Monogram</a></li>
          <li><a href="http://www.monogramtea.com/#graph/cherry-japonais">Layering Suggestions</a></li>
          <li><a href="http://www.monogramtea.com/tea-layering/">Tea Layering</a></li>              
          <li><a href="http://www.monogramtea.com/tea-matrix/">Tea Matrix</a></li>
          <li><a href="http://www.monogramtea.com/monolog/">Monolog</a></li>
        </ul>
      </div>

      <div class="mobile-submenu">
        <div class="mobile-submenu-header">Shop</div>        
        <ul>
          <li><a href="http://www.monogramtea.com/store.html">Tea Bar</a></li>
          <li><a href="http://www.monogramtea.com/subscription/">Subscription</a></li>
          <li><a href="http://www.monogramtea.com/monogram-service/">Monogram Services</a></li> 
        </ul>
      </div>

      <div class="mobile-submenu">
        <div class="mobile-submenu-header">Support</div>
        <ul>          
          <li><a href="http://www.monogramtea.com/faq/">Frequently Asked Questions</a></li>
          <li><a href="http://www.monogramtea.com/shipping-info/">Shipping Information</a></li>
          <li><a href="http://www.trackntrace.com.sg/">Track Order</a></li>
        </ul>
      </div>

      <div class="mobile-submenu">
        <div class="mobile-submenu-header">Contact</div>
        <ul>          
          <li><a href="http://www.monogramtea.com/contact/">Contact</a></li>          
        </ul>
      </div>

      <div class="mobile-submenu">
        <div class="mobile-submenu-header">
          <span>Follow Us</span>
          <ul class="social-media-icons">
            <li><a href="https://www.pinterest.com/monogramtea" target="_blank"><i class="fa fa-pinterest"></i></a></li>
            <li><a href="https://www.facebook.com/monogramtea" target="_blank"><i class="fa fa-facebook"></i></a></li>
            <li><a href="https://instagram.com/monogram_tea" target="_blank"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      
      <div id="mobile-header-footer-copy" class="mobile-footer">
        <div id="mobile-footer-copy-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12">


                  
                <div id="mobile-footer-copy">
                  <h4>Newsletter</h4>
                  <p>Get the latest news, product, announcments, promotions, and more!</p>
                </div> <!-- mobile-footer-copy -->

                <form id="mobile-newsletter-subscribe-form" class="header-mobile-subscribe-form simple-form-check">
                  <div class="form-group">
                    <input type="text" name="subscribe_email" class="subscribe_email required only-email" placeholder="Enter Your Email Address">
                    <input type="submit" class="subscribe_newsletter">
                    <span class='newsletter_ajax_loader' style='display:none'><img src='http://www.monogramtea.com/skin/frontend/gryphon/gryphon_theme/images/icons/spin.svg'/></span>
                  </div>
                  <span class="ajax_msg italic"></span>
                </form>

                <div id="mobile-footer-links">
                  <ul>
                    <li><a href="http://www.monogramtea.com/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="http://www.monogramtea.com/terms-and-conditions/">Terms & Conditions</a></li>
                  </ul>
                </div>

              </div>
            </div>



          </div>
        </div> <!-- mobile-footer-copy-section -->

        <div id="mobile-footer-copyright-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12">

                <div id="mobile-footer-copyright">
                  <a href="http://www.monogramtea.com" id="mobile-footer-logo"></a>
                  <h4>Monogram by Gryphon Tea Company</h4>
                </div>

              </div>
            </div>
          </div>
        </div> <!-- mobile-footer-copywrite-section -->

      </div>
    
  </div>
</header>