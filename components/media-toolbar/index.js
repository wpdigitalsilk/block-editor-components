import { __ } from '@wordpress/i18n';
import { MediaReplaceFlow, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import PropTypes from 'prop-types';
import { getMedia } from '../../selectors';

export const MediaToolbar = (props) => {
	const { onSelect, onRemove, id, mediaType, multiple } = props;
	const hasMedia = !!id;
	const { mediaDetails } = getMedia(id);

	return (
		<ToolbarGroup label={__('Media')}>
			{hasMedia ? (
				<>
					<MediaReplaceFlow
						mediaUrl={mediaDetails?.source_url ? mediaDetails.source_url : ''}
						onSelect={onSelect}
						name={`Replace ${mediaType}`}
					/>
					<ToolbarButton onClick={onRemove}>{`Remove ${mediaType}`}</ToolbarButton>
				</>
			) : (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelect}
						allowedTypes={[mediaType]} // there is a bug here, this doesn't work when changed, only on load
						render={({ open }) => <ToolbarButton onClick={open}>{`Add ${mediaType}`}</ToolbarButton>}
						multiple={multiple}
					/>
				</MediaUploadCheck>
			)}
		</ToolbarGroup>
	);
};

MediaToolbar.defaultProps = {
	mediaType: 'image',
	multiple: false,
};

MediaToolbar.propTypes = {
	id: PropTypes.number.isRequired,
	onSelect: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	mediaType: PropTypes.string,
	multiple: PropTypes.bool,
};
