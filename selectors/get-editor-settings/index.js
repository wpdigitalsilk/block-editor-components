import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

export function getEditorSettings() {
	return useSelect((select) => {
		const { getSettings } = select(blockEditorStore);

		const settings = getSettings();

		return settings;
	}, []);
}
