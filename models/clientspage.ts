
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Wed Dec 06 2023 18:50:08 GMT+0500 (Pakistan Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Clientspage extends ContentItem {
    public pageTitle!: Elements.TextElement;
    public metaTitle!: Elements.TextElement;
    public metaDescription!: Elements.TextElement;
    public bannerHeading!: Elements.TextElement;
    public items!: Elements.LinkedItemsElement<ContentItem>;
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
                return elementName;
            })
        });
    }
}
