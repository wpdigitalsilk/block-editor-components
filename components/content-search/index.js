import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { useState } from '@wordpress/element';
import { TextControl, Spinner, NavigableMenu } from '@wordpress/components';
import SearchItem from './SearchItem';

export const ContentSearch = ({
	onSelectItem,
	placeholder,
	label,
	perPage = 30,
	postType,
	selectedItems = [],
	mode = 'post',
}) => {
	const [searchString, setSearchString] = useState('');
	const [selectedItem, setSelectedItem] = useState(null);

	const { items, hasResolved } = useSelect(
		(select) => {
			let pickerType = 'postType';
			if (mode === 'term') {
				pickerType = 'taxonomy';
			}

			const query = {
				status: 'publish',
				post_type: postType,
			};

			if (perPage) {
				query.per_page = perPage;
			}

			if (searchString) {
				query.search = searchString;
			}

			query.search_columns = ['post_title', 'post_content'];

			return {
				items: select(coreDataStore).getEntityRecords(pickerType, postType, query),
				hasResolved: select(coreDataStore).hasFinishedResolution('getEntityRecords', [
					pickerType,
					postType,
					query,
				]),
			};
		},
		[searchString, postType]
	);

	// Filter out already selected items
	let filteredItems = [];
	if (hasResolved && items && items.length) {
		filteredItems = items.filter((item) => !selectedItems.some((selectedItem) => selectedItem.id === item.id));
	}

	/**
	 * handleSelection
	 *
	 * update the selected item in state to either the selected item or null if the
	 * selected item does not have a valid id
	 *
	 * @param {*} item item
	 */
	const handleOnNavigate = (item) => {
		if (item === 0) {
			setSelectedItem(null);
		}

		setSelectedItem(item);
	};

	/**
	 * handleItemSelection
	 *
	 * reset the search input & item container
	 * trigger the onSelectItem callback passed in via props
	 *
	 * @param {*} item item
	 */
	const handleItemSelection = (item) => {
		setSearchString('');

		onSelectItem(item);
	};

	/**
	 * handleSearchStringChange
	 *
	 * Using the keyword and the list of tags that are linked to the parent
	 * block search for posts/terms/users that match and return them to the
	 * autocomplete component.
	 *
	 * @param {string} keyword search query string
	 *
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
									{__('Nothing found for the selected query.')}
								</li>
							)}

							{!isLoading &&
								hasSearchResults &&
								filteredItems.map((item, index) => {
									const { title, name } = item;

									if (mode === 'post' && title && !title.rendered.length) {
										return null;
									}

									if (mode === 'term' && !name) {
										return null;
									}
									return (
										<li key={item.id} className="ds-component-content-search__list-item">
											<SearchItem
												onClick={() => handleItemSelection(item)}
												searchTerm={searchString}
												suggestion={item}
												isSelected={selectedItem === index + 1}
												showUrl={false}
												mode={mode}
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
