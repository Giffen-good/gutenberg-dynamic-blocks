<?php

namespace ChrisRock\GDB\Blocks\Card;

add_action('plugins_loaded', __NAMESPACE__ . '\register_dynamic_block');

function register_dynamic_block() {
  // Only load if Gutenberg is available.
  if (!function_exists('register_block_type')) {
    return;
  }

  // Hook server side rendering into render callback
  // Make sure name matches registerBlockType in ./index.js
  register_block_type('chrisrock-gdb/card', array(
    'render_callback' => __NAMESPACE__ . '\render_dynamic_block'
  ));
}

function render_dynamic_block($attributes) {
  // Parse attributes
  $imageObj = $attributes['image'];
  $image_url = $imageObj['sizes']['full']['url'];
  $image_alt_text = $imageObj['alt'];
  $image_width = $imageObj['sizes']['full']['width'] / 2;

  $title = $attributes['title'];
  $infoCardSummary = $attributes['summary'];
  $cta = $attributes['cta'];

  ob_start(); // Turn on output buffering

  /* BEGIN HTML OUTPUT */
?>
  <div class="info-card alt-black">
    <?php if ($image_url) : ?>
      <img class="image" src="<?php echo $image_url; ?>" alt="<?php echo $image_alt_text; ?>" width="<?php echo $image_width; ?>" />
    <?php endif; ?>

    <h4 class="info-title fs-3"><?php echo $title; ?></h4>
    <div class="block-info-card-summary">
      <?php echo $infoCardSummary; ?>
    </div>
  </div>
<?php
  /* END HTML OUTPUT */

  $output = ob_get_contents(); // collect output
  ob_end_clean(); // Turn off ouput buffer

  return $output; // Print output
}
