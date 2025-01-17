
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Wed Dec 06 2023 13:09:02 GMT+0500 (Pakistan Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Homebannertabs extends ContentItem {
    public heading!: Elements.TextElement;
    public backgroundcolor!: Elements.TextElement;
    public content!: Elements.TextElement;
    public icon!: Elements.AssetsElement;
    public btnName!: Elements.TextElement;
    public btnLink!: Elements.TextElement;
    public target!: Elements.NumberElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'btn_name') {
                    return 'btnName';
                }
                if (elementName === 'btn_link') {
                    return 'btnLink';
                }
                return elementName;
            })
        });
    }
}
