export function Video({ id, aspectRatio, videoSource, videoUrl, videoControls, isBackground, isPreview, borderRadius, ...rest }: {
    id?: number | undefined;
    aspectRatio?: string | undefined;
    videoSource?: string | undefined;
    videoUrl?: string | undefined;
    videoControls?: object | undefined;
    isBackground?: boolean | undefined;
    isPreview?: boolean | undefined;
    borderRadius?: number | undefined;
    rest: object;
}): JSX.Element;
export namespace Video {
    namespace propTypes {
        let id: PropTypes.Requireable<number>;
        let aspectRatio: PropTypes.Requireable<string>;
        let isBackground: PropTypes.Requireable<boolean>;
        let videoSource: PropTypes.Requireable<string>;
        let videoUrl: PropTypes.Requireable<string>;
        let videoControls: PropTypes.Requireable<object>;
        let isPreview: PropTypes.Requireable<boolean>;
        let borderRadius: PropTypes.Requireable<number>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map