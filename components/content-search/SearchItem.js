import PropTypes from 'prop-types';
import { safeDecodeURI, filterURLForDisplay } from '@wordpress/url';
import { decodeEntities } from '@wordpress/html-entities';
import { Button, TextHighlight, Tooltip, __experimentalTruncate as Truncate } from '@wordpress/components';
import { getTextContent, create } from '@wordpress/rich-text';

// Search Item
const SearchItem = ({ suggestion, onClick, searchTerm, isSelected, mode }) => {
	const { id, title, link, name, type } = suggestion;
	let displayTitle = '';

	if (mode === 'term') {
		displayTitle = name || '';
	} else {
		displayTitle = title?.rendered || '';
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

SearchItem.defaultProps = {
	searchTerm: '',
	isSelected: false,
	mode: 'post',
};

SearchItem.propTypes = {
	searchTerm: PropTypes.string,
	suggestion: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
	isSelected: PropTypes.bool,
	mode: PropTypes.string,
};

export default SearchItem;
