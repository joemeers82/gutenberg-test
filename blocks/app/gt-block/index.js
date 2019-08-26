import block_icons from '../icons/index';
import './editor.scss';

const { registerBlockType }            = wp.blocks;
const { __ }                           = wp.i18n; 
const { InspectorControls,
 BlockControls,
 AlignmentToolbar,
 BlockAlignmentToolbar }                    = wp.editor;
const { PanelBody, PanelRow,
		TextControl, SelectControl }   = wp.components; 

registerBlockType('gt/gutenberg-test', {
	title:         __( 'GutenBlock', 'gutenberg-test' ),
	description:   __( 
		'Provides a short summary of block',
		'gutenberg-test'
	),
	category:     'common',
	icon:         block_icons.wapuu,
	keywords: [
		__('Food', 'gutenberg-test'),
		__('Ingredients','gutenberg-test'),
		__('Meal Type','gutenberg-test'),
	],
	supports:{
		html:  false,
	},
	attributes: {
		ingredients: {
			type: 'string',
			source: 'text',
			selector: '.ingredients-ph'
		},
		cooking_time: {
			type: 'string',
			source: 'text',
			selector: '.cooking_time-ph'
		},
		utensils: {
			type: 'string',
			source: 'text',
			selector: '.utensils-ph'
		},
		cooking_experience: {
			type: 'string',
			source: 'text',
			default: 'Beginner',
			selector: '.cooking_experience-ph'
		},
		meal_type: {
			type: 'string',
			source: 'text',
			default: 'Breakfast',
			selector: '.meal_type-ph'
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
	edit: ( props )=> {
		const updateIngredients = ( new_val ) => {
			props.setAttributes({ ingredients: new_val })
		}

		return [ 
			<InspectorControls>
				<PanelBody title= { __('Super Basics','gutenberg-test') }>
					<PanelRow>
						<p> { __('Configure the contents of the the block here', 'recipe') }</p>
					</PanelRow>

					<TextControl 
						label={ __( 'Ingredients', 'gutenberg-test') }
						help={  __( 'Ex: tomatoes, lettuce, olive oil, etc.', 'gutenberg-test')}
						value={props.attributes.ingredients}
						onChange={ updateIngredients } />
					<TextControl 
						label={ __( 'Cooking Time', 'gutenberg-test') }
						help={  __( 'How long will it take to cook', 'gutenberg-test')}
						value={props.attributes.cooking_time}
						onChange={ ( new_val) =>{
								 	props.setAttributes({ cooking_time: new_val })
						}} />
					<TextControl 
						label={ __( 'Utensils', 'gutenberg-test') }
						help={  __( 'What utensils do you need', 'gutenberg-test')}
						value={props.attributes.utensils}
						onChange={ ( new_val) =>{
								 	props.setAttributes({ utensils: new_val })
						}} />
					<SelectControl 
						label={__('Cooking Experience', 'gutenberg-test' )}
						help={__('How skilled should reader be?','gutenberg-test')}
						value={props.attributes.cooking_experience}
						options={[
								{value: 'Beginner', label:'Beginner'},
								{value: 'Intermediate', label:'Intermediate'},
								{value: 'Advanced', label:'Advanced'},
							]}
						onChange={ (new_val)=>{
							props.setAttributes({cooking_experience: new_val})
						}} />
					<SelectControl 
						label={__('Meal Type', 'gutenberg-test' )}
						help={__('When should this be eaten?','gutenberg-test')}
						value={props.attributes.meal_type}
						options={[
								{value: 'Breakfast', label:'Breakfast'},
								{value: 'Lunch', label:'Lunch'},
								{value: 'Dinner', label:'Dinner'},
							]}
						onChange={ (new_val)=>{
							props.setAttributes({meal_type: new_val})
						}} />
				</PanelBody>
			</InspectorControls>,
			<div className={ props.className }>
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
				<ul className="list-unstyled"
					style={ { textAlign: props.attributes.text_alignment } } >
					<li>
						<strong>{__( 'Ingredients ','gutenberg-test') }</strong>
						<span className="ingredients-ph">{props.attributes.ingredients}</span>
					</li>
					<li>
						<strong>{__( 'Cooking Time ','gutenberg-test') }</strong>
						<span className="cooking_time-ph">{props.attributes.cooking_time}</span>
					</li>
					<li>
						<strong>{__( 'Utensils ','gutenberg-test') }</strong>
						<span className="utensils-ph">{props.attributes.utensils}</span>
					</li>
					<li>
						<strong>{__( 'Cooking Exp ','gutenberg-test') }</strong>
						<span className="cooking_experience-ph">{props.attributes.cooking_experience}</span>
					</li>
					<li>
						<strong>{__( 'Meal Type ','gutenberg-test') }</strong>
						<span className="meal_type-ph">{props.attributes.meal_type}</span>
					</li>
				</ul>
			</div>
		]
	},
	save: ( props )=> {
		return (
			<div className= {`align${props.attributes.block_alignment}`}>
				<ul className="list-unstyled"
					style={ { textAlign: props.attributes.text_alignment } } >
					<li>
						<strong>{__( 'Ingredients ','gutenberg-test') }</strong>
						<span className="ingredients-ph">{props.attributes.ingredients}</span>
					</li>
					<li>
						<strong>{__( 'Cooking Time ','gutenberg-test') }</strong>
						<span className="cooking_time-ph">{props.attributes.cooking_time}</span>
					</li>
					<li>
						<strong>{__( 'Utensils ','gutenberg-test') }</strong>
						<span className="utensils-ph">{props.attributes.utensils}</span>
					</li>
					<li>
						<strong>{__( 'Cooking Exp ','gutenberg-test') }</strong>
						<span className="cooking_experience-ph">{props.attributes.cooking_experience}</span>
					</li>
					<li>
						<strong>{__( 'Meal Type ','gutenberg-test') }</strong>
						<span className="meal_type-ph">{props.attributes.meal_type}</span>
					</li>
				</ul>
			</div>
		)
	}
});