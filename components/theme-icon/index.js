import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';

export const ThemeIcon = (props) => {
	const { icon, width, height } = props;

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

ThemeIcon.defaultProps = {
	width: 40,
	height: 40,
};

ThemeIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
};
