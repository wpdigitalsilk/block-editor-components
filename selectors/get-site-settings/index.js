import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Retrieves the settings for the site using the WordPress data store.
 * This function returns an object containing the following properties:
 * - `settings`: The site settings achieved by making a call to `getEntityRecord`
 * - `hasStartedResolution`: A boolean indicating whether the resolution of the settings has started
 * - `hasFinishedResolution`: A boolean indicating whether the resolution of the settings has completed
 * - `isResolving`: A boolean indicating whether the settings are currently being resolved
 *
 * @return {object} An object containing the site's settings and the states of the resolution process
 */
export function getSiteSettings() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useSelect((select) => {
		// @ts-ignore
		const { getEntityRecord, hasStartedResolution, hasFinishedResolution, isResolving } = select(coreStore);

		return {
			settings: getEntityRecord('root', 'site'),
			hasStartedResolution: hasStartedResolution('getEntityRecord', ['root', 'site']),
			hasFinishedResolution: hasFinishedResolution('getEntityRecord', ['root', 'site']),
			isResolving: isResolving('getEntityRecord', ['root', 'site']),
		};
	}, []);
}
