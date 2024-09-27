export function IconPicker({ icon, width, height, panelTitle, isExpanded, isControl, onSelect, }: {
    icon?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    isControl?: boolean | undefined;
    panelTitle?: string | undefined;
    isExpanded?: boolean | undefined;
    onSelect: Function;
}): JSX.Element;
export namespace IconPicker {
    namespace propTypes {
        let icon: PropTypes.Requireable<string>;
        let width: PropTypes.Requireable<number>;
        let height: PropTypes.Requireable<number>;
        let panelTitle: PropTypes.Requireable<string>;
        let isControl: PropTypes.Requireable<boolean>;
        let isExpanded: PropTypes.Requireable<boolean>;
        let onSelect: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map