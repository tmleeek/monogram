<?php 
  function imagetext_shortcode( $atts, $content = null ) {

    // defaults
    extract( shortcode_atts( array(
      'id' => '0',
    ), $atts ) );


    $id = intval( ('' . $id) );

    $page_id = get_the_ID();
    $image_text_group             = get_post_meta( $page_id, PREFIX . 'image_text_group', true );

    $image_text_group_item_counter = 0;
    $image_text_group_item_target = null;

    foreach ($image_text_group as $image_text_group_item) {
      $image_text_group_item_counter++;

      if($id == $image_text_group_item_counter){
        $image_text_group_item_target = $image_text_group_item;
      }
    }

    $html_output = '';

    if(isset($image_text_group_item_target)){

      $target_image = $image_text_group_item_target['image'];
      $target_copy = $image_text_group_item_target['copy'];

      if(isset($image_text_group_item_target['imagesource']) && $image_text_group_item_target['imagesource'] != ''){
        $target_copy .= '<h6 class="image-source">Image Source: <a href="' . $image_text_group_item_target['imagesource'] . '" target="_blank">' . $image_text_group_item_target['imagesource'] . '</a></h6>';
      }

      

$html_output=<<<HTML
<div class="article-image-text-item">
  <div class="row">
    <div class="col-md-5">
      <div class="article-image-text-item-image">
        <div class="manic-image-container">
          <img src="" data-image-desktop="$target_image" data-image-mobile="$target_image">
        </div>
      </div>
    </div>
    <div class="col-md-7">
      <div class="article-image-text-item-copy">
        <div class="default-copy">
          $target_copy
        </div>
      </div>
    </div>
  </div>
</div>
HTML;

    } // end if

    return $html_output;

  } // end imagetext_shortcode
  
  add_shortcode('imagetext', 'imagetext_shortcode');

?>