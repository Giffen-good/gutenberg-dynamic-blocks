/**
 *  BLOCK: 
 *  ---
 * 
 */

import icons from '../icons'
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText } = wp.blockEditor

registerBlockType('chrisrock-gdb/key-metrics-widget', {
  title: __( 'Key Metrics Widget' ),
  icon: icons.fifty6,
  category: 'custom-block',
  keywords: [
    __( 'key metrics' ),
    __( 'podium' ),
    __( 'Custom Widget' ),
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
        titleLeft: {
            type: 'string',
            selector: 'js-large-heading-left',

        },
        bodyLeft: {
            type: 'string',
            selector: 'js-body',
        },
        titleMiddle: {
          type: 'string',
          selector: 'js-large-heading-middle',

        },
        bodyMiddle: {
            type: 'string',
            selector: 'js-body-middle',
        },
        titleRight: {
          type: 'string',
          selector: 'js-large-heading-right',

        },
        bodyRight: {
            type: 'string',
            selector: 'js-body',
        }
   },
 
   // The UI for the WordPress editor
   edit: props => {
    const { attributes, className, setAttributes } = props
     return (
         <section className={`${className} tac podium`}>
           <div>
            <RichText
                className="js-large-heading-left"
                value={attributes.titleLeft}
                onChange={value => setAttributes({ titleLeft: value })}
                tagName="h2"
                placeholder="$200M"
              />
              <RichText
                className="js-body-left"
                value={attributes.bodyLeft}
                onChange={value => setAttributes({ bodyLeft: value })}
                tagName="p"
                placeholder="Value of real estate portfolio"
              />
           </div>
           <div>
            <RichText
                className="js-large-heading-middle"
                value={attributes.titleMiddle}
                onChange={value => setAttributes({ titleMiddle: value })}
                tagName="h2"
                placeholder="$200M"
              />
              <RichText
                className="js-body-middle"
                value={attributes.bodyMiddle}
                onChange={value => setAttributes({ bodyMIddle: value })}
                tagName="p"
                placeholder="Value of real estate portfolio"
              />
           </div>
           <div>
            <RichText
                className="js-large-heading-right"
                value={attributes.titleRight}
                onChange={value => setAttributes({ titleRight: value })}
                tagName="h2"
                placeholder="$200M"
              />
              <RichText
                className="js-body"
                value={attributes.bodyRight}
                onChange={value => setAttributes({ bodyRight: value })}
                tagName="p"
                placeholder="Value of real estate portfolio"
              />
           </div>
          
          </section>
     )
   },
 
   // The output on the live site
   save: props => {
     return null
   }
 })