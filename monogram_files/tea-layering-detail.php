<?php 
  global $is_debug;
  global $body_class;

  // $is_debug = false;
  $is_debug = true;

  $body_class = "tea-layering-detail-page";
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

    <div id="page-preloader">
    </div>


    <?php include('inc/header-mobile.php'); ?>
    
    <div id="page-wrapper">
      <div id="page-wrapper-content">

        <?php include('inc/header.php'); ?>

        <!--
           ____ _____  _    ____ _____
          / ___|_   _|/ \  |  _ \_   _|
          \___ \ | | / _ \ | |_) || |
           ___) || |/ ___ \|  _ < | |
          |____/ |_/_/   \_\_| \_\|_|

        -->









        <?php include('tea-layering-detail-content.php'); ?>




        




        <!--
           _____ _   _ ____
          | ____| \ | |  _ \
          |  _| |  \| | | | |
          | |___| |\  | |_| |
          |_____|_| \_|____/

        -->
        
        <?php include('inc/js_tea_layering_detail.php'); ?>
        <?php include('inc/footer.php'); ?>
        <?php include('inc/fonts.php'); ?>

      </div> <!-- #page-wrapper-content -->
    </div> <!-- #page-wrapper -->
    
  </body>
</html>