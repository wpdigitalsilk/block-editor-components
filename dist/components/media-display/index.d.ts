export function MediaDisplay(props: any): import("react").JSX.Element;
export namespace MediaDisplay {
    namespace defaultProps {
        namespace media {
            let id: number;
            let mediaType: string;
            let lazyLoad: boolean;
            let srcset: boolean;
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
        let isBackground: boolean;
    }
    namespace propTypes {
        let media_1: PropTypes.Requireable<object>;
        export { media_1 as media };
        let isBackground_1: PropTypes.Requireable<boolean>;
        export { isBackground_1 as isBackground };
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map