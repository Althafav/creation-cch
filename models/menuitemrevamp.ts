
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Mon Feb 12 2024 09:50:19 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Menuitemrevamp extends ContentItem {
    public name!: Elements.TextElement;
    public target!: Elements.TextElement;
    public link!: Elements.TextElement;
    public menuitem!: Elements.LinkedItemsElement<ContentItem>;
}
