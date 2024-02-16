import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import styled from '@emotion/styled';

const IconList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 12px;
	li {
		display: flex;
		align-items: center;
		color: #000;
		justify-content: center;
		margin: 0;
		padding: 3px;
		border: 2px solid transparent;
	}

	li.selected {
		border-color: #000;
	}
`;

const IconPicker = (props) => {
	const { onSelectIcon, icon, width, height } = props; // New prop to handle icon selection
	const [spriteUrl, setSpriteUrl] = useState('');
	const [icons, setIcons] = useState([]);
	const [selectedIcon, setSelectedIcon] = useState(icon);

	useEffect(() => {
		const fetchIcons = async () => {
			try {
				const response = await apiFetch({
					path: '/ds/v1/icons/',
				});
				setSpriteUrl(response?.sprite || '');
				setIcons(response?.icons || []);
			} catch (error) {
				console.warn('Error fetching icons:', error);
			}
		};

		fetchIcons();
	}, []);

	const handleIconClick = (selectedIcon) => {
		setSelectedIcon(selectedIcon);
		onSelectIcon(selectedIcon); // Pass the selected icon to the parent component
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Icon Picker')}>
					<IconList>
						{icons.map((icon, index) => (
							<li key={index} onClick={() => handleIconClick(icon)} className={selectedIcon?.name === icon.name ? 'selected' : ''}>
								<img src={icon.url} alt={icon.name} />
							</li>
						))}
					</IconList>
				</PanelBody>
			</InspectorControls>

			<svg className={`icon icon-${icon}`} aria-hidden="true" width={width} height={height} role="img">
				<use href={`${spriteUrl}#${icon}`} />
			</svg>
		</>
	);
};

IconPicker.defaultProps = {
	width: 44,
	height: 44,
};

IconPicker.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};

export { IconPicker };
