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
 * Video component configuration.
 *
 * @param {object} config Configuration for the video component.
 * @param {number} [config.id=0] Unique identifier for the video.
 * @param {string} [config.aspectRatio=''] Aspect ratio of the video.
 * @param {string} [config.videoSource='internal'] The source of the video; can be 'internal' or 'external'.
 * @param {string} [config.videoUrl=''] URL of the video, applicable when video is sourced externally.
 * @param {object} [config.videoControls={}] Configuration object for video controls such as muting and visibility of controls.
 * @param {boolean} [config.isBackground=false] Determines if the video is used as a background.
 * @param {boolean} [config.isPreview=false] Indicates if the video is in preview mode.
 * @param {number} [config.borderRadius=0] Border radius of the video in pixels.
 * @param {object} config.rest Additional properties to be passed to the video element.
 * @returns {JSX.Element} The rendered video component.
 */
export const Video = ({
	id = 0,
	aspectRatio = '',
	videoSource = 'internal',
	videoUrl = '',
	videoControls = {},
	isBackground = false,
	isPreview = false,
	borderRadius = 0,
	...rest
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

	if (borderRadius && borderRadius > 0) {
		rest.style = {
			'--border-radius': `${borderRadius}px`,
		};
	}

	return (
		<>
			{isBackground ? (
				<div className={classnames('ds-media is-background', aspectRatioClassName)}>
					{!hasMedia ? (
						<Placeholder className="ds-media__image ds-media-placeholder" withIllustration {...rest} />
					) : mediaResolving ? (
						<Spinner />
					) : (
						<>
							{videoSource === 'internal' && (
								<div className={classnames('ds-media__video', aspectRatioClassName)} {...rest}>
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
											{...rest}
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
							{...rest}
						/>
					) : mediaResolving ? (
						<Spinner />
					) : (
						<>
							{videoSource === 'internal' && (
								<div className={classnames('ds-media__video', aspectRatioClassName)} {...rest}>
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
											{...rest}
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
	borderRadius: PropTypes.number,
};
