/**
 * A React functional component to handle link creation and editing with rich text capabilities.
 *
 * @param {object} props The properties passed to this component.
 * @param {string} props.value The displayed text of the link.
 * @param {string} props.url The URL to which the link points.
 * @param {string} props.type The type of the link for categorization or custom handling.
 * @param {boolean} props.opensInNewTab Flag to determine if the link should open in a new tab.
 * @param {string} props.kind The kind of link used for suggestion filtering.
 * @param {string} props.placeholder Placeholder text for the link input.
 * @param {boolean} props.isControl Flag to determine if the link is a control element.
 * @param {string} props.controlLabel The label description for the control link type.
 * @param {string} props.className Additional class names for custom styling.
 * @param {Function} props.onLinkChange Callback function to handle link changes.
 * @param {Function} props.onTextChange Callback function to handle text changes.
 * @param {Function} props.onLinkRemove Callback function to handle link removal.
 * @param {object} props.rest Additional properties to be passed down to child components.
 *
 * @returns {JSX.Element} The rendered React component for creating and editing a link.
 */
export function Link({ value, url, type, opensInNewTab, kind, placeholder, isControl, controlLabel, className, onLinkChange, onTextChange, onLinkRemove, ...rest }: {
    value: string;
    url: string;
    type: string;
    opensInNewTab: boolean;
    kind: string;
    placeholder: string;
    isControl: boolean;
    controlLabel: string;
    className: string;
    onLinkChange: Function;
    onTextChange: Function;
    onLinkRemove: Function;
    rest: object;
}): JSX.Element;
export namespace Link {
    namespace propTypes {
        let value: PropTypes.Requireable<string>;
        let url: PropTypes.Requireable<string>;
        let onLinkChange: PropTypes.Validator<(...args: any[]) => any>;
        let onLinkRemove: PropTypes.Requireable<(...args: any[]) => any>;
        let onTextChange: PropTypes.Validator<(...args: any[]) => any>;
        let opensInNewTab: PropTypes.Validator<boolean>;
        let type: PropTypes.Requireable<string>;
        let kind: PropTypes.Requireable<string>;
        let className: PropTypes.Requireable<string>;
        let placeholder: PropTypes.Requireable<string>;
        let isControl: PropTypes.Requireable<boolean>;
        let controlLabel: PropTypes.Requireable<string>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map