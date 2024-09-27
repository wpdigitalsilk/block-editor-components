import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SortableList from './SortableList';
import { ContentSearch } from '../content-search';

/**
 * ContentPicker component for selecting and ordering content items.
 *
 * @param {object} props - The properties object.
 * @param {object[]} [props.items=[]] - Array of selected content items.
 * @param {string} [props.searchLabel=''] - Label for the search input.
 * @param {string} [props.searchPlaceholder='Search'] - Placeholder for the search input.
 * @param {number} [props.searchPerPage=20] - Number of results to display per page in the search.
 * @param {string[]} [props.searchColumns=['post_title', 'post_content']] - Columns to search within content.
 * @param {boolean} [props.isOrderable=true] - Whether the selected items can be reordered.
 * @param {number} [props.maxContentItems=99] - Maximum number of items that can be selected.
 * @param {string} [props.wrapperClass=''] - CSS class for the wrapper element.
 * @param {string} [props.wrapperElement='div'] - HTML element type for the wrapper.
 * @param {string} [props.childElement='div'] - HTML element type for each child item.
 * @param {string} [props.childClass=''] - CSS class for each child item.
 * @param {string} [props.sortOrientation='vertical'] - Orientation of the sortable list ('vertical' or 'horizontal').
 * @param {string} [props.pickerType='postType'] - Type of items being picked.
 * @param {string} [props.entityType='post'] - Entity type of the content items.
 * @param {string[]} [props.storeKeys=[]] - Keys to identify store for fetching content.
 * @param {React.Component|null} [props.displayComponent=null] - Custom component for displaying content items.
 * @param {object} [props.displayComponentProps={}] - Props to pass to the custom display component.
 * @param {Function} props.onPickChange - Callback function called when the selected items change.
 */
export const ContentPicker = ({
	items = [],
	searchLabel = '',
	searchPlaceholder = 'Search',
	searchPerPage = 20,
	searchColumns = ['post_title', 'post_content'],
	isOrderable = true,
	maxContentItems = 99,
	wrapperClass = '',
	wrapperElement = 'div',
	childElement = 'div',
	childClass = '',
	sortOrientation = 'vertical',
	pickerType = 'postType',
	entityType = 'post',
	storeKeys = [],
	displayComponent = null,
	displayComponentProps = {},
	onPickChange,
}) => {
	const handleSelect = (item) => {
		const newItems = [
			...items,
			{
				uuid: uuidv4(),
				...item,
			},
		];
		onPickChange(newItems);
	};

	const onDeleteItem = (deletedItem) => {
		const newItems = items.filter(({ id, uuid }) => {
			if (deletedItem.uuid) {
				return uuid !== deletedItem.uuid;
			}
			return id !== deletedItem.id;
		});

		onPickChange(newItems);
	};

	const TagName = `${wrapperElement}`;

	return (
		<div className="ds-content-picker">
			<div className="ds-content-picker__wrap">
				{!items.length || (items.length && items.length < maxContentItems) ? (
					<>
						<ContentSearch
							placeholder={searchPlaceholder}
							label={searchLabel}
							onSelectItem={handleSelect}
							selectedItems={items}
							perPage={searchPerPage}
							searchColumns={searchColumns}
							pickerType={pickerType}
							entityType={entityType}
							storeKeys={storeKeys}
						/>
					</>
				) : (
					''
				)}

				{items?.length ? (
					// this is render
					<TagName className={`ds-content-picker__items ${wrapperClass}`}>
						<SortableList
							posts={items}
							isOrderable={isOrderable}
							handleItemDelete={onDeleteItem}
							setPosts={onPickChange}
							displayComponent={displayComponent}
							displayComponentProps={displayComponentProps}
							sortOrientation={sortOrientation}
							childElement={childElement}
							childClass={childClass}
							pickerType={pickerType}
						/>
					</TagName>
				) : (
					<div className="ds-content-picker__no-items">
						<span>{`You don't have any items selected.`}</span>
					</div>
				)}

				{items.length && items.length >= maxContentItems ? (
					<div className="ds-content-picker__max-items">
						<span>{`You selected the max number of items (${maxContentItems})`}</span>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};

ContentPicker.propTypes = {
	items: PropTypes.array,
	searchLabel: PropTypes.string,
	searchPlaceholder: PropTypes.string,
	searchPerPage: PropTypes.number,
	searchColumns: PropTypes.array,
	isOrderable: PropTypes.bool,
	maxContentItems: PropTypes.number,
	wrapperClass: PropTypes.string,
	wrapperElement: PropTypes.string,
	childElement: PropTypes.string,
	childClass: PropTypes.string,
	sortOrientation: PropTypes.string,
	pickerType: PropTypes.string,
	entityType: PropTypes.string,
	storeKeys: PropTypes.array,
	displayComponent: PropTypes.elementType,
	displayComponentProps: PropTypes.object,
	onPickChange: PropTypes.func.isRequired,
};
