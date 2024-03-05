# IconPicker Component

## Description

The `IconPicker` component is a React component designed for selecting icons from a predefined list. It provides an interface with an icon grid, allowing users to visually choose an icon. The icons are coming from the theme and they are exposed at `'/ds/v1/icons/'` REST endpoint.

## Usage

```js
import { IconPicker } from "@digitalsilk/block-editor-components";

const YourComponent = (props) => {
	const { attributes, setAttributes } = props;
	const { icon } = attributes;

	const handleIconSelect = (value) => {
		setAttributes({ icon: value });
	};

	return <IconPicker icon={icon} onSelect={handleIconSelect} width={40} height={40} />;
};
```

## Props

### `icon`

The selected icon name. The name should match the file name excluding `.svg` from `assets/icons` folder:

### `width`

The width of each icon in the grid. Defaults to `40`.

### `height`

The height of each icon in the grid. Defaults to `40`.

### `onSelect` (required)

A function to handle the icon selection.

### `isControl`

A boolean indicating whether the component is used as a control in `<InspectorControls/>`. Defaults to `true`.

### `isExpanded`

A boolean setting the `<PanelBody />` prop `initialOpen`. Defaults to `true`.

### `panelTitle`

The `<PanelBody />` title prop. Defaults to `Icon Picker`.

## Example

```js
<IconPicker
	icon={icon}
	width={20}
	height={20}
	onSelect={(selectedIcon) => {
		// Handle the updated icon data
		console.log(selectedIcon);
	}}
	isControl={isControl}
	panelTitle={__("Different Panel Title")}
	isExpanded
/>
```

## Block.json default attributes

```js
"attributes": {
    "icon": {
        "type": "string",
        "default": "cart-1"
    }
}
```
