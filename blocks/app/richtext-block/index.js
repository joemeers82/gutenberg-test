import block_icons from '../icons/index';

const { registerBlockType }         =   wp.blocks;
const { RichText }                  =   wp.editor;
const { __ }                        =   wp.i18n;
const { InspectorControls,
        BlockControls,
        AlignmentToolbar,
        BlockAlignmentToolbar }     = wp.editor;

registerBlockType( 'udemy/rich-text', {
    title:                              __( 'Rich Text Example', 'recipe' ),
    description:                        __( 'Rich text example', 'recipe' ),
    category:                           'common',
    icon:                               block_icons.wapuu,
    attributes: {
        message: {
            type:        'array',
            source:      'children',
            selector:    '.message-ctr'
        },
        text_alignment: {
            type: 'string',
        },
        block_alignment: {
            type: 'string',
            default: 'wide'
        }
    },
    getEditWrapperProps: ( { block_alignment } ) => {
        if( 'left' === block_alignment || 'right' === block_alignment || 'full' === block_alignment  ) {
            return {'data-align': block_alignment };
        }
    },
    edit: ( props ) => {
        return (
            <div className={ props.className } style={ { textAlign: props.attributes.text_alignment }} >
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
                <h3>Rich Text Example Block</h3>
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
        );
    },
    save: ( props ) => {
        return (
            <div className={ props.className } style={ { textAlign: props.attributes.text_alignment }}>
                <h3>Rich Text Example Block</h3>
                <div className="message-ctr">
                    { props.attributes.message }
                    </div>
            </div>
        )
    }
});