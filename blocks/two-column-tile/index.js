/**
 *  BLOCK: 
 *  ---
 *  A brief description of the block
 */
import icons from '../icons'

 const { __ } = wp.i18n
 const { registerBlockType } = wp.blocks
 const { InspectorControls, InnerBlocks, useBlockProps } = wp.blockEditor
 const { Button, PanelBody, PanelRow, ToggleControl } = wp.components

 const columnsTemplate = [
    ['', {}],
    ['', {}]
];

// const blockProps = useBlockProps()
 registerBlockType('davidyeiser-detailer/two-column-tile', {
    apiVersion: 2,
   title: __( 'Two Column Tile' ),
   icon: icons.fifty6,
   category: 'custom',
   keywords: [
     __( 'two column tile' ),
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
         <section className={`${className}`}>

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
            {/* <InnerBlocks template={columnsTemplate}  /> */}
          </section>
     )
   },
 
   // The output on the live site
   save: props => {
     return null
   }
 })