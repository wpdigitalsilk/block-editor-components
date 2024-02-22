export function MediaPanelContent(props: any): import("react").JSX.Element;
export function MediaPicker(props: any): import("react").JSX.Element;
export namespace MediaPicker {
    namespace defaultProps {
        namespace media {
            let id: number;
            let mediaType: string;
            let lazyLoad: boolean;
            let imageSize: string;
            let videoSource: string;
            let videoUrl: string;
            namespace focalPoint {
                let x: number;
                let y: number;
            }
            namespace videoControls {
                let autoplay: boolean;
                let isMuted: boolean;
                let showControls: boolean;
                let posterId: number;
                let posterSize: string;
            }
        }
        let displayFocalPicker: boolean;
        let allowMediaTypeSwitch: boolean;
        let controlPanelLabel: string;
        let multiple: boolean;
        let isControl: boolean;
        let showBlockControls: boolean;
        let isBackground: boolean;
    }
    namespace propTypes {
        export let onSelect: PropTypes.Validator<(...args: any[]) => any>;
        let media_1: PropTypes.Requireable<object>;
        export { media_1 as media };
        let displayFocalPicker_1: PropTypes.Requireable<boolean>;
        export { displayFocalPicker_1 as displayFocalPicker };
        let allowMediaTypeSwitch_1: PropTypes.Requireable<boolean>;
        export { allowMediaTypeSwitch_1 as allowMediaTypeSwitch };
        let controlPanelLabel_1: PropTypes.Requireable<string>;
        export { controlPanelLabel_1 as controlPanelLabel };
        let multiple_1: PropTypes.Requireable<boolean>;
        export { multiple_1 as multiple };
        let isControl_1: PropTypes.Requireable<boolean>;
        export { isControl_1 as isControl };
        let showBlockControls_1: PropTypes.Requireable<boolean>;
        export { showBlockControls_1 as showBlockControls };
        let isBackground_1: PropTypes.Requireable<boolean>;
        export { isBackground_1 as isBackground };
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map