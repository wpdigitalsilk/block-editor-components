export function LinkWrap({ linkText, url, opensInNewTab, type, kind, tagName, onLinkChange, onLinkRemove, children, ...rest }: {
    linkText: string;
    url: string;
    opensInNewTab: boolean;
    type: string;
    kind: string;
    tagName: string;
    onLinkChange: Function;
    onLinkRemove: Function;
    children: JSX.Element;
    rest: object;
}): JSX.Element;
export namespace LinkWrap {
    namespace propTypes {
        let linkText: PropTypes.Requireable<string>;
        let url: PropTypes.Requireable<string>;
        let opensInNewTab: PropTypes.Validator<boolean>;
        let type: PropTypes.Requireable<string>;
        let kind: PropTypes.Requireable<string>;
        let tagName: PropTypes.Requireable<string>;
        let onLinkChange: PropTypes.Validator<(...args: any[]) => any>;
        let onLinkRemove: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map