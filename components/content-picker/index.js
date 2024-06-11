import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SortableList from './SortableList';
import { ContentSearch } from '../content-search';

// Content Picker
export const ContentPicker = ({
	items,
	onPickChange,
	postType,
	searchLabel,
	searchPlaceholder,
	searchMode,
	searchPerPage,
	isOrderable,
	maxContentItems,
	wrapperClass,
	wrapperElement,
	sortOriantation,
	displayComponent,
	displayComponentProps,
}) => {
	const handleSelect = (item) => {
		const newItems = [
			{
				uuid: uuidv4(),
				...item,
			},
			...items,
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
							perPage={searchPerPage}
							postType={postType}
							selectedItems={items}
							mode={searchMode}
						/>
					</>
				) : (
					''
				)}

				{Boolean(items?.length) ? (
					// this is render
					<TagName className={`ds-content-picker__items ${wrapperClass}`}>
						<SortableList
							posts={items}
							isOrderable={isOrderable}
							handleItemDelete={onDeleteItem}
							setPosts={onPickChange}
							displayComponent={displayComponent}
							displayComponentProps={displayComponentProps}
							sortOriantation={sortOriantation}
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

ContentPicker.defaultProps = {
	items: [],
	postType: 'post',
	searchLabel: '',
	searchPlaceholder: 'Search',
	searchMode: 'post',
	searchPerPage: 20,
	isOrderable: true,
	maxContentItems: 99,
	wrapperClass: '',
	wrapperElement: 'div',
	sortOriantation: 'vertical',
};

ContentPicker.propTypes = {
	items: PropTypes.array,
	onPickChange: PropTypes.func.isRequired,
	postType: PropTypes.string,
	searchLabel: PropTypes.string,
	searchPlaceholder: PropTypes.string,
	searchMode: PropTypes.string,
	searchPerPage: PropTypes.number,
	isOrderable: PropTypes.bool,
	maxContentItems: PropTypes.number,
	wrapperClass: PropTypes.string,
	wrapperElement: PropTypes.string,
	sortOriantation: PropTypes.string,
};
