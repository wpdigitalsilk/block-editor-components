# MediaToolbar Component

## Description

The `MediaToolbar` component is a React component designed for handling media-related toolbar actions, such as replacing, adding, and removing media. It is specifically designed for integration with the WordPress Block Editor. It can be used with the [`<MediaPicker />`](../media-picker/readme.md) component

## Usage

```js
import { MediaToolbar } from '@digitalsilk/block-editor-components';

const YourComponent = (props) => {
    const { attributes, setAttributes } = props;
    const { attachmentId, mediaType } = attributes;

    const handleMediaSelect = (selectedMedia) => {
        // Handle the selected media data
        setAttributes({ attachmentId: selectedMedia?.id ? selectedMedia.id : 0 });
    };

    const handleMediaRemove = (selectedMedia) => {
        // Handle the selected media remove
        setAttributes({ attachmentId: 0 });
    };

    return (
        <MediaToolbar
            id={attachmentId}
            mediaType={mediaType}
            onSelect={handleMediaSelect}
            onRemove={handleMediaRemove}
        />
    );
};
```

## Props

### `id` (required)

The Attachment ID. 

#### `onSelect` (required)

A function callback to handle media selection. It is triggered when the user selects media.

#### `onRemove` (required)

A function callback to handle media removal. It is triggered when the user chooses to remove media.

#### `mediaType` 

A string representing the type of media. Valid values are `'image'` or `'video'`.

#### `multiple`

A boolean indicating whether multiple media selection is allowed.


## Example

```js
<MediaToolbar
    id={123}
    onSelect={(selectedMedia) => {
        // Handle media selection logic
    }}
    onRemove={() => {
        // Handle media removal logic
    }}
    mediaType="image"
    multiple={false}
/>
```


## Block.json default attributes

```js
"attributes": {
    "attachmentId": {
        "type": "number",
        "default": 0
    },
    "mediaType": {
        "type": "string",
        "default": "image"
    }
}
```
