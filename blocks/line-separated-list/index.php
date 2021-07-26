<?php

namespace ChrisRock\GDB\Blocks\LineSeparatedList;

add_action('plugins_loaded', __NAMESPACE__ . '\register_dynamic_block');

function register_dynamic_block() {
  // Only load if Gutenberg is available.
  if (!function_exists('register_block_type')) {
    return;
  }

  // Hook server side rendering into render callback
  // Make sure name matches registerBlockType in ./index.js
  register_block_type('chrisrock-gdb/line-separated-list', array(
    'render_callback' => __NAMESPACE__ . '\render_dynamic_block'
  ));
}

function render_dynamic_block($attributes) {
  // Parse attributes

  $list= $attributes['listItems'];

  ob_start(); // Turn on output buffering

  /* BEGIN HTML OUTPUT */
?>
  <div class="block-line-separated-list">
    <div class="line-separated-list">
		<?php
    if ($list) :
      foreach($list as $listItem) :
		?>
      <blockquote class="list-item--<?php echo $listItem['id']; ?>">
        <?php echo $listItem['content']; ?>
      </blockquote>
    <?php
      endforeach;
    endif;
		?>
    </div>
  </div>
<?php
  /* END HTML OUTPUT */

  $output = ob_get_contents(); // collect output
  ob_end_clean(); // Turn off ouput buffer

  return $output; // Print output
}
