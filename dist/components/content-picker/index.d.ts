export function ContentPicker({ items, searchLabel, searchPlaceholder, searchPerPage, searchColumns, isOrderable, maxContentItems, wrapperClass, wrapperElement, childElement, childClass, sortOrientation, pickerType, entityType, storeKeys, displayComponent, displayComponentProps, onPickChange, }: {
    items?: object[] | undefined;
    searchLabel?: string | undefined;
    searchPlaceholder?: string | undefined;
    searchPerPage?: number | undefined;
    searchColumns?: string[] | undefined;
    isOrderable?: boolean | undefined;
    maxContentItems?: number | undefined;
    wrapperClass?: string | undefined;
    wrapperElement?: string | undefined;
    childElement?: string | undefined;
    childClass?: string | undefined;
    sortOrientation?: string | undefined;
    pickerType?: string | undefined;
    entityType?: string | undefined;
    storeKeys?: string[] | undefined;
    displayComponent?: import("react").Component<any, any, any> | null | undefined;
    displayComponentProps?: object | undefined;
    onPickChange: Function;
}): import("react").JSX.Element;
export namespace ContentPicker {
    namespace propTypes {
        let items: PropTypes.Requireable<any[]>;
        let searchLabel: PropTypes.Requireable<string>;
        let searchPlaceholder: PropTypes.Requireable<string>;
        let searchPerPage: PropTypes.Requireable<number>;
        let searchColumns: PropTypes.Requireable<any[]>;
        let isOrderable: PropTypes.Requireable<boolean>;
        let maxContentItems: PropTypes.Requireable<number>;
        let wrapperClass: PropTypes.Requireable<string>;
        let wrapperElement: PropTypes.Requireable<string>;
        let childElement: PropTypes.Requireable<string>;
        let childClass: PropTypes.Requireable<string>;
        let sortOrientation: PropTypes.Requireable<string>;
        let pickerType: PropTypes.Requireable<string>;
        let entityType: PropTypes.Requireable<string>;
        let storeKeys: PropTypes.Requireable<any[]>;
        let displayComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        let displayComponentProps: PropTypes.Requireable<object>;
        let onPickChange: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map