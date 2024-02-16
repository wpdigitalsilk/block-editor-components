import { __ } from '@wordpress/i18n';
import { MediaReplaceFlow, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import PropTypes from 'prop-types';
import { useMedia } from '../../hooks/use-media';

export const MediaToolbar = (props) => {
	const { onSelect, onRemove, id } = props;

	const hasImage = !!id;
	const { media } = useMedia(id);

	return (
		<ToolbarGroup label={__('Media')}>
			{hasImage ? (
				<>
					<MediaReplaceFlow mediaUrl={media?.source_url} onSelect={onSelect} name={__('Replace Image')} />
					<ToolbarButton onClick={onRemove}>{__('Remove Image')}</ToolbarButton>
				</>
			) : (
				<MediaUploadCheck>
					<MediaUpload onSelect={onSelect} render={({ open }) => <ToolbarButton onClick={open}>{__('Add Image')}</ToolbarButton>} />
				</MediaUploadCheck>
			)}
		</ToolbarGroup>
	);
};

MediaToolbar.defaultProps = {};

MediaToolbar.propTypes = {
	id: PropTypes.number.isRequired,
	onSelect: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};
