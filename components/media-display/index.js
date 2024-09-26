import PropTypes from 'prop-types';
import { Image, Video } from '../index';

// Define Default Media Object
const defaultMedia = {
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
};

/**
 * MediaDisplay is a React component used to render either an image or a video, based on the media type provided
 * in the props. This component merges the provided media properties with default media settings.
 *
 * @param {object} props - Properties passed to the component.
 * @param {object} props.media - Media object containing properties for the media to be displayed.
 * @param {boolean} props.isBackground - Boolean flag to determine if the media should be rendered as background.
 * @param {object} props.rest - Rest of the props to be passed to the Image or Video components.
 * @returns {JSX.Element} A React element that conditionally renders an image or a video based on the media type.
 */
export const MediaDisplay = ({ media = {}, isBackground = false, ...rest }) => {
	const mergedMedia = {
		...defaultMedia,
		...media,
		focalPoint: { ...defaultMedia.focalPoint, ...media.focalPoint },
		videoControls: { ...defaultMedia.videoControls, ...media.videoControls },
	};

	const { id, mediaType, imageSize, videoSource, videoUrl, focalPoint, videoControls } = mergedMedia;

	return (
		<>
			{mediaType === 'image' && (
				<Image id={id} imageSize={imageSize} focalPoint={focalPoint} isBackground={isBackground} {...rest} />
			)}

			{mediaType === 'video' && (
				<Video
					id={id}
					videoSource={videoSource}
					videoUrl={videoUrl}
					videoControls={videoControls}
					isBackground={isBackground}
					{...rest}
				/>
			)}
		</>
	);
};

MediaDisplay.propTypes = {
	media: PropTypes.object.isRequired,
	isBackground: PropTypes.bool,
};
