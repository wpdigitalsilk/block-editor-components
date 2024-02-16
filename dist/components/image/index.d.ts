export function Image(props: any): import("react").JSX.Element;
export namespace Image {
    namespace defaultProps {
        let size: string;
        namespace focalPoint {
            let x: number;
            let y: number;
        }
        let isBackground: boolean;
    }
    namespace propTypes {
        export let id: PropTypes.Validator<number>;
        let size_1: PropTypes.Requireable<string>;
        export { size_1 as size };
        let focalPoint_1: PropTypes.Requireable<PropTypes.InferProps<{
            x: PropTypes.Requireable<number>;
            y: PropTypes.Requireable<number>;
        }>>;
        export { focalPoint_1 as focalPoint };
        let isBackground_1: PropTypes.Requireable<boolean>;
        export { isBackground_1 as isBackground };
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map