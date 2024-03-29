import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

export function getPoster(attachmentId, size) {
	return useSelect(
		(select) => {
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
		[attachmentId, size]
	);
}
