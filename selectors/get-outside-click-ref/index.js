import { useEffect, useRef } from '@wordpress/element';

/**
 * getOutsideClickRef
 *
 * @param {Function} onClickOutside callback that will get invoked when the user clicks outside of the target
 * @returns {object} ref to the target element
 */
export function getOutsideClickRef(onClickOutside) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const ref = useRef();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const listener = (event) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			onClickOutside(event);
		};
		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, onClickOutside]);

	return ref;
}
