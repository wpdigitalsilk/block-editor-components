import PropTypes from 'prop-types';

/**
 * Represents an icon component that renders an SVG icon.
 *
 * @param {object} props - The properties object.
 * @param {string} props.icon - The name of the icon to be rendered.
 * @param {number} [props.width=24] - The width of the icon in pixels.
 * @param {number} [props.height=24] - The height of the icon in pixels.
 * @returns {JSX.Element|null} The rendered SVG icon or null if no icon name is provided.
 */
export const ThemeIcon = ({ icon, width = 24, height = 24 }) => {
	return (
		<>
			{icon && (
				<svg className={`icon icon-${icon}`} aria-hidden="true" width={width} height={height} role="img">
					<use href={`#sprite-${icon}`} />
				</svg>
			)}
		</>
	);
};

ThemeIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
};
