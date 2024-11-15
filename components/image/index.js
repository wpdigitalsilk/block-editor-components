import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Spinner, Placeholder } from '@wordpress/components';
import { getMedia } from '../../selectors';

/**
 * Image component to display an image with various properties and states.
 *
 * @param {object} params The parameters for the image component.
 * @param {string} params.id The ID of the image.
 * @param {string} [params.imageSize='full'] The size of the image. Default is 'full'.
 * @param {string} [params.aspectRatio=''] The aspect ratio of the image.
 * @param {object} [params.focalPoint={ x: 0.5, y: 0.5 }] The focal point for the image.
 * @param {boolean} [params.isBackground=false] Flag if the image is a background image. Default is false.
 * @param {string} [params.className=''] The CSS class for custom styling.
 * @param {object} [params.rest] Additional properties passed to the image element.
 * @returns {JSX.Element} The JSX code to render the image component.
 */
export const Image = ({
	id,
	imageSize = 'full',
	aspectRatio = '',
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

	let aspectRatioClassName = '';
	if (aspectRatio) {
		aspectRatioClassName = `has-aspect-ratio-${aspectRatio}`;
	}

	return (
		<>
			{isBackground ? (
				<div className="ds-media is-background">
					{!hasImage ? (
						<Placeholder
							className={classnames(
								className,
								'ds-media__image',
								'ds-media-placeholder',
								aspectRatioClassName,
							)}
							withIllustration
						/>
					) : (
						<img
							src={imageUrl}
							className={classnames(className, 'ds-media__image', aspectRatioClassName)}
							alt={altText}
							{...rest}
						/>
					)}
				</div>
			) : (
				<>
					{!hasImage ? (
						<Placeholder
							className={classnames(
								className,
								'ds-media__image',
								'ds-media-placeholder',
								aspectRatioClassName,
							)}
							withIllustration
						/>
					) : isResolvingMedia ? (
						<Spinner />
					) : (
						<img
							src={imageUrl}
							className={classnames(className, 'ds-media__image', aspectRatioClassName)}
							alt={altText}
						/>
					)}
				</>
			)}
		</>
	);
};

Image.propTypes = {
	id: PropTypes.number.isRequired,
	imageSize: PropTypes.string,
	aspectRatio: PropTypes.string,
	focalPoint: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number,
	}),
	isBackground: PropTypes.bool,
	className: PropTypes.string,
};
