/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { useState, useEffect, useRef } from '@wordpress/element';
import { Popover, Icon, Tooltip } from '@wordpress/components';
import { __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';

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
 * LinkWrap is a React functional component that renders a link element
 * (or other specified tag) with an optional popover for link control and management.
 *
 * @param {object} props - Properties passed to the component.
 * @param {string} props.linkText - The text to display for the link.
 * @param {string} props.url - The URL the link should navigate to.
 * @param {boolean} props.opensInNewTab - Determines if the link should open in a new tab.
 * @param {string} props.type - The type of link (used to filter suggestions).
 * @param {string} props.kind - The kind of link (used to filter suggestions).
 * @param {string} props.tagName - The HTML tag to use for the link element.
 * @param {Function} props.onLinkChange - Callback function to handle link changes.
 * @param {Function} props.onLinkRemove - Callback function to handle link removal.
 * @param {JSX.Element} props.children - Child elements to be rendered inside the link.
 * @param {object} props.rest - Additional properties to be spread onto the link element.
 *
 * @returns {JSX.Element} The rendered React component for creating and editing a link.
 */
export const LinkWrap = ({
	linkText = '',
	url = '',
	opensInNewTab = false,
	type = '',
	kind = '',
	tagName = 'a',
	onLinkChange,
	onLinkRemove,
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
					<Tooltip text="URL has not been set">
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
								title: 'Open in new tab',
							},
						]}
					/>
				</Popover>
			)}
		</>
	);
};

LinkWrap.propTypes = {
	linkText: PropTypes.string,
	url: PropTypes.string,
	opensInNewTab: PropTypes.bool.isRequired,
	type: PropTypes.string,
	kind: PropTypes.string,
	tagName: PropTypes.string,
	onLinkChange: PropTypes.func.isRequired,
	onLinkRemove: PropTypes.func,
};
