<?php

// https://github.com/WebDevStudios/CMB2-Snippet-Library/blob/master/options-and-settings-pages/theme-options-cmb.php

/**
 * CMB2 Theme Options
 * @version 0.1.0
 */
class Manic_Admin {
  /**
   * Option key, and option page slug
   * @var string
   */
  private $key = 'manic_options';
  /**
   * Options page metabox id
   * @var string
   */
  private $metabox_id = 'manic_option_metabox';
  /**
   * Options Page title
   * @var string
   */
  protected $title = '';
  /**
   * Options Page hook
   * @var string
   */
  protected $options_page = '';
  /**
   * Holds an instance of the object
   *
   * @var Manic_Admin
   **/
  private static $instance = null;
  /**
   * Constructor
   * @since 0.1.0
   */
  private function __construct() {
    // Set our title
    $this->title = 'Site Options';
  }
  /**
   * Returns the running object
   *
   * @return Manic_Admin
   **/
  public static function get_instance() {
    if( is_null( self::$instance ) ) {
      self::$instance = new self();
      self::$instance->hooks();
    }
    return self::$instance;
  }
  /**
   * Initiate our hooks
   * @since 0.1.0
   */
  public function hooks() {
    add_action( 'admin_init', array( $this, 'init' ) );
    add_action( 'admin_menu', array( $this, 'add_options_page' ) );
    add_action( 'cmb2_admin_init', array( $this, 'add_options_page_metabox' ) );
  }
  /**
   * Register our setting to WP
   * @since  0.1.0
   */
  public function init() {
    register_setting( $this->key, $this->key );
  }
  /**
   * Add menu options page
   * @since 0.1.0
   */
  public function add_options_page() {
    $this->options_page = add_menu_page( $this->title, $this->title, 'manage_options', $this->key, array( $this, 'admin_page_display' ) );
    // Include CMB CSS in the head to avoid FOUC
    add_action( "admin_print_styles-{$this->options_page}", array( 'CMB2_hookup', 'enqueue_cmb_css' ) );
  }
  /**
   * Admin page markup. Mostly handled by CMB2
   * @since  0.1.0
   */
  public function admin_page_display() {
    ?>
    <div class="wrap cmb2-options-page <?php echo $this->key; ?>">
      <h2><?php echo esc_html( get_admin_page_title() ); ?></h2>
      <?php cmb2_metabox_form( $this->metabox_id, $this->key ); ?>
    </div>
    <?php
  }
  /**
   * Add the options metabox to the array of metaboxes
   * @since  0.1.0
   */
  function add_options_page_metabox() {
    // hook in our save notices
    add_action( "cmb2_save_options-page_fields_{$this->metabox_id}", array( $this, 'settings_notices' ), 10, 2 );
    $cmb = new_cmb2_box( array(
      'id'         => $this->metabox_id,
      'hookup'     => false,
      'cmb_styles' => false,
      'show_on'    => array(
        // These are important, don't remove
        'key'   => 'options-page',
        'value' => array( $this->key, )
      ),
    ) );


    //    ____ _____  _    ____ _____
    //   / ___|_   _|/ \  |  _ \_   _|
    //   \___ \ | | / _ \ | |_) || |
    //    ___) || |/ ___ \|  _ < | |
    //   |____/ |_/_/   \_\_| \_\|_|
    //


    $cmb->add_field( array(
      'name' => 'General Options',
      'desc' => '',
      'id'   => PREFIX . 'general_title',
      'type' => 'title',
    ) );

    $field1 = $cmb->add_field( array(
      'name' => 'About Title',
      'desc' => '',
      'id'   => PREFIX . 'about_title',
      'type' => 'text',
    ) );

    $field2 = $cmb->add_field( array(
        'name'    => 'About Copy',
        'id'      => PREFIX . 'about_copy',
        'type'    => 'wysiwyg',
        'description' => '',
        'options' => array(
          'wpautop' => false,
          'media_buttons' => false,
          'textarea_rows' => get_option('default_post_edit_rows', 10),
        ),
    ) );



    // MAILING LIST

    /*
    $cmb->add_field( array(
      'name' => 'Page Index Options',
      'desc' => 'options for the index pages',
      'id'   => PREFIX . 'mailing_list_title',
      'type' => 'title',
    ) );


    $field3 = $cmb->add_field( array(
      'name' => 'Mailing List Title',
      'desc' => 'the copy found on mailing list subscription form in the footer',
      'id'   => PREFIX . 'mailing_list_text',
      'type' => 'text',
    ) );

    $field4 = $cmb->add_field( array(
        'name'    => 'Mailing List Copy',
        'id'      => PREFIX . 'mailing_list_copy',
        'type'    => 'wysiwyg',
        'description' => '',
        'options' => array(
          'wpautop' => false,
          'media_buttons' => false,
          'textarea_rows' => get_option('default_post_edit_rows', 10),
        ),
    ) );
    */

    


  }
  /**
   * Register settings notices for display
   *
   * @since  0.1.0
   * @param  int   $object_id Option key
   * @param  array $updated   Array of updated fields
   * @return void
   */
  public function settings_notices( $object_id, $updated ) {
    if ( $object_id !== $this->key || empty( $updated ) ) {
      return;
    }
    add_settings_error( $this->key . '-notices', '', 'Settings updated', 'updated' );
    settings_errors( $this->key . '-notices' );
  }
  /**
   * Public getter method for retrieving protected/private variables
   * @since  0.1.0
   * @param  string  $field Field to retrieve
   * @return mixed          Field value or exception is thrown
   */
  public function __get( $field ) {
    // Allowed fields to retrieve
    if ( in_array( $field, array( 'key', 'metabox_id', 'title', 'options_page' ), true ) ) {
      return $this->{$field};
    }
    throw new Exception( 'Invalid property: ' . $field );
  }
}
/**
 * Helper function to get/return the Manic_Admin object
 * @since  0.1.0
 * @return Manic_Admin object
 */
function manic_admin() {
  return Manic_Admin::get_instance();
}
/**
 * Wrapper function around cmb2_get_option
 * @since  0.1.0
 * @param  string  $key Options array key
 * @return mixed        Option value
 */
function manic_get_option( $key = '' ) {
  return cmb2_get_option( manic_admin()->key, $key );
}
// Get it started
manic_admin();