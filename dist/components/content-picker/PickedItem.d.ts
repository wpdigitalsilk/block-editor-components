export default PickedItem;
declare function PickedItem({ item, isOrderable, handleItemDelete, id, index, displayComponent: DisplayComponent, displayComponentProps, childElement, childClass, }: {
    item: any;
    isOrderable: any;
    handleItemDelete: any;
    id: any;
    index: any;
    displayComponent: any;
    displayComponentProps: any;
    childElement: any;
    childClass: any;
}): import("react").JSX.Element | null;
declare namespace PickedItem {
    namespace defaultProps {
        let isOrderable: boolean;
        let childElement: string;
        let childClass: string;
    }
    namespace propTypes {
        export let item: PropTypes.Validator<object>;
        let isOrderable_1: PropTypes.Requireable<boolean>;
        export { isOrderable_1 as isOrderable };
        export let handleItemDelete: PropTypes.Validator<(...args: any[]) => any>;
        export let id: PropTypes.Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
        export let displayComponent: PropTypes.Requireable<(...args: any[]) => any>;
        let childElement_1: PropTypes.Requireable<string>;
        export { childElement_1 as childElement };
        let childClass_1: PropTypes.Requireable<string>;
        export { childClass_1 as childClass };
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=PickedItem.d.ts.map