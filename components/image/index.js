import { __ } from '@wordpress/i18n';
import { Spinner, Placeholder } from '@wordpress/components';
import PropTypes from 'prop-types';
import { useMedia } from '../../hooks/use-media';

export const Image = (props) => {
	const { id, size, focalPoint, isBackground, ...rest } = props;

	const hasImage = !!id;
	const { media, isResolvingMedia } = useMedia(id);

	const imageUrl = media?.media_details?.sizes?.[size]?.source_url ?? media?.source_url;
	const altText = media?.alt_text;

	if (isBackground && focalPoint && (focalPoint.x !== 0.5 || focalPoint.y !== 0.5)) {
		const focalPointStyle = {
			objectFit: 'cover',
			objectPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
		};

		rest.style = {
			...rest.style,
			...focalPointStyle,
		};
	}

	return (
		<>
			{isBackground ? (
				<div className="ds-media is-background">
					{!hasImage ? (
						<Placeholder className="ds-media__image ds-media-placeholder" withIllustration />
					) : (
						<img src={imageUrl} className="ds-media__image" alt={altText} {...rest} />
					)}
				</div>
			) : (
				<>
					{!hasImage ? (
						<Placeholder className="ds-media__image ds-media-placeholder" withIllustration />
					) : isResolvingMedia ? (
						<Spinner />
					) : (
						<img src={imageUrl} className="ds-media__image" alt={altText} />
					)}
				</>
			)}
		</>
	);
};

Image.defaultProps = {
	size: 'full',
	focalPoint: { x: 0.5, y: 0.5 },
	isBackground: false,
};

Image.propTypes = {
	id: PropTypes.number.isRequired,
	size: PropTypes.string,
	focalPoint: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number,
	}),
	isBackground: PropTypes.bool,
};
