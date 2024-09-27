export default SortableList;
/**
 * SortableList is a component that provides functionality to display and reorder a list of posts.
 *
 * @param {object} props - The component props.
 * @param {object[]} props.posts - An array of post objects to display and sort.
 * @param {boolean} props.isOrderable - Flag to enable or disable the ordering functionality.
 * @param {string} props.sortOrientation - The orientation for sorting the list ('vertical' or 'horizontal').
 * @param {string} props.childElement - The HTML element type to wrap each post item.
 * @param {string} props.childClass - CSS class names to apply to the child elements.
 * @param {React.Component} props.displayComponent - A React component to display each post item.
 * @param {object} props.displayComponentProps- Props to pass to the display component.
 * @param {Function} props.handleItemDelete - Callback function to handle the deletion of a post item.
 * @param {Function} props.setPosts - Function to update the posts array after reordering.
 * @returns {JSX.Element} The rendered sortable list component.
 */
declare function SortableList({ posts, isOrderable, sortOrientation, childElement, childClass, displayComponent, displayComponentProps, handleItemDelete, setPosts, }: {
    posts: object[];
    isOrderable: boolean;
    sortOrientation: string;
    childElement: string;
    childClass: string;
    displayComponent: React.Component;
    displayComponentProps: object;
    handleItemDelete: Function;
    setPosts: Function;
}): JSX.Element;
declare namespace SortableList {
    namespace propTypes {
        let posts: PropTypes.Validator<any[]>;
        let isOrderable: PropTypes.Requireable<boolean>;
        let sortOrientation: PropTypes.Requireable<string>;
        let displayComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        let displayComponentProps: PropTypes.Requireable<object>;
        let childElement: PropTypes.Requireable<string>;
        let childClass: PropTypes.Requireable<string>;
        let handleItemDelete: PropTypes.Validator<(...args: any[]) => any>;
        let setPosts: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=SortableList.d.ts.map