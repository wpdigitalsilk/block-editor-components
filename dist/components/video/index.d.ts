export function Video({ id, videoSource, videoUrl, videoControls, isBackground, isPreview, }: {
    id: number;
    videoSource: string;
    videoUrl: string;
    videoControls: object;
    isBackground: boolean;
    isPreview: boolean;
}): JSX.Element;
export namespace Video {
    namespace propTypes {
        let id: PropTypes.Requireable<number>;
        let isBackground: PropTypes.Requireable<boolean>;
        let videoSource: PropTypes.Requireable<string>;
        let videoUrl: PropTypes.Requireable<string>;
        let videoControls: PropTypes.Requireable<object>;
        let isPreview: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map