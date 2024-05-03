import { Spinner, Placeholder } from '@wordpress/components';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { getMedia } from '../../selectors';

export const Image = (props) => {
	const { id, imageSize, focalPoint, isBackground, className, ...rest } = props;

	const hasImage = !!id;
	const { mediaDetails, isResolvingMedia } = getMedia(id);

	const imageUrl = mediaDetails?.media_details?.sizes?.[imageSize]?.source_url ?? mediaDetails?.source_url;
	const altText = mediaDetails?.alt_text;

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
						<Placeholder
							className={classnames(className, 'ds-media__image', 'ds-media-placeholder')}
							withIllustration
						/>
					) : (
						<img
							src={imageUrl}
							className={classnames(className, 'ds-media__image')}
							alt={altText}
							{...rest}
						/>
					)}
				</div>
			) : (
				<>
					{!hasImage ? (
						<Placeholder
							className={classnames(className, 'ds-media__image', 'ds-media-placeholder')}
							withIllustration
						/>
					) : isResolvingMedia ? (
						<Spinner />
					) : (
						<img src={imageUrl} className={classnames(className, 'ds-media__image')} alt={altText} />
					)}
				</>
			)}
		</>
	);
};

Image.defaultProps = {
	imageSize: 'full',
	focalPoint: {
		x: 0.5,
		y: 0.5,
	},
	isBackground: false,
};

Image.propTypes = {
	id: PropTypes.number.isRequired,
	imageSize: PropTypes.string,
	focalPoint: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number,
	}),
	isBackground: PropTypes.bool,
};
