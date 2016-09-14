<?php
  global $is_debug;
?>

<!-- 
         _   ___     ___    ____   ____ ____  ___ ____ _____ 
        | | / \ \   / / \  / ___| / ___|  _ \|_ _|  _ \_   _|
     _  | |/ _ \ \ / / _ \ \___ \| |   | |_) || || |_) || |  
    | |_| / ___ \ V / ___ \ ___) | |___|  _ < | ||  __/ | |  
     \___/_/   \_\_/_/   \_\____/ \____|_| \_\___|_|    |_|  
                                                             
-->


<?php if($is_debug): ?>
  <!-- Development Version -->

  
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">

  <!-- Page Library -->
  <script type="text/javascript" src="assets/libs/jquery-other/jquery-1.9.1.min.js"></script>
  <script type="text/javascript" src="assets/libs/jquery-other/jquery.mousewheel.min.js"></script>
  <script type="text/javascript" src="assets/libs/jquery-other/jquery.mobile.custom.min.js"></script>

  <script type="text/javascript" src="assets/libs/misc-js/manic-custom-polyfill.js"></script>
  <script type="text/javascript" src="assets/libs/misc-js/mobile-detect.js"></script>
  <script type="text/javascript" src="assets/libs/misc-js/preloadjs-0.4.0.min.js"></script>

  <script type="text/javascript" src="assets/libs/gsap/src/minified/TimelineMax.min.js"></script>
  <script type="text/javascript" src="assets/libs/gsap/src/minified/TweenMax.min.js"></script>
  <script type="text/javascript" src="assets/libs/gsap/src/minified/jquery.gsap.min.js"></script>
  <script type="text/javascript" src="assets/libs/gsap/src/minified/easing/EasePack.min.js"></script>
  <script type="text/javascript" src="assets/libs/gsap/src/minified/plugins/ScrollToPlugin.min.js"></script>
  <script type="text/javascript" src="assets/libs/gsap/src/minified/plugins/RaphaelPlugin.min.js"></script>

  <script type="text/javascript" src="assets/libs/scrollmagic/scrollmagic/minified/ScrollMagic.min.js"></script>
  <script type="text/javascript" src="assets/libs/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js"></script>
  <script type="text/javascript" src="assets/libs/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"></script>

  <script type="text/javascript" src="assets/libs/raphael/raphael.min.js"></script>
  <script type="text/javascript" src="assets/libs/slick-carousel/slick/slick.min.js"></script>
  <script type="text/javascript" src="assets/libs/hammer/hammer.min.js"></script>
  
  <!-- Google Closure -->
  <script type="text/javascript" src="assets/libs/google-closure/closure-library/closure/goog/base.js"></script>
  <script type="text/javascript" src="assets/js/google-closure-dependency-list.js"></script>
  <script type="text/javascript">
    goog.require('monogram.page.Test');
  </script>
  <script type="text/javascript">
    window.monogram_page = new monogram.page.Test({});
  </script> 
  
<?php else: ?>

  <!-- Optimized Version -->
  <script type="text/javascript" src="assets/js_minified/head.load.min.js"></script>
  <script type="text/javascript">
    var PAGE_LIBRARY        = "assets/js_minified/page-libraries.min.js";
    var PAGE_JS             = "assets/js_minified/page-default.min.js";

    // avoid conflicts
    window.head_js = window.head;

    window.head_js.load("assets/css/style.css");
    window.head_js.load(PAGE_LIBRARY, function() {
      window.head_js.load(PAGE_JS, function() {
          
        window.monogram_page = new monogram.page.Test({});

      });
    });

    // start preload
  </script>

<?php endif; ?>