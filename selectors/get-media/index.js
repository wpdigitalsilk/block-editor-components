import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Retrieves media details and resolution status for a given attachment ID.
 *
 * @param {number} attachmentId - The ID of the media attachment to retrieve.
 * @return {object} An object containing media details, resolution status, and resolution completion status.
 */
export function getMedia(attachmentId) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useSelect(
		(select) => {
			// @ts-ignore
			const { getMedia, isResolving, hasFinishedResolution } = select(coreStore);

			const mediaParameters = [attachmentId, { context: 'view' }];

			return {
				mediaDetails: getMedia(...mediaParameters),
				isResolvingMedia: isResolving('getMedia', mediaParameters),
				hasResolvedMedia: hasFinishedResolution('getMedia', mediaParameters),
			};
		},
		[attachmentId],
	);
}
