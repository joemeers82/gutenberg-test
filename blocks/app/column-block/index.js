import classnames from 'classnames';
import './column-block.scss';

const { registerBlockType }         =   wp.blocks;
const { RichText }                  =   wp.editor;
const { __ }                        =   wp.i18n;
const { InspectorControls,
        BlockControls,
        AlignmentToolbar,
        BlockAlignmentToolbar }     = wp.editor;
const { PanelBody, PanelRow,ColorPicker,
		TextControl, SelectControl }   = wp.components; 

registerBlockType( 'udemy/column-block', {
    title:                              __( 'Column Block', 'gutenberg-test' ),
    description:                        __( 'Column Block', 'gutenberg-test' ),
    category:                           'common',
    attributes: {
        message: {
            type:        'array',
            source:      'children',
            selector:    '.message-ctr'
        },
        header: {
			type: 'string',
			source: 'text'
		},
		targetID: {
			type: 'string',
			source: 'text'
		},
        text_alignment: {
            type: 'string',
        },
        block_alignment: {
            type: 'string',
            default: 'wide'
        },
        color:{
        	type:'string'
        }
    },
    getEditWrapperProps: ( { block_alignment } ) => {
        if( 'left' === block_alignment || 'right' === block_alignment || 'full' === block_alignment  ) {
            return {'data-align': block_alignment };
        }
    },
   
    edit: ( props ) => {
 		const updateHeader = ( new_val ) => {
			props.setAttributes({ header: new_val })
		}
    	return(
    		<div style={ { backgroundColor: props.attributes.color }}>
    		<InspectorControls>
				<PanelBody title= { __('Column Stuff','gutenberg-test') }>
					<PanelRow>
						<p> { __('Configure the contents of the the block here', 'recipe') }</p>
					</PanelRow>

					<TextControl 
						label={ __( 'Header', 'gutenberg-test') }
						value={props.attributes.header}
						onChange={ updateHeader } 
					/>
					<TextControl 
						label={ __( 'Target ID', 'gutenberg-test') }
						value={props.attributes.targetID}
						onChange={ ( new_val) =>{
								 	props.setAttributes({ targetID: new_val })
						}}
					/>
					<ColorPicker
						label={ __( 'Background Color', 'gutenberg-test') }
						value={props.attributes.color}
						onChange={
							(new_val)=>{
								props.setAttributes({color: new_val})
							}
						}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<BlockAlignmentToolbar
					value={ props.attributes.block_alignment }
					onChange={ (new_val )=> {
						props.setAttributes({block_alignment: new_val });
					}}
				/>
					<AlignmentToolbar
						value={ props.attributes.text_alignment }
						onChange={ ( new_val ) => {
							props.setAttributes({ text_alignment: new_val });
						}}
					/>
				</BlockControls>
    		<div className={ classnames(
                               'container',
                               'border',
                               'border-primary'
                           	)}
    		>
    			<h3 id={ props.attributes.targetID } >{ props.attributes.header }</h3>
    			<div className={ classnames(
                               'row',
                               'border',
                               'border-success'
                           	)}
    			>
	    			<div className={ classnames(
	                               'col-md-6',
	                               'border',
	                               'border-danger'
	                           	)}
	    			>
	    				<RichText 
		                    tagName="div"
		                    multiline="p"
		                    placeholder={__('Add your content here.', 'gutenberg-test' ) }
		                    onChange={ ( new_val )=>{
		                        props.setAttributes({ message: new_val });
		                    }}
		                    value={ props.attributes.message }
		                />
	    			</div>
	    			<div className={ classnames(
	                               'col-md-6',
	                               'border',
	                               'border-danger'
	                           	)}
	    			>
	    			Col 2
	    			{props.attributes.color}
	    			</div>
    			</div>
    		</div>
    		</div>
    	);
    },
    save: (props) => {
    	return(
    		<div style={ { backgroundColor: props.attributes.color } } className= {`align${props.attributes.block_alignment}`}>
    		<div className={ classnames(
                               'container',
                               'border',
                               'border-primary'
                           	)}
    		>
    			<h3 id={ props.attributes.targetID } >{ props.attributes.header }</h3>
    			<div className={ classnames(
                               'row',
                               'border',
                               'border-success'
                           	)}
    			>
	    			<div className={ classnames(
	                               'col-md-6',
	                               'border',
	                               'border-danger'
	                           	)}
	    			>
	    				<div className="message-ctr">
		                    { props.attributes.message }
		                </div>
	    			</div>
	    			<div className={ classnames(
	                               'col-md-6',
	                               'border',
	                               'border-danger'
	                           	)}
	    			>
	    			Col 2
	    			</div>
    			</div>
    		</div>
    		</div>
    	);
    }
});