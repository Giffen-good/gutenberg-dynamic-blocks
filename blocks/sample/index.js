/**
 *  BLOCK: 
 *  ---
 *  A brief description of the block
 */
import icons from '../icons'

 const { __ } = wp.i18n
 const { registerBlockType } = wp.blocks
 const { InspectorControls, MediaUpload, MediaUploadCheck, RichText } = wp.blockEditor



 registerBlockType('chrisrock-gdb/example', {
   title: __( 'Example' ),
   icon: icons.fifty6,
   category: 'custom',
   keywords: [
     __( 'custom widget' ),
     __( 'details' ),
   ],
 
   
   // Enable or disable support for low-level features
   supports: {
    // Turn off ability to edit HTML of block content
    html: false,
    // Add alignwide and alignfull options
    align: false
   },
 
   attributes: {
    heading: {
        type: 'string',
        selector: 'js-heading',

    },
    tagline: {
        type: 'string',
        selector: 'js-tagline'
    },
    body: {
        type: 'string',
        selector: 'js-body',
        multiline:"p",
    },
    sectionMarginTop: {
        type: 'boolean',
        selector: 'js-section-margin-top',
        default: true

    }
},
   // The UI for the WordPress editor
   edit: props => {
    const { attributes, className, setAttributes } = props
     return (
         <section className={`${className} tac`}>

          {/* Sidebar Controls */}
          <InspectorControls>
                    <PanelBody title={__('Include Section Margin Top')}>
                    <PanelRow>
                        <ToggleControl
                        className="js-section-margin-top"
                        label="Read"
                        checked={attributes.sectionMarginTop}
                        help={attributes.sectionMarginTop ? "Margin added between this section and the one above it" : "Margin Removed between this section and the one above it"}
                        onChange={checked => setAttributes({ sectionMarginTop: checked })}
                        />
                    </PanelRow>
                    </PanelBody>
            </InspectorControls>

          <RichText
              className="js-heading wp-admin-heading"
              value={attributes.smallHeading}
              onChange={value => setAttributes({ heading: value })}
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