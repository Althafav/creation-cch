
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Homebanner extends ContentItem {
    public sliderImage!: Elements.AssetsElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'slider_image') {
                    return 'sliderImage';
                }
                return elementName;
            })
        });
    }
}
