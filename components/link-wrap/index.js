/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useRef } from '@wordpress/element';
import { Popover, Icon, Tooltip } from '@wordpress/components';
import { __experimentalLinkControl as LinkControl, RichText } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import { getOutsideClickRef } from '../../selectors';

/**
 * Given the Link block's type attribute, return the query params to give to
 * /wp/v2/search.
 *
 * @param {string} type Link block's type attribute.
 * @param {string} kind Link block's entity of kind (post-type|taxonomy)
 * @returns {{ type?: string, subtype?: string }} Search query params.
 */
function getSuggestionsQuery(type, kind) {
	switch (type) {
		case 'post':
		case 'page':
			return { type: 'post', subtype: type };
		case 'category':
			return { type: 'term', subtype: 'category' };
		case 'tag':
			return { type: 'term', subtype: 'post_tag' };
		case 'post_format':
			return { type: 'post-format' };
	}

	switch (kind) {
		case 'taxonomy':
			return { type: 'term', subtype: type };
		case 'post-type':
			return { type: 'post', subtype: type };
		default:
			return {};
	}
}

/**
 * Link Wrap component that can be used inside other Gutenberg blocks for setting up URLs.
 *
 */
export const LinkWrap = ({
	type,
	linkText,
	url,
	opensInNewTab,
	tagName,
	onLinkChange,
	onLinkRemove,
	kind,
	children,
	...rest
}) => {
	const [isPopoverVisible, setIsPopoverVisible] = useState(false);
	const [isValidLink, setIsValidLink] = useState(false);
	const openPopover = () => setIsPopoverVisible(true);
	const closePopover = () => setIsPopoverVisible(false);

	const linkRef = useRef();
	const popoverRef = getOutsideClickRef(closePopover);

	const link = {
		url,
		opensInNewTab,
		title: linkText,
	};

	const TagName = `${tagName}`;

	/**
	 * Check if the URL is set. If yes, then the component is valid.
	 * Otherwise, we will output a visual reminder
	 */
	useEffect(() => {
		setIsValidLink(!!url);
	}, [url]);

	return (
		<>
			<TagName onClick={openPopover} ref={linkRef} {...rest}>
				{children}

				{!isValidLink && (
					<Tooltip text={__('URL has not been set')}>
						<span className="invalid-link">
							<Icon icon="warning" />
						</span>
					</Tooltip>
				)}
			</TagName>

			{isPopoverVisible && (
				<Popover anchor={linkRef.current} ref={popoverRef} focusOnMount={false}>
					<LinkControl
						hasTextControl
						value={link}
						showInitialSuggestions
						noDirectEntry={!!type}
						noURLSuggestion={!!type}
						suggestionsQuery={getSuggestionsQuery(type, kind)}
						onChange={onLinkChange}
						onRemove={onLinkRemove}
						settings={[
							{
								id: 'opensInNewTab',
								title: __('Open in new tab'),
							},
						]}
					/>
				</Popover>
			)}
		</>
	);
};

LinkWrap.defaultProps = {
	linkText: '',
	url: '',
	onLinkRemove: undefined,
	type: '',
	kind: '',
	tagName: 'a',
};

LinkWrap.propTypes = {
	linkText: PropTypes.string,
	url: PropTypes.string,
	onLinkChange: PropTypes.func.isRequired,
	onLinkRemove: PropTypes.func,
	opensInNewTab: PropTypes.bool.isRequired,
	type: PropTypes.string,
	kind: PropTypes.string,
	tagName: PropTypes.string,
};
