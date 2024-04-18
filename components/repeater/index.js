import React from 'react';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarButton } from '@wordpress/components';
import { plusCircle, close } from '@wordpress/icons';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

export const Repeater = ({
	children,
	onChange,
	value,
	defaultValue = [],
	addButtonLabel,
	removeButtonLabel,
	minItems,
	maxItems,
	initialItems,
	removeLayout,
	showBlockControls,
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

			addInitialItems(numberofItemsToAdd);
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
	 * Set Item
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
	 * Remove Item
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

			{value &&
				value.length &&
				value.map((item, key) => {
					const removeComponent = minItems !== value.length && (
						<div className={`ds-repeater-remove-item ${removeLayout}`}>
							<Button icon={close} label={removeButtonLabel} onClick={() => removeItem(key)} />
						</div>
					);

					return (
						<React.Fragment key={key}>
							{children(
								item,
								removeComponent,
								(val) => setItem(val, key),
								() => removeItem(key),
								item.id,
								key
							)}
						</React.Fragment>
					);
				})}

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
	defaultValue: PropTypes.array,
	addButtonLabel: PropTypes.string,
	removeButtonLabel: PropTypes.string,
	minItems: PropTypes.number,
	maxItems: PropTypes.number,
	initialItems: PropTypes.number,
	removeLayout: PropTypes.string,
	showBlockControls: PropTypes.bool,
};

Repeater.defaultProps = {
	defaultValue: [],
	addButtonLabel: __('Add Item'),
	removeButtonLabel: __('Remove Item'),
	minItems: 1,
	initialItems: 1,
	removeLayout: 'vertical',
	showBlockControls: true,
};
