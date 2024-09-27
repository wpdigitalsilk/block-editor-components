import PropTypes from 'prop-types';
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
import { getEditorSettings } from '../../selectors';

/**
 * OverlayPanelContent component is responsible for rendering and managing the
 * overlay settings panel within a UI, allowing users to configure overlay properties
 * such as enabling/disabling the overlay, setting overlay opacity, choosing between
 * color and gradient overlay types, and selecting specific colors or gradients.
 *
 * @param {object} props - The properties object.
 * @param {object} props.overlay - The overlay configuration object.
 * @param {Function} props.onSelect - Callback function to handle overlay changes.
 */
const OverlayPanelContent = ({ overlay, onSelect }) => {
	// @ts-ignore
	const { hasOverlay, overlayType, overlayColor, overlayGradient, overlayOpacity } = overlay;
	// @ts-ignore
	const { colors, gradients } = getEditorSettings();

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
		const matchingItem = gradients.find((item) => item?.gradient === gradient);

		if (matchingItem) {
			handleOverlayChange({ overlayGradient: matchingItem });
		} else {
			handleOverlayChange({ overlayGradient: {} });
		}
	};

	return (
		<>
			<PanelBody title="Background Overlay">
				<ToggleControl
					__nextHasNoMarginBottom
					label="Has Overlay"
					onChange={() => handleOverlayChange({ hasOverlay: !hasOverlay })}
					checked={hasOverlay}
				/>
			</PanelBody>

			{hasOverlay && (
				<PanelBody title="Overlay Settings">
					<RangeControl
						__nextHasNoMargin
						label="Overlay Opacity"
						value={overlayOpacity}
						onChange={(opacity) => handleOverlayChange({ overlayOpacity: opacity })}
						min={0}
						max={100}
					/>

					<ToggleGroupControl
						label="Overlay Type"
						value={overlayType}
						isBlock
						onChange={(value) => handleOverlayChange({ overlayType: value })}
					>
						<ToggleGroupControlOption value="color" label="Color" />
						<ToggleGroupControlOption value="gradient" label="Gradient" />
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

// Set overlay defaults
const defaultOverlay = {
	hasOverlay: false,
	overlayColor: {},
	overlayGradient: {},
	overlayOpacity: 25,
	overlayType: 'color',
};

/**
 * OverlayPicker Component
 *
 * This component renders an overlay selection panel. Depending on the value
 * of the `isControl` prop, it either wraps the content in an
 * `InspectorControls` component or not.
 *
 * @param {object} props - The properties object.
 * @param {object} [props.overlay={}] - Custom overlay configuration.
 * @param {boolean} [props.isControl=true] - Determines if the content should be
 * wrapped in an `InspectorControls` component.
 * @param {Function} props.onSelect - Callback function invoked when an overlay item is selected.
 */
export const OverlayPicker = ({ overlay = {}, isControl = true, onSelect }) => {
	const mergedOverlay = {
		...defaultOverlay,
		...overlay,
	};
	return (
		<>
			{isControl ? (
				<OverlayPanelContent overlay={mergedOverlay} onSelect={onSelect} />
			) : (
				<InspectorControls>
					<OverlayPanelContent overlay={mergedOverlay} onSelect={onSelect} />
				</InspectorControls>
			)}
		</>
	);
};

OverlayPicker.propTypes = {
	overlay: PropTypes.object,
	onSelect: PropTypes.func.isRequired,
	isControl: PropTypes.bool,
};
