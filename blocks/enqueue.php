<?php 

function gt_enqueue_block_editor_assets(){
	wp_register_script(
		'gt_blocks_bundle',
		plugins_url( '/blocks/dist/bundle.js', GUTENBERG_TEST_PLUGIN_URL ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-api' ],
		filemtime( plugin_dir_path( GUTENBERG_TEST_PLUGIN_URL ) . '/blocks/dist/bundle.js' )
	);

	wp_enqueue_script( 'gt_blocks_bundle' );
}

function gt_enqueue_block_assets() {	
	wp_register_style(
		'gt_blocks',
		plugins_url( '/blocks/dist/blocks-main.css', GUTENBERG_TEST_PLUGIN_URL)
	);
	
	wp_enqueue_style('gt_blocks');
	
	wp_register_style('bootstrap','https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
	wp_enqueue_style('bootstrap');
	


}