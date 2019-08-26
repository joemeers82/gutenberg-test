<?php 

function gt_activate_plugin() {
	
	if( version_compare( get_bloginfo( 'version' ), '5.0', '<' ) ){
		wp_die( 'You must update wordpress to use this plugin', 'gutenberg_test' );
	}
}