<?php 
    global $is_debug;
    global $body_class;

    // $is_debug = false;
  $is_debug = true;

  $body_class = "tea-product-detail-page";
?>
<!doctype html class="<?php echo $body_class; ?>">
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en" class="no-js <?php echo $body_class; ?>"><!--<![endif]-->
    <head>
      <?php include('inc/head.php'); ?>
    </head>
    <body class="<?php echo $body_class; ?>">
  
    <!-- <div id="page-preloader">
      </div> -->

      <div id="page-wrapper">
          <div id="page-wrapper-content">
            
            <?php include('inc/header.php'); ?>

            <?php include('tea-product-detail-content.php'); ?>
          
            <?php include('inc/js_tea_product_detail.php'); ?>
            <?php include('inc/footer.php'); ?>
            <?php include('inc/fonts.php'); ?>

          </div> <!-- #page-wrapper-content -->
      </div> <!-- #page-wrapper -->

    </body>
</html>