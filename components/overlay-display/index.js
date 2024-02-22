import PropTypes from 'prop-types';

export const OverlayDisplay = (props) => {
	const { overlay } = props;
	const { hasOverlay, overlayType, overlayColor, overlayGradient, overlayOpacity } = overlay;

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

OverlayDisplay.defaultProps = {
	overlay: {
		hasOverlay: false,
		overlayColor: {},
		overlayGradient: {},
		overlayOpacity: 25,
		overlayType: 'color',
	},
};

OverlayDisplay.propTypes = {
	overlay: PropTypes.object,
};
