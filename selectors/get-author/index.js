import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Retrieves the author information for a given post.
 *
 * @param {number|string} postId - The ID of the post for which to retrieve the author information.
 * @param {string} postType - The type of the post.
 * @return {object} Returns an object containing authorData, a boolean indicating if the author information has been resolved, and a boolean indicating if the author information is still resolving.
 */
export function getAuthor(postId, postType) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useSelect(
		(select) => {
			// @ts-ignore
			const { getEntityRecord, hasFinishedResolution, isResolving, getUser } = select(coreStore);
			const selectorArgs = ['postType', postType, postId];

			// @ts-ignore
			const post = getEntityRecord(...selectorArgs);
			const hasResolvedPost = hasFinishedResolution('getEntityRecord', selectorArgs);

			// @ts-ignore
			const _authorId = hasResolvedPost ? post?.author : undefined;

			const authorData = getUser(_authorId);
			const hasResolvedAuthor = hasFinishedResolution('getUser', [_authorId]);
			const isResolvingAuthor = isResolving('getUser', [_authorId]);

			return {
				authorData,
				hasResolvedAuthor: hasResolvedAuthor && hasResolvedPost,
				isResolvingAuthor,
			};
		},
		[postId, postType],
	);
}
