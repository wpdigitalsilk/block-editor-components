export default SearchItem;
declare function SearchItem({ suggestion, onClick, searchTerm, isSelected, mode }: {
    suggestion: any;
    onClick: any;
    searchTerm: any;
    isSelected: any;
    mode: any;
}): import("react").JSX.Element;
declare namespace SearchItem {
    namespace defaultProps {
        let searchTerm: string;
        let isSelected: boolean;
        let mode: string;
    }
    namespace propTypes {
        let searchTerm_1: PropTypes.Requireable<string>;
        export { searchTerm_1 as searchTerm };
        export let suggestion: PropTypes.Validator<object>;
        export let onClick: PropTypes.Validator<(...args: any[]) => any>;
        let isSelected_1: PropTypes.Requireable<boolean>;
        export { isSelected_1 as isSelected };
        let mode_1: PropTypes.Requireable<string>;
        export { mode_1 as mode };
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=SearchItem.d.ts.map