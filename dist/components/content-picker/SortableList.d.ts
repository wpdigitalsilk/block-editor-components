export default SortableList;
declare function SortableList({ posts, isOrderable, handleItemDelete, sortOriantation, setPosts, displayComponent, displayComponentProps, displayItemStyle, childElement, childClass, }: {
    posts: any;
    isOrderable: any;
    handleItemDelete: any;
    sortOriantation: any;
    setPosts: any;
    displayComponent: any;
    displayComponentProps: any;
    displayItemStyle: any;
    childElement: any;
    childClass: any;
}): import("react").JSX.Element;
declare namespace SortableList {
    namespace defaultProps {
        let isOrderable: boolean;
        let sortOriantation: string;
        let childElement: string;
        let childClass: string;
    }
    namespace propTypes {
        export let posts: PropTypes.Validator<any[]>;
        let isOrderable_1: PropTypes.Requireable<boolean>;
        export { isOrderable_1 as isOrderable };
        export let handleItemDelete: PropTypes.Validator<(...args: any[]) => any>;
        export let setPosts: PropTypes.Validator<(...args: any[]) => any>;
        export let displayComponent: PropTypes.Requireable<(...args: any[]) => any>;
        let sortOriantation_1: PropTypes.Requireable<string>;
        export { sortOriantation_1 as sortOriantation };
        let childElement_1: PropTypes.Requireable<string>;
        export { childElement_1 as childElement };
        let childClass_1: PropTypes.Requireable<string>;
        export { childClass_1 as childClass };
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=SortableList.d.ts.map