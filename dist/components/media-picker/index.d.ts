export function MediaPanelContent(props: {
    media?: object | undefined;
    displayFocalPicker?: boolean | undefined;
    allowMediaTypeSwitch?: boolean | undefined;
    controlPanelLabel?: string | undefined;
    multiple?: boolean | undefined;
    showBlockControls?: boolean | undefined;
    isBackground?: boolean | undefined;
    onSelect?: Function | undefined;
}): import("react").JSX.Element;
export function MediaPicker(props: object): JSX.Element;
export namespace MediaPicker {
    namespace propTypes {
        let media: PropTypes.Requireable<object>;
        let displayFocalPicker: PropTypes.Requireable<boolean>;
        let allowMediaTypeSwitch: PropTypes.Requireable<boolean>;
        let allowAspectRatioSwitch: PropTypes.Requireable<boolean>;
        let controlPanelLabel: PropTypes.Requireable<string>;
        let multiple: PropTypes.Requireable<boolean>;
        let isControl: PropTypes.Requireable<boolean>;
        let showBlockControls: PropTypes.Requireable<boolean>;
        let isBackground: PropTypes.Requireable<boolean>;
        let onSelect: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map