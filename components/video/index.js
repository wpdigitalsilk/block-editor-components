import classnames from 'classnames';
import PropTypes from 'prop-types';

import { Spinner, Placeholder } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { getMedia, getPoster } from '../../selectors';

// Define default video controls Object
const defaultVideoControls = {
	autoplay: false,
	isMuted: true,
	showControls: true,
	posterId: 0,
	posterSize: 'full',
};

/**
 * Renders a Video component with various configurations for internal and external video sources.
 *
 * @param {object} props - The properties object.
 * @param {number} [props.id=0] - The ID of the video.
 * @param {string} [props.aspectRatio=''] - The aspect ratio of the video.
 * @param {string} [props.videoSource='internal'] - The source of the video, either 'internal' or 'external'.
 * @param {string} [props.videoUrl=''] - The URL of the video.
 * @param {object} [props.videoControls={}] - The control options for the video such as mute and poster settings.
 * @param {boolean} [props.isBackground=false] - Flag indicating if the video is used as background.
 * @param {boolean} [props.isPreview=false] - Flag indicating if the video is in preview mode.
 *
 * @returns {JSX.Element} The rendered Video component.
 */
export const Video = ({
	id = 0,
	aspectRatio = '',
	videoSource = 'internal',
	videoUrl = '',
	videoControls = {},
	isBackground = false,
	isPreview = false,
}) => {
	const mergedVideoControls = {
		...defaultVideoControls,
		...videoControls,
	};

	const { isMuted, showControls, posterId, posterSize } = mergedVideoControls;

	let hasMedia = !!id;

	// @ts-ignore
	const { mediaDetails, isResolvingMedia } = getMedia(id);
	// @ts-ignore
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

	if (videoSource === 'internal' && mediaDetails) {
		mediaUrl = mediaDetails?.source_url ? mediaDetails.source_url : '';
		mime_type = mediaDetails?.mime_type ? mediaDetails.mime_type : '';
		mediaResolving = isResolvingMedia;
	}

	if (videoSource === 'external') {
		if (videoUrl) {
			hasMedia = true;
			mediaResolving = false;
		}
	}

	const additionalAtts = {
		poster: posterUrl,
	};

	let aspectRatioClassName = '';
	if (aspectRatio) {
		aspectRatioClassName = `has-aspect-ratio-${aspectRatio}`;
	}

	return (
		<>
			{isBackground ? (
				<div className={classnames('ds-media is-background', aspectRatioClassName)}>
					{!hasMedia ? (
						<Placeholder className="ds-media__image ds-media-placeholder" withIllustration />
					) : mediaResolving ? (
						<Spinner />
					) : (
						<>
							{videoSource === 'internal' && (
								<div className={classnames('ds-media__video', aspectRatioClassName)}>
									<video
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

							{videoSource === 'external' && (
								<>
									{embedPreview && (
										<div
											className={classnames('ds-media__video', aspectRatioClassName)}
											dangerouslySetInnerHTML={{ __html: embedPreview.html }}
										/>
									)}
								</>
							)}
						</>
					)}
				</div>
			) : (
				<>
					{!hasMedia ? (
						<Placeholder
							className={classnames('ds-media__image ds-media-placeholder', aspectRatioClassName)}
							withIllustration
						/>
					) : mediaResolving ? (
						<Spinner />
					) : (
						<>
							{videoSource === 'internal' && (
								<div className={classnames('ds-media__video', aspectRatioClassName)}>
									<video
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

							{videoSource === 'external' && (
								<>
									{embedPreview && (
										<div
											className={classnames('ds-media__video', aspectRatioClassName)}
											dangerouslySetInnerHTML={{ __html: embedPreview.html }}
										/>
									)}
								</>
							)}
						</>
					)}
				</>
			)}
		</>
	);
};

Video.propTypes = {
	id: PropTypes.number,
	aspectRatio: PropTypes.string,
	isBackground: PropTypes.bool,
	videoSource: PropTypes.string,
	videoUrl: PropTypes.string,
	videoControls: PropTypes.object,
	isPreview: PropTypes.bool,
};
