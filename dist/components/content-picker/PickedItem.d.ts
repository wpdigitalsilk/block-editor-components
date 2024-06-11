export default PickedItem;
declare function PickedItem({ item, isOrderable, handleItemDelete, id, displayComponent: DisplayComponent, displayComponentProps, }: {
    item: any;
    isOrderable: any;
    handleItemDelete: any;
    id: any;
    displayComponent: any;
    displayComponentProps: any;
}): import("react").JSX.Element | null;
declare namespace PickedItem {
    namespace defaultProps {
        let isOrderable: boolean;
    }
    namespace propTypes {
        export let item: PropTypes.Validator<object>;
        let isOrderable_1: PropTypes.Requireable<boolean>;
        export { isOrderable_1 as isOrderable };
        export let handleItemDelete: PropTypes.Validator<(...args: any[]) => any>;
        export let id: PropTypes.Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
        export let displayComponent: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=PickedItem.d.ts.map