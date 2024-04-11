export function LinkWrap({ type, linkText, url, opensInNewTab, tagName, onLinkChange, onLinkRemove, kind, children, ...rest }: {
    [x: string]: any;
    type: any;
    linkText: any;
    url: any;
    opensInNewTab: any;
    tagName: any;
    onLinkChange: any;
    onLinkRemove: any;
    kind: any;
    children: any;
}): import("react").JSX.Element;
export namespace LinkWrap {
    namespace defaultProps {
        let linkText: string;
        let url: string;
        let onLinkRemove: undefined;
        let type: string;
        let kind: string;
        let tagName: string;
    }
    namespace propTypes {
        let linkText_1: PropTypes.Requireable<string>;
        export { linkText_1 as linkText };
        let url_1: PropTypes.Requireable<string>;
        export { url_1 as url };
        export let onLinkChange: PropTypes.Validator<(...args: any[]) => any>;
        let onLinkRemove_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onLinkRemove_1 as onLinkRemove };
        export let opensInNewTab: PropTypes.Validator<boolean>;
        let type_1: PropTypes.Requireable<string>;
        export { type_1 as type };
        let kind_1: PropTypes.Requireable<string>;
        export { kind_1 as kind };
        let tagName_1: PropTypes.Requireable<string>;
        export { tagName_1 as tagName };
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map