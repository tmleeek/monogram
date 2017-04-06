<?php 
  $about_title                        = manic_get_option( PREFIX . 'about_title' );
  $about_copy                         = manic_get_option( PREFIX . 'about_copy' );
?>

<div id="page-index-sidebar">
  <ul>
    <li class="widget widget_monogram_about">
      <h2><?php echo $about_title; ?></h2>
      <?php echo $about_copy; ?>
    </li>    
  </ul>  
  <div id="trigger1" class="spacer s0" style="position: absolute;top: 300px;"></div>
  <ul id="sticky-sidebar">
    <?php if ( is_active_sidebar( 'site-sidebar' ) ) : ?>
      <?php dynamic_sidebar( 'site-sidebar' ); ?>
    <?php endif; ?>
  </ul>
</div>