import PropTypes from 'prop-types';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { ThemeIcon } from '../theme-icon';

/**
 * IconPanelContent component renders a panel containing a list of icons.
 *
 * @param {object} props - The properties object.
 * @param {string} props.icon - The currently selected icon.
 * @param {number} props.width - The width of the icons to be displayed.
 * @param {number} props.height - The height of the icons to be displayed.
 * @param {string} props.panelTitle - The title of the panel.
 * @param {boolean} props.isExpanded - Whether the panel is expanded initially.
 * @param {Function} props.onSelect - Callback function that is called when an icon is selected.
 *
 * @returns {JSX.Element} The  component JSX elements. */
const IconPanelContent = ({ icon, width, height, panelTitle, isExpanded, onSelect }) => {
	const [icons, setIcons] = useState([]);
	const [selectedIcon, setSelectedIcon] = useState(icon);

	useEffect(() => {
		const fetchIcons = async () => {
			try {
				const response = await apiFetch({
					path: '/ds/v1/icons/',
				});
				setIcons(response?.icons || []);
			} catch (error) {
				console.log('Error fetching icons'); // eslint-disable-line
				console.warn(error); // eslint-disable-line
			}
		};

		fetchIcons();
	}, []);

	/**
	 * Handles the selection of an icon.
	 *
	 * @param {string} selectedIcon - The identifier or name of the icon that has been selected.
	 *
	 */
	const handleIconSelect = (selectedIcon) => {
		setSelectedIcon(selectedIcon);
		onSelect(selectedIcon);
	};

	return (
		<>
			<PanelBody title={panelTitle} initialOpen={isExpanded}>
				<ul className="ds-editor-icon-list">
					{icons.map((icon) => (
						<li
							key={icon}
							onClick={() => handleIconSelect(icon)}
							className={selectedIcon === icon ? 'selected' : ''}
						>
							<ThemeIcon icon={icon} width={width} height={height} />
						</li>
					))}
				</ul>
			</PanelBody>
		</>
	);
};

// Set Default Props
const defaultIconProps = {
	icon: '',
	width: 24,
	height: 24,
	panelTitle: 'Icon Picker',
	isExpanded: true,
	isControl: true,
};

/**
 * IconPicker Component
 *
 * A component used to render an icon picker panel. It supports both controlled and inspector control modes.
 *
 * @param {object} props - The properties object.
 * @param {string} [props.icon=''] - The initial icon to be selected.
 * @param {number} [props.width=24] - The width of the icon display.
 * @param {number} [props.height=24] - The height of the icon display.
 * @param {boolean} [props.isControl=true] - Determines if the component is in controlled mode.
 * @param {string} [props.panelTitle='Icon Picker'] - The title of the icon picker panel.
 * @param {boolean} [props.isExpanded=true] - Determines if the panel is expanded.
 * @param {Function} props.onSelect - Callback function to handle the selection of an icon.
 *
 * @returns {JSX.Element} The rendered IconPicker component.
 */
export const IconPicker = ({
	icon = '',
	width = 24,
	height = 24,
	panelTitle = 'Icon Picker',
	isExpanded = true,
	isControl = true,
	onSelect,
}) => {
	const mergedProps = {
		...defaultIconProps,
		icon,
		width,
		height,
		panelTitle,
		isExpanded,
		isControl,
	};

	return (
		<>
			{isControl ? (
				<IconPanelContent onSelect={onSelect} {...mergedProps} />
			) : (
				<InspectorControls>
					<IconPanelContent onSelect={onSelect} {...mergedProps} />
				</InspectorControls>
			)}
		</>
	);
};

IconPicker.propTypes = {
	icon: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	panelTitle: PropTypes.string,
	isControl: PropTypes.bool,
	isExpanded: PropTypes.bool,
	onSelect: PropTypes.func.isRequired,
};
