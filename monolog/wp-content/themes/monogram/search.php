<?php get_header(); ?>


<?php 

  function render_relative_post_as_search_item($str_param) {

    $target_post_url = home_url($str_param);
    $target_post_id = url_to_postid($target_post_url);

    global $post;
    $post = get_post($target_post_id);

    render_search_item();

  }


  function render_search_item() {
?>

  <div class="search-content-item">
    <h4><?php echo get_the_title(); ?></h4>
    <h6><?php echo get_permalink(); ?></h6>
    <div class="default-copy">
      <?php echo get_the_excerpt(); ?>
    </div>
    <a href="<?php echo get_permalink(); ?>" class="square-cta">read more</a>
  </div>

<?php 
  }
?>


<!--
   _____ ___ _____ _     _____
  |_   _|_ _|_   _| |   | ____|
    | |  | |  | | | |   |  _|
    | |  | |  | | | |___| |___
    |_| |___| |_| |_____|_____|

-->

<article id="page-search-title-section">
  <div class="container">
    <div class="row">
      <div class="col-md-4">

        <div id="page-search-title">
          <h4>your search for “<?php echo esc_attr(get_search_query()); ?>” returned </h4>

          <?php  
            global $wp_query;
            $custom_search_num = $wp_query->found_posts
          ?>
          
          <?php if($wp_query == 0): ?>
            <h1><?php echo $custom_search_num; ?> results</h1>
          <?php elseif($wp_query == 1): ?>
            <h1><?php echo $custom_search_num; ?> result</h1>
          <?php else: ?>
            <h1><?php echo $custom_search_num; ?> results</h1>
          <?php endif; ?>



          <h3>Did not find what you were looking for? <br>Try different search terms.</h3>
          
          <form role="search" method="get" id="inline-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
            <input type="search" id="s" name="s" value="<?php echo esc_attr(get_search_query()); ?>" />
            <button type="submit" id="inline-search-form-submit" ></button>
          </form>

        </div>

      </div>
    </div>
  </div>
</article>

<!--
    ____ ___  _   _ _____ _____ _   _ _____
   / ___/ _ \| \ | |_   _| ____| \ | |_   _|
  | |  | | | |  \| | | | |  _| |  \| | | |
  | |__| |_| | |\  | | | | |___| |\  | | |
   \____\___/|_| \_| |_| |_____|_| \_| |_|

-->

<article id="page-search-content-section">
  <div class="container">
    <div class="row">
      <div class="col-md-7">

        <!--
           ____ _____  _    ____ _____
          / ___|_   _|/ \  |  _ \_   _|
          \___ \ | | / _ \ | |_) || |
           ___) || |/ ___ \|  _ < | |
          |____/ |_/_/   \_\_| \_\|_|

        -->

        <?php if (have_posts()): ?>

          <div id="search-content-title">
            <h2>Search results for “<?php echo esc_attr(get_search_query()); ?>”</h2>
            <h3>Showing <?php echo $custom_search_num; ?> results</h3>
          </div> <!-- #search-content-title -->

          <div id="search-content-item-container">

            



            <?php while (have_posts()) : the_post(); ?>
              
              <?php render_search_item(); ?>

            <?php endwhile; ?>

          </div> <!-- #search-content-item-container -->



          <div id="search-content-pagination" style="display:none;">
            <?php if (function_exists("emm_paginate")) { ?>
              <?php emm_paginate(); ?>
            <?php } else { ?>
              <nav class="wp-prev-next">
                <ul class="clearfix">
                  <li class="prev-link"><?php next_posts_link( __( '&laquo; Older Entries', 'bonestheme' )) ?></li>
                  <li class="next-link"><?php previous_posts_link( __( 'Newer Entries &raquo;', 'bonestheme' )) ?></li>
                </ul>
              </nav>
            <?php } ?>
          </div> <!-- #search-content-pagination -->




        <?php else: ?>

        <!--
           _   _  ___    ____  _____ ____  _   _ _   _____ ____
          | \ | |/ _ \  |  _ \| ____/ ___|| | | | | |_   _/ ___|
          |  \| | | | | | |_) |  _| \___ \| | | | |   | | \___ \
          | |\  | |_| | |  _ <| |___ ___) | |_| | |___| |  ___) |
          |_| \_|\___/  |_| \_\_____|____/ \___/|_____|_| |____/

        -->


          <div id="search-content-title">
            <h2>You may be interested in the following</h2>
          </div> <!-- #search-content-title -->

          <div id="search-content-item-container">

            <?php

              render_relative_post_as_search_item( '/services' );
              render_relative_post_as_search_item( '/destinations/singapore' );
              render_relative_post_as_search_item( '/services/other-medical-treatments/dentistry' );

            ?>

            <?php wp_reset_query(); ?>

          </div> <!-- #search-content-item-container -->


        <?php endif; ?>

        <!--
           _____ _   _ ____
          | ____| \ | |  _ \
          |  _| |  \| | | | |
          | |___| |\  | |_| |
          |_____|_| \_|____/

        -->

        

      </div>
    </div>
  </div>
</article>


<?php get_footer(); ?>