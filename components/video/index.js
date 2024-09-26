import { Spinner, Placeholder } from '@wordpress/components';
import PropTypes from 'prop-types';
import { useSelect } from '@wordpress/data';
import { getMedia, getPoster } from '../../selectors';

/**
 * A functional component that displays a video based on the provided properties.
 *
 * @param {object} props - Properties passed to the Video component.
 * @param {string} props.id - The identifier for the video.
 * @param {string} props.videoSource - The source type of the video, either 'internal' or 'external'.
 * @param {string} props.videoUrl - The URL of the video.
 * @param {object} props.videoControls - Object containing controls and settings for the video.
 * @param {boolean} props.videoControls.autoplay - Indicates if the video should autoplay.
 * @param {boolean} props.videoControls.isMuted - Indicates if the video should be muted.
 * @param {boolean} props.videoControls.showControls - Indicates if the video controls should be displayed.
 * @param {string} props.videoControls.posterId - ID for the video's poster image.
 * @param {string} props.videoControls.posterSize - Size of the poster image.
 * @param {boolean} props.isBackground - Indicates if the video should be displayed as a background element.
 * @param {boolean} props.isPreview - Indicates if the video is in preview mode.
 * @returns {JSX.Element} JSX element representing the video component.
 */
export const Video = (props) => {
	const { id, videoSource, videoUrl, videoControls, isBackground, isPreview } = props;
	const { autoplay, isMuted, showControls, posterId, posterSize } = videoControls;
	// const [posterUrl, setPosterUrl] = useState('');

	let hasMedia = !!id;
	const { mediaDetails, isResolvingMedia } = getMedia(id);
	const { posterUrl } = getPoster(posterId, posterSize);

	const { embedPreview } = useSelect(
		(select) => {
			const { getEmbedPreview } = select('core');

			const previewData = videoUrl.length ? getEmbedPreview(videoUrl) : false;

			return {
				embedPreview: previewData,
			};
		},
		[videoUrl],
	);

	let mediaUrl = videoUrl;
	let mediaResolving = isResolvingMedia;
	let mime_type = '';

	if (videoSource == 'internal' && mediaDetails) {
		mediaUrl = mediaDetails?.source_url ? mediaDetails.source_url : '';
		mime_type = mediaDetails?.mime_type ? mediaDetails.mime_type : '';
		mediaResolving = isResolvingMedia;
	}

	if (videoSource == 'external') {
		if (videoUrl) {
			hasMedia = true;
			mediaResolving = false;
		}
	}

	const additionalAtts = {
		poster: posterUrl,
	};

	return (
		<>
			{isBackground ? (
				<div className="ds-media is-background">
					{!hasMedia ? (
						<Placeholder className="ds-media__image ds-media-placeholder" withIllustration />
					) : mediaResolving ? (
						<Spinner />
					) : (
						<>
							{videoSource == 'internal' && (
								<div className="ds-media__video">
									<video
										// autoPlay={autoplay}
										muted={isMuted}
										controls={isPreview ? true : showControls}
										disablePictureInPicture
										className="ds-media__video-element"
										{...additionalAtts}
									>
										<source src={mediaUrl} type={mime_type} />
									</video>
								</div>
							)}

							{videoSource == 'external' && <>{embedPreview && <div className="ds-media__video" dangerouslySetInnerHTML={{ __html: embedPreview.html }} />}</>}
						</>
					)}
				</div>
			) : (
				<>
					{!hasMedia ? (
						<Placeholder className="ds-media__image ds-media-placeholder" withIllustration />
					) : mediaResolving ? (
						<Spinner />
					) : (
						<>
							{videoSource == 'internal' && (
								<div className="ds-media__video">
									<video
										// autoPlay={autoplay}
										muted={isMuted}
										controls={isPreview ? true : showControls}
										disablePictureInPicture
										className="ds-media__video-element"
										{...additionalAtts}
									>
										<source src={mediaUrl} type={mime_type} />
									</video>
								</div>
							)}

							{videoSource == 'external' && <>{embedPreview && <div className="ds-media__video" dangerouslySetInnerHTML={{ __html: embedPreview.html }} />}</>}
						</>
					)}
				</>
			)}
		</>
	);
};

Video.defaultProps = {
	id: 0,
	isBackground: false,
	videoSource: 'internal',
	videoUrl: '',
	videoControls: {
		autoplay: false,
		isMuted: true,
		showControls: true,
		posterId: 0,
		posterSize: 'full',
	},
	isPreview: false,
};

Video.propTypes = {
	id: PropTypes.number,
	isBackground: PropTypes.bool,
	videoSource: PropTypes.string,
	videoUrl: PropTypes.string,
	videoControls: PropTypes.object,
	isPreview: PropTypes.bool,
};
