import PropTypes from 'prop-types';
import { MediaReplaceFlow, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { getMedia } from '../../selectors';

/**
 * MediaToolbar is a component that provides a toolbar interface for media selection,
 * replacement, and removal actions, tailored for a specific media type.
 *
 * @param {object} props                              The component properties.
 * @param {Function} props.onSelect                   Callback function to handle media selection.
 * @param {Function} props.onRemove                   Callback function to handle media removal.
 * @param {string} [props.id]                         The ID of the selected media.
 * @param {string} [props.mediaType='image']          The type of media to be handled, defaults to 'image'.
 * @param {boolean} [props.multiple=false]            Whether multiple media items can be selected, defaults to false.
 *
 * @returns {JSX.Element}                             The toolbar component for media handling.
 */
export const MediaToolbar = ({ onSelect, onRemove, id, mediaType = 'image', multiple = false }) => {
	const hasMedia = !!id;
	// @ts-ignore
	const { mediaDetails } = getMedia(id);

	return (
		<ToolbarGroup label="Media">
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

MediaToolbar.propTypes = {
	id: PropTypes.number.isRequired,
	onSelect: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	mediaType: PropTypes.string,
	multiple: PropTypes.bool,
};
