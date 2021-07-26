/**
 *  BLOCK: 
 *  ---
 *  A brief description of the block
 */
import icons from '../icons'

// Used to make item ids
import { nanoid } from 'nanoid'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InspectorControls, MediaUpload, MediaUploadCheck, RichText } = wp.blockEditor
const { Button, PanelBody, PanelRow, ToggleControl } = wp.components
const { Component } = wp.element

registerBlockType('chrisrock-gdb/line-separated-list', {
  title: __( 'Line Separated List' ),
  icon: icons.fifty6,
  category: 'custom',
  keywords: [
    __( 'Line Separated List' ),
    __( 'list' ),
    __( 'custom block' ),

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
  attributes: {
    listItems: {
      type: 'array',
      selector: 'js-list-item'
    }
  },

  // The UI for the WordPress editor
  edit: class BookDetails extends Component {
    constructor() {
      super(...arguments)

      // Match current state to saved listItems (if they exist)
      this.state = {
        listItems: this.props.attributes.listItems || []
      }

      this.addQuote = this.addQuote.bind(this)
      this.removeQuote = this.removeQuote.bind(this)
      this.editQuote = this.editQuote.bind(this)
    }

    // adds empty placeholder for quote
    addQuote(e) {
      e.preventDefault()

      // get listItems from state
      const { listItems } = this.state

      // set up empty quote
      const emptyQuote = {
        id: nanoid(),
        content: '',
        pageRef: ''
      }

      // append new emptyQuote object to listItems
      const newQuotes = [...listItems, emptyQuote]

      // save new placeholder to WordPress
      this.props.setAttributes({ listItems: newQuotes })

      // and update state
      return this.setState({ listItems: newQuotes })
    }

    // remove item
    removeQuote(e, index) {
      e.preventDefault()

      // make a true copy of listItems
      // const { listItems } = this.state does not work
      const listItems = JSON.parse(JSON.stringify(this.state.listItems))

      // remove specified item
      listItems.splice(index, 1)

      // save updated listItems and update state (in callback)
      return (
        this.props.setAttributes(
          { listItems: listItems },
          this.setState({ listItems: listItems })
        )
      )
    }

    // handler function to update quote
    editQuote(key, index, value) {
      // make a true copy of listItems
      const listItems = JSON.parse(JSON.stringify(this.state.listItems))
      if (listItems.length === 0) return

      // update value
      listItems[index][key] = value

      // save values in WordPress and update state (in callback)
      return (
        this.props.setAttributes(
          { listItems: listItems },
          this.setState({ listItems: listItems })
        )
      )
    }

    render() {
      // Pull out the props we'll use
      const { attributes, className, setAttributes } = this.props

      // Pull out specific attributes for clarity below
      const { haveRead, image, listItems } = attributes

      return (
        <div className={className}>
          {!!listItems && listItems.map((item, index) =>
            <div key={item.id || index} className="wp-admin-list-item">
              <RichText
                className="wp-admin-book-heading"
                value={item.content}
                onChange={value => this.editQuote('content', index, value)}
                tagName="div"
                multiline="p"
                placeholder="Heading"
              />

              <RichText
                className="wp-admin-book-body"
                value={item.pageRef}
                onChange={value => this.editQuote('pageRef', index, value)}
                tagName="p"
                placeholder="Description"
              />

              <p>
                <input
                  className="button-secondary button"
                  type="submit"
                  value="Remove List Item"
                  onClick={(e) => this.removeQuote(e, index)}
                />
              </p>
            </div>
          )}

          <p class="wp-admin-book-details-quote">
            <input
              className="button-primary button"
              type="submit"
              value="Add List Item"
              onClick={(e) => this.addQuote(e)}
            />
          </p>
        </div>
      )
    }
  },

  // No save, dynamic block
  save: props => {
    return null
  }
})
