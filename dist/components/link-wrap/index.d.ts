export function LinkWrap({ linkText, url, opensInNewTab, type, kind, tagName, showLinkControl, onLinkChange, onLinkRemove, children, ...rest }: {
    linkText: string;
    url: string;
    opensInNewTab: boolean;
    type: string;
    kind: string;
    tagName: string;
    showLinkControl: boolean;
    onLinkChange: Function;
    onLinkRemove: Function;
    children: React.ReactNode;
    rest?: object | undefined;
}): import("react").JSX.Element;
export namespace LinkWrap {
    namespace propTypes {
        let linkText: PropTypes.Requireable<string>;
        let url: PropTypes.Requireable<string>;
        let opensInNewTab: PropTypes.Validator<boolean>;
        let type: PropTypes.Requireable<string>;
        let kind: PropTypes.Requireable<string>;
        let tagName: PropTypes.Requireable<string>;
        let showLinkControl: PropTypes.Requireable<boolean>;
        let onLinkChange: PropTypes.Validator<(...args: any[]) => any>;
        let onLinkRemove: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map