<?
$wp_query = NULL;
$wp_query = new WP_Query(array(‘post_type’ => ‘post’));
?>
<?php get_header(); ?>

<?php
  
  // http://wordpress.stackexchange.com/questions/162109/remove-more-or-text-from-short-post

  function new_excerpt_more( $more ) {
      return '';
  }
  add_filter('excerpt_more', 'new_excerpt_more');


  // https://developer.wordpress.org/reference/functions/the_excerpt/
  
  function wpdocs_custom_excerpt_length( $length ) {
      return 25;
  }
  add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );

?>
<div id="mobile-blog-sidebar" class="visible-xs visible-sm">
  <div id="mobile-blog-button-container">
    <div class="mobile-blog-button" id="gryphon-blog-categories-button">Categories</div>
    <div class="mobile-blog-button" id="gryphon-blog-tag-button">Tags</div>    
  </div>

  <div id="mobile-blog-tag-container" style="">
    <?php the_widget( 'WP_Widget_Tag_Cloud' ); ?>  
  </div>

  <div id="mobile-blog-category-container">
    <?php the_widget( 'WP_Widget_Categories' ); ?>  
  </div>
</div>
<!--
   ___ _   _ ____  _______  __   ____    _    ____   ___  _   _ ____  _____ _
  |_ _| \ | |  _ \| ____\ \/ /  / ___|  / \  |  _ \ / _ \| | | / ___|| ____| |
   | ||  \| | | | |  _|  \  /  | |     / _ \ | |_) | | | | | | \___ \|  _| | |
   | || |\  | |_| | |___ /  \  | |___ / ___ \|  _ <| |_| | |_| |___) | |___| |___
  |___|_| \_|____/|_____/_/\_\  \____/_/   \_\_| \_\\___/ \___/|____/|_____|_____|

-->

<div id="page-index-carousel-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">

        <div id="page-index-carousel">
          <?php


            // GET 5 RANDOM POSTS
            // http://www.wpbeginner.com/wp-tutorials/how-to-display-random-posts-in-wordpress/
            
            $posts = get_posts('orderby=rand&numberposts=5');

            global $post;

            foreach($posts as $post):
              setup_postdata( $post );

              $page_id = get_the_ID();
              $banner_image                 = get_post_meta( $page_id, PREFIX . 'banner_image', true );
              $banner_image_id              = get_post_meta( $page_id, PREFIX . 'banner_image_id', true );
              $target_banner_image_mobile   = wp_get_attachment_image_src($banner_image_id, 'manic-mobile')[0];

          ?>

            <a href="<?php the_permalink(); ?>" class="post-index-carousel-item" title="<?php the_title(); ?>">

              <div class="manic-image-container">
                <img src="" data-image-desktop="<?php echo $banner_image; ?>" data-image-mobile="<?php echo $banner_image; ?>">

                <div class="category-image-tag small-version">
                  <?php 
                    $post_categories = wp_get_post_categories( $page_id );
                    foreach($post_categories as $c){
                      $cat = get_category( $c );
                      if($cat->name!=="All") {
                        echo '<span>' . $cat->name . '</span>';
                      }                      
                    }
                  ?>
                </div>
              </div>

              <h4><?php the_title(); ?></h4>

            </a>


          <?php 
            endforeach;
            wp_reset_query();
            wp_reset_postdata();

          ?>

        </div>

      </div>
    </div>
  </div>
</div>


        
<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">

      <!--
         ____ ___ ____  _____ ____    _    ____
        / ___|_ _|  _ \| ____| __ )  / \  |  _ \
        \___ \| || | | |  _| |  _ \ / _ \ | |_) |
         ___) | || |_| | |___| |_) / ___ \|  _ <
        |____/___|____/|_____|____/_/   \_\_| \_\

      -->

      <?php get_sidebar(); ?>

    </div>
    <div class="col-md-9">

      <!--
          ____ ___  _   _ _____ _____ _   _ _____
         / ___/ _ \| \ | |_   _| ____| \ | |_   _|
        | |  | | | |  \| | | | |  _| |  \| | | |
        | |__| |_| | |\  | | | | |___| |\  | | |
         \____\___/|_| \_| |_| |_____|_| \_| |_|

      -->

      <div id="page-index-content">

        <?php global $post; ?>

        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

          <!-- fix for wierd null posts -->
          <?php if(isset($post)): ?>
            
            <article id="post-<?php the_ID(); ?>" <?php post_class( 'clearfix page-index-item' ); ?> role="article">
              <div class="row">
                <div class="col-md-5">

                  <a href="<?php echo get_permalink(); ?>" class="page-index-item-image">
                    <?php 
                      $page_id = get_the_ID();

                      $banner_image             = get_post_meta( $page_id, PREFIX . 'banner_image', true );
                      $banner_image_mobile      = get_post_meta( $page_id, PREFIX . 'banner_image_mobile', true );
                      $banner_image_tablet      = get_post_meta( $page_id, PREFIX . 'banner_image_tablet', true );

                      $banner_2_image             = get_post_meta( $page_id, PREFIX . 'banner_2_image', true );
                      $banner_2_image_mobile      = get_post_meta( $page_id, PREFIX . 'banner_2_image_mobile', true );
                      $banner_2_image_tablet      = get_post_meta( $page_id, PREFIX . 'banner_2_image_tablet', true );

                      // fallback

                      $banner_image_id          = get_post_meta( $page_id, PREFIX . 'banner_image_id', true );

                      $target_banner_image_mobile = wp_get_attachment_image_src($banner_image_id, 'manic-mobile')[0];
                      $target_banner_image_tablet = wp_get_attachment_image_src($banner_image_id, 'manic-tablet')[0];

                      if (isset($banner_image_mobile) && $banner_image_mobile != ''){
                        $target_banner_image_mobile = $banner_image_mobile;
                      }
                      if (isset($banner_image_tablet) && $banner_image_tablet != ''){
                        $target_banner_image_tablet = $banner_image_tablet;
                      }

                      // fallback 2

                      $banner_2_image_id          = get_post_meta( $page_id, PREFIX . 'banner_2_image_id', true );

                      $target_banner_2_image_mobile = wp_get_attachment_image_src($banner_2_image_id, 'manic-mobile')[0];
                      $target_banner_2_image_tablet = wp_get_attachment_image_src($banner_2_image_id, 'manic-tablet')[0];

                      if (isset($banner_2_image_mobile) && $banner_2_image_mobile != ''){
                        $target_banner_2_image_mobile = $banner_2_image_mobile;
                      }
                      if (isset($banner_2_image_tablet) && $banner_2_image_tablet != ''){
                        $target_banner_2_image_tablet = $banner_2_image_tablet;
                      }
                    ?>

                    <?php if($banner_2_image != ''): ?>
                      <div class="default-banner-2-image visible-md visible-lg">
                        <div class="manic-image-container banner-01">
                          <img src="" data-image-desktop="<?php echo $target_banner_image_mobile; ?>">
                        </div>
                        <div class="manic-image-container banner-02">
                          <img src="" data-image-desktop="<?php echo $target_banner_2_image_mobile; ?>">
                        </div>

                        <div class="category-image-tag">
                          <?php 
                            $post_categories = wp_get_post_categories( $page_id );
                            foreach($post_categories as $c){
                              $cat = get_category( $c );
                              if($cat->name!=="All") {
                                echo '<span>' . $cat->name . '</span>';
                              }                      
                            }
                          ?>                          
                        </div>

                      </div>
                      <div class="default-banner-2-image-mobile visible-sm visible-xs">
                        <div class="manic-image-container banner-01-mobile">
                          <img src="" 
                            data-image-tablet="<?php echo $target_banner_image_tablet; ?>"
                            data-image-mobile="<?php echo $target_banner_image_mobile; ?>">
                        </div>
                        <div class="manic-image-container banner-02-mobile">
                          <img src="" 
                            data-image-tablet="<?php echo $target_banner_2_image_tablet; ?>"
                            data-image-mobile="<?php echo $target_banner_2_image_mobile; ?>">
                        </div>
                      </div>
                    <?php else: ?>

                      <div class="default-banner-image visible-md visible-lg">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="<?php echo $target_banner_image_mobile; ?>">
                        </div>

                        <div class="category-image-tag">
                          <?php
                            $post_categories = wp_get_post_categories( $page_id );
                            foreach($post_categories as $c){
                              $cat = get_category( $c );
                              if($cat->name!=="All") {
                                echo '<span>' . $cat->name . '</span>';
                              }
                            }
                          ?>
                        </div>

                      </div>
                      <div class="default-banner-image-mobile visible-sm visible-xs">
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-tablet="<?php echo $target_banner_image_tablet; ?>"
                            data-image-mobile="<?php echo $target_banner_image_mobile; ?>">
                        </div>
                      </div>
                    
                    <?php endif; ?>
                  </a>
                </div>
                <div class="col-md-7">
                  <div class="page-index-item-copy">

                    <div class="article-date">
                      <p><time class="updated" datetime="<?php get_the_time('Y-m-j') ?>"><?php echo get_the_time('j F Y') ?></time></p>
                    </div> <!-- .article-date -->
                    <h1 class="post-title entry-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>
                    <div class="default-copy">
                      <?php the_excerpt(); ?>
                    </div>


                    
                    

                  </div> <!-- page-index-item-copy -->
                </div>
              </div>
            </article>

          <?php endif; ?>
          
        <?php endwhile; ?>
        <?php else : ?>

          <div class="default-copy">
            <h1>There are no post available</h1>
          </div>

        <?php endif; ?>


        <?php // echo do_shortcode('[ajax_load_more post_type="post, portfolio" repeater="default" posts_per_page="5" transition="fade" button_label="Older Posts"]'); ?>
        <?php // echo do_shortcode('[ajax_load_more]'); ?>

      </div>

    </div>
  </div>
</div>

<?
$wp_query = NULL;
$wp_query = new WP_Query(array(‘post_type’ => ‘post’));
?>
<?php get_footer(); ?>