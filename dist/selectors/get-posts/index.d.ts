/**
 * Fetches posts of a specified type and query parameters using the WordPress data store.
 *
 * @param {string} postType - The type of post to fetch.
 * @param {object} queryParams - The query parameters to pass when fetching posts.
 * @return {object} An object containing the posts and their resolution states.
 */
export function getPosts(postType?: string, queryParams?: object): object;
/**
 * Fetches a post from the store based on the provided post ID and post type.
 *
 * @param {number|string} postId - The unique identifier of the post.
 * @param {string} [postType='post'] - The type of the post (default is 'post').
 * @return {object} An object containing the post data and resolution status.
 */
export function getPost(postId: number | string, postType?: string | undefined): object;
//# sourceMappingURL=index.d.ts.map