/**
 * Link component that can be used inside other Gutenberg blocks for setting up URLs.
 *
 * The link should not be visible if the block is not focused. This will maintain nicer
 * visuals in the block editor as a whole.
 *
 * @param {...object} props								All properties passed to the component.
 * @param {string} props.value 							The text to show inside the link
 * @param {string} props.type 							Post or Page, used to autosuggest content for URL
 * @param {boolean} props.opensInNewTab 				Should the link open in a new tab?
 * @param {string} props.url 							The actual link to be set as href
 * @param {Function} props.onLinkChange 				Callback when the URL is changed
 * @param {Function} props.onLinkRemove 				Callback when the URL is changed
 * @param {Function} props.onTextChange 				Callback when the link's text is changed
 * @param {string} props.kind 							Page or Post
 * @param {string} props.placeholder 					Text visible before actual value is inserted
 * @param {string} props.className 					    html class to be applied to the anchor element
 *
 * @returns {*} The rendered component.
 */
export function Link({ value, type, opensInNewTab, url, onLinkChange, onTextChange, onLinkRemove, kind, placeholder, className, ...rest }: object[]): any;
export namespace Link {
    namespace defaultProps {
        let value: string;
        let url: string;
        let className: string;
        let onLinkRemove: undefined;
        let type: string;
        let kind: string;
        let placeholder: string;
    }
    namespace propTypes {
        let value_1: PropTypes.Requireable<string>;
        export { value_1 as value };
        let url_1: PropTypes.Requireable<string>;
        export { url_1 as url };
        export let onLinkChange: PropTypes.Validator<(...args: any[]) => any>;
        let onLinkRemove_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onLinkRemove_1 as onLinkRemove };
        export let onTextChange: PropTypes.Validator<(...args: any[]) => any>;
        export let opensInNewTab: PropTypes.Validator<boolean>;
        let type_1: PropTypes.Requireable<string>;
        export { type_1 as type };
        let kind_1: PropTypes.Requireable<string>;
        export { kind_1 as kind };
        let className_1: PropTypes.Requireable<string>;
        export { className_1 as className };
        let placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map