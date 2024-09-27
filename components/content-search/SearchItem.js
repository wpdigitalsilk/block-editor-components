import PropTypes from 'prop-types';
import { safeDecodeURI, filterURLForDisplay } from '@wordpress/url';
import { decodeEntities } from '@wordpress/html-entities';
import { Button, TextHighlight, Tooltip, __experimentalTruncate as Truncate } from '@wordpress/components';
import { getTextContent, create } from '@wordpress/rich-text';

/**
 * SearchItem component
 *
 * @typedef {object} Suggestion
 * @property {number} id - The unique identifier of the suggestion item.
 * @property {object} title - The title object of the suggestion item.
 * @property {string} [title.rendered] - The rendered title string for postType items.
 * @property {string} name - The name of the taxonomy item.
 * @property {string} link - The URL link associated with the suggestion item.
 * @property {number} parent - The parent identifier of the taxonomy item.
 * @param {object} props - The props object for the SearchItem component.
 * @param {Suggestion} props.suggestion - The suggestion data for the search item.
 * @param {string} props.searchTerm - The current search term used for highlighting.
 * @param {boolean} props.isSelected - Indicates if the search item is selected.
 * @param {string} props.pickerType - The type of picker, determines title rendering ('postType' or 'taxonomy').
 * @param {Function} props.onClick - Callback function to handle click event.
 *
 * @returns {JSX.Element} Search item component with highlighted search term and clickable link.
 */
const SearchItem = ({ suggestion = {}, searchTerm = '', isSelected = false, pickerType = 'postType', onClick }) => {
	const { id, title = {}, name = '', link = '', parent = 0 } = suggestion;
	let displayTitle = '';

	if (pickerType === 'postType') {
		displayTitle = title?.rendered || '';
	}

	if (pickerType === 'taxonomy') {
		displayTitle = name;
	}

	const richTextContent = create({ html: displayTitle });
	const textContent = getTextContent(richTextContent);
	const titleContent = decodeEntities(textContent);

	return (
		<>
			<Tooltip text={decodeEntities(displayTitle)}>
				<Button
					id={id}
					onClick={onClick}
					className={`ds-component-content-search__list-item-button ${isSelected && 'is-selected'}`}
				>
					<span className="item-title">
						{parent > 0 && <span>- </span>}
						<TextHighlight text={titleContent} highlight={searchTerm} />
					</span>
					{link && (
						<span className="item-info">
							<Truncate numberOfLines={1} limit={55} ellipsizeMode="middle">
								{filterURLForDisplay(safeDecodeURI(link)) || ''}
							</Truncate>
						</span>
					)}
				</Button>
			</Tooltip>
		</>
	);
};

SearchItem.propTypes = {
	suggestion: PropTypes.object.isRequired,
	searchTerm: PropTypes.string,
	isSelected: PropTypes.bool,
	pickerType: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default SearchItem;
