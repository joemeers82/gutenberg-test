<?php
/**
 * Plugin Name:     Gutenberg Test
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          YOUR NAME HERE
 * Author URI:      YOUR SITE HERE
 * Text Domain:     gutenberg-test
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Gutenberg_Test
 */

// Your code starts here.

if( !function_exists('add_action' ) ){
	echo 'Not much I can do when called directly!';
	exit;
}

//setup
define ('GUTENBERG_TEST_PLUGIN_URL', __FILE__ );

//includes
include( 'includes/activate.php');
include( 'blocks/enqueue.php');

// hooks
register_activation_hook( __FILE__, 'gt_activate_plugin' );
add_action( 'enqueue_block_editor_assets', 'gt_enqueue_block_editor_assets');
add_action( 'enqueue_block_assets', 'gt_enqueue_block_assets');

//actions											
