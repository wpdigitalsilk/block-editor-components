# OverlayPicker Component

## Description

The `OverlayPicker` component is a React component designed for selecting and customizing overlays for background elements. It provides a user interface to control various overlay settings such as opacity, type (color or gradient), color selection, and gradient selection.


## Usage

```js
import { OverlayPicker } from '@digitalsilk/block-editor-components';

const YourComponent = (props) => {
    const { attributes, setAttributes } = props;
    const { overlay } = attributes;

    const handleOverlaySelect = (newOverlayData) => {
        // Handle the selected overlay data
        setAttributes({ overlay: newOverlayData });
    };

    return (
        <OverlayPicker
            overlay={overlay}
            onSelect={handleOverlaySelect}
        />
    );
};
```

## Props

### `overlay` (required)

An object representing the overlay data. It should have the following structure:

```js
{
    hasOverlay: false,
    overlayColor: {},
    overlayGradient: {},
    overlayOpacity: 25,
    overlayType: 'color',
}
```

#### `hasOverlay`

A boolean indicating whether we should show the overlay. Defaults to `false`

#### `overlayColor`

An object containing the data about the selected color. Defaults to `{}`

#### `overlayGradient`

An object containing the data about the selected gradient. Defaults to `{}`

#### `overlayOpacity`

A number indicating the overlay opacity. Min 0, Max 100. Defaults to `25`

#### `overlayType`

The type of the overlay to be used, possible values: `'color'` and `'gradient'`. Defaults to `'color'`

### `onSelect` (required)

A function to handle the selection and customization of overlay settings.

### `isControl`

A boolean indicating whether the component is used as a control in `<InspectorControls/>`. Defaults to `true`.


## Example

```js
<OverlayPicker
    overlay={{
        hasOverlay: false,
        overlayColor: {},
        overlayGradient: {},
        overlayOpacity: 25,
        overlayType: 'color',
    }}
    onSelect={(newOverlayData) => {
        // Handle the updated overlay data
        console.log(newOverlayData);
    }}
    isControl
/>
```


## Block.json default attributes

```js
"attributes": {
    "overlay": {
        "type": "object",
        "default": {
            "hasOverlay": false,
            "overlayColor": {},
            "overlayGradient": {},
            "overlayOpacity": 25,
            "overlayType": 'color'
        }
    }
}
```
