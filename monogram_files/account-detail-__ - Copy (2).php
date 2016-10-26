<?php 
    global $is_debug;
    global $body_class;

    // $is_debug = false;
  $is_debug = true;

  $body_class = "monogram-page-account-details";
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

        
        
            <?php include('account-detail-order-history-content.php'); ?>
          
            <?php include('inc/js_default.php'); ?>
            
            <?php include('inc/fonts.php'); ?>



      <!--
          ____ _   _ ____ _____ ___  __  __       _ ____
         / ___| | | / ___|_   _/ _ \|  \/  |     | / ___|
        | |   | | | \___ \ | || | | | |\/| |  _  | \___ \
        | |___| |_| |___) || || |_| | |  | | | |_| |___) |
         \____|\___/|____/ |_| \___/|_|  |_|  \___/|____/

      -->


      <script type="text/javascript">

        jQuery(document).ready(function($) {

          $(window).resize(function(event){
            var target_height = $(document).height() - $('footer#desktop-footer').height();

            $('#content-wrapper .col-right.sidebar').css({
              'min-height': target_height + 'px'
            });
            $('#content-wrapper .col-main').css({
              'min-height': target_height + 'px'
            });

          });
          $(window).trigger('resize');

        });

      </script>


    </body>
</html>