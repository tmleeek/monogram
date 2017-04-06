<div id="desktop-header-spacer" class="hidden-sm hidden-xs"></div>

<header id="desktop-header" class="hidden-sm hidden-xs">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9">
        <div id="desktop-header-right-container">
          <div id="desktop-header-logo-container">
            <a href="http://www.monogramtea.com">
              <span id="desktop-header-logo"></span>
              <span id="monogram-name"></span>
            </a>
          </div>
          <div id="desktop-header-menu-conainer">
            
            <?php wp_nav_menu(array(
              'container' => false,                           // remove nav container
              'menu' => 'Desktop Menu',                       // nav name
              'menu_class' => '',                             // adding custom nav class
              'theme_location' => 'desktop-menu',             // where it's located in the theme
              'before' => '',                                 // before the menu
              'after' => '',                                  // after the menu
              'link_before' => '',                            // before each link
              'link_after' => '',                             // after each link
              'depth' => 0,                                   // limit the depth of the nav
              'fallback_cb' => ''                             // fallback function (if there is one)
            )); ?>
    
            
          </div>
        </div>
      </div>
      <div class="col-md-3">
        
        <div id="desktop-header-cart">
          <ul>

            <!-- <li><a href="#" class="text">Currency</a></li> -->
            
            <li><a href="http://www.monogramtea.com/customer/account/login/" class="text">Join/Log in</a></li>
            <!-- <li><a href="http://www.monogramtea.com/customer/account/" class="text">My Account</a></li> -->
            <li><a href="http://www.monogramtea.com/checkout/cart/" class="text">Cart <span class="count">(0)</span></a></li>
            <!-- <li><a href="#" class="fa fa-bars"></a></li> -->
          </ul>
        </div>

      </div>
    </div>
  </div>
</header>


