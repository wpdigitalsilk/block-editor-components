import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

export function getSiteSettings() {
	return useSelect((select) => {
		const { getEntityRecord, hasStartedResolution, hasFinishedResolution, isResolving } = select(coreStore);

		return {
			settings: getEntityRecord('root', 'site'),
			hasStartedResolution: hasStartedResolution('getEntityRecord', ['root', 'site']),
			hasFinishedResolution: hasFinishedResolution('getEntityRecord', ['root', 'site']),
			isResolving: isResolving('getEntityRecord', ['root', 'site']),
		};
	}, []);
}
