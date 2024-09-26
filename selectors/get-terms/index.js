import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Fetches terms associated with a given post.
 *
 * @param {number} postId - The ID of the post for which to retrieve terms.
 * @param {string} postType - The type of the post (e.g., 'post', 'page').
 * @param {string} taxonomyName - The name of the taxonomy (e.g., 'category', 'tag').
 * @param {string} [itemSelector='categories'] - The property of the post object that holds the term IDs.
 * @return {object} An object containing the terms, whether the terms have been resolved, and whether the terms are still resolving.
 */
export function getPostTerms(postId, postType, taxonomyName, itemSelector = 'categories') {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useSelect(
		(select) => {
			// @ts-ignore
			const { getEntityRecord, getEntityRecords, hasFinishedResolution, isResolving } = select(coreStore);
			const selectorArgs = ['postType', postType, postId];

			const post = getEntityRecord(...selectorArgs);
			const hasResolvedPost = hasFinishedResolution('getEntityRecord', selectorArgs);

			const termIds = hasResolvedPost ? post?.[itemSelector] : [];

			const termsSelector = [
				'taxonomy',
				taxonomyName,
				{
					per_page: -1,
					context: 'view',
					include: termIds,
				},
			];

			const terms = getEntityRecords(...termsSelector);
			const hasResolvedTerms = hasFinishedResolution('getEntityRecords', termsSelector);
			const isResolvingTerms = isResolving('getEntityRecords', termsSelector);

			return {
				terms,
				hasResolvedTerms: hasResolvedTerms && hasResolvedPost,
				isResolvingTerms,
			};
		},
		[postId, postType, taxonomyName, itemSelector],
	);
}

/**
 * Retrieves terms for a given taxonomy.
 *
 * @param {string} taxonomyName The name of the taxonomy to retrieve terms for.
 * @param {object} [query={}] Optional query parameters to filter the terms.
 * @return {object} An object containing:
 * - terms: The retrieved terms.
 * - hasResolvedTerms: Boolean indicating if the terms have finished resolving.
 * - isResolvingTerms: Boolean indicating if the terms query is still resolving.
 */
export function getTerms(taxonomyName, query = {}) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useSelect(
		(select) => {
			// @ts-ignore
			const { getEntityRecords, hasFinishedResolution, isResolving } = select(coreStore);

			const termsSelector = [
				'taxonomy',
				taxonomyName,
				{
					per_page: -1,
					context: 'view',
					...query,
				},
			];

			const terms = getEntityRecords(...termsSelector);
			const hasResolvedTerms = hasFinishedResolution('getEntityRecords', termsSelector);
			const isResolvingTerms = isResolving('getEntityRecords', termsSelector);

			return {
				terms,
				hasResolvedTerms,
				isResolvingTerms,
			};
		},
		[taxonomyName],
	);
}
