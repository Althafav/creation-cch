
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Wed Dec 06 2023 18:55:39 GMT+0500 (Pakistan Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Menu extends ContentItem {
    public logo!: Elements.AssetsElement;
    public linkedin!: Elements.TextElement;
    public instagram!: Elements.TextElement;
    public whatsappLink!: Elements.TextElement;
    public items!: Elements.LinkedItemsElement<ContentItem>;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'whatsapp_link') {
                    return 'whatsappLink';
                }
                return elementName;
            })
        });
    }
}