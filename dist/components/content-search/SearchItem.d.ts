export default SearchItem;
/**
 * SearchItem component
 */
export type Suggestion = {
    /**
     * - The unique identifier of the suggestion item.
     */
    id: number;
    /**
     * - The title object of the suggestion item.
     */
    title: {
        rendered?: string | undefined;
    };
    /**
     * - The name of the taxonomy item.
     */
    name: string;
    /**
     * - The URL link associated with the suggestion item.
     */
    link: string;
    /**
     * - The parent identifier of the taxonomy item.
     */
    parent: number;
};
/**
 * SearchItem component
 *
 * @typedef {object} Suggestion
 * @property {number} id - The unique identifier of the suggestion item.
 * @property {object} title - The title object of the suggestion item.
 * @property {string} [title.rendered] - The rendered title string for postType items.
 * @property {string} name - The name of the taxonomy item.
 * @property {string} link - The URL link associated with the suggestion item.
 * @property {number} parent - The parent identifier of the taxonomy item.
 * @param {object} props - The props object for the SearchItem component.
 * @param {Suggestion} props.suggestion - The suggestion data for the search item.
 * @param {string} props.searchTerm - The current search term used for highlighting.
 * @param {boolean} props.isSelected - Indicates if the search item is selected.
 * @param {string} props.pickerType - The type of picker, determines title rendering ('postType' or 'taxonomy').
 * @param {Function} props.onClick - Callback function to handle click event.
 *
 * @returns {JSX.Element} Search item component with highlighted search term and clickable link.
 */
declare function SearchItem({ suggestion, searchTerm, isSelected, pickerType, onClick }: {
    suggestion: Suggestion;
    searchTerm: string;
    isSelected: boolean;
    pickerType: string;
    onClick: Function;
}): JSX.Element;
declare namespace SearchItem {
    namespace propTypes {
        let suggestion: PropTypes.Validator<object>;
        let searchTerm: PropTypes.Requireable<string>;
        let isSelected: PropTypes.Requireable<boolean>;
        let pickerType: PropTypes.Requireable<string>;
        let onClick: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=SearchItem.d.ts.map