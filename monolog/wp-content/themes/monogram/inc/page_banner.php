<?php 
  $page_id = get_the_ID();

  $banner_image             = get_post_meta( $page_id, PREFIX . 'banner_image', true );
  $banner_image_mobile      = get_post_meta( $page_id, PREFIX . 'banner_image_mobile', true );
  $banner_image_tablet      = get_post_meta( $page_id, PREFIX . 'banner_image_tablet', true );
  $banner_text              = get_post_meta( $page_id, PREFIX . 'banner_text', true );


  // short code
  $banner_text = do_shortcode( $banner_text );


  $banner_image_id          = get_post_meta( $page_id, PREFIX . 'banner_image_id', true );

  $target_banner_image_mobile = wp_get_attachment_image_src($banner_image_id, 'manic-mobile');
  $target_banner_image_tablet = wp_get_attachment_image_src($banner_image_id, 'manic-tablet');


  if (isset($banner_image_mobile) && $banner_image_mobile != ''){
    $target_banner_image_mobile = $banner_image_mobile;
  }
  if (isset($banner_image_tablet) && $banner_image_tablet != ''){
    $target_banner_image_tablet = $banner_image_tablet;
  }

?>

<!--
   ____    _    _   _ _   _ _____ ____
  | __ )  / \  | \ | | \ | | ____|  _ \
  |  _ \ / _ \ |  \| |  \| |  _| | |_) |
  | |_) / ___ \| |\  | |\  | |___|  _ <
  |____/_/   \_\_| \_|_| \_|_____|_| \_\

-->


<article class="default-banner-section">
  <div class="default-banner-image visible-md visible-lg">
    <div class="manic-image-container">
      <img src="" data-image-desktop="<?php echo $banner_image; ?>">
    </div>
  </div>
  <div class="default-banner-image-mobile visible-sm visible-xs">
    <div class="manic-image-container">
      <img src="" 
        data-image-tablet="<?php echo $target_banner_image_tablet; ?>"
        data-image-mobile="<?php echo $target_banner_image_mobile; ?>">
    </div>
  </div>

  <div class="default-banner-after-image-copy-container">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-2"></div>
        <div class="col-md-6 col-sm-8">
          <div class="default-banner-after-image-copy">
            <?php echo $banner_text; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>