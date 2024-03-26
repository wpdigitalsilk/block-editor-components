import { __ } from '@wordpress/i18n';
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
} from '@wordpress/components';

import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { MediaToolbar, Image, Video } from '../index';
import { getMedia, getEditorSettings } from '../../selectors';

const EmbedPreview = styled.div`
	label {
		font-size: 11px;
		font-weight: 500;
		line-height: 1.4;
		text-transform: uppercase;
		display: inline-block;
		margin-bottom: 8px;
		padding: 0px;
	}

	.preview-wrap {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
		iframe,
		video {
			max-width: 100%;
			vertical-align: top;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 0;
		}
	}
`;

const PosterPreview = styled.div`
	> label {
		font-size: 11px;
		font-weight: 500;
		line-height: 1.4;
		text-transform: uppercase;
		display: inline-block;
		margin-bottom: 8px;
		padding: 0px;
	}

	.ds-media__image,
	.ds-media__video-element,
	.ds-media__video {
		margin-bottom: 20px;
	}
`;

export const MediaPanelContent = (props) => {
	const {
		media,
		onSelect,
		displayFocalPicker,
		allowMediaTypeSwitch,
		controlPanelLabel,
		multiple,
		showBlockControls,
		isBackground,
	} = props;
	const {
		id,
		mediaType,
		imageSize,
		lazyLoad,
		srcset,
		videoSource,
		videoUrl,
		focalPoint = {},
		videoControls = {},
	} = media;

	const { autoplay, isMuted, showControls, posterId, posterSize } = videoControls;

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
		[videoUrl]
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
							label={__('Media Type')}
							value={mediaType}
							isBlock
							onChange={(newType) => handleMediaTypeChange({ mediaType: newType })}
						>
							<ToggleGroupControlOption value="image" label={__('Image')} />
							<ToggleGroupControlOption value="video" label={__('Video')} />
						</ToggleGroupControl>

						{mediaType == 'video' && (
							<ToggleGroupControl
								label={__('Video Source')}
								value={videoSource}
								isBlock
								onChange={(value) => handleMediaChange({ videoSource: value })}
							>
								<ToggleGroupControlOption value="internal" label={__('Internal')} />
								<ToggleGroupControlOption value="external" label={__('External')} />
							</ToggleGroupControl>
						)}
					</>
				)}

				{hasMedia ? (
					<>
						{mediaType == 'image' && (
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
										label={__('Focal Point Picker')}
										url={imageUrl}
										value={focalPoint}
										onChange={(newValues) => handleMediaChange({ focalPoint: newValues })}
									/>
								)}

								<ToggleControl
									__nextHasNoMarginBottom
									label={__('Lazy Load')}
									onChange={() => handleMediaChange({ lazyLoad: !lazyLoad })}
									checked={lazyLoad}
									help="Disable this option if your image is in the first fold."
								/>

								<ToggleControl
									__nextHasNoMarginBottom
									label={__('Enable Responsive Images (srcset)')}
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

						{mediaType == 'video' && (
							<>
								{videoSource == 'external' ? (
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
											label={__('Autoplay Video')}
											onChange={() => handleVideoColtrol({ autoplay: !autoplay })}
											checked={autoplay}
										/>

										<ToggleControl
											__nextHasNoMarginBottom
											label={__('Mute Video')}
											onChange={() => handleVideoColtrol({ isMuted: !isMuted })}
											checked={isMuted}
										/>

										<ToggleControl
											__nextHasNoMarginBottom
											label={__('Show Controls')}
											onChange={() => handleVideoColtrol({ showControls: !showControls })}
											checked={showControls}
										/>

										{embedPreview && (
											<EmbedPreview>
												<label>{__('Embed Preview')}</label>
												<div
													className="preview-wrap"
													dangerouslySetInnerHTML={{ __html: embedPreview.html }}
												/>
											</EmbedPreview>
										)}
									</>
								) : (
									<>
										<ToggleControl
											__nextHasNoMarginBottom
											label={__('Autoplay Video')}
											onChange={() => handleVideoColtrol({ autoplay: !autoplay })}
											checked={autoplay}
										/>

										<ToggleControl
											__nextHasNoMarginBottom
											label={__('Mute Video')}
											onChange={() => handleVideoColtrol({ isMuted: !isMuted })}
											checked={isMuted}
										/>

										<ToggleControl
											__nextHasNoMarginBottom
											label={__('Show Controls')}
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
											<PosterPreview>
												<label>{__('Video Preview')}</label>
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
												<ToolbarGroup label={__('Poster')}>
													<ToolbarButton onClick={() => handleVideoColtrol({ posterId: 0 })}>
														{__('Remove Poster')}
													</ToolbarButton>
												</ToolbarGroup>
											</PosterPreview>
										)}
									</>
								)}
							</>
						)}
					</>
				) : (
					<>
						{videoSource == 'external' && mediaType == 'video' ? (
							<>
								<TextControl
									label="Embed URL"
									type="url"
									value={videoUrl}
									onChange={(newVideoUrl) => handleMediaChange({ videoUrl: newVideoUrl })}
									help="Paste the URL from one of the provided oEmbed providers"
								/>

								{embedPreview && (
									<EmbedPreview>
										<label>{__('Embed Preview')}</label>
										<div
											className="preview-wrap"
											dangerouslySetInnerHTML={{ __html: embedPreview.html }}
										/>
									</EmbedPreview>
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

export const MediaPicker = (props) => {
	const { isControl } = props;

	return (
		<>
			{isControl ? (
				<MediaPanelContent {...props} />
			) : (
				<InspectorControls>
					<MediaPanelContent {...props} />
				</InspectorControls>
			)}
		</>
	);
};

MediaPicker.defaultProps = {
	media: {
		id: 0,
		mediaType: 'image',
		lazyLoad: true,
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
	displayFocalPicker: true,
	allowMediaTypeSwitch: false,
	controlPanelLabel: __('Media Settings'),
	multiple: false,
	isControl: true,
	showBlockControls: true,
	isBackground: false,
};

MediaPicker.propTypes = {
	onSelect: PropTypes.func.isRequired,
	media: PropTypes.object,
	displayFocalPicker: PropTypes.bool,
	allowMediaTypeSwitch: PropTypes.bool,
	controlPanelLabel: PropTypes.string,
	multiple: PropTypes.bool,
	isControl: PropTypes.bool,
	showBlockControls: PropTypes.bool,
	isBackground: PropTypes.bool,
};
