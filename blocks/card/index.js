// Used to make item ids
import { nanoid } from 'nanoid'
import icons from '../icons'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InspectorControls, MediaUpload, MediaUploadCheck, RichText } = wp.blockEditor
const { Button, PanelBody, PanelRow, ToggleControl } = wp.components
const { Component } = wp.element

registerBlockType('chrisrock-gdb/card', {
  title: __( 'Card' ),
  icon: icons.fifty6,
  category: 'custom',
  keywords: [
    __( 'info' ),
    __( 'card' ),
    __( 'custom widget' ),
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
    image: {
      type: 'object',
      selector: 'js-info-image'
    },
    title: {
      type: 'string',
      selector: 'js-info-title'
    },
    summary: {
      type: 'string',
      selector: 'js-info-body',
      multiline: 'p'
    },
    cta: {
      type: 'string',
      selector: 'js-info-cta'
    },
  },

  // The UI for the WordPress editor
  edit: class BookDetails extends Component {
    render() {
      // Pull out the props we'll use
      const { attributes, className, setAttributes } = this.props

      // Pull out specific attributes for clarity below
      const { image } = attributes

      return (
        <div className={className}>

          <MediaUploadCheck>
            <MediaUpload
              className="js-info-image wp-admin-card-image"
              allowedTypes={['image']}
              multiple={false}
              value={image ? image.id : ''}
              onSelect={image => setAttributes({ image: image })}
              render={({ open }) => (
                image ?
                  <div>
                    <p>
                      <img src={image.url} width={image.width / 2} />
                    </p>

                    <p>
                      <Button onClick={() => setAttributes({ image: '' })} className="button is-small">Remove</Button>
                    </p>
                  </div> :
                  <Button onClick={open} className="button">Upload Image</Button>
              )}
            />
          </MediaUploadCheck>

          <RichText
            className="js-info-title wp-admin-title"
            value={attributes.title}
            onChange={value => setAttributes({ title: value })}
            tagName="h3"
            placeholder="title"
          />
          <RichText
            className="js-info-body wp-admin-summary"
            value={attributes.summary}
            onChange={value => setAttributes({ summary: value })}
            tagName="div"
            placeholder="body"
            multiline="p"
          />
           <RichText
            className="js-info-cta wp-admin-cta btn"
            value={attributes.cta}
            onChange={value => setAttributes({ cta: value })}
            tagName="a"
            placeholder="Call To Action"
            
          />
        </div>
      )
    }
  },

  // No save, dynamic block
  save: props => {
    return null
  }
})
