<?php

namespace ChrisRock\GDB\Blocks\KeyMetricsWidget;

add_action('plugins_loaded', __NAMESPACE__ . '\register_dynamic_block');

function register_dynamic_block() {
  // Only load if Gutenberg is available.
  if (!function_exists('register_block_type')) {
    return;
  }

  // Hook server side rendering into render callback
  // Make sure name matches registerBlockType in ./index.js
  register_block_type('chrisrock-gdb/key-metrics-widget', array(
    'render_callback' => __NAMESPACE__ . '\render_dynamic_block'
  ));
}

function render_dynamic_block($attributes) {
    // Parse attributes
    $titleLeft = $attributes['titleLeft'];
    $bodyLeft = $attributes['bodyLeft'];
    $titleMiddle = $attributes['titleMiddle'];
    $bodyMiddle = $attributes['bodyMiddle'];
    $titleRight = $attributes['titleRight'];
    $bodyRight = $attributes['bodyRight'];
    
    ob_start(); // Turn on output buffering
  ?>
<section>
    <div class="key-metrics-widget section-margin-big tac">
      <div class="podium">
        <h2 class="fs-7 ff-2"><?php echo $titleLeft; ?></h3>
        <p class=""><?php echo $bodyLeft; ?></p>
      </div>
      <div class="podium">
        <h2 class="fs-7 ff-2"><?php echo $titleMiddle; ?></h3>
        <p class=""><?php echo $bodyMiddle; ?></p>
      </div>
      <div class="podium">
        <h2 class="fs-7 ff-2"><?php echo $titleRight; ?></h3>
        <p class=""><?php echo $bodyRight; ?></p>
      </div>
    </div>
</section>
  <?php
    /* END HTML OUTPUT */
  
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
  
    return $output; // Print output
  }