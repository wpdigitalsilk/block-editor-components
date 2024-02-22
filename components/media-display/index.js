import PropTypes from 'prop-types';
import { Image, Video } from '../index';

export const MediaDisplay = (props) => {
	const { media, isBackground } = props;
	const { id, mediaType, imageSize, videoSource, videoUrl, focalPoint, videoControls } = media;

	return (
		<>
			{mediaType === 'image' && (
				<Image id={id} imageSize={imageSize} focalPoint={focalPoint} isBackground={isBackground} />
			)}

			{mediaType === 'video' && (
				<Video
					id={id}
					videoSource={videoSource}
					videoUrl={videoUrl}
					videoControls={videoControls}
					isBackground={isBackground}
				/>
			)}
		</>
	);
};

MediaDisplay.defaultProps = {
	media: {
		id: 0,
		mediaType: 'image',
		lazyLoad: true,
		srcset: true,
		imageSize: 'full',
		videoSource: 'internal',
		videoUrl: '',
		focalPoint: {
			x: 0.5,
			y: 0.5,
		},
		videoControls: {
			autoplay: false,
			isMuted: true,
			showControls: true,
			posterId: 0,
			posterSize: 'full',
		},
	},
	isBackground: false,
};

MediaDisplay.propTypes = {
	media: PropTypes.object,
	isBackground: PropTypes.bool,
};
