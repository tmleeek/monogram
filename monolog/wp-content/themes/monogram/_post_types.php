<?php

  

  
  function manic_post_type_register(){


    /* (http://codex.wordpress.org/Function_Reference/register_post_type) */




    //    ____  _   _  ___  ____ _____   _____ ___  ____  __  __
    //   / ___|| | | |/ _ \|  _ \_   _| |  ___/ _ \|  _ \|  \/  |
    //   \___ \| |_| | | | | |_) || |   | |_ | | | | |_) | |\/| |
    //    ___) |  _  | |_| |  _ < | |   |  _|| |_| |  _ <| |  | |
    //   |____/|_| |_|\___/|_| \_\|_|   |_|   \___/|_| \_\_|  |_|
    //

    register_post_type( 'post-short-form', 
      
      array( 'labels' => array(
        'name' => 'Short Form',
        'singular_name' => 'Short Form',
        'all_items' => 'All Short Form',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Short Form',
        'edit' => 'Edit',
        'edit_item' => 'Edit Short Form',
        'new_item' => 'New Short Form',
        'view_item' => 'View Short Form',
        'search_items' => 'Search Short Form',
        'not_found' =>  'Nothing found in the Database.',
        'not_found_in_trash' => 'Nothing found in Trash',
        'parent_item_colon' => ''
        ), /* end of arrays */
        'description' => 'A Short Form entry.',
        'public' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'show_ui' => true,
        'query_var' => true,
        'menu_position' => 100,
        'menu_icon' => 'dashicons-format-aside',
        'rewrite' => array( 'slug' => 'post-short-form', 'with_front' => false ),
        'has_archive' => 'post-short-form',
        'capability_type' => 'post',
        'hierarchical' => false,
        'taxonomies' => array('post_tag'),
        'supports' => array( 'title', 'editor', 'revisions')
      ) /* end of options */
    ); /* end of register post type */
    
    register_taxonomy_for_object_type('post_tag', 'post-short-form');
    register_taxonomy_for_object_type( 'category', 'post-short-form' );


    //   __     _____ ____  _____ ___
    //   \ \   / /_ _|  _ \| ____/ _ \
    //    \ \ / / | || | | |  _|| | | |
    //     \ V /  | || |_| | |__| |_| |
    //      \_/  |___|____/|_____\___/
    //

    register_post_type( 'post-video', 
      
      array( 'labels' => array(
        'name' => 'Video',
        'singular_name' => 'Video',
        'all_items' => 'All Video',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Video',
        'edit' => 'Edit',
        'edit_item' => 'Edit Video',
        'new_item' => 'New Video',
        'view_item' => 'View Video',
        'search_items' => 'Search Video',
        'not_found' =>  'Nothing found in the Database.',
        'not_found_in_trash' => 'Nothing found in Trash',
        'parent_item_colon' => ''
        ), /* end of arrays */
        'description' => 'A Video entry.',
        'public' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'show_ui' => true,
        'query_var' => true,
        'menu_position' => 100,
        'menu_icon' => 'dashicons-video-alt',
        'rewrite' => array( 'slug' => 'post-video', 'with_front' => false ),
        'has_archive' => 'post-video',
        'capability_type' => 'post',
        'hierarchical' => false,
        'taxonomies' => array('post_tag'),
        'supports' => array( 'title', 'editor', 'revisions')
      ) /* end of options */
    ); /* end of register post type */
    
    register_taxonomy_for_object_type('post_tag', 'post-video');
    register_taxonomy_for_object_type( 'category', 'post-video' );

    //    ___ _   _ ____ _____  _    ____ ____      _    __  __
    //   |_ _| \ | / ___|_   _|/ \  / ___|  _ \    / \  |  \/  |
    //    | ||  \| \___ \ | | / _ \| |  _| |_) |  / _ \ | |\/| |
    //    | || |\  |___) || |/ ___ \ |_| |  _ <  / ___ \| |  | |
    //   |___|_| \_|____/ |_/_/   \_\____|_| \_\/_/   \_\_|  |_|
    //

    register_post_type( 'post-instagram', 
      
      array( 'labels' => array(
        'name' => 'Instagram Gallery',
        'singular_name' => 'Instagram Gallery',
        'all_items' => 'All Instagram Gallery',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Instagram Gallery',
        'edit' => 'Edit',
        'edit_item' => 'Edit Instagram Gallery',
        'new_item' => 'New Instagram Gallery',
        'view_item' => 'View Instagram Gallery',
        'search_items' => 'Search Instagram Gallery',
        'not_found' =>  'Nothing found in the Database.',
        'not_found_in_trash' => 'Nothing found in Trash',
        'parent_item_colon' => ''
        ), /* end of arrays */
        'description' => 'A Instagram Gallery entry.',
        'public' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'show_ui' => true,
        'query_var' => true,
        'menu_position' => 100,
        'menu_icon' => 'dashicons-images-alt',
        'rewrite' => array( 'slug' => 'post-instagram', 'with_front' => false ),
        'has_archive' => 'post-instagram',
        'capability_type' => 'post',
        'hierarchical' => false,
        'taxonomies' => array('post_tag'),
        'supports' => array( 'title', 'editor', 'revisions')
      ) /* end of options */
    ); /* end of register post type */
    
    register_taxonomy_for_object_type('post_tag', 'post-instagram');
    register_taxonomy_for_object_type( 'category', 'post-instagram' );

    //    ___ _   _ _____ ___   ____ ____      _    ____  _   _ ___ ____
    //   |_ _| \ | |  ___/ _ \ / ___|  _ \    / \  |  _ \| | | |_ _/ ___|
    //    | ||  \| | |_ | | | | |  _| |_) |  / _ \ | |_) | |_| || | |
    //    | || |\  |  _|| |_| | |_| |  _ <  / ___ \|  __/|  _  || | |___
    //   |___|_| \_|_|   \___/ \____|_| \_\/_/   \_\_|   |_| |_|___\____|
    //

    register_post_type( 'post-infographic', 
      
      array( 'labels' => array(
        'name' => 'Infographic',
        'singular_name' => 'Infographic',
        'all_items' => 'All Infographic',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Infographic',
        'edit' => 'Edit',
        'edit_item' => 'Edit Infographic',
        'new_item' => 'New Infographic',
        'view_item' => 'View Infographic',
        'search_items' => 'Search Infographic',
        'not_found' =>  'Nothing found in the Database.',
        'not_found_in_trash' => 'Nothing found in Trash',
        'parent_item_colon' => ''
        ), /* end of arrays */
        'description' => 'A Infographic entry.',
        'public' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'show_ui' => true,
        'query_var' => true,
        'menu_position' => 100,
        'menu_icon' => 'dashicons-format-image',
        'rewrite' => array( 'slug' => 'post-infographic', 'with_front' => false ),
        'has_archive' => 'post-infographic',
        'capability_type' => 'post',
        'hierarchical' => false,
        'taxonomies' => array('post_tag'),
        'supports' => array( 'title', 'editor', 'revisions')
      ) /* end of options */
    ); /* end of register post type */
    
    register_taxonomy_for_object_type('post_tag', 'post-infographic');
    register_taxonomy_for_object_type( 'category', 'post-infographic' );

    //    _______     _______ _   _ _____
    //   | ____\ \   / / ____| \ | |_   _|
    //   |  _|  \ \ / /|  _| |  \| | | |
    //   | |___  \ V / | |___| |\  | | |
    //   |_____|  \_/  |_____|_| \_| |_|
    //

    register_post_type( 'post-event', 
      
      array( 'labels' => array(
        'name' => 'Event',
        'singular_name' => 'Event',
        'all_items' => 'All Event',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Event',
        'edit' => 'Edit',
        'edit_item' => 'Edit Event',
        'new_item' => 'New Event',
        'view_item' => 'View Event',
        'search_items' => 'Search Event',
        'not_found' =>  'Nothing found in the Database.',
        'not_found_in_trash' => 'Nothing found in Trash',
        'parent_item_colon' => ''
        ), /* end of arrays */
        'description' => 'A Event entry.',
        'public' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'show_ui' => true,
        'query_var' => true,
        'menu_position' => 100,
        'menu_icon' => 'dashicons-star-filled',
        'rewrite' => array( 'slug' => 'post-event', 'with_front' => false ),
        'has_archive' => 'post-event',
        'capability_type' => 'post',
        'hierarchical' => false,
        'taxonomies' => array('post_tag'),
        'supports' => array( 'title', 'editor', 'revisions')
      ) /* end of options */
    ); /* end of register post type */
    
    register_taxonomy_for_object_type('post_tag', 'post-event');
    register_taxonomy_for_object_type( 'category', 'post-event' );

    //    _     ___   ___  _  ______   ___   ___  _  __
    //   | |   / _ \ / _ \| |/ / __ ) / _ \ / _ \| |/ /
    //   | |  | | | | | | | ' /|  _ \| | | | | | | ' /
    //   | |__| |_| | |_| | . \| |_) | |_| | |_| | . \
    //   |_____\___/ \___/|_|\_\____/ \___/ \___/|_|\_\
    //

    register_post_type( 'post-lookbook', 
      
      array( 'labels' => array(
        'name' => 'Lookbook',
        'singular_name' => 'Lookbook',
        'all_items' => 'All Lookbook',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Lookbook',
        'edit' => 'Edit',
        'edit_item' => 'Edit Lookbook',
        'new_item' => 'New Lookbook',
        'view_item' => 'View Lookbook',
        'search_items' => 'Search Lookbook',
        'not_found' =>  'Nothing found in the Database.',
        'not_found_in_trash' => 'Nothing found in Trash',
        'parent_item_colon' => ''
        ), /* end of arrays */
        'description' => 'A Lookbook entry.',
        'public' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'show_ui' => true,
        'query_var' => true,
        'menu_position' => 100,
        'menu_icon' => 'dashicons-id-alt',
        'rewrite' => array( 'slug' => 'post-lookbook', 'with_front' => false ),
        'has_archive' => 'post-lookbook',
        'capability_type' => 'post',
        'hierarchical' => false,
        'taxonomies' => array('post_tag'),
        'supports' => array( 'title', 'editor', 'revisions')
      ) /* end of options */
    ); /* end of register post type */
    
    register_taxonomy_for_object_type('post_tag', 'post-lookbook');
    register_taxonomy_for_object_type( 'category', 'post-lookbook' );


    //     ____ _   _ _____ _____   ____ ___ ___
    //    / ___| | | | ____|  ___| | __ )_ _/ _ \
    //   | |   | |_| |  _| | |_    |  _ \| | | | |
    //   | |___|  _  | |___|  _|   | |_) | | |_| |
    //    \____|_| |_|_____|_|     |____/___\___/
    //

    register_post_type( 'post-chef-bio', 
      
      array( 'labels' => array(
        'name' => 'Chef Bio',
        'singular_name' => 'Chef Bio',
        'all_items' => 'All Chef Bio',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Chef Bio',
        'edit' => 'Edit',
        'edit_item' => 'Edit Chef Bio',
        'new_item' => 'New Chef Bio',
        'view_item' => 'View Chef Bio',
        'search_items' => 'Search Chef Bio',
        'not_found' =>  'Nothing found in the Database.',
        'not_found_in_trash' => 'Nothing found in Trash',
        'parent_item_colon' => ''
        ), /* end of arrays */
        'description' => 'A Chef Bio entry.',
        'public' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'show_ui' => true,
        'query_var' => true,
        'menu_position' => 100,
        'menu_icon' => 'dashicons-id',
        'rewrite' => array( 'slug' => 'post-chef-bio', 'with_front' => false ),
        'has_archive' => 'post-chef-bio',
        'capability_type' => 'post',
        'hierarchical' => false,
        'taxonomies' => array('post_tag'),
        'supports' => array( 'title', 'editor', 'revisions')
      ) /* end of options */
    ); /* end of register post type */
    
    register_taxonomy_for_object_type('post_tag', 'post-chef-bio');
    register_taxonomy_for_object_type( 'category', 'post-chef-bio' );


  } // manic_post_type_register
  add_action('init', 'manic_post_type_register');


?>