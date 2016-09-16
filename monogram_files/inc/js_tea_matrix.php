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
  <!-- <link rel="stylesheet" type="text/css" href="assets/libs/fullpage.js/dist/jquery.fullpage.min.css"> -->

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
    goog.require('monogram.page.Default');
  </script>
  <script type="text/javascript">
    window.monogram_page = new monogram.page.Default({});
  </script>

  <script>
  $(document).ready(function(){

    function changeIndicatorsColor($selector) {

      $(".active").find('span').removeAttr('style');
      $(".active").removeClass("active");
      $selector.parent().addClass("active");

      var $firstAnchor = $selector.find("span").first();
      var $lastAnchor = $selector.find("span").last();

      var firstColor = $firstAnchor.data('color');
      var lastColor = $lastAnchor.data('color');

      $firstAnchor.attr("style", "color: "+firstColor);
      $lastAnchor.attr("style", "color: "+lastColor);
    }

    // $('#tea-matrix-content').fullpage({
    //   anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12'],
    //   menu: '#page-indicator',
    //   animateAnchor: false,
    //   fadingEffect: true,
    //   fitToSection: true,
    //   fitToSectionDelay: 50000,
    //   onLeave: function(index, nextIndex, direction){

    //     var loadedSection = $(this);
    //     $animate_content = $(loadedSection).find(".tea-matrix-content-text-cta").find('.tea-matrix-content-animate');

    //     TweenMax.staggerFromTo($animate_content, 0.1, { 'y': 0, opacity: 1, ease: Sine.easeOutQuad }, { 'y': 100, opacity: 0, ease: Sine.easeOutQuad }, 0.1);

    //     changeIndicatorsColor($("#anchor-"+nextIndex));

    //   },
    //   afterLoad: function(anchorLink, index){

    //       var loadedSection = $(this);          
    //       $animate_content = $(loadedSection).find(".tea-matrix-content-text-cta").find('.tea-matrix-content-animate');

    //       TweenMax.staggerFromTo($animate_content, 0.5, { 'y': 100, opacity: 0, ease: Sine.easeOutQuad }, { 'y': 0, opacity: 1, ease: Sine.easeOutQuad }, 0.1);
    //   }
    // });    

    var currentSection = 1;
    var showTransition = 0;

    function updateStatus() {
      showTransition = false;
    }

    function onceSectionHidden(showSectionNo) {

      showSection(showSectionNo);

    }

    function hideSection(sectionNo, showSectionNo) {

      var $hideSection = $('#tea-matrix-content-section-'+sectionNo);

      $hideSection.removeClass('active-section');

      $animate_content = $hideSection.find(".tea-matrix-content-text-cta").find('.tea-matrix-content-animate');
      // $animate_content.attr('style', 'opacity:0;');

      $animate_content = $hideSection.find(".tea-matrix-content-text-cta").find('.tea-matrix-content-animate');

      var tl2 = new TimelineLite({ onComplete: onceSectionHidden, onCompleteParams: [showSectionNo] });
      tl2.add(
        TweenMax.staggerFromTo($animate_content, 0.1, { 'y': 0, opacity: 1, ease: Sine.easeOutQuad }, { 'y': 10, opacity: 0, ease: Sine.easeOutQuad })
      );

    }

    function showSection(sectionNo) {

      var $showSection = $('#tea-matrix-content-section-'+sectionNo);

      $showSection.addClass('active-section');
      $animate_content = $showSection.find(".tea-matrix-content-text-cta").find('.tea-matrix-content-animate');

      var tl = new TimelineMax({onComplete:updateStatus});      
      tl.add(
        TweenMax.staggerFromTo($animate_content, 0.3, { 'y': 10, opacity: 0, ease: Sine.easeOutQuad }, { 'y': 0, opacity: 1, ease: Sine.easeOutQuad }, 0.1)
      );

      changeIndicatorsColor($("#anchor-"+sectionNo));


      var single_graph = $('#tea-matrix-combination-graph').data('monogram.graph.SingleGraph');
      if(single_graph != null){
        
        var id_array = [
            'cherry-japonais',
            'uji-sencha',            
            'jasmine-silk-pearls',
            'milky-oolong',
            'lapsang-florale',
            'kashmere',
            'earl-grey-neroli',
            'morning-english',
            'rose-of-ariana',
            'shiso-mint',
            'saffronais',
            'provencal-herbs'
          ];
        var target_id = id_array[Math.floor(Math.random() * id_array.length)];
        single_graph.set_data_by_id(target_id);
      }
                  

    }

    function init() {
      showSection(1); // init
      changeIndicatorsColor($("#page-indicator li.active a"));
    }

    init();
    

    // events

    window.addEventListener('mousewheel', function(e){

        wDelta = e.wheelDelta < 0 ? 'down' : 'up';
                     
        var totalSection = $('#tea-matrix-content').find(".section").length;

        if(wDelta=='down' && showTransition == false) {          

          if(currentSection>=1 && currentSection<totalSection) {            

            showTransition = true;

            hideSection(currentSection, currentSection+1);
            currentSection++;            

          }          

        }else if(wDelta=='up' && showTransition == false) {        

          if(currentSection>1) {

            showTransition = true;

            hideSection(currentSection, currentSection-1);
            currentSection--;

          }      

        }

    });

    $("#page-indicator .anchor").on("click", function(e){


      if(showTransition == false) {
        showTransition = true;

        var currentIndex = $(".active-section").index();
        activeSection = currentIndex + 1;
        currentSection = $(this).parent().data('menuanchor');
        hideSection(activeSection, currentSection);
        
      }
      
    });

  });
  </script>

<?php else: ?>

  <!-- Optimized Version -->
  <!-- <script type="text/javascript" src="assets/js_minified/head.load.min.js"></script>
  <script type="text/javascript">
    var PAGE_LIBRARY        = "assets/js_minified/page-libraries.min.js";
    var PAGE_JS             = "assets/js_minified/page-default.min.js";

    // avoid conflicts
    window.head_js = window.head;

    window.head_js.load("assets/css/style.css");
    window.head_js.load(PAGE_LIBRARY, function() {
      window.head_js.load(PAGE_JS, function() {
          
        window.monogram_page = new monogram.page.Home({});

      });
    });

    // start preload
  </script> -->

<?php endif; ?>