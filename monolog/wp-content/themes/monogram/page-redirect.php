<?php
/*
 * Template Name: Redirect Page
 * Description: Redirect to homepage / used for empty pages
 */
    
    wp_redirect(dirname(home_url($wp->request)));
    exit;
