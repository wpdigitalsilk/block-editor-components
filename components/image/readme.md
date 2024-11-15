# Image Component

## Description

The `Image` component is a React component designed for rendering images based on the provided media data. It supports displaying images as part of the document content or as a background image. This component uses the `Placeholder` and `Spinner` components from the WordPress block editor library.

## Usage

```js
import { Image } from '@digitalsilk/block-editor-components';

const YourComponent = (props) => {
    const { attributes, setAttributes } = props;
    const { imageId, imageSize, focalPoint} = attributes;

    return (
        <Image
            id={imageId}
            imageSize={imageSize}
            focalPoint={focalPoint}
            isBackground={false}
        />
    );
};
```

## Props

### `id` (required)

The Attachment ID. 

### `imageSize`

A string representing the size of the image to be displayed. Defaults to `'full'`.

### `focalPoint`

An object with `x` and `y` properties representing the focal point of the image. Defaults to `{ x: 0.5, y: 0.5 }`. 

It should have the following structure:

```js
{
  x: 0.5, 
  y: 0.5 
}
```

### `isBackground`

A boolean indicating whether the image is used as a background. Defaults to `false`.

### `aspectRatio`

A string indicating the image aspect ratio. Defaults to `''`.

Supported aspect ratios are: `1-1`, `3-2`, `2-3`, `4-3`, `3-4`, `16-9`, `9-16`, `21-9`, `9-21`

### `className`

A string to pass the additional class name. Defaults to an empty string.

## Example

```js
<Image
    id={1}
    imageSize="full"
    focalPoint={{ x: 0.5, y: 0.5 }}
    isBackground={false}
    aspectRatio="16-9"
/>
```

## Block.json default attributes

```js
"attributes": {
    "imageId": {
        "type": "number",
        "default": 0
    },
    "imageSize": {
        "type": "string",
        "default": "full"
    },
    "aspectRatio": {
        "type": "string",
        "default": ""
    },
    "focalPoint": {
        "type": "object",
        "default": {
            "x": 0.5,
            "y": 0.5
        }
    }
}
```
