          <article id="post-<?php the_ID(); ?>" <?php post_class( 'clearfix post-article' ); ?> role="article">

            <header class="article-header">
              <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="article-categories">
                    <?php the_category(); ?>
                  </div> <!-- .article-categories -->
                </div>
                <div class="col-md-8 col-sm-6 col-xs-6">
                  <div class="article-date">
                    <p><time class="updated" datetime="<?php get_the_time('Y-m-j') ?>"><?php echo get_the_time('j F Y') ?></time> by <?php the_author(); ?></p>
                  </div> <!-- .article-date -->
                </div>
              </div>
              <h1 class="hidden-xs hidden-sm post-title entry-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>
            </header>

            <!--<div class="article-banner">
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
                    <img src="" data-image-desktop="<?php echo $banner_image; ?>">
                  </div>
                  <div class="manic-image-container banner-02">
                    <img src="" data-image-desktop="<?php echo $banner_2_image; ?>">
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
              
              <?php endif; ?>


            </div>-->

            <h1 class="visible-xs visible-sm post-title entry-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>

            <div class="article-content">
              <div class="default-copy">
                <?php the_content(); ?>
              </div>
            </div>

            <footer class="article-footer">
              <div class="row">
                <div class="col-md-4">
                  <div class="article-social">
                    <h4>Share</h4>
                    <ul>
                      <li><a href="https://twitter.com/share?url=<?php echo get_permalink(); ?>&amp;text=urlencode(get_the_title())&amp;hashtags=monogram" class="fa fa-twitter"></a></li>
                      <li><a href="http://www.facebook.com/sharer.php?u=<?php echo get_permalink(); ?>" class="fa fa-facebook"></a></li>
                    </ul>
                  </div> <!-- .article-social -->
                </div>
                <div class="col-md-8">
                  <div class="article-tags">
                    <?php 
                      $posttags = get_the_tags();
                      if ($posttags):
                    ?>
                      <h4>Tags</h4>
                      <div class="cta-container">
                        <?php 
                          foreach($posttags as $tag) {
                            echo '<a href="' . get_tag_link($tag->term_id) . '" class="square-cta">' . $tag->name . '</a>';
                          }
                        ?>
                      </div>
                    <?php 
                      endif; 
                    ?>
                  </div> <!-- .article-tags -->
                </div>
              </div>
            </footer>
          </article> <?php // end article ?>

          <script type="text/javascript">
            $('body').trigger('custom-page-update-layout');
          </script>