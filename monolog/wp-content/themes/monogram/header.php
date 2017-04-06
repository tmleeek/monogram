<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

<head>
  <meta charset="utf-8">

  <?php // Google Chrome Frame for IE ?>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <!-- <title><?php if (is_front_page()) { bloginfo('name'); } else { wp_title(''); } ?></title> -->
  <title><?php bloginfo('name'); ?></title>

  <?php // mobile meta (hooray!) ?>
  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"/> -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, minimal-ui"/>

  <?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
  <link rel="apple-touch-icon" href="<?php echo THEMEROOT; ?>/assets/images/icons/favicon.png">
  <!-- <link rel="icon" href="<?php echo THEMEROOT; ?>/assets/images/icons/favicon.png?v=2"> -->
  <link rel="icon" href="<?php echo THEMEROOT; ?>/assets/images/icons/favicon.ico" type="image/x-icon" />
  <link rel="shortcut icon" href="<?php echo THEMEROOT; ?>/assets/images/icons/favicon.ico" type="image/x-icon" />

  <!--[if IE]>
    <link rel="shortcut icon" href="<?php echo THEMEROOT; ?>/assets/images/icons/favicon.ico">
  <![endif]-->
  <?php // or, set /favicon.ico for IE10 win ?>
  <meta name="msapplication-TileColor" content="#f01d4f">
  <meta name="msapplication-TileImage" content="<?php echo THEMEROOT; ?>/assets/images/icons/favicon.png">

  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

  <?php // wordpress head functions ?>
  <?php wp_head(); ?>
  <?php // end of wordpress head ?>

  <!-- Critical Css -->
  <?php if(DEBUG): ?>
    <link rel="stylesheet" type="text/css" href="<?php echo THEMEROOT; ?>/assets/css/critical_style.css">
  <?php else: ?>

    <style type="text/css">
        <?php require_once('assets/css/critical_style.css'); ?>
    </style>
  <?php endif; ?>

  <?php // drop Google Analytics Here ?>
  <?php // end analytics ?>

  <?php include('inc/google-analytics.php'); ?>
  <?php include('inc/fonts.php'); ?>

</head>

<body <?php body_class(); ?>>

  <div id="page-preloader">
    
    <svg class="hourglass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 206" preserveAspectRatio="none">
      <path class="middle" d="M120 0H0v206h120V0zM77.1 133.2C87.5 140.9 92 145 92 152.6V178H28v-25.4c0-7.6 4.5-11.7 14.9-19.4 6-4.5 13-9.6 17.1-17 4.1 7.4 11.1 12.6 17.1 17zM60 89.7c-4.1-7.3-11.1-12.5-17.1-17C32.5 65.1 28 61 28 53.4V28h64v25.4c0 7.6-4.5 11.7-14.9 19.4-6 4.4-13 9.6-17.1 16.9z"/>
      <path class="outer" d="M93.7 95.3c10.5-7.7 26.3-19.4 26.3-41.9V0H0v53.4c0 22.5 15.8 34.2 26.3 41.9 3 2.2 7.9 5.8 9 7.7-1.1 1.9-6 5.5-9 7.7C15.8 118.4 0 130.1 0 152.6V206h120v-53.4c0-22.5-15.8-34.2-26.3-41.9-3-2.2-7.9-5.8-9-7.7 1.1-2 6-5.5 9-7.7zM70.6 103c0 18 35.4 21.8 35.4 49.6V192H14v-39.4c0-27.9 35.4-31.6 35.4-49.6S14 81.2 14 53.4V14h92v39.4C106 81.2 70.6 85 70.6 103z"/>
    </svg>

  </div>

  <!-- mobile header is outside the page wrapper -->
  <?php include('inc/header_mobile.php'); ?>

  <div id="page-wrapper">
      <div id="page-wrapper-content">

        <!-- desktop header is inside the page wrapper -->
        <?php include('inc/header_desktop.php'); ?>

