import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	ColorPalette,
	GradientPicker,
	PanelBody,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	ToggleControl,
} from '@wordpress/components';
import PropTypes from 'prop-types';
import { useEditorSettings } from '../../selectors';

const OverlayPanelContent = (props) => {
	const { overlay, onSelect } = props;
	const { hasOverlay, overlayType, overlayColor, overlayGradient, overlayOpacity } = overlay;
	const { colors, gradients } = useEditorSettings();

	const handleOverlayChange = (value) => {
		const newOverlayData = { ...overlay, ...value };
		onSelect(newOverlayData);
	};

	const handleColorSelect = (colorHex) => {
		const matchingItem = colors.find((item) => item.color === colorHex);

		if (matchingItem) {
			handleOverlayChange({ overlayColor: matchingItem });
		} else {
			handleOverlayChange({ overlayColor: {} });
		}
	};

	const handleGradientSelect = (gradient) => {
		const matchingItem = gradients.find((item) => item.gradient === gradient);

		if (matchingItem) {
			handleOverlayChange({ overlayGradient: matchingItem });
		} else {
			handleOverlayChange({ overlayGradient: {} });
		}
	};

	return (
		<>
			<PanelBody title={__('Background Overlay')}>
				<ToggleControl
					__nextHasNoMarginBottom
					label={__('Has Overlay')}
					onChange={() => handleOverlayChange({ hasOverlay: !hasOverlay })}
					checked={hasOverlay}
				/>
			</PanelBody>

			{hasOverlay && (
				<PanelBody title={__('Overlay Settings')}>
					<RangeControl
						__nextHasNoMargin
						label={__('Overlay Opacity')}
						value={overlayOpacity}
						onChange={(opacity) => handleOverlayChange({ overlayOpacity: opacity })}
						min={0}
						max={100}
					/>

					<ToggleGroupControl
						label={__('Overlay Type')}
						value={overlayType}
						isBlock
						onChange={(value) => handleOverlayChange({ overlayType: value })}
					>
						<ToggleGroupControlOption value="color" label={__('Color')} />
						<ToggleGroupControlOption value="gradient" label={__('Gradient')} />
					</ToggleGroupControl>

					{overlayType === 'color' && (
						<ColorPalette
							colors={colors}
							value={overlayColor?.color}
							onChange={(color) => handleColorSelect(color)}
							disableCustomColors
						/>
					)}

					{overlayType === 'gradient' && (
						<GradientPicker
							__nextHasNoMargin
							value={overlayGradient?.gradient ? overlayGradient.gradient : ''}
							gradients={gradients}
							onChange={(currentGradient) => handleGradientSelect(currentGradient)}
							disableCustomGradients
							asButtons
						/>
					)}
				</PanelBody>
			)}
		</>
	);
};

export const OverlayPicker = (props) => {
	const { isControl } = props;

	return (
		<>
			{isControl ? (
				<OverlayPanelContent {...props} />
			) : (
				<InspectorControls>
					<OverlayPanelContent {...props} />
				</InspectorControls>
			)}
		</>
	);
};

OverlayPicker.defaultProps = {
	overlay: {
		hasOverlay: false,
		overlayColor: {},
		overlayGradient: {},
		overlayOpacity: 25,
		overlayType: 'color',
	},
	isControl: true,
};

OverlayPicker.propTypes = {
	overlay: PropTypes.object,
	onSelect: PropTypes.func.isRequired,
	isControl: PropTypes.bool,
};
