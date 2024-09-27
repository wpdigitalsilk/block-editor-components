export default PickedItem;
/**
 * PickedItem Component
 *
 * This component renders a single item that can be ordered, displayed, and deleted.
 *
 * @param {object} props - The properties object.
 * @param {object} props.item - The item to be displayed, with properties like `uuid`, `title`, and `link`.
 * @param {boolean} props.isOrderable - Flag indicating whether the item can be reordered.
 * @param {number} props.index - Index of the item in the list.
 * @param {React.Component} props.displayComponent - The component used to display the item.
 * @param {object} props.displayComponentProps - Additional props to be passed to the display component.
 * @param {string} props.childElement - The HTML tag to be used for the item container.
 * @param {string} props.childClass - Additional class names to be added to the item container.
 * @param {Function} props.handleItemDelete - Callback function to handle item deletion.
 */
declare function PickedItem({ item, isOrderable, index, displayComponent: DisplayComponent, displayComponentProps, childElement, childClass, handleItemDelete, }: {
    item: object;
    isOrderable: boolean;
    index: number;
    displayComponent: React.Component;
    displayComponentProps: object;
    childElement: string;
    childClass: string;
    handleItemDelete: Function;
}): import("react").JSX.Element | null;
declare namespace PickedItem {
    namespace propTypes {
        let item: PropTypes.Validator<object>;
        let isOrderable: PropTypes.Requireable<boolean>;
        let index: PropTypes.Requireable<number>;
        let displayComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        let childElement: PropTypes.Requireable<string>;
        let childClass: PropTypes.Requireable<string>;
        let handleItemDelete: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=PickedItem.d.ts.map