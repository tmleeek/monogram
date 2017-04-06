<?php if(DEBUG): ?>

  <!--
     ____  _______     __      _   ___     ___    ____   ____ ____  ___ ____ _____
    |  _ \| ____\ \   / /     | | / \ \   / / \  / ___| / ___|  _ \|_ _|  _ \_   _|
    | | | |  _|  \ \ / /   _  | |/ _ \ \ / / _ \ \___ \| |   | |_) || || |_) || |
    | |_| | |___  \ V /   | |_| / ___ \ V / ___ \ ___) | |___|  _ < | ||  __/ | |
    |____/|_____|  \_/     \___/_/   \_\_/_/   \_\____/ \____|_| \_\___|_|    |_|

  -->

  <link rel="stylesheet" type="text/css" href="<?php echo THEMEROOT; ?>/assets/css/style.css">

  <!-- Page Library -->
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/jquery-mousewheel/jquery.mousewheel.min.js"></script>
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/jquery-disablescroll/jquery.disablescroll.min.js"></script>

  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/misc-js/manic-custom-polyfill.js"></script>
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/misc-js/mobile-detect.js"></script>
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/misc-js/preloadjs-0.4.0.min.js"></script>

  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/gsap/src/minified/TimelineMax.min.js"></script>
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/gsap/src/minified/TweenMax.min.js"></script>
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/gsap/src/minified/jquery.gsap.min.js"></script>
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/gsap/src/minified/plugins/ScrollToPlugin.min.js"></script>

  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/scrollmagic/scrollmagic/minified/ScrollMagic.min.js"></script>
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js"></script>
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"></script>

  <!-- <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/video.js/dist/video.min.js"></script> -->
  <!-- <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/videojs_old/video.js"></script> -->
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/slick-carousel/slick/slick.min.js"></script>
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/imagesloaded/imagesloaded.pkgd.min.js"></script>

  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/hammer/hammer.min.js"></script>

  <link rel="stylesheet" type="text/css" href="<?php echo THEMEROOT; ?>/assets/libs/intltelinput/css/intlTelInput.css">
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/intltelinput/js/utils.js"></script>
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/libs/intltelinput/js/intlTelInput.js"></script>



  <!-- <link href="<?php echo THEMEROOT; ?>/assets/libs/video.js/dist/video-js.css" rel="stylesheet" type="text/css"> -->
  <script src="<?php echo THEMEROOT; ?>/assets/libs/video.js/dist/ie8/videojs-ie8.min.js"></script>
  <script src="<?php echo THEMEROOT; ?>/assets/libs/video.js/dist/video.min.js"></script>
  <script>
    videojs.options.flash.swf = '<?php echo THEMEROOT; ?>/assets/libs/video.js/dist/video-js.swf';
  </script>




  <!-- Google Closure -->
  <script src="<?php echo THEMEROOT; ?>/assets/libs/google-closure/closure-library/closure/goog/base.js"></script>
  <script src="<?php echo THEMEROOT; ?>/assets/js_source/google-closure-dependency-list.js"></script>
  <script type="text/javascript">
    goog.require('quest.page.Destination');
  </script>
  <script type="text/javascript">
    page = new quest.page.Destination({});
  </script>
  
<?php else: ?>

  <!--
      ___  ____ _____ ___ __  __ ___ __________ ____
     / _ \|  _ \_   _|_ _|  \/  |_ _|__  / ____|  _ \
    | | | | |_) || |  | || |\/| || |  / /|  _| | | | |
    | |_| |  __/ | |  | || |  | || | / /_| |___| |_| |
     \___/|_|    |_| |___|_|  |_|___/____|_____|____/

  -->
  
  <script type="text/javascript" src="<?php echo THEMEROOT; ?>/assets/js/head.load.min.js"></script>
  <script type="text/javascript">
    var PAGE_LIBRARY        = "<?php echo THEMEROOT; ?>/assets/js/page-libraries.min.js";
    var PAGE_JS             = "<?php echo THEMEROOT; ?>/assets/js/page-service.min.js";

    var PAGE_CSS            = "<?php echo THEMEROOT; ?>/assets/css/style.css";

    // prevent variable override
    window.custom_head = head;

    window.custom_head.load(PAGE_CSS);
    window.custom_head.load(PAGE_LIBRARY, function() {
      window.custom_head.load(PAGE_JS, function() {
        window.page = new quest.page.Destination({});
      });
    });

  </script>
  
<?php endif; ?>