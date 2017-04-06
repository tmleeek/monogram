<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_monogram');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'MRi/|QoLDEbE<)U25vM$8o[*5Mv(&ihBw |3Xl2w%`0M#,?KuY!cBPdK)Erb5MIv');
define('SECURE_AUTH_KEY',  'rZejm^x;%p?FktHfzvEQb]zBQHpq~/1}>aw)G55etNzy%j=Ix= Wf@{bHTbN4sio');
define('LOGGED_IN_KEY',    'L4Dk1o=P/^ wKMyL`O?D9XyL!T2!B=[/@}CB9wX>q,b^]Xz7-VjMq_tqe~Hq|R;|');
define('NONCE_KEY',        'Mz^m@q=Ve*[EN&ewVXMp&EAr1=}$+DNNhW^<L[_gIv]xT%K?EV^1{ s6a1%Sj@]!');
define('AUTH_SALT',        'B>=WM1,INzYqB0#(yX.P,6 QS]g#D{F2JgS.}py]KMV>3@?#9^H@[vN!P7wgYhn@');
define('SECURE_AUTH_SALT', 'KUxPZn[!#XM?.]B{1$Abh+|F~XxC #VH98H*quyH~w|9G!AKwSy!U%C::fz@&VLm');
define('LOGGED_IN_SALT',   '_4g/46hjCK]52=<),0iS+9]P0[K{p|CZv=2(}}cDqcZTD.?a}ENF(HR7G5_WNSwf');
define('NONCE_SALT',       'p+Uc!FM@ke6/oGE~#+NX-gKU?+8]l6~g6fNmxkzRc&.gqayIyKK7m^|dmjU+K{Q-');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
