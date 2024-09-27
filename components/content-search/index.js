import PropTypes from 'prop-types';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { useState } from '@wordpress/element';
import { TextControl, Spinner, NavigableMenu } from '@wordpress/components';
import SearchItem from './SearchItem';

/**
 * The `ContentSearch` component is designed to facilitate content search functionality within a user interface.
 *
 * It features a search input with configurable properties, such as placeholder, label, per page results, selected items, and search columns.
 * The component fetches items from the core data store based on the search keyword and other parameters,
 * and excludes already selected items from the search results.
 *
 * @param {object} props The properties or parameters required by the component.
 * @param {string} props.placeholder The placeholder text for the search input (default: 'Search').
 * @param {string} props.label The label text for the search input (default: '').
 * @param {number} props.perPage The number of results to display per page (default: 20).
 * @param {Array<object>} props.selectedItems The array of items that are already selected (default: []).
 * @param {Array<string>} props.searchColumns The columns to be considered for the search (default: ['post_title', 'post_content']).
 * @param {string} props.pickerType The type of picker, e.g., 'postType' or 'taxonomy' (default: 'postType').
 * @param {string} props.entityType The type of entity to search, e.g., 'post' or 'term' (default: 'post').
 * @param {Array<string>} props.storeKeys The keys to store in the reducer (default: []).
 * @param {Function} props.onSelectItem Callback function to be called when an item is selected.
 *
 * @returns {JSX.Element} The rendered ContentSearch component.
 */
export const ContentSearch = ({
	placeholder = 'Search',
	label = '',
	perPage = 20,
	selectedItems = [],
	searchColumns = ['post_title', 'post_content'],
	pickerType = 'postType',
	entityType = 'post',
	storeKeys = [],
	onSelectItem,
}) => {
	const [searchString, setSearchString] = useState('');
	const [selectedItem, setSelectedItem] = useState(null);

	const { items, hasResolved } = useSelect(
		(select) => {
			const query = {};

			if (pickerType === 'postType') {
				query.status = 'publish';
				query.post_type = entityType;
			}

			if (perPage) {
				query.per_page = perPage;
			}

			if (pickerType === 'taxonomy') {
				query.hide_empty = true;
			}

			if (searchString) {
				query.search = searchString;
				if (pickerType === 'postType') {
					query.orderby = 'parent';
				}
				query.order = 'asc';
			}

			if (pickerType === 'postType') {
				query.search_columns = searchColumns;
			}

			return {
				items: select(coreDataStore).getEntityRecords(pickerType, entityType, query),
				hasResolved: select(coreDataStore).hasFinishedResolution('getEntityRecords', [
					pickerType,
					entityType,
					query,
				]),
			};
		},
		[searchString, entityType],
	);

	// Filter out already selected items
	let filteredItems = [];
	if (hasResolved && items && items.length) {
		filteredItems = items.filter((item) => !selectedItems.some((selectedItem) => selectedItem.id === item.id));
	}

	const reduceItem = (item) => {
		let reducedItem = {};
		if (item && storeKeys && storeKeys.length > 0) {
			storeKeys.forEach((key) => {
				if (item.hasOwnProperty(key)) {
					reducedItem[key] = item[key];
				}
			});
		} else {
			reducedItem = item;
		}

		return reducedItem;
	};

	/**
	 * A function that handles the action of navigating to a specific item.
	 *
	 * If the item is 0, it sets the selected item to null.
	 * Otherwise, it reduces the item using the `reduceItem` function and sets it as the selected item.
	 *
	 * @param {number} item - The item to navigate to.
	 */
	const handleOnNavigate = (item) => {
		if (item === 0) {
			setSelectedItem(null);
		}

		const itemToStore = reduceItem(item);
		setSelectedItem(itemToStore);
	};

	/**
	 * Handles the selection of an item. This function performs the following actions:
	 * - Clears the current search string.
	 * - Reduces the item to a more manageable form.
	 * - Invokes the onSelectItem function with the reduced item.
	 *
	 * @param {object} item - The item that has been selected.
	 * @function handleItemSelection
	 */
	const handleItemSelection = (item) => {
		setSearchString('');

		const itemToStore = reduceItem(item);

		onSelectItem(itemToStore);
	};

	/**
	 * Handles the change event for the search string input.
	 *
	 * @param {string} keyword - The keyword added to the search input.
	 * Updates the search string state with the provided keyword.
	 */
	const handleSearchStringChange = (keyword) => {
		setSearchString(keyword);
	};

	const hasSearchString = !!searchString.length;
	const hasSearchResults = filteredItems && !!filteredItems.length;
	const isLoading = !hasResolved;

	return (
		<div className="ds-component-content-search">
			<NavigableMenu onNavigate={handleOnNavigate} orientation="vertical">
				<div className="ds-component-content-search__wrap">
					<TextControl
						label={label}
						value={searchString}
						onChange={(newSearchString) => handleSearchStringChange(newSearchString)}
						placeholder={placeholder}
						autoComplete="off"
					/>
				</div>

				{hasSearchString ? (
					<>
						<ul className="ds-component-content-search__list">
							{isLoading && (
								<li className="ds-component-content-search__list-spinner">
									<Spinner />
								</li>
							)}

							{!isLoading && !hasSearchResults && (
								<li className="ds-component-content-search__list-item nothing-found">
									Nothing found for the selected query.
								</li>
							)}

							{!isLoading &&
								hasSearchResults &&
								filteredItems.map((item, index) => {
									const { title, name } = item;

									if (pickerType === 'postType' && title && !title.rendered.length) {
										return null;
									}

									if (pickerType === 'taxonomy' && !name) {
										return null;
									}

									return (
										<li key={item.id} className="ds-component-content-search__list-item">
											<SearchItem
												onClick={() => handleItemSelection(item)}
												searchTerm={searchString}
												suggestion={item}
												isSelected={selectedItem === index + 1}
												pickerType={pickerType}
											/>
										</li>
									);
								})}
						</ul>
					</>
				) : null}
			</NavigableMenu>
		</div>
	);
};

SearchItem.ContentSearch = {
	placeholder: PropTypes.string,
	label: PropTypes.string,
	perPage: PropTypes.number,
	selectedItems: PropTypes.array,
	searchColumns: PropTypes.array,
	pickerType: PropTypes.string,
	entityType: PropTypes.string,
	storeKeys: PropTypes.array,
	onSelectItem: PropTypes.func.isRequired,
};
