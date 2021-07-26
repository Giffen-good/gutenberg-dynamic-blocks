/**
 *  BLOCK: 
 *  ---
 *  A brief description of the block
 */
import icons from '../icons'

 const { __ } = wp.i18n
 const { registerBlockType } = wp.blocks
 const { InspectorControls, MediaUpload, MediaUploadCheck, RichText, InnerBlocks, useBlockProps } = wp.blockEditor



 registerBlockType('chrisrock-gdb/test-inner-block', {
   title: __( 'Inner Block' ),
   icon: icons.fifty6,
   category: 'custom',
   keywords: [
     __( 'Inner Block' ),
     __( 'details' ),
   ],
 
   
   // Enable or disable support for low-level features
   supports: {
    // Turn off ability to edit HTML of block content
    html: false,
    // Add alignwide and alignfull options
    align: false
   },
 
   // The UI for the WordPress editor
   edit: props => {
    const { attributes, className, setAttributes } = props
    const TEMPLATE = [ [ 'core/columns', {}, [
        [ 'core/column', {}, [
            [ 'chrisrock-gdb/card' ],
        ] ],
        [ 'core/column', {}, [
            [ 'chrisrock-gdb/card' ],
        ] ],
    ] ] ];
     return (
        <div {...useBlockProps()}>
            <InnerBlocks  template = { TEMPLATE } />
        </div>
        )
   },
 
   // The output on the live site
   save: props => {
     return <InnerBlocks.Content />
   }
 })