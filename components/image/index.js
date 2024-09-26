import { Spinner, Placeholder } from '@wordpress/components';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { getMedia } from '../../selectors';

/**
 * Component that renders an image.
 *
 * @param {object} props - Properties passed to the component.
 * @param {number} props.id - The ID of the image.
 * @param {string} [props.imageSize='full'] - The size of the image to be displayed.
 * @param {object} [props.focalPoint={x: 0.5, y: 0.5}] - Focal point coordinates for the image.
 * @param {boolean} [props.isBackground=false] - Whether the image is used as a background.
 * @param {string} [props.className] - Additional CSS class names for the image.
 * @param {object} [props.rest] - Additional properties to be passed to the component.
 *
 * @returns {JSX.Element} The image component.
 */
export const Image = ({
	id,
	imageSize = 'full',
	focalPoint = {
		x: 0.5,
		y: 0.5,
	},
	isBackground = false,
	className = '',
	...rest
}) => {
	const hasImage = !!id;

	// @ts-ignore
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

Image.propTypes = {
	id: PropTypes.number.isRequired,
	imageSize: PropTypes.string,
	focalPoint: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number,
	}),
	isBackground: PropTypes.bool,
	className: PropTypes.string,
};
