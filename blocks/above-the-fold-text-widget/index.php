<?php

namespace ChrisRock\GDB\Blocks\AboveTheFoldWidget;

add_action('plugins_loaded', __NAMESPACE__ . '\register_dynamic_block');

function register_dynamic_block() {
  // Only load if Gutenberg is available.
  if (!function_exists('register_block_type')) {
    return;
  }

  // Hook server side rendering into render callback
  // Make sure name matches registerBlockType in ./index.js
  register_block_type('chrisrock-gdb/above-the-fold-text-widget', array(
    'render_callback' => __NAMESPACE__ . '\render_dynamic_block'
  ));
}

function render_dynamic_block($attributes) {
    // Parse attributes
    $smallHeading = $attributes['smallHeading'];
    $tagline = $attributes['tagline'];
    $body = $attributes['body'];
    ob_start(); // Turn on output buffering
  ?>
<section>
    <div class="above-the-fold-text-widget section-margin-big tac">
        <h1 class="fs-4 section-header"> <?php echo $smallHeading; ?></h1>
        <h3 class="fs-2 ff-2"><?php echo $tagline; ?></h3>
        <p class=""><?php echo $body; ?></p>
    </div>
</section>
  <?php
    /* END HTML OUTPUT */
  
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
  
    return $output; // Print output
  }