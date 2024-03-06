import React from 'react';
import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarButton } from '@wordpress/components';
import { plusCircle, close } from '@wordpress/icons';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const ActionsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 20px;
	background-color: rgb(30 30 30);
	border-radius: 5px;
	font-size: 14px;
	color: var(--wp--preset--color--white, #fff);
	position: absolute;
	top: 100%;
	left: 0;
	.components-button {
		margin: 0 auto;
		color: var(--wp--preset--color--white, #fff);
		height: 100%;
		text-decoration: none;
		width: 100%;
		border-radius: 0;
		&.has-icon {
			padding: 8px 15px;
			justify-content: center;
		}
	}
`;

const RemoveWrapper = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: rgb(30 30 30);
	border-radius: 5px;
	font-size: 14px;
	border: 1px solid #fff;
	color: #fff;
	top: 0;
	left: 100%;
	height: 100%;
	width: 36px;
	margin-left: 20px;
	.components-button {
		margin: 0 auto;
		color: #fff;
		height: 100%;
		&.has-icon {
			min-width: 26px;
			padding: 5px;
		}
	}
`;

export const Repeater = ({ children, onChange, value, defaultValue, addButtonLabel, removeButtonLabel }) => {
	/**
	 * Add Item
	 */
	function addItem() {
		const defaultValueCopy = JSON.parse(JSON.stringify(defaultValue));

		if (!defaultValue.length) {
			defaultValueCopy.push([]);
		}

		defaultValueCopy[0].id = uuid();

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
			<BlockControls group="block">
				<ToolbarButton label={addButtonLabel} icon={plusCircle} onClick={() => addItem()} />
			</BlockControls>

			{value.map((item, key) => {
				const removeComponent = (
					<RemoveWrapper>
						<Button icon={close} label={removeButtonLabel} onClick={() => removeItem(key)} />
					</RemoveWrapper>
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
			<ActionsWrapper>
				<Button variant="link" onClick={() => addItem()} icon={plusCircle} iconPosition="right">
					{addButtonLabel}
				</Button>
			</ActionsWrapper>
		</>
	);
};

Repeater.propTypes = {
	children: PropTypes.func.isRequired,
	defaultValue: PropTypes.array,
	addButtonLabel: PropTypes.string,
	removeButtonLabel: PropTypes.string,
};

Repeater.defaultProps = {
	defaultValue: [],
	addButtonLabel: __('Add Item'),
	removeButtonLabel: __('Remove Item'),
};
