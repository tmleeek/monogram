

      <?php 
        /*
        $site_language                        = manic_get_option( PREFIX . 'site_language' );
        $footer_copyright                     = manic_get_option( PREFIX . 'footer_copyright' );
        $contact_us_mobile_button_copy        = manic_get_option( PREFIX . 'contact_us_mobile_button_copy' );
        $mailing_list_text                   = manic_get_option( PREFIX . 'mailing_list_text' );
        $mailing_list_mobile_button_copy      = manic_get_option( PREFIX . 'mailing_list_mobile_button_copy' );
        */
        
      ?>



      <footer id="desktop-footer" class="visible-md visible-lg">
        <div id="desktop-footer-ctas-container">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-2">
                <h5>About Monogram</h5>
                <!-- 
                <ul>
                  <li><a href="http://www.monogramtea.com/experience/">Experience</a></li>
                  <li><a href="http://www.monogramtea.com/tea-layering/">Tea Layering</a></li>
                  <li><a href="http://www.monogramtea.com/recommendations/">Recommendations</a></li>
                  <li><a href="http://www.monogramtea.com/tea-matrix/">Tea Matrix</a></li>
                  <li><a href="http://www.monogramtea.com/monologue/">Monologue</a></li>
                </ul>
                -->

                <?php wp_nav_menu(array(
                  'container' => false,                           // remove nav container
                  'menu' => 'Footer Menu 01',                       // nav name
                  'menu_class' => '',                             // adding custom nav class
                  'theme_location' => 'footer-menu-01',             // where it's located in the theme
                  'before' => '',                                 // before the menu
                  'after' => '',                                  // after the menu
                  'link_before' => '',                            // before each link
                  'link_after' => '',                             // after each link
                  'depth' => 0,                                   // limit the depth of the nav
                  'fallback_cb' => ''                             // fallback function (if there is one)
                )); ?>

              </div>
              <div class="col-md-2">
                <h5>Shop</h5>
                <!-- 
                <ul>
                  <li><a href="http://www.monogramtea.com/store.html">TeaStore</a></li>
                  <li><a href="http://www.monogramtea.com/monogram-service/">MonogramService</a></li>
                  <li><a href="http://www.monogramtea.com/subscription/">Subscription</a></li>
                </ul>
                -->

                <?php wp_nav_menu(array(
                  'container' => false,                           // remove nav container
                  'menu' => 'Footer Menu 02',                       // nav name
                  'menu_class' => '',                             // adding custom nav class
                  'theme_location' => 'footer-menu-02',             // where it's located in the theme
                  'before' => '',                                 // before the menu
                  'after' => '',                                  // after the menu
                  'link_before' => '',                            // before each link
                  'link_after' => '',                             // after each link
                  'depth' => 0,                                   // limit the depth of the nav
                  'fallback_cb' => ''                             // fallback function (if there is one)
                )); ?>

              </div>
              <div class="col-md-2">
                <h5>Support</h5>
                <!-- 
                <ul>
                  <li><a href="">Account Registration</a></li>
                  <li><a href="http://www.monogramtea.com/faq/">Frequently Asked Questions</a></li>
                  <li><a href="http://www.monogramtea.com/shipping-info/">Shipping Information</a></li>
                  <li><a href="http://www.trackntrace.com.sg/">Track Order</a></li>
                </ul>
                -->

                <?php wp_nav_menu(array(
                  'container' => false,                           // remove nav container
                  'menu' => 'Footer Menu 03',                       // nav name
                  'menu_class' => '',                             // adding custom nav class
                  'theme_location' => 'footer-menu-03',             // where it's located in the theme
                  'before' => '',                                 // before the menu
                  'after' => '',                                  // after the menu
                  'link_before' => '',                            // before each link
                  'link_after' => '',                             // after each link
                  'depth' => 0,                                   // limit the depth of the nav
                  'fallback_cb' => ''                             // fallback function (if there is one)
                )); ?>

              </div>
              <div class="col-md-2">
                <div class="footer-follow-us-section">
                  <h5>Follow Us</h5>
                  <ul class="social-media-icons">
                    <li><a href="https://www.pinterest.com/monogramtea" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                    <li><a href="https://www.twitter.com/monogramtea" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/monogramtea" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://instagram.com/monogram_tea" target="_blank"><i class="fa fa-instagram"></i></a></li>
                  </ul>

                  <h5>Contact Us</h5>
                    <a href="http://www.monogramtea.com/contact/">Get In Touch</a>
                  <!-- <a href="tel:6512345678" class="telephone">+65 1234 5678</a> -->
                </div>
              </div>
              <div class="col-md-3 col-md-offset-1">
                <h5>Newsletter</h5>
                <p>Get the latest news, product <br> announcements, promotions, and more!</p>
              
                <div id="footer-newsletter-input">
                  <input type="text" name="subscribe_email" id="subscribe_email" placeholder="Enter your email address">
                  <a href="#" class="signup subscribe_newsletter footer-newsletter-send-btn"><i class="fa fa-paper-plane" aria-hidden="true"></i></a>
                  <!-- <span class="newsletter_ajax_loader" style=""><img src="http://www.monogramtea.com/skin/frontend/gryphon/gryphon_theme/images/content/opc-ajax-loader.gif"></span> -->
                </div>
                <span class="ajax_msg italic"></span>
              </div>
            </div>
           </div>
        </div>

        <div id="desktop-footer-logo-tnc-container">
          <div class="container-fluid">
            <div class="col-md-4">
              <a href="http://www.monogramtea.com/">
                <span id="desktop-footer-logo"></span>
                <h5 id="monogram-name">monogram by gryphon tea company</h5>
              </a>
            </div>
            <div class="col-md-3 col-md-offset-5">
              <ul>
                <li><a href="http://www.monogramtea.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://www.monogramtea.com/terms-and-conditions/">Terms &amp; Condition</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <!--
         __  __  ___  ____ ___ _     _____   _____ ___   ___ _____ _____ ____
        |  \/  |/ _ \| __ )_ _| |   | ____| |  ___/ _ \ / _ \_   _| ____|  _ \
        | |\/| | | | |  _ \| || |   |  _|   | |_ | | | | | | || | |  _| | |_) |
        | |  | | |_| | |_) | || |___| |___  |  _|| |_| | |_| || | | |___|  _ <
        |_|  |_|\___/|____/___|_____|_____| |_|   \___/ \___/ |_| |_____|_| \_\

      -->

      <!-- not sure why it's not available in the home page... -->

      <footer id="mobile-footer" class="visible-sm visible-xs">

        <div id="mobile-footer-copy-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12">


                  
                <div id="mobile-footer-copy">
                  <h4>Newsletter</h4>
                  <p>Get the latest news, product, announcments, promotions, and more!</p>
                </div> <!-- mobile-footer-copy -->

                <form id="mobile-newsletter-subscribe-form" class="simple-form-check">
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

      </footer>

  
      


    </div> <!-- #page-wrapper-content -->
  </div> <!-- #page-wrapper -->


  <?php include('inc/js_default.php'); ?>
  
  <?php wp_footer(); ?>

</body>
</html>