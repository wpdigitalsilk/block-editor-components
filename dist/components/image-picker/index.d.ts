export function ImagePicker(props: any): import("react").JSX.Element;
export namespace ImagePicker {
    namespace defaultProps {
        let size: string;
        namespace focalPoint {
            let x: number;
            let y: number;
        }
        let onChangeFocalPoint: undefined;
        let onSizeChange: undefined;
        let labels: {};
        let allowedTypes: string[];
        let panelLabel: string;
        let mode: string;
    }
    namespace propTypes {
        export let id: PropTypes.Validator<number>;
        let size_1: PropTypes.Requireable<string>;
        export { size_1 as size };
        export let onSelect: PropTypes.Validator<(...args: any[]) => any>;
        let onSizeChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onSizeChange_1 as onSizeChange };
        export let onRemove: PropTypes.Validator<(...args: any[]) => any>;
        let onChangeFocalPoint_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChangeFocalPoint_1 as onChangeFocalPoint };
        let allowedTypes_1: PropTypes.Requireable<any[]>;
        export { allowedTypes_1 as allowedTypes };
        let focalPoint_1: PropTypes.Requireable<PropTypes.InferProps<{
            x: PropTypes.Requireable<number>;
            y: PropTypes.Requireable<number>;
        }>>;
        export { focalPoint_1 as focalPoint };
        let labels_1: PropTypes.Requireable<PropTypes.InferProps<{
            title: PropTypes.Requireable<string>;
            instructions: PropTypes.Requireable<string>;
        }>>;
        export { labels_1 as labels };
        let panelLabel_1: PropTypes.Requireable<string>;
        export { panelLabel_1 as panelLabel };
        let mode_1: PropTypes.Requireable<string>;
        export { mode_1 as mode };
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map