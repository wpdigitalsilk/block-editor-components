# Repeater Component

## Description

The `Repeater` component is a versatile React component designed for managing and rendering repeating sets of content. It provides a user-friendly way to add, remove, and update repeated items. This component is especially useful for scenarios where dynamic lists or sets of items need to be handled.

## Usage

```js
import { Repeater } from '@digitalsilk/block-editor-components';

const YourComponent = (props) => {
    const { value, onChange, defaultValue, addButtonLabel, removeButtonLabel } = props;

    return (
        <Repeater
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
            addButtonLabel={addButtonLabel}
            removeButtonLabel={removeButtonLabel}
            initialItems={2}
            minItems={1}
            maxItems={5}
        >
            {(item, removeComponent, setItem, removeItem, itemId, key) => (
                // Your child component content
            )}
        </Repeater>
    );
};
```

## Props

### `value` (required)

An array representing the current set of items.

### `onChange` (required)

A function to handle changes to the set of items.

### `defaultValue`

An array representing the default set of items.

### `addButtonLabel`

A string representing the label for the "Add Item" button. Defaults to `'Add Item'`.

### `removeButtonLabel`

A string representing the label for the "Remove Item" button. Defaults to `'Remove Item'`.

### `initialItems`

Number of initial items to show. Defaults to `1`

### `minItems`

A Number of minimum items allowed. Defaults to `1`

### `maxItems`

A Number of maximum items allowed.

### `removeLayout`

String. vertical or horizontal. Defaults to vertical

### `showBlockControls`

Bool. Control should `BlockControls` be used or not

## Child Component Props

When using the `Repeater` component, your child component receives the following props:

-   `item`: The current item in the set.
-   `removeComponent`: A component for removing the corresponding item.
-   `setItem`: A function to update the current item.
-   `removeItem`: A function to remove the corresponding item.
-   `itemId`: The unique identifier for the current item.
-   `key`: The index of the current item in the array.

## Examples

```js
<Repeater
    value={[{ text: 'Item 1' }, { text: 'Item 2' }]}
    onChange={(newValue) => console.log(newValue)}
    defaultValue={[]}
    addButtonLabel="Add New Item"
    removeButtonLabel="Remove This Item"
    initialItems={2}
    maxItems={5}
>
    {(item, removeComponent, setItem, removeItem, itemId, key) => (
        // Your child component content
    )}
</Repeater>
```

## Block.json default attributes

```js
"attributes": {
    "items": {
        "type": "array",
        "default": []
    }
}
```
