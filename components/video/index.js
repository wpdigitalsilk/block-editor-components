import { Spinner, Placeholder } from '@wordpress/components';
import PropTypes from 'prop-types';
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
 * Video component configuration object.
 *
 * @param {object} props                 The configuration options for the video component.
 * @param {number} props.id              The unique identifier of the video.
 * @param {string} props.videoSource     The source of the video ('internal' or 'external').
 * @param {string} props.videoUrl        The URL of the video if it's from an external source.
 * @param {object} props.videoControls   Configuration for the video controls.
 * @param {boolean} props.isBackground   Determines if the video is a background type.
 * @param {boolean} props.isPreview      Determines if the video is a preview.
 *
 * @returns {JSX.Element}                 The video component JSX elements.
 */
export const Video = ({
	id = 0,
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
							{videoSource === 'internal' && (
								<div className="ds-media__video">
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
											className="ds-media__video"
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
						<Placeholder className="ds-media__image ds-media-placeholder" withIllustration />
					) : mediaResolving ? (
						<Spinner />
					) : (
						<>
							{videoSource === 'internal' && (
								<div className="ds-media__video">
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
											className="ds-media__video"
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
	isBackground: PropTypes.bool,
	videoSource: PropTypes.string,
	videoUrl: PropTypes.string,
	videoControls: PropTypes.object,
	isPreview: PropTypes.bool,
};
