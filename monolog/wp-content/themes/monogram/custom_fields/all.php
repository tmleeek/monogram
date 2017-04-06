<?php 
  
  function cmb2_register_all_metabox() {
    /**
     * Metabox to save the 'status' where 'Internal' is the default.
     */
    $cmb = new_cmb2_box( array(
        'id'           => PREFIX . 'all_metabox',
        'title'        => 'Banner Fields',
        'object_types' => array( 'post', ), // Post type
    ) );

    $cmb->add_field( array(
        'name'    => 'Banner Images',
        'id'      => PREFIX . 'banner_image_title',
        'type'    => 'title',
        'desc' => 'jpg (80% compression) <br>full banner size: 1180 x 730 <br>2 half banner size: 590 x 730',
    ) );




    $field1 = $cmb->add_field( array(
        'name'    => 'Banner Image',
        'id'      => PREFIX . 'banner_image',
        'type'    => 'file',
        'description' => '1180 x 730 <br>(or 590 x 730 2 half banner)',
    ) );

    $field2 = $cmb->add_field( array(
        'name'    => 'Banner Image Mobile',
        'id'      => PREFIX . 'banner_image_mobile',
        'type'    => 'file',
        'description' => '640 x 420 <br>(or 320 x 420 for 2 half banner) <br>if not provided, a resized banner image will be used',
    ) );

    $field3 = $cmb->add_field( array(
        'name'    => 'Banner Image Tablet',
        'id'      => PREFIX . 'banner_image_tablet',
        'type'    => 'file',
        'description' => '1150 x 750 <br>(or 575 x 750 for 2 half banner) <br>if not provided, a resized banner image will be used',
    ) );






    $field4 = $cmb->add_field( array(
        'name'    => 'Banner 2 Image',
        'id'      => PREFIX . 'banner_2_image',
        'type'    => 'file',
        'description' => '590 x 730 <br>(used only for 2 half banners)',
    ) );

    $field5 = $cmb->add_field( array(
        'name'    => 'Banner 2 Image Mobile',
        'id'      => PREFIX . 'banner_2_image_mobile',
        'type'    => 'file',
        'description' => '320 x 420 <br>(used only for 2 half banners) <br>if not provided, a resized banner image will be used',
    ) );

    $field6 = $cmb->add_field( array(
        'name'    => 'Banner 2 Image Tablet',
        'id'      => PREFIX . 'banner_2_image_tablet',
        'type'    => 'file',
        'description' => '575 x 750 <br>(used only for 2 half banners) <br>if not provided, a resized banner image will be used',
    ) );


    $cmb->add_field( array(
        'name'    => 'Hide Banner?',
        'id'      => PREFIX . 'banner_is_visible',
        'type'    => 'checkbox',
        'description' => 'check if you want to hide the banner on the inside page',
    ) );


    $cmb->add_field( array(
        'name'    => 'Image Text Content',
        'id'      => PREFIX . 'image_text_item_title',
        'type'    => 'title',
        'desc' => 'image & text pairs, you can strategically place these throughout the content as shortcodes <br><br>Example: <br><br>[imagetext id="1"] <br>this will show the first image and text <br>content if there is one',
    ) );





    // GROUP
    
    $image_text_group = $cmb->add_field( array(
        'name'    => 'Image Text Group',
        'id'      => PREFIX . 'image_text_group',
        'type'    => 'group',
        'description' => 'a pair of image and text, can be added to the content via shortcodes <br> Ex. [imagetext id="1"]',
        'options' => array(
          'group_title'   => '[imagetext id="{#}"]', // since version 1.1.4, {#} gets replaced by row number
          'add_button'    => 'Add',
          'remove_button' => 'Remove',
          'sortable' => true,
        ),
    ) );
    
    $group_field1 = $cmb->add_group_field( $image_text_group, array(
        'name' => 'Image',
        'description' => '540 x 390 jpg',
        'id'   => 'image',
        'type' => 'file',
    ) );

    $group_field2 = $cmb->add_group_field( $image_text_group, array(
        'name'    => 'Copy',
        'id'      => 'copy',
        'type'    => 'wysiwyg',
        'description' => 'use html tags',
        'options' => array(
          'wpautop' => false,
          'media_buttons' => false,
          'textarea_rows' => get_option('default_post_edit_rows', 10),
        ),
    ) );
    $group_field3 = $cmb->add_group_field( $image_text_group, array(
        'name' => ' ',
        'description' => '',
        'id'   => 'nothing',
        'type' => 'title',
    ) );
    $group_field4 = $cmb->add_group_field( $image_text_group, array(
        'name' => 'Image Source',
        'description' => 'url',
        'id'   => 'imagesource',
        'type' => 'text',
    ) );

    






    if(!is_admin()){
      return;
    }

    $cmb2Grid = new \Cmb2Grid\Grid\Cmb2Grid($cmb);
    $row = $cmb2Grid->addRow();
    $row->addColumns(array($field1, $field2, $field3));
    $row = $cmb2Grid->addRow();
    $row->addColumns(array($field4, $field5, $field6));


    // group grid
    
    $cmb2GroupGrid = $cmb2Grid->addCmb2GroupGrid( $image_text_group );
    $row = $cmb2GroupGrid->addRow();
    $row->addColumns( array(
      $group_field1,
      $group_field2,
    ) );

    $row = $cmb2GroupGrid->addRow();
    $row->addColumns( array(
      $group_field3,
      $group_field4,
    ) );
    
    $row = $cmb2Grid->addRow();
    $row->addColumns( array(
      $cmb2GroupGrid, 
    ) );



  }
  add_action( 'cmb2_admin_init', 'cmb2_register_all_metabox' , 1);

?>