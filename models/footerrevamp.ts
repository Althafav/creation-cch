
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Wed Feb 14 2024 08:52:42 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Footerrevamp extends ContentItem {
    public companyLogo!: Elements.AssetsElement;
    public footerButton!: Elements.LinkedItemsElement<ContentItem>;
    public allRightsReserevedText!: Elements.TextElement;
    public contactNumber!: Elements.NumberElement;
    public emailAddress!: Elements.TextElement;
    public menuSection1!: Elements.LinkedItemsElement<ContentItem>;
    public menuSection2!: Elements.LinkedItemsElement<ContentItem>;
    public instagramLink!: Elements.TextElement;
    public linkedinLink!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'company_logo') {
                    return 'companyLogo';
                }
                if (elementName === 'footer_button') {
                    return 'footerButton';
                }
                if (elementName === 'all_rights_resereved_text') {
                    return 'allRightsReserevedText';
                }
                if (elementName === 'contact_number') {
                    return 'contactNumber';
                }
                if (elementName === 'email_address') {
                    return 'emailAddress';
                }
                if (elementName === 'menu_section_1') {
                    return 'menuSection1';
                }
                if (elementName === 'menu_section_2') {
                    return 'menuSection2';
                }
                if (elementName === 'instagram_link') {
                    return 'instagramLink';
                }
                if (elementName === 'linkedin_link') {
                    return 'linkedinLink';
                }
                return elementName;
            })
        });
    }
}
