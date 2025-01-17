
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Thu Feb 08 2024 14:25:24 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class TestModel2 extends ContentItem {
    public pageTitle!: Elements.TextElement;
    public pageMeta!: Elements.TextElement;
    public bannerHeading!: Elements.TextElement;
    public content!: Elements.RichTextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'page_title') {
                    return 'pageTitle';
                }
                if (elementName === 'page_meta') {
                    return 'pageMeta';
                }
                if (elementName === 'banner_heading') {
                    return 'bannerHeading';
                }
                return elementName;
            })
        });
    }
}
