import PropTypes from 'prop-types';
import {
	MediaPlaceholder,
	InspectorControls,
	MediaUploadCheck,
	__experimentalImageSizeControl as ImageSizeControl,
	BlockControls,
} from '@wordpress/block-editor';
import {
	Spinner,
	FocalPointPicker,
	PanelBody,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	TextControl,
	ToolbarButton,
	ToolbarGroup,
	SelectControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import { MediaToolbar, Video } from '../index';
import { getMedia, getEditorSettings } from '../../selectors';

/**
 * MediaPanelContent is a functional component that provides a user interface
 * for managing media settings including images and videos within a control panel.
 *
 * This variable destructures various props to customize the media settings:
 *
 * @param {object} props - The component props.
 * @param {object} [props.media={}] - An object containing media details.
 * @param {boolean} [props.displayFocalPicker=false] - Flag to enable focal point picker for images.
 * @param {boolean} [props.allowMediaTypeSwitch=false] - Flag to allow switching between media types (image/video).
 * @param {string} [props.controlPanelLabel='Media Settings'] - Label for the control panel.
 * @param {boolean} [props.multiple=false] - Flag indicating if multiple media items are allowed.
 * @param {boolean} [props.showBlockControls=true] - Flag to show/hide block controls.
 * @param {boolean} [props.isBackground=false] - Flag indicating if the media is used as a background.
 * @param {Function} [props.onSelect] - Callback function to handle media selection.
 *
 * @property {number} [media.id=0] - The media ID.
 * @property {string} [media.mediaType='image'] - The type of media (image/video).
 * @property {string} [media.imageSize='full'] - The size of the image.
 * @property {boolean} [media.lazyLoad=true] - Flag to enable/disable lazy loading for images.
 * @property {boolean} [media.srcset=true] - Flag to enable/disable responsive images support (srcset).
 * @property {string} [media.videoSource='internal'] - The video source type (internal/external).
 * @property {string} [media.videoUrl=''] - The URL of the external video.
 * @property {object} [media.focalPoint={x: 0.5, y: 0.5}] - Focal point coordinates for images.
 * @property {object} [media.videoControls={}] - Settings for controlling video playback.
 *
 * @property {boolean} [media.videoControls.autoplay=false] - Flag to enable/disable video autoplay.
 * @property {boolean} [media.videoControls.isMuted=true] - Flag to enable/disable video mute.
 * @property {boolean} [media.videoControls.showControls=true] - Flag to show/hide video controls.
 * @property {number} [media.videoControls.posterId=0] - The ID of the video poster image.
 * @property {string} [media.videoControls.posterSize='full'] - The size of the video poster image.
 *
 */
export const MediaPanelContent = (props) => {
	const {
		media = {},
		displayFocalPicker = false,
		allowAspectRatioSwitch = false,
		allowMediaTypeSwitch = false,
		controlPanelLabel = 'Media Settings',
		multiple = false,
		showBlockControls = true,
		onSelect,
	} = props;
	const {
		id = 0,
		mediaType = 'image',
		imageSize = 'full',
		aspectRatio = '',
		lazyLoad = true,
		srcset = true,
		videoSource = 'internal',
		videoUrl = '',
		focalPoint = {
			x: 0.5,
			y: 0.5,
		},
		videoControls = {},
	} = media;

	const { autoplay = false, isMuted = true, showControls = true, posterId = 0, posterSize = 'full' } = videoControls;

	const { imageSizes } = getEditorSettings();
	const { mediaDetails, isResolvingMedia } = getMedia(id);
	const [availableImageSizes, setAvailableImageSizes] = useState([]);

	const hasMedia = !!id;

	useEffect(() => {
		if (imageSizes) {
			const availableImageSizes = imageSizes.map(({ slug, name }) => ({ value: slug, label: name }));
			setAvailableImageSizes(availableImageSizes);
		}
	}, [imageSizes]);

	const { embedPreview } = useSelect(
		(select) => {
			const { getEmbedPreview } = select('core');

			return {
				embedPreview: videoUrl.length ? getEmbedPreview(videoUrl) : false,
			};
		},
		[videoUrl],
	);

	if (isResolvingMedia) {
		return <Spinner />;
	}

	const imageUrl = mediaDetails?.media_details?.sizes?.[imageSize]?.source_url ?? mediaDetails?.source_url;

	const handleMediaChange = (value) => {
		const newMediaData = { ...media, ...value };
		onSelect(newMediaData);
	};

	const handleMediaRemove = () => {
		const newMediaData = { ...media, id: 0 };
		onSelect(newMediaData);
	};

	const handleVideoColtrol = (value) => {
		const newVideoControls = { ...media.videoControls, ...value };
		handleMediaChange({ videoControls: newVideoControls });
	};

	const handleMediaTypeChange = (value) => {
		const newMediaData = { ...media, id: 0, videoUrl: '', ...value };
		onSelect(newMediaData);
	};

	return (
		<>
			<PanelBody title={controlPanelLabel}>
				{allowMediaTypeSwitch && (
					<>
						<ToggleGroupControl
							label="Media Type"
							value={mediaType}
							isBlock
							onChange={(newType) => handleMediaTypeChange({ mediaType: newType })}
						>
							<ToggleGroupControlOption value="image" label="Image" />
							<ToggleGroupControlOption value="video" label="Video" />
						</ToggleGroupControl>

						{mediaType === 'video' && (
							<ToggleGroupControl
								label="Video Source"
								value={videoSource}
								isBlock
								onChange={(value) => handleMediaChange({ videoSource: value })}
							>
								<ToggleGroupControlOption value="internal" label="Internal" />
								<ToggleGroupControlOption value="external" label="External" />
							</ToggleGroupControl>
						)}
					</>
				)}

				{allowAspectRatioSwitch && (
					<SelectControl
						label="Aspect Ratio"
						value={aspectRatio}
						onChange={(newAspect) => {
							handleMediaChange({ aspectRatio: newAspect });
						}}
						options={[
							{ value: '', label: 'Default' },
							{ value: '1-1', label: 'Square - 1/1' },
							{ value: '3-2', label: 'Classic - 3/2' },
							{ value: '2-3', label: 'Classic Portrait - 2/3' },
							{ value: '4-3', label: 'Standard - 4/3' },
							{ value: '3-4', label: 'Standard Portrait - 3/4' },
							{ value: '16-9', label: 'Wide - 16/9' },
							{ value: '9-16', label: 'Wide Portrait - 9/16' },
							{ value: '21-9', label: 'Ultra Wide - 21/9' },
							{ value: '9-21', label: 'Ultra Wide Portrait - 9/21' },
						]}
					/>
				)}

				{hasMedia ? (
					<>
						{mediaType === 'image' && (
							<>
								<MediaToolbar
									id={id}
									onSelect={(selectedMedia) =>
										handleMediaChange({ id: selectedMedia?.id ? selectedMedia.id : 0 })
									}
									onRemove={handleMediaRemove}
									mediaType={mediaType}
									multiple={multiple}
								/>
								{displayFocalPicker && (
									<FocalPointPicker
										label="Focal Point Picker"
										url={imageUrl}
										value={focalPoint}
										onChange={(newValues) => handleMediaChange({ focalPoint: newValues })}
									/>
								)}

								<ToggleControl
									__nextHasNoMarginBottom
									label="Lazy Load"
									onChange={() => handleMediaChange({ lazyLoad: !lazyLoad })}
									checked={lazyLoad}
									help="Disable this option if your image is in the first fold."
								/>

								<ToggleControl
									__nextHasNoMarginBottom
									label="Enable Responsive Images (srcset)"
									onChange={() => handleMediaChange({ srcset: !srcset })}
									checked={srcset}
									help="Srcset is an HTML image attribute that specifies the list of images to use in different browser situations."
								/>
								<ImageSizeControl
									isResizable={false}
									onChangeImage={(newSize) => handleMediaChange({ imageSize: newSize })}
									slug={imageSize}
									imageSizeOptions={availableImageSizes}
								/>
							</>
						)}

						{mediaType === 'video' && (
							<>
								{videoSource === 'external' ? (
									<>
										<TextControl
											label="Embed URL"
											type="url"
											value={videoUrl}
											onChange={(newVideoUrl) => handleMediaChange({ videoUrl: newVideoUrl })}
											help="Paste the URL from one of the provided oEmbed providers"
										/>

										<ToggleControl
											__nextHasNoMarginBottom
											label="Autoplay Video"
											onChange={() => handleVideoColtrol({ autoplay: !autoplay })}
											checked={autoplay}
										/>

										<ToggleControl
											__nextHasNoMarginBottom
											label="Mute Video"
											onChange={() => handleVideoColtrol({ isMuted: !isMuted })}
											checked={isMuted}
										/>

										<ToggleControl
											__nextHasNoMarginBottom
											label="Show Controls"
											onChange={() => handleVideoColtrol({ showControls: !showControls })}
											checked={showControls}
										/>

										{embedPreview && (
											<div className="ds-editor-embed-preview">
												<label>Embed Preview</label>
												<div
													className="preview-wrap"
													dangerouslySetInnerHTML={{ __html: embedPreview.html }}
												/>
											</div>
										)}
									</>
								) : (
									<>
										<ToggleControl
											__nextHasNoMarginBottom
											label="Autoplay Video"
											onChange={() => handleVideoColtrol({ autoplay: !autoplay })}
											checked={autoplay}
										/>

										<ToggleControl
											__nextHasNoMarginBottom
											label="Mute Video"
											onChange={() => handleVideoColtrol({ isMuted: !isMuted })}
											checked={isMuted}
										/>

										<ToggleControl
											__nextHasNoMarginBottom
											label="Show Controls"
											onChange={() => handleVideoColtrol({ showControls: !showControls })}
											checked={showControls}
										/>
										{!posterId ? (
											<MediaUploadCheck>
												<MediaPlaceholder
													labels={{
														title: `Upload Video Poster`,
														instructions: '',
													}}
													onSelect={(selectedMedia) =>
														handleVideoColtrol({
															posterId: selectedMedia?.id ? selectedMedia.id : 0,
														})
													}
													accept="image"
													allowedTypes={['image']} // there is a bug here, this doesn't work when changed, only on load
												/>
											</MediaUploadCheck>
										) : (
											<div className="ds-editor-poster-preview">
												<label>Video Preview</label>
												<Video
													id={id}
													videoSource={videoSource}
													videoUrl={videoUrl}
													videoControls={videoControls}
													isPreview
												/>
												{/* <Image id={posterId} imageSize={posterSize} /> */}
												<ImageSizeControl
													imageSizeHelp="Please select the poster image size"
													isResizable={false}
													onChangeImage={(newSize) =>
														handleVideoColtrol({ posterSize: newSize })
													}
													slug={posterSize}
													imageSizeOptions={availableImageSizes}
												/>
												<ToolbarGroup label="Poster">
													<ToolbarButton onClick={() => handleVideoColtrol({ posterId: 0 })}>
														Remove Poster
													</ToolbarButton>
												</ToolbarGroup>
											</div>
										)}
									</>
								)}
							</>
						)}
					</>
				) : (
					<>
						{videoSource === 'external' && mediaType === 'video' ? (
							<>
								<TextControl
									label="Embed URL"
									type="url"
									value={videoUrl}
									onChange={(newVideoUrl) => handleMediaChange({ videoUrl: newVideoUrl })}
									help="Paste the URL from one of the provided oEmbed providers"
								/>

								{embedPreview && (
									<div className="ds-editor-embed-preview">
										<label>Embed Preview</label>
										<div
											className="preview-wrap"
											dangerouslySetInnerHTML={{ __html: embedPreview.html }}
										/>
									</div>
								)}
							</>
						) : (
							<MediaUploadCheck>
								<MediaPlaceholder
									labels={{
										title: `Upload ${mediaType}`,
										instructions: '',
									}}
									onSelect={(selectedMedia) =>
										handleMediaChange({ id: selectedMedia?.id ? selectedMedia.id : 0 })
									}
									accept={`${mediaType}/*`}
									multiple={multiple}
									allowedTypes={[mediaType]} // there is a bug here, this doesn't work when changed, only on load
								/>
							</MediaUploadCheck>
						)}
					</>
				)}
			</PanelBody>
			{showBlockControls && videoSource !== 'external' && (
				<BlockControls group="block">
					<MediaToolbar
						id={id}
						onSelect={(selectedMedia) =>
							handleMediaChange({ id: selectedMedia?.id ? selectedMedia.id : 0 })
						}
						onRemove={handleMediaRemove}
						mediaType={mediaType}
						multiple={multiple}
					/>
				</BlockControls>
			)}
		</>
	);
};

// Set Default Props
const defaultMediaProps = {
	media: {
		id: 0,
		mediaType: 'image',
		lazyLoad: true,
		srcset: true,
		imageSize: 'full',
		aspectRatio: '',
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
	displayFocalPicker: false,
	allowMediaTypeSwitch: false,
	allowAspectRatioSwitch: false,
	controlPanelLabel: 'Media Settings',
	multiple: false,
	showBlockControls: true,
	isBackground: false,
	isControl: true,
};

/**
 * MediaPicker is a functional component that conditionally renders
 * media panel content based on the `isControl` property in the merged props.
 *
 * Props are merged with default media properties and passed down to the
 * MediaPanelContent component.
 *
 * If `isControl` is true, MediaPanelContent is rendered directly.
 * If `isControl` is false, MediaPanelContent is wrapped within InspectorControls before rendering.
 *
 * @param {object} props - Properties passed to the component
 * @returns {JSX.Element} The rendered MediaPicker component
 */
export const MediaPicker = (props) => {
	const mergedProps = { ...defaultMediaProps, ...props };
	const { isControl } = mergedProps;

	return (
		<>
			{isControl ? (
				<MediaPanelContent {...mergedProps} />
			) : (
				<InspectorControls>
					<MediaPanelContent {...mergedProps} />
				</InspectorControls>
			)}
		</>
	);
};

MediaPicker.propTypes = {
	media: PropTypes.object,
	displayFocalPicker: PropTypes.bool,
	allowMediaTypeSwitch: PropTypes.bool,
	allowAspectRatioSwitch: PropTypes.bool,
	controlPanelLabel: PropTypes.string,
	multiple: PropTypes.bool,
	isControl: PropTypes.bool,
	showBlockControls: PropTypes.bool,
	isBackground: PropTypes.bool,
	onSelect: PropTypes.func.isRequired,
};
