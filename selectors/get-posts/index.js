import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

export function getPosts(postType = 'post', queryParams = {}) {
	return useSelect(
		(select) => {
			const { getEntityRecords, hasStartedResolution, hasFinishedResolution, isResolving } = select(coreStore);

			const query = { per_page: 10, ...queryParams };
			const selectorArgs = ['postType', postType, query];

			return {
				posts: getEntityRecords(...selectorArgs),
				hasStartedResolution: hasStartedResolution('getEntityRecords', selectorArgs),
				hasFinishedResolution: hasFinishedResolution('getEntityRecords', selectorArgs),
				isResolving: isResolving('getEntityRecords', selectorArgs),
			};
		},
		[postType]
	);
}

export function getPost(postId, postType = 'post') {
	return useSelect(
		(select) => {
			const { getEntityRecord, hasStartedResolution, hasFinishedResolution, isResolving } = select(coreStore);
			const selectorArgs = ['postType', postType, postId];

			return {
				post: getEntityRecord(...selectorArgs),
				hasStartedResolution: hasStartedResolution('getEntityRecord', selectorArgs),
				hasFinishedResolution: hasFinishedResolution('getEntityRecord', selectorArgs),
				isResolving: isResolving('getEntityRecord', selectorArgs),
			};
		},
		[postId, postType]
	);
}
