import classnames from 'classnames';
import './card-block.scss';

const { registerBlockType }          =   wp.blocks;
const { RichText }                   =   wp.editor;
const { __ }                         =   wp.i18n;
const { InspectorControls,
        BlockControls,
        AlignmentToolbar,
        BlockAlignmentToolbar,
        MediaUpload,
        MediaUploadCheck }          = wp.editor;
const { PanelBody, PanelRow,ColorPicker,
		TextControl, SelectControl, 
		Button, Dashicon }          = wp.components; 

registerBlockType( 'gutenberg-test/card-block', {
	title:                  __( 'Card Block', 'gutenberg-test' ),
	description:            __( 'Card Block', 'gutenberg-test' ),
	category:               'common',
	attributes: {
		number_of_cards: {
			type:   'string',
			source: 'text',
			default: '1',
			selector: '.number_of_cards'
		},
		img_ID: {
            type:   'number'
        },
        img_URL: {
            type:      'string',
            source:    'attribute',
            attribute: 'src',
            selector:  'img'
        },
        img_alt: {
            type:      'string',
            source:    'attribute',
            attribute: 'src',
            selector:  'img'
        },
        title: {
			type: 'string',
			source: 'text'
		},
		body: {
			type: 'string',
			source: 'text'
		}
	},
	edit: ( props ) => {
		const select_img    = ( img ) => {
            props.setAttributes({
                img_ID      :  img.id,
                img_URL     :  img.url,
                img_alt     :  img.alt
            })
        };

        const remove_img    = ()=>{
            props.setAttributes({
                img_ID      :  null,
                img_URL     :  null,
                img_alt     :  null
            })
        }

		return (
			<div className= { classnames( 'card-block') }> 
				<InspectorControls>
					<PanelBody title= { __('Card Block Data'), 'gutenberg-test'}>
						<PanelRow>
							<p> {__('Cofigure Card Block Here','gutenberg-test')}</p>
						</PanelRow>
						<SelectControl 
							label={ __('Number of Cards'), 'gutenberg-test'}
							help={ __('Select Number of Cards'), 'gutenberg-test'}
							value={ props.attributes.number_of_cards }
							options={ [
										{value: 1, label: '1'}, 
										{value: 2, label: '2'},
										{value: 3, label: '3'}
									]}
							onChange={ (new_val)=>{
								props.setAttributes({number_of_cards: new_val})
							}}
						/>
						<TextControl
							label={ __( 'Title', 'gutenberg-test') }
							value={props.attributes.title}
							onChange={ ( new_val) =>{
									 	props.setAttributes({ title: new_val })
							}}
						/>
						<TextControl
							label={ __( 'Body', 'gutenberg-test') }
							value={props.attributes.body}
							onChange={ ( new_val) =>{
									 	props.setAttributes({ body: new_val })
							}}
						/>

						<MediaUploadCheck>
                            <MediaUpload 
                                allowedType={ [ 'image' ] }
                                value={ props.attributes.img_ID }
                                onSelect={ select_img }
                                render={ ({ open })=>(
                                    <Button className = { "button button-large" } onClick={ open }>
                                        {__( 'Upload Image', 'gutenberg-test' ) }
                                    </Button>
                                    
                                )}></MediaUpload>
                        </MediaUploadCheck>
						
					</PanelBody>
				</InspectorControls>
				<h3>{ props.attributes.title }</h3>
				{ props.attributes.number_of_cards}
				<img 
					src={ props.attributes.img_URL }
                    alt={ props.attributes.img_alt } 
                />
                
                <div> { props.attributes.body }</div>

			</div>
		);
	},
	save: ( props ) => {
		return (
			<div className= { classnames('card-block')}>
			{props.attributes.number_of_cards}
			<h3>{ props.attributes.title }</h3>
				<img 
					src={ props.attributes.img_URL }
                    alt={ props.attributes.img_alt } />
                <div> { props.attributes.body }</div>
			</div>
		);
	}
})