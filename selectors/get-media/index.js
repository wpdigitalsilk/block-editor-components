import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

export function getMedia(attachmentId) {
	return useSelect(
		(select) => {
			const { getMedia, isResolving, hasFinishedResolution } = select(coreStore);

			const mediaParameters = [attachmentId, { context: 'view' }];

			return {
				mediaDetails: getMedia(...mediaParameters),
				isResolvingMedia: isResolving('getMedia', mediaParameters),
				hasResolvedMedia: hasFinishedResolution('getMedia', mediaParameters),
			};
		},
		[attachmentId]
	);
}
