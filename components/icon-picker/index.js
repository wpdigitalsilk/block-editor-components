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

const IconPanelContent = (props) => {
	const { onSelect, icon, width, height } = props; // New prop to handle icon selection
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
				console.log('Error fetching icons');
				console.warn(error);
			}
		};

		fetchIcons();
	}, []);

	const handleIconSelect = (selectedIcon) => {
		setSelectedIcon(selectedIcon);
		onSelect(selectedIcon);
	};

	return (
		<>
			<PanelBody title={__('Icon Picker')}>
				<IconList>
					{icons.map((icon) => (
						<li
							key={icon.name}
							onClick={() => handleIconSelect(icon)}
							className={selectedIcon?.name === icon.name ? 'selected' : ''}
						>
							<img src={icon.url} alt={icon.name} width={width} height={height} />
						</li>
					))}
				</IconList>
			</PanelBody>
		</>
	);
};

export const IconPicker = (props) => {
	const { isControl } = props;

	return (
		<>
			{isControl ? (
				<IconPanelContent {...props} />
			) : (
				<InspectorControls>
					<IconPanelContent {...props} />
				</InspectorControls>
			)}
		</>
	);
};

IconPicker.defaultProps = {
	icon: {},
	width: 40,
	height: 40,
	isControl: true,
};

IconPicker.propTypes = {
	icon: PropTypes.object,
	width: PropTypes.number,
	height: PropTypes.number,
	onSelect: PropTypes.func.isRequired,
	isControl: PropTypes.bool,
};
