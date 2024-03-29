# OverlayDisplay Component

## Description

The `OverlayDisplay` component is a React component designed for displaying background overlays based on the provided overlay data. Overlay data is generated by the [`<OverlayPicker />`](../overlay-picker/readme.md) component. It renders a background overlay with customizable settings such as type (color or gradient), color selection, gradient selection, opacity, and visibility.


## Usage

```js
import { OverlayDisplay } from '@digitalsilk/block-editor-components';

const YourComponent = (props) => {
    const { attributes, setAttributes } = props;
    const { overlay } = attributes;

    return (
        <OverlayDisplay
            overlay={overlay}
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


## Example

```js
<OverlayDisplay
    overlay={{
        hasOverlay: false,
        overlayColor: {},
        overlayGradient: {},
        overlayOpacity: 25,
        overlayType: 'color',
    }}
/>
```


## Block.json default attributes

See [`<OverlayPicker />`](../overlay-picker/readme.md) component for more details, this component uses the same data structure.

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
