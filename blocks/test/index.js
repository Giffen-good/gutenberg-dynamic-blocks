/**
 *  BLOCK: 
 *  ---
 *  A brief description of the block
 */
import icons from '../icons'

 const { __ } = wp.i18n
 const { registerBlockType } = wp.blocks
 
 registerBlockType('chrisrock-gdb/test', {
   title: __( 'test' ),
   icon: icons.fifty6,
   category: 'custom',
   keywords: [
     __( 'test' ),
     __( 'details' ),
   ],
 
 // Enable or disable support for low-level features
supports: {
    // Turn off ability to edit HTML of block content
    html: false,
    // Turn off reusable block feature
    reusable: false,
    // Add alignwide and alignfull options
    align: false
  },
 // Set up data model for custom block
    // Set up data model for custom block
attributes: {
    title: {
      type: 'string',
      selector: 'js-book-details-title'
    },
    author: {
      type: 'string',
      selector: 'js-book-details-author'
    },
    summary: {
      type: 'string',
      selector: 'js-book-details-summary',
      multiline: 'p'
    },
  },
 
   // The UI for the WordPress editor
   edit: props => {
     return null
   },
 
   // The output on the live site
   save: props => {
     return null
   }
 })