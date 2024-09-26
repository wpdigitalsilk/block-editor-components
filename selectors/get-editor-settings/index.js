import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

/**
 * Retrieves the current editor settings from the block editor store.
 *
 * @return {object} The current settings of the block editor.
 */
export function getEditorSettings() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useSelect((select) => {
		const { getSettings } = select(blockEditorStore);

		const settings = getSettings();

		return settings;
	}, []);
}
