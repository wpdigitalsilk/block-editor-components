import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';

export const ThemeIcon = (props) => {
	const { icon, width, height } = props;

	return (
		<>
			{icon && icon?.name && (
				<svg className={`icon icon-${icon.name}`} aria-hidden="true" width={width} height={height} role="img">
					<use href={`#sprite-${icon.name}`} />
				</svg>
			)}
		</>
	);
};

ThemeIcon.defaultProps = {
	icon: {},
	width: 40,
	height: 40,
};

ThemeIcon.propTypes = {
	icon: PropTypes.object.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
};
