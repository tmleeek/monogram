java -jar "compiler.jar" ^
  --js=..\jquery\dist\jquery.min.js ^
  --js=..\jquery-mousewheel\jquery.mousewheel.min.js ^
  --js=..\jquery-disablescroll\jquery.disablescroll.min.js ^
  --js=..\misc-js\manic-custom-polyfill.js ^
  --js=..\misc-js\mobile-detect.js ^
  --js=..\misc-js\preloadjs-0.4.0.min.js ^
  --js=..\gsap\src\minified\TimelineMax.min.js ^
  --js=..\gsap\src\minified\TweenMax.min.js ^
  --js=..\gsap\src\minified\jquery.gsap.min.js ^
  --js=..\gsap\src\minified\plugins\ScrollToPlugin.min.js ^
  --js=..\scrollmagic\scrollmagic\minified\ScrollMagic.min.js ^
  --js=..\scrollmagic\scrollmagic\minified\plugins\animation.gsap.min.js ^
  --js=..\scrollmagic\scrollmagic\minified\plugins\debug.addIndicators.min.js ^
  --js=..\slick-carousel\slick\slick.min.js ^
  --js=..\imagesloaded\imagesloaded.pkgd.min.js ^
  --js=..\hammer\hammer.min.js ^
  --js=..\intltelinput\js\utils.js ^
  --js=..\intltelinput\js\intlTelInput.js ^
  --compilation_level WHITESPACE_ONLY ^
  --js_output_file=..\..\js\page-libraries.min.js