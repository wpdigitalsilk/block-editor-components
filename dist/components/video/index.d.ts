export function Video(props: {
    id: string;
    videoSource: string;
    videoUrl: string;
    videoControls: {
        autoplay: boolean;
        isMuted: boolean;
        showControls: boolean;
        posterId: string;
        posterSize: string;
    };
    isBackground: boolean;
    isPreview: boolean;
}): JSX.Element;
export namespace Video {
    namespace defaultProps {
        let id: number;
        let isBackground: boolean;
        let videoSource: string;
        let videoUrl: string;
        namespace videoControls {
            let autoplay: boolean;
            let isMuted: boolean;
            let showControls: boolean;
            let posterId: number;
            let posterSize: string;
        }
        let isPreview: boolean;
    }
    namespace propTypes {
        let id_1: PropTypes.Requireable<number>;
        export { id_1 as id };
        let isBackground_1: PropTypes.Requireable<boolean>;
        export { isBackground_1 as isBackground };
        let videoSource_1: PropTypes.Requireable<string>;
        export { videoSource_1 as videoSource };
        let videoUrl_1: PropTypes.Requireable<string>;
        export { videoUrl_1 as videoUrl };
        let videoControls_1: PropTypes.Requireable<object>;
        export { videoControls_1 as videoControls };
        let isPreview_1: PropTypes.Requireable<boolean>;
        export { isPreview_1 as isPreview };
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map