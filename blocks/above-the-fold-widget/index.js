/**
 *  BLOCK: 
 *  ---
 *  A brief description of the block
 */
import icons from '../icons'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText } = wp.blockEditor
 
 registerBlockType('davidyeiser-detailer/above-the-fold-widget', {
   title: __( 'Above the Fold Widget' ),
   icon: icons.fifty6,
   category: 'custom',
   keywords: [
     __( 'landing' ),
     __( 'above' ),
     __( 'above the fold' ),
     __( 'custom widget' ),

   ],
 
   // Enable or disable support for low-level features
   supports: {
    // Turn off ability to edit HTML of block content
    html: false,
    // Add alignwide and alignfull options
    align: false
   },
 
   // Set up data model for custom block
   attributes: {
        smallHeading: {
            type: 'string',
            selector: 'js-small-heading',

        },
        tagline: {
            type: 'string',
            selector: 'js-tagline'
        },
        body: {
            type: 'string',
            selector: 'js-body',
            multiline:"p"
        }
   },
 
   // The UI for the WordPress editor
   edit: props => {
    const { attributes, className, setAttributes } = props
     return (
         <section className={`${className} tac`}>
          <RichText
              className="js-small-heading wp-admin-small-heading"
              value={attributes.smallHeading}
              onChange={value => setAttributes({ smallHeading: value })}
              tagName="h1"
              placeholder="Page Title"
            />

            <RichText
              className="js-tagline wp-admin-tagline"
              value={attributes.tagline}
              onChange={value => setAttributes({ tagline: value })}
              tagName="h3"
              placeholder="Tagline"
            />
            <RichText
              className="js-body"
              value={attributes.body}
              onChange={value => setAttributes({ body: value })}
              tagName="div"
              placeholder="Body"
              multiline="p"
            />
          </section>
     )
   },
 
   // The output on the live site
   save: props => {
     return null
   }
 })