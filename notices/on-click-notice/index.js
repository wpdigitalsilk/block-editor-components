import { store as noticeStore } from '@wordpress/notices';
import { useDispatch } from '@wordpress/data';

/**
 * Creates a warning notice when a link click is prevented in the editor.
 *
 * @param {string} instanceId - Unique identifier for the instance of the notice.
 * @param {string} [message=__('Links are disabled in the editor.')] - Warning message to be displayed.
 * @returns {Function} Event handler that shows the warning notice upon link click.
 */
export const onClickNotice = (instanceId, message = 'Links are disabled in the editor.') => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { createWarningNotice, removeNotice } = useDispatch(noticeStore);
	let noticeId;

	const showRedirectionPreventedNotice = (event) => {
		event.preventDefault();
		// Remove previous warning if any, to show one at a time per block.
		removeNotice(noticeId);
		noticeId = `ds-theme/click-redirection-prevented/${instanceId}`;
		createWarningNotice(message, {
			id: noticeId,
			type: 'snackbar',
		});
	};

	return showRedirectionPreventedNotice;
};
