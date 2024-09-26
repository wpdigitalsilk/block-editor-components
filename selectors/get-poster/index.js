import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Retrieves the poster URL for a given attachment and size.
 *
 * @param {number} attachmentId The ID of the media attachment.
 * @param {string} size The size of the poster to retrieve.
 * @return {object} An object containing the poster URL, and resolution states.
 */
export function getPoster(attachmentId, size) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useSelect(
		(select) => {
			// @ts-ignore
			const { getMedia, isResolving, hasFinishedResolution } = select(coreStore);

			const mediaParameters = [attachmentId, { context: 'view' }];

			const media = getMedia(...mediaParameters);

			const url = media?.media?.sizes?.[size]?.source_url || media?.source_url || '';

			return {
				posterUrl: url,
				isResolvingPoster: isResolving('getMedia', mediaParameters),
				hasResolvedPoster: hasFinishedResolution('getMedia', mediaParameters),
			};
		},
		[attachmentId, size],
	);
}
