<?php

namespace ChrisRock\GDB;

/**
 *  Enqueue JavaScript and CSS
 *  for block editor only.
 */
function enqueue_block_editor_assets() {
  // Make paths variables
  $block_path = '/assets/js/editor.blocks.js';
  $style_path = '/assets/css/blocks.editor.css';

  // Enqueue the bundled block JS file
  wp_enqueue_script(
    'davidyeiser/detailer/blocks-js',
    _get_plugin_url() . $block_path,
    ['wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor'],
    null
  );

  // Enqueue optional editor-only styles
  wp_enqueue_style(
    'davidyeiser/detailer/blocks-editor-css',
    _get_plugin_url() . $style_path,
    [],
    null
  );
}

add_action('enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets');


/**
 * Add a block category for "Get With Gutenberg" if it doesn't exist already.
 *
 * @param array $categories Array of block categories.
 *
 * @return array
 */
add_filter( 'block_categories', function( $categories, $post ) {
  return array_merge(
      $categories,
      array(
          array(
              'slug'  => __('custom-blocks', ),
              'title' => 'Custom Blocks',
          ),
      )
  );
}, 10, 2 );

