<?php
/**
 *  Bootstrap file to launch the plugin.
 *
 *  @wordpress-plugin
 *  Plugin Name: 56 Custom Blocks
 *  Plugin URI:  https://github.com/Giffen-good
 *  Description: Plugin to create custom Gutenberg block, Book Details.
 *  Version:     0.1
 *  Author:      David Yeiser
 *  Author URI:  https://davidyeiser.com/
 *  License:     GPL2+
 *  License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace DavidYeiser\Detailer;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

// Gets this plugin's absolute directory path.
function _get_plugin_directory() {
  return __DIR__;
}

// Gets this plugin's URL.
function _get_plugin_url() {
  static $plugin_url;

  if (empty($plugin_url)) {
    $plugin_url = plugins_url(null, __FILE__);
  }

  return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

// Load dynamic blocks
include __DIR__ . '/blocks/book-details/index.php';
include __DIR__ . '/blocks/above-the-fold-widget/index.php';
include __DIR__ . '/blocks/information-card/index.php';
include __DIR__ . '/blocks/key-metrics-widget/index.php';
include __DIR__ . '/blocks/two-column-image/index.php';
// include __DIR__ . '/blocks/two-column-tile/index.php';
// include __DIR__ . '/blocks/line-separated-list/index.php';




