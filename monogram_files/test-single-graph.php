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



            <div id="monograph-graph-data" 
              data-graph-data-url="assets/json/graph-data.json">
            </div>
            <div id="monograph-combined-graph-data"
              data-graph-data-url="assets/json/graph-data.json"
              data-combined-graph-data-url="assets/json/combined-graph-data.json">
            </div>
            
            

            <div class="container">
              <div class="row">
                <div class="col-md-12">

                  <style type="text/css">
                    #temp-single-graph-container{
                      text-align: center;
                    }
                    .monogram-single-graph{
                      margin: 0 auto;
                    }
                  </style>

                  <div class="space100"></div>
                  <div id="temp-single-graph-container">
                    <!-- 
                    uji-sencha
                    cherry-japonais
                    jasmine-silk-pearls
                    milky-oolong
                    lapsang-florale
                    kashmere
                    earl-grey-neroli
                    morning-english
                    rose-of-ariana
                    shiso-mint
                    saffronais
                    provencal-herbs
                    -->
                    <div id="sample-single-graph" class="monogram-single-graph" data-id="uji-sencha">
                      <div class="graph-svg"></div>
                      <div class="graph-overlay"></div>
                    </div>


                    <div id="test-btn">
                      <h4>test</h4>
                    </div>

                  </div>
                  

                </div>
              </div>
            </div>






            <?php include('inc/js_test.php'); ?>
            <?php include('inc/footer.php'); ?>
            <?php include('inc/fonts.php'); ?>


            <style type="text/css">
              #test-btn{
                cursor: pointer;
              }
            </style>

            <script type="text/javascript">
              jQuery(document).ready(function($) {
                

                $('#test-btn').click(function(event){

                  var single_graph = $('#sample-single-graph').data('monogram.graph.SingleGraph');
                  
                  var id_array = ['uji-sencha','cherry-japonais','jasmine-silk-pearls','milky-oolong','lapsang-florale','kashmere','earl-grey-neroli','morning-english','rose-of-ariana','shiso-mint','saffronais','provencal-herbs'];
                  var target_id = id_array[Math.floor(Math.random() * id_array.length)];
                  single_graph.set_data_by_id(target_id);
                  


                }.bind(this));

              });
            </script>

          </div> <!-- #page-wrapper-content -->
      </div> <!-- #page-wrapper -->

    </body>
</html>