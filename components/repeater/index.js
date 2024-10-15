import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { useEffect } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarButton } from '@wordpress/components';
import { plusCircle, close } from '@wordpress/icons';

/**
 * The Repeater component dynamically manages a list of items, allowing the addition and removal of items. Provides callbacks for handling changes to the list.
 *
 * @param {object} props - The component properties.
 * @param {Function} props.children - A render function for the repeater items. Receives item data, remove component, set item callback, remove item callback, item id, and key as arguments.
 * @param {Function} props.onChange - A callback function to handle changes to the value array.
 * @param {Array} [props.value=[]] - The current value array representing the list of items.
 * @param {Array} [props.defaultValue=[]] - The default value array that provides the structure for new items.
 * @param {string} [props.addButtonLabel='Add Item'] - Label for the add item button.
 * @param {string} [props.removeButtonLabel='Remove Item'] - Label for the remove item button.
 * @param {number} [props.minItems=1] - The minimum number of items that must be maintained in the list.
 * @param {number} [props.maxItems] - The maximum number of items allowed in the list.
 * @param {number} [props.initialItems=1] - The number of items to be initially added to the list.
 * @param {string} [props.removeLayout='vertical'] - The layout for the remove button (e.g., 'vertical', 'horizontal').
 * @param {boolean} [props.showBlockControls=true] - If true, displays block controls for adding an item.
 */
export const Repeater = ({
	children,
	onChange,
	value = [],
	defaultValue = [],
	addButtonLabel = 'Add Item',
	removeButtonLabel = 'Remove Item',
	minItems = 1,
	maxItems,
	initialItems = 1,
	removeLayout = 'vertical',
	showBlockControls = true,
}) => {
	/**
	 * Adds a specified number of initial items based on the default value.
	 *
	 * @param {number} count - The number of initial items to add.
	 * @return {void} This method does not return a value.
	 */
	function addInitialItems(count) {
		const defaultValueCopy = Array.isArray(defaultValue) ? [...defaultValue] : [];

		for (let i = 1; i < count; i++) {
			const newItem = { ...defaultValueCopy[0], id: uuid() };
			defaultValueCopy.push(newItem);
		}

		onChange(defaultValueCopy);
	}

	useEffect(() => {
		if (initialItems && initialItems > 0 && value.length === 0) {
			let numberofItemsToAdd = initialItems;
			if (maxItems && initialItems > maxItems) {
				numberofItemsToAdd = maxItems;
			}

			if (minItems !== 0) {
				addInitialItems(numberofItemsToAdd);
			}
		}
	}, [initialItems]); // eslint-disable-line

	/**
	 * Add Item
	 */
	function addItem() {
		if (maxItems && value.length >= maxItems) return; // Check if maxItems limit is reached

		// Check if the default value is an array of objects
		const defaultValueCopy =
			Array.isArray(defaultValue) && defaultValue.length > 0
				? [defaultValue[0]] // Take only the first object if it's an array
				: [];

		if (!defaultValue.length) {
			defaultValueCopy.push([]);
		}

		defaultValueCopy[0].id = uuid(); // Generate id for the default item

		onChange([...value, ...defaultValueCopy]);
	}

	/**
	 * Sets a new value at the specified index in the value array and triggers the onChange callback.
	 *
	 * @param {object | any} newValue - The new value to be set at the specified index. Can be an object or any other type.
	 * @param {number} index - The index at which the new value should be set.
	 * @return {void} This function does not return a value.
	 */
	function setItem(newValue, index) {
		const valueCopy = JSON.parse(JSON.stringify(value));

		if (typeof newValue === 'object' && newValue !== null) {
			valueCopy[index] = { ...valueCopy[index], ...newValue };
		} else {
			valueCopy[index] = newValue;
		}

		onChange(valueCopy);
	}

	/**
	 * Removes an item from a list at the specified index.
	 *
	 * @param {number} index - The position of the item to be removed.
	 * @return {undefined} This method does not return a value.
	 */
	function removeItem(index) {
		const valueCopy = JSON.parse(JSON.stringify(value)).filter((item, innerIndex) => index !== innerIndex);
		onChange(valueCopy);
	}

	return (
		<>
			{showBlockControls && (
				<BlockControls group="block">
					<ToolbarButton label={addButtonLabel} icon={plusCircle} onClick={() => addItem()} />
				</BlockControls>
			)}

			{value && value.length
				? value.map((item, key) => {
						const removeComponent =
							minItems !== value.length ? (
								<div className={`ds-repeater-remove-item ${removeLayout}`}>
									<Button icon={close} label={removeButtonLabel} onClick={() => removeItem(key)} />
								</div>
							) : null;

						return (
							// eslint-ignore-next-line
							<React.Fragment key={item?.uuid || key}>
								{children(
									item,
									removeComponent,
									(val) => setItem(val, key),
									() => removeItem(key),
									item.id,
									key,
								)}
							</React.Fragment>
						);
					})
				: null}

			{(!maxItems || value.length < maxItems) && (
				<div className="ds-repeater-add-item">
					<Button variant="link" onClick={() => addItem()} icon={plusCircle} iconPosition="right">
						{addButtonLabel}
					</Button>
				</div>
			)}
		</>
	);
};

Repeater.propTypes = {
	children: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	defaultValue: PropTypes.array,
	addButtonLabel: PropTypes.string,
	removeButtonLabel: PropTypes.string,
	minItems: PropTypes.number,
	maxItems: PropTypes.number,
	initialItems: PropTypes.number,
	removeLayout: PropTypes.string,
	showBlockControls: PropTypes.bool,
};
