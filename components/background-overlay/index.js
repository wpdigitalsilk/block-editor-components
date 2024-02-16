import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, GradientPicker, PanelBody, RangeControl, __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOption as ToggleGroupControlOption } from '@wordpress/components';
import PropTypes from 'prop-types';
import { useEditorSettings } from '../../hooks';

export const BackgroundOverlay = (props) => {
	const { overlayType, overlayColor, overlayGradient, overlayOpacity, onSetOverlayType, onSetOverlayColor, onSetOverlayGradient, onSetOverlayOpacity, ...rest } = props;

	const { colors, gradients } = useEditorSettings();

	const handleColorSelect = (colorHex) => {
		const matchingItem = colors.find((item) => item.color === colorHex);

		if (matchingItem) {
			onSetOverlayColor(matchingItem);
		} else {
			onSetOverlayColor({});
		}
	};

	const handleGradientSelect = (gradient) => {
		const matchingItem = gradients.find((item) => item.gradient === gradient);

		if (matchingItem) {
			onSetOverlayGradient(matchingItem);
		} else {
			onSetOverlayGradient({});
		}
	};

	const divStyle = {
		opacity: overlayOpacity / 100,
	};

	rest.style = {
		...rest.style,
		...divStyle,
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

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Overlay Settings')}>
					<RangeControl __nextHasNoMargin label={__('Overlay Opacity')} value={overlayOpacity} onChange={(opacity) => onSetOverlayOpacity(opacity)} min={0} max={100} />

					<ToggleGroupControl label={__('Overlay Type')} value={overlayType} isBlock onChange={(value) => onSetOverlayType(value)}>
						<ToggleGroupControlOption value="color" label={__('Color')} />
						<ToggleGroupControlOption value="gradient" label={__('Gradient')} />
					</ToggleGroupControl>

					{overlayType === 'color' && <ColorPalette colors={colors} value={overlayColor?.color} onChange={(color) => handleColorSelect(color)} disableCustomColors />}

					{overlayType === 'gradient' && <GradientPicker __nextHasNoMargin value={overlayGradient?.gradient ? overlayGradient.gradient : ''} gradients={gradients} onChange={(currentGradient) => handleGradientSelect(currentGradient)} disableCustomGradients asButtons />}
				</PanelBody>
			</InspectorControls>

			<div className={`background-overlay ${css_class_name}`} {...rest} />
		</>
	);
};

BackgroundOverlay.defaultProps = {
	overlayType: '',
	overlayColor: {},
	overlayGradient: {},
	overlayOpacity: 25,
};

BackgroundOverlay.propTypes = {
	overlayType: PropTypes.string,
	overlayColor: PropTypes.object,
	overlayGradient: PropTypes.object,
	overlayOpacity: PropTypes.number,
	onSetOverlayType: PropTypes.func.isRequired,
	onSetOverlayColor: PropTypes.func.isRequired,
	onSetOverlayGradient: PropTypes.func.isRequired,
	onSetOverlayOpacity: PropTypes.func.isRequired,
};
