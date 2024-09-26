/**
 * Fetches terms associated with a given post.
 *
 * @param {number} postId - The ID of the post for which to retrieve terms.
 * @param {string} postType - The type of the post (e.g., 'post', 'page').
 * @param {string} taxonomyName - The name of the taxonomy (e.g., 'category', 'tag').
 * @param {string} [itemSelector='categories'] - The property of the post object that holds the term IDs.
 * @return {object} An object containing the terms, whether the terms have been resolved, and whether the terms are still resolving.
 */
export function getPostTerms(postId: number, postType: string, taxonomyName: string, itemSelector?: string | undefined): object;
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
export function getTerms(taxonomyName: string, query?: object | undefined): object;
//# sourceMappingURL=index.d.ts.map