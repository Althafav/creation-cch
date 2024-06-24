
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Mon Feb 12 2024 10:26:34 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Testhomerevamp extends ContentItem {
    public pageTitle!: Elements.TextElement;
    public metaTitle!: Elements.TextElement;
    public metaDescription!: Elements.TextElement;
    public bannerHeading!: Elements.TextElement;
    public bannerImage!: Elements.AssetsElement;
    public ourServicesHeading!: Elements.TextElement;
    public ourServicesItem!: Elements.LinkedItemsElement<ContentItem>;
    public portfolioHeading!: Elements.TextElement;
    public portfolioItem!: Elements.LinkedItemsElement<ContentItem>;
    public portfolioButtons!: Elements.LinkedItemsElement<ContentItem>;
    public getInTouch!: Elements.TextElement;
    public catelogueHeading!: Elements.TextElement;
    public catelogueImage!: Elements.AssetsElement;
    public catelogueButton!: Elements.LinkedItemsElement<ContentItem>;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'page_title') {
                    return 'pageTitle';
                }
                if (elementName === 'meta_title') {
                    return 'metaTitle';
                }
                if (elementName === 'meta_description') {
                    return 'metaDescription';
                }
                if (elementName === 'banner_heading') {
                    return 'bannerHeading';
                }
                if (elementName === 'banner_image') {
                    return 'bannerImage';
                }
                if (elementName === 'our_services_heading') {
                    return 'ourServicesHeading';
                }
                if (elementName === 'our_services_item') {
                    return 'ourServicesItem';
                }
                if (elementName === 'portfolio_heading') {
                    return 'portfolioHeading';
                }
                if (elementName === 'portfolio_item') {
                    return 'portfolioItem';
                }
                if (elementName === 'portfolio_buttons') {
                    return 'portfolioButtons';
                }
                if (elementName === 'get_in_touch') {
                    return 'getInTouch';
                }
                if (elementName === 'catelogue_heading') {
                    return 'catelogueHeading';
                }
                if (elementName === 'catelogue_image') {
                    return 'catelogueImage';
                }
                if (elementName === 'catelogue_button') {
                    return 'catelogueButton';
                }
                return elementName;
            })
        });
    }
}
