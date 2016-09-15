<?php 
    global $is_debug;
    global $body_class;

    // $is_debug = false;
  $is_debug = true;

  $body_class = "home-page";
?>
<!doctype html class="<?php echo $body_class; ?>">
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en" class="no-js"><!--<![endif]-->
    <head>
      <?php include('inc/head.php'); ?>
    </head>
    <body class="<?php echo $body_class; ?>">
  
      <div id="page-preloader"></div>

      <div id="page-wrapper">
          <div id="page-wrapper-content">
            
            <?php include('inc/header.php'); ?>






            <!--
               ____  _____ ____  _  _______ ___  ____
              |  _ \| ____/ ___|| |/ /_   _/ _ \|  _ \
              | | | |  _| \___ \| ' /  | || | | | |_) |
              | |_| | |___ ___) | . \  | || |_| |  __/
              |____/|_____|____/|_|\_\ |_| \___/|_|

             -->


            <article id="graph-section" class="visible-md visible-lg">

              <div id="monograph-combined-graph-data"
                data-graph-data-url="assets/json/graph-data.json"
                data-combined-graph-data-url="assets/json/combined-graph-data.json">
              </div>



              <div class="desktop-header-spacer"></div>

              <div class="container-fluid">
                <div class="col-md-3">

                  <!--
                      ____ ___  _    _   _ __  __ _   _    ___  _
                     / ___/ _ \| |  | | | |  \/  | \ | |  / _ \/ |
                    | |  | | | | |  | | | | |\/| |  \| | | | | | |
                    | |__| |_| | |__| |_| | |  | | |\  | | |_| | |
                     \____\___/|_____\___/|_|  |_|_| \_|  \___/|_|

                  -->

                  <div id="graph-column-01-container">
                    <div id="graph-column-01">

                      <div id="graph-selction-a" class="graph-selection">

                        <div class="graph-selection-title">
                          <h4 class="number">06 / 12</h4>
                          <h4>Chosen Tea</h4>
                        </div>

                        <div class="graph-selection-content">

                        </div>

                        <div class="graph-selection-instructions">
                          <div class="graph-selection-instructions-btn" id="graph-selection-next-tea-btn">
                            <div class="fa fa-arrows-h"></div>
                            <h4>Next Tea</h4>
                          </div>
                        </div>

                      </div>

                    </div> <!-- graph-column-01 -->
                  </div> <!-- graph-column-01-container -->
                  
                </div>
                <div class="col-md-6">

                  <div id="graph-center-column-container">
                    <div id="graph-center-column">
                      <div id="graph-center-column-content">
                        <!--
                            ____ ____      _    ____  _   _
                           / ___|  _ \    / \  |  _ \| | | |
                          | |  _| |_) |  / _ \ | |_) | |_| |
                          | |_| |  _ <  / ___ \|  __/|  _  |
                           \____|_| \_\/_/   \_\_|   |_| |_|

                        -->


                        <!--
                        <div id="combination-graph-04">
                          <div id="combination-graph-text-container">
                          </div>
                          <div id="combination-graph-svg-container">
                            <div id="combination-graph-svg"></div>
                          </div>

                          <div id="combination-graph-label">
                            <div class="graph-label-image graph-label-wood"></div>
                            <div class="graph-label-image graph-label-savoury"></div>
                            <div class="graph-label-image graph-label-herbaceous"></div>
                            <div class="graph-label-image graph-label-floral"></div>
                            <div class="graph-label-image graph-label-nutty"></div>
                            <div class="graph-label-image graph-label-dairy"></div>
                            <div class="graph-label-image graph-label-minerality"></div>
                            <div class="graph-label-image graph-label-citrus"></div>
                            <div class="graph-label-image graph-label-stone-fruit"></div>
                            <div class="graph-label-image graph-label-red-fruit"></div>
                            <div class="graph-label-image graph-label-sweet"></div>
                          </div>
                        </div>
                        -->


                        


                        <div id="graph-section-combination-graph" class="monogram-combination-graph">
                          <div class="graph-svg"></div>
                          <div class="graph-overlay"></div>
                        </div>



                        <div id="graph-section-center-copy">

                          <h2>Testing <span style="color:#f1efee">+</span> Testing</h2>
                          <p>Suspendisse in enim nisl. Duis nec lacus magna. Curabitur tempus metus in libero lacinia posuere. Duis accumsan bibendum dapibus. </p>

                          <div class="cta-container">
                            <a href="javascript:void(0);" class="square-cta square-cta-01">Save tea layering</a>
                            <a href="javascript:void(0);" class="square-cta square-cta-02">add both to cart</a>
                            <a href="#selection" class="square-cta square-cta-03">choose another layering</a>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>


                </div>
                <div class="col-md-3">

                  <!--
                      ____ ___  _    _   _ __  __ _   _    ___ ____
                     / ___/ _ \| |  | | | |  \/  | \ | |  / _ \___ \
                    | |  | | | | |  | | | | |\/| |  \| | | | | |__) |
                    | |__| |_| | |__| |_| | |  | | |\  | | |_| / __/
                     \____\___/|_____\___/|_|  |_|_| \_|  \___/_____|

                  -->

                  <div id="graph-column-02-container">
                    <div id="graph-column-02">

                      <div id="graph-selction-b" class="graph-selection">

                        <div class="graph-selection-title">
                          <h4 class="number">01 / 03</h4>
                          <h4>Layering Suggestion Tea</h4>
                        </div>

                        <div class="graph-selection-content">
                          
                        </div>

                        <div class="graph-selection-instructions">
                          <div class="graph-selection-instructions-btn" id="graph-selection-next-layering-btn">
                            <div class="fa fa-arrows-v"></div>
                            <h4>Next Suggestion</h4>
                          </div>
                        </div>

                      </div>

                    </div> <!-- graph-column-02 -->
                  </div> <!-- graph-column-02-container -->

                </div>
              </div>





              <div id="graph-social-icons">
                <ul>
                  <li> <a href="www.twitter.com" class="fa fa-twitter"></a> </li>
                  <li> <a href="www.facebook.com" class="fa fa-facebook"></a> </li>
                  <li> <a href="www.intagram.com" class="fa fa-instagram"></a> </li>
                </ul>
              </div>
              

            </article>





            
            








            <?php include('inc/js_test.php'); ?>
            <?php include('inc/footer.php'); ?>
            <?php include('inc/fonts.php'); ?>

          </div> <!-- #page-wrapper-content -->
      </div> <!-- #page-wrapper -->

    </body>
</html>
