import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Fetches posts of a specified type and query parameters using the WordPress data store.
 *
 * @param {string} postType - The type of post to fetch.
 * @param {object} queryParams - The query parameters to pass when fetching posts.
 * @return {object} An object containing the posts and their resolution states.
 */
export function getPosts(postType = 'post', queryParams = {}) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useSelect(
		(select) => {
			// @ts-ignore
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
		[postType],
	);
}

/**
 * Fetches a post from the store based on the provided post ID and post type.
 *
 * @param {number|string} postId - The unique identifier of the post.
 * @param {string} [postType='post'] - The type of the post (default is 'post').
 * @return {object} An object containing the post data and resolution status.
 */
export function getPost(postId, postType = 'post') {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useSelect(
		(select) => {
			// @ts-ignore
			const { getEntityRecord, hasStartedResolution, hasFinishedResolution, isResolving } = select(coreStore);
			const selectorArgs = ['postType', postType, postId];

			return {
				post: getEntityRecord(...selectorArgs),
				hasStartedResolution: hasStartedResolution('getEntityRecord', selectorArgs),
				hasFinishedResolution: hasFinishedResolution('getEntityRecord', selectorArgs),
				isResolving: isResolving('getEntityRecord', selectorArgs),
			};
		},
		[postId, postType],
	);
}
