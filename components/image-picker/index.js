import { __ } from '@wordpress/i18n';
import {
	MediaPlaceholder,
	InspectorControls,
	MediaReplaceFlow,
	MediaUpload,
	MediaUploadCheck,
	__experimentalImageSizeControl as ImageSizeControl,
} from '@wordpress/block-editor';
import { Spinner, FocalPointPicker, PanelBody, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

import { MediaToolbar, Image } from '../index';

import PropTypes from 'prop-types';

import { useMedia, useEditorSettings } from '../../hooks';

export const ImagePicker = (props) => {
	const {
		id,
		focalPoint,
		size,
		onSelect,
		onRemove,
		onChangeFocalPoint,
		onSizeChange,
		labels = {},
		allowedTypes = ['image'],
		panelLabel,
		mode,
		...rest
	} = props;

	const { imageSizes } = useEditorSettings();
	const { media, isResolvingMedia } = useMedia(id);
	const [availableImageSizes, setAvailableImageSizes] = useState([]);

	const hasImage = !!id;
	const shouldDisplayFocalPointPicker = typeof onChangeFocalPoint === 'function';
	const shouldDisplaySizePicker = typeof onSizeChange === 'function';

	useEffect(() => {
		if (imageSizes) {
			const availableImageSizes = imageSizes.map(({ slug, name }) => ({ value: slug, label: name }));
			setAvailableImageSizes(availableImageSizes);
		}
	}, [imageSizes]);

	if (!hasImage) {
		return (
			<InspectorControls>
				<PanelBody title={panelLabel}>
					<MediaUploadCheck>
						<MediaPlaceholder
							labels={labels}
							onSelect={onSelect}
							accept="image"
							multiple={false}
							allowedTypes={allowedTypes}
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>
		);
	}

	if (isResolvingMedia) {
		return <Spinner />;
	}

	const imageUrl = media?.media_details?.sizes?.[size]?.source_url ?? media?.source_url;

	return (
		<>
			{(shouldDisplayFocalPointPicker || shouldDisplaySizePicker) && (
				<InspectorControls>
					<PanelBody title={panelLabel}>
						<MediaToolbar id={id} onSelect={onSelect} onRemove={onRemove} />

						{shouldDisplayFocalPointPicker && (
							<FocalPointPicker
								label={__('Focal Point Picker')}
								url={imageUrl}
								value={focalPoint}
								onChange={onChangeFocalPoint}
							/>
						)}
						{shouldDisplaySizePicker && (
							<ImageSizeControl
								isResizable={false}
								onChangeImage={onSizeChange}
								slug={size}
								imageSizeOptions={availableImageSizes}
							/>
						)}
					</PanelBody>
				</InspectorControls>
			)}

			{mode == 'preview' && <Image id={id} size={size} focalPoint={focalPoint} />}
		</>
	);
};

ImagePicker.defaultProps = {
	size: 'full',
	focalPoint: { x: 0.5, y: 0.5 },
	onChangeFocalPoint: undefined,
	onSizeChange: undefined,
	labels: {},
	allowedTypes: ['image'],
	panelLabel: __('Image Settings'),
	mode: '',
};

ImagePicker.propTypes = {
	id: PropTypes.number.isRequired,
	size: PropTypes.string,
	onSelect: PropTypes.func.isRequired,
	onSizeChange: PropTypes.func,
	onRemove: PropTypes.func.isRequired,
	onChangeFocalPoint: PropTypes.func,
	allowedTypes: PropTypes.array,
	focalPoint: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number,
	}),
	labels: PropTypes.shape({
		title: PropTypes.string,
		instructions: PropTypes.string,
	}),
	panelLabel: PropTypes.string,
	mode: PropTypes.string,
};
