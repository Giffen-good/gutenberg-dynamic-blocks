

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InspectorControls, MediaUpload, MediaUploadCheck, RichText, withColors, InnerBlocks, PanelColorSettings, getColorClassName, useBlockProps } = wp.blockEditor
const { Button, PanelBody, PanelRow, ToggleControl } = wp.components
const { compose } = wp.compose


const innerEdit = (props) => {
  
    const colorSamples = [
        {
            name: 'Off Black',
            slug: 'off-black',
            color: '#111111'
        },
        {
            name: 'Alt Black',
            slug: 'alt-black',
            color: '#1C1C1C'
        },
        
        {
            name: 'Teperium Blue',
            slug: 'teperium-blue',
            color: '#122C88'
        },
        {
            name: 'Teperium Blue',
            slug: 'teperium-blue',
            color: '#3355D1'
        },
        {
            name: 'White',
            slug: 'white',
            color: '#ffffff'
        }
    ];
    const { attributes, className, setAttributes } = props
    const { image } = attributes
    // form background color
    const formStyles = {
        backgroundColor: props.formColor.class ? undefined : props.attributes.customFormColor,
    }
    // as you can see the form button must change its color too
	const buttonStyles = {
		color: props.formColor.class ? undefined : props.attributes.customFormColor,
	}
    const blockProps = useBlockProps();
    return (
        <section className={`${attributes.sectionMarginTop ? 'section-margin-big' : ''} wp-columns two-column-tile wp-block-columns`}>
            {/* Sidebar Controls */}
            <InspectorControls>
                <PanelBody title={__('Include Section Margin Top')}>
                <PanelRow>
                    <ToggleControl
                    className="js-section-margin-top"
                    label="Toggle Margin Top"
                    checked={attributes.sectionMarginTop}
                    help={attributes.sectionMarginTop ? "Margin added between this section and the one above it" : "Margin Removed between this section and the one above it"}
                    onChange={checked => setAttributes({ sectionMarginTop: checked })}
                    />
                   
                </PanelRow>
                <PanelRow>
                <ToggleControl
                    className="js-full-cover-image"
                    label="Toggle Image Size"
                    checked={attributes.sectionMarginTop}
                    help={attributes.sectionMarginTop ? "Large (cover) mage is Enabled" : "Small image size enabled"}
                    onChange={checked => setAttributes({ makeCoverImage: checked })}
                    />
                </PanelRow>
                <PanelBody title={__('Image/Text Position')}>
                        <PanelRow>
                            <ToggleControl
                            className="js-image-position"
                            label="Image Position"
                            checked={attributes.imagePosition}
                            help={attributes.imagePosition ? "Image is positioned within the left Column" : "Image is positioned within the left Column"}
                            onChange={checked => setAttributes({ imagePosition: checked })}
                            />
                        </PanelRow>
                    </PanelBody>
                <PanelRow>
                <PanelColorSettings
                title={ __( 'Color Settings' ) }
                colorSettings={[
                    {
                        colors: colorSamples,
                        value: props.formColor.color,
                        label: 'Background Color',
                        onChange: props.setFormColor,
                    }
                ]}
            >
                </PanelColorSettings>
                </PanelRow>
                </PanelBody>
        </InspectorControls>
            <MediaUploadCheck>
                <MediaUpload
                className="js-image wp-admin-mage"
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

      
      <div { ...blockProps } className="wp-column">
            <InnerBlocks />
        </div>
      </section>
    )
}
registerBlockType('davidyeiser-detailer/two-column-image', {
    title: __( 'Two Column Image' ),
    icon: icons.fifty6,
    category: 'custom',
    keywords: [
      __( 'two up' ),
      __( 'Layout' ),
      __( 'two column image' ),
      __( 'custom widget' ),
    ],
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
            selector: 'js-image'
        },
        sectionMarginTop: {
            type: 'boolean',
            selector: 'js-section-margin-top',
            default: true
        },
        makeCoverImage: {
            type: 'boolean',
            selector: 'js-full-cover-image'
        },

        formColor: { // something
            type: 'string',
        },
        customFormColor: { // customSomething
            type: 'string',
        },
        imagePosition: {
            type: 'boolean',
            selector: 'js-image-position',
            default: true
        }
    },
    
    edit: withColors('formColor')(innerEdit),
    save: props => {
        return (
            <div>
                 <InnerBlocks.Content />
            </div>
        )
    }
})