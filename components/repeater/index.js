import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { useEffect } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarButton } from '@wordpress/components';
import { plusCircle, close } from '@wordpress/icons';

/**
 * A component for rendering and managing a dynamic list of items. Each item provides controls
 * for adding, modifying, and removing entries. The appearance and behavior of the list can be
 * customized via props.
 *
 * @param {object} props - Properties for configuring the Repeater component.
 * @param {React.ReactNode} props.children - Function to render the children components with provided callbacks for managing items.
 * @param {Function} props.onChange - Callback function to execute when there is a change in the list of items.
 * @param {Array} [props.value=[]] - Current list of items.
 * @param {Array} [props.defaultValue=[]] - Default list of items to populate initially.
 * @param {string} [props.addButtonLabel='Add Item'] - Label for the button to add new items.
 * @param {string} [props.removeButtonLabel='Remove Item'] - Label for the button to remove items.
 * @param {number} [props.minItems=1] - Minimum number of items allowed in the list.
 * @param {number} [props.maxItems] - Maximum number of items allowed in the list.
 * @param {number} [props.initialItems=1] - Number of items to initially populate the list with.
 * @param {string} [props.removeLayout='vertical'] - Layout direction for the remove button (e.g., "vertical" or "horizontal").
 * @param {boolean} [props.showBlockControls=true] - Flag to show or hide the block controls for managing items.
 * @returns {JSX.Element} The Repeater component.
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
	 * Add Initial Items
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
	}, [initialItems]);

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
							<React.Fragment key={key}>
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
