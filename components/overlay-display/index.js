import PropTypes from 'prop-types';

// Set Defaults
const defaultOverlay = {
	hasOverlay: false,
	overlayColor: {},
	overlayGradient: {},
	overlayOpacity: 25,
	overlayType: 'color',
};

/**
 * OverlayDisplay is a React functional component that renders a background overlay
 * with customizable properties such as type, color, gradient, and opacity.
 *
 * @param {object} props - The properties object to configure the overlay display.
 * @param {object} [props.overlay={}] - The overlay configuration object.
 * @returns {JSX.Element} - A JSX element representing the background overlay.
 */
export const OverlayDisplay = ({ overlay = {} }) => {
	const mergedOverlay = {
		...defaultOverlay,
		...overlay,
	};
	const { hasOverlay, overlayType, overlayColor, overlayGradient, overlayOpacity } = mergedOverlay;

	const divStyle = {
		opacity: overlayOpacity / 100,
	};

	const styles = {
		style: {
			...divStyle,
		},
	};

	let css_class_name = '';

	if (overlayType === 'color' && overlayColor) {
		const colorSlug = overlayColor?.slug ? overlayColor.slug : '';
		if (colorSlug) {
			css_class_name = `has-${colorSlug}-background-color`;
		}
	}

	if (overlayType === 'gradient' && overlayGradient) {
		const gradientSlug = overlayGradient?.slug ? overlayGradient.slug : '';
		if (gradientSlug) {
			css_class_name = `has-${gradientSlug}-gradient-background`;
		}
	}

	return <> {hasOverlay && <div className={`background-overlay ${css_class_name}`} {...styles} />}</>;
};

OverlayDisplay.propTypes = {
	overlay: PropTypes.object,
};
