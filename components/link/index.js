/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
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
 * A React functional component to handle link creation and editing with rich text capabilities.
 *
 * @param {object} props The properties passed to this component.
 * @param {string} props.value The displayed text of the link.
 * @param {string} props.url The URL to which the link points.
 * @param {string} props.type The type of the link for categorization or custom handling.
 * @param {boolean} props.opensInNewTab Flag to determine if the link should open in a new tab.
 * @param {string} props.kind The kind of link used for suggestion filtering.
 * @param {string} props.placeholder Placeholder text for the link input.
 * @param {boolean} props.isControl Flag to determine if the link is a control element.
 * @param {string} props.controlLabel The label description for the control link type.
 * @param {string} props.className Additional class names for custom styling.
 * @param {Function} props.onLinkChange Callback function to handle link changes.
 * @param {Function} props.onTextChange Callback function to handle text changes.
 * @param {Function} props.onLinkRemove Callback function to handle link removal.
 * @param {object} props.rest Additional properties to be passed down to child components.
 *
 * @returns {JSX.Element} The rendered React component for creating and editing a link.
 */
const Link = ({
	value = '',
	url = '',
	type = '',
	opensInNewTab = false,
	kind = '',
	placeholder = 'Link text...',
	isControl = false,
	controlLabel = 'Link Text',
	className = '',
	onLinkChange,
	onTextChange,
	onLinkRemove,
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
		title: value, // don't allow HTML to display inside the <LinkControl>
	};

	/**
	 * Check if the URL and Value are set. If yes, then the component is valid.
	 * Otherwise, we will output a visual reminder to the editor that one of the
	 * two needs to be set.
	 */
	useEffect(() => {
		setIsValidLink(!!url && !!value);
	}, [url, value]);

	return (
		<>
			{isControl && <p className="ds-link__label-desc">{controlLabel}</p>}
			<RichText
				tagName="a"
				className={`ds-link__label ${className} ${isControl ? 'contol-label' : ''}`}
				value={value}
				onChange={onTextChange}
				placeholder={placeholder}
				__unstablePastePlainText
				allowedFormats={[]}
				onClick={openPopover}
				ref={linkRef}
				{...rest}
			/>

			{!isValidLink && (
				<Tooltip text="URL or Text has not been set">
					<span>
						<Icon icon="warning" />
					</span>
				</Tooltip>
			)}

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

Link.propTypes = {
	value: PropTypes.string,
	url: PropTypes.string,
	onLinkChange: PropTypes.func.isRequired,
	onLinkRemove: PropTypes.func,
	onTextChange: PropTypes.func.isRequired,
	opensInNewTab: PropTypes.bool.isRequired,
	type: PropTypes.string,
	kind: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	isControl: PropTypes.bool,
	controlLabel: PropTypes.string,
};

export { Link };
