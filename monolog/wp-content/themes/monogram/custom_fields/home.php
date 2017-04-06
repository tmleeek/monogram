<?php 
  
  function cmb2_register_home_metabox() {
    /**
     * Metabox to save the 'status' where 'Internal' is the default.
     */
    $cmb = new_cmb2_box( array(
        'id'           => PREFIX . 'home_metabox',
        'title'        => 'Home Fields',
        'object_types' => array( 'page', ), // Post type
        'show_on'      => array( 'key' => 'page-template', 'value' => 'page-home.php' ),
    ) );

    //         _    ____   ___  _   _ _____
    //        / \  | __ ) / _ \| | | |_   _|
    //       / _ \ |  _ \| | | | | | | | |
    //      / ___ \| |_) | |_| | |_| | | |
    //     /_/   \_\____/ \___/ \___/  |_|
    //
    
    $field1 = $cmb->add_field( array(
        'name'    => 'About Text',
        'id'      => PREFIX . 'about_text',
        'type'    => 'wysiwyg',
        'description' => 'about copy text',
        'options' => array(
          'wpautop' => false,
          'media_buttons' => false,
          'textarea_rows' => get_option('default_post_edit_rows', 10),
        ),
    ) );

    $field2 = $cmb->add_field( array(
        'name'    => 'About Image',
        'id'      => PREFIX . 'about_image',
        'type'    => 'file',
        'description' => '1029 x 581 jpg',
    ) );

    $cta_field1 = $cmb->add_field( array(
        'name'    => 'About CTA Copy',
        'id'      => PREFIX . 'about_cta_copy',
        'type'    => 'text',
        'description' => '',
    ) );

    $cta_field2 = $cmb->add_field( array(
        'name'    => 'About CTA Link',
        'id'      => PREFIX . 'about_cta_link',
        'type'    => 'text',
        'description' => '',
    ) );

    //     __        ___   ___   __
    //     \ \      / / | | \ \ / /
    //      \ \ /\ / /| |_| |\ V /
    //       \ V  V / |  _  | | |
    //        \_/\_/  |_| |_| |_|
    //

    
    $cmb->add_field( array(
        'name'    => 'Why Section',
        'id'      => PREFIX . 'why_title',
        'type'    => 'title',
        'description' => '',
    ) );


    $field3 = $cmb->add_field( array(
        'name'    => 'Why Image',
        'id'      => PREFIX . 'why_image',
        'type'    => 'file',
        'description' => '1030 x 641 jpg',
    ) );

    $field4 = $cmb->add_field( array(
        'name'    => 'Why Text',
        'id'      => PREFIX . 'why_text',
        'type'    => 'wysiwyg',
        'description' => 'why copy text',
        'options' => array(
          'wpautop' => false,
          'media_buttons' => false,
          'textarea_rows' => get_option('default_post_edit_rows', 10),
        ),
    ) );

    $cta_field3 = $cmb->add_field( array(
        'name'    => 'Why CTA Copy',
        'id'      => PREFIX . 'why_cta_copy',
        'type'    => 'text',
        'description' => '',
    ) );

    $cta_field4 = $cmb->add_field( array(
        'name'    => 'Why CTA Link',
        'id'      => PREFIX . 'why_cta_link',
        'type'    => 'text',
        'description' => '',
    ) );


    

    $field5 = $cmb->add_field( array(
        'name'    => 'Why Image Mobile',
        'id'      => PREFIX . 'why_image_mobile',
        'type'    => 'file',
        'description' => '640 x 370 jpg (only appears on mobile)',
    ) );

    $field6 = $cmb->add_field( array(
        'name'    => 'Why Image Tablet',
        'id'      => PREFIX . 'why_image_tablet',
        'type'    => 'file',
        'description' => '1152 x 666 jpg (only appears on tablet)',
    ) );

    

    
    
    //      ____  _____ ______     _____ ____ _____ ____
    //     / ___|| ____|  _ \ \   / /_ _/ ___| ____/ ___|
    //     \___ \|  _| | |_) \ \ / / | | |   |  _| \___ \
    //      ___) | |___|  _ < \ V /  | | |___| |___ ___) |
    //     |____/|_____|_| \_\ \_/  |___\____|_____|____/
    //


    $cmb->add_field( array(
        'name'    => 'Services Section',
        'id'      => PREFIX . 'services_title',
        'type'    => 'title',
        'description' => '',
    ) );

    
    $field7 = $cmb->add_field( array(
        'name'    => 'Services Text',
        'id'      => PREFIX . 'services_text',
        'type'    => 'wysiwyg',
        'description' => 'services copy text',
        'options' => array(
          'wpautop' => false,
          'media_buttons' => false,
          'textarea_rows' => get_option('default_post_edit_rows', 10),
        ),
    ) );

    $field8 = $cmb->add_field( array(
        'name'    => 'Services Image Mobile',
        'id'      => PREFIX . 'services_image_mobile',
        'type'    => 'file',
        'description' => '640 x 370 jpg (only appears on mobile)',
    ) );

    $field9 = $cmb->add_field( array(
        'name'    => 'Services Image Tablet',
        'id'      => PREFIX . 'services_image_tablet',
        'type'    => 'file',
        'description' => '1152 x 666 (only appears on tablet)',
    ) );

    // GROUP
    
    $services_group = $cmb->add_field( array(
        'name'    => 'Services Group',
        'id'      => PREFIX . 'services_group',
        'type'    => 'group',
        'description' => 'services group',
        'options' => array(
          'group_title'   => 'Service {#}', // since version 1.1.4, {#} gets replaced by row number
          'add_button'    => 'Add',
          'remove_button' => 'Remove',
          'sortable' => true,
        ),
    ) );
    
    $field10 = $cmb->add_group_field( $services_group, array(
        'name' => 'Title',
        'description' => '',
        'id'   => 'title',
        'type' => 'text',
    ) );

    $field11 = $cmb->add_group_field( $services_group, array(
        'name' => 'Link',
        'description' => '',
        'id'   => 'link',
        'type' => 'text',
    ) );

    $field12 = $cmb->add_group_field( $services_group, array(
        'name' => 'Image',
        'description' => '575 x 385 jpg',
        'id'   => 'image',
        'type' => 'file',
    ) );

    //      ____  _____ ____ _____ ___ _   _    _  _____ ___ ___  _   _
    //     |  _ \| ____/ ___|_   _|_ _| \ | |  / \|_   _|_ _/ _ \| \ | |
    //     | | | |  _| \___ \ | |  | ||  \| | / _ \ | |  | | | | |  \| |
    //     | |_| | |___ ___) || |  | || |\  |/ ___ \| |  | | |_| | |\  |
    //     |____/|_____|____/ |_| |___|_| \_/_/   \_\_| |___\___/|_| \_|
    //
    
    $cmb->add_field( array(
        'name'    => 'Destination Section',
        'id'      => PREFIX . 'destination_title',
        'type'    => 'title',
        'description' => '',
    ) );

    $field13 = $cmb->add_field( array(
        'name'    => 'Destination Text',
        'id'      => PREFIX . 'destination_text',
        'type'    => 'wysiwyg',
        'description' => 'destination copy text',
        'options' => array(
          'wpautop' => false,
          'media_buttons' => false,
          'textarea_rows' => get_option('default_post_edit_rows', 10),
        ),
    ) );

    $field14 = $cmb->add_field( array(
        'name'    => 'Destination Image Mobile',
        'id'      => PREFIX . 'destination_image_mobile',
        'type'    => 'file',
        'description' => '640 x 370 (only appears on mobile)',
    ) );

    $field15 = $cmb->add_field( array(
        'name'    => 'Destination Image Tablet',
        'id'      => PREFIX . 'destination_image_tablet',
        'type'    => 'file',
        'description' => '1152 x 666 (only appears on tablet)',
    ) );

    





    //      _____ _    ___
    //     |  ___/ \  / _ \
    //     | |_ / _ \| | | |
    //     |  _/ ___ \ |_| |
    //     |_|/_/   \_\__\_\
    //

    $cmb->add_field( array(
        'name'    => 'Faq Section',
        'id'      => PREFIX . 'faq_title',
        'type'    => 'title',
        'description' => '',
    ) );

    $field16 = $cmb->add_field( array(
        'name'    => 'Faq Text',
        'id'      => PREFIX . 'faq_text',
        'type'    => 'wysiwyg',
        'description' => 'FAQ copy text',
        'options' => array(
          'wpautop' => false,
          'media_buttons' => false,
          'textarea_rows' => get_option('default_post_edit_rows', 10),
        ),
    ) );


    $cta_field7 = $cmb->add_field( array(
        'name'    => 'Faq CTA Copy',
        'id'      => PREFIX . 'faq_cta_copy',
        'type'    => 'text',
        'description' => '',
    ) );

    $cta_field8 = $cmb->add_field( array(
        'name'    => 'Faq CTA Link',
        'id'      => PREFIX . 'faq_cta_link',
        'type'    => 'text',
        'description' => '',
    ) );
    


        
    if(!is_admin()){
      return;
    }

    $cmb2Grid = new \Cmb2Grid\Grid\Cmb2Grid($cmb);

    // ABOUT
    
    $row = $cmb2Grid->addRow();
    $row->addColumns(array($field1, $field2));

    $row = $cmb2Grid->addRow();
    $row->addColumns(array(
        array($cta_field1, 'class' => 'col-md-3'),
        array($cta_field2, 'class' => 'col-md-3'),
    ));

    

    // WHY
    
    $row = $cmb2Grid->addRow();
    $row->addColumns(array($field3, $field4));

    $row = $cmb2Grid->addRow();
    $row->addColumns(array(
        array($cta_field3, 'class' => 'col-md-3 col-md-push-6'),
        array($cta_field4, 'class' => 'col-md-3 col-md-push-6'),
    ));

    $row = $cmb2Grid->addRow();
    $row->addColumns(array($field5, $field6));

    

    // SERVICES
    
    $row = $cmb2Grid->addRow();
    $row->addColumns(array(array($field7, 'class' => 'col-md-6')));

    $row = $cmb2Grid->addRow();
    $row->addColumns(array($field8, $field9));

    // (group grid)
    
    $cmb2GroupGrid = $cmb2Grid->addCmb2GroupGrid( $services_group );
    $row = $cmb2GroupGrid->addRow();
    $row->addColumns( array(
      $field10,
      $field11,
      $field12,
    ) );
    
    $row = $cmb2Grid->addRow();
    $row->addColumns( array(
      $cmb2GroupGrid, 
    ) );



    // DESTINATION
    
    $row = $cmb2Grid->addRow();
    $row->addColumns(array(array($field13, 'class' => 'col-md-6')));

    $row = $cmb2Grid->addRow();
    $row->addColumns(array($field14, $field15));

    // FAQ

    $row = $cmb2Grid->addRow();
    $row->addColumns(array(array($field16, 'class' => 'col-md-6')));

    $row = $cmb2Grid->addRow();
    $row->addColumns(array(
        array($cta_field7, 'class' => 'col-md-3'),
        array($cta_field8, 'class' => 'col-md-3'),
    ));
    

  }
  add_action( 'cmb2_admin_init', 'cmb2_register_home_metabox' , 2);

?>