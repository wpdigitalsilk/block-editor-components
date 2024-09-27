# Media Picker Component

## Description

The `MediaPicker` component is a WordPress Gutenberg block editor component designed for handling media selection and configuration. It provides an interface for choosing and configuring images and videos within the block editor.

## Usage

```js
import { MediaPicker } from '@digitalsilk/block-editor-components';

const YourComponent = (props) => {
	const { attributes, setAttributes } = props;
	const { mediaData } = attributes;

	const handleMediaSelect = (selectedMedia) => {
		// Handle the selected media data
		setAttributes({ mediaData: selectedMedia });
	};

	return (
		<MediaPicker
			onSelect={handleMediaSelect}
			media={mediaData}
			displayFocalPicker={true}
			allowMediaTypeSwitch={false}
			controlPanelLabel="Media Settings"
			multiple={false}
			showBlockControls={true}
			isBackground={false}
			isControl={true}
		/>
	);
};
```

## Props

### `onSelect` (required)

A function that will be called when a media item is selected. It receives the selected media data.

### `media` (required)

An object representing the initial media data. It should have the following structure:

```js
{
	id: 0,
	mediaType: 'image',
	lazyLoad: true,
	srcset: true,
	imageSize: 'full',
	videoSource: 'internal',
	videoUrl: '',
	focalPoint: {
		x: 0.5,
		y: 0.5,
	},
	videoControls: {
		autoplay: false,
		isMuted: true,
		showControls: true,
		posterId: 0,
		posterSize: 'full',
	},
}
```

### `displayFocalPicker`

A boolean indicating whether to display the focal point picker. Defaults to `false`.

### `allowMediaTypeSwitch`

A boolean indicating whether to allow switching between image and video types. Defaults to `false`.

### `controlPanelLabel`

A string representing the label for the control panel. Defaults to `'Media Settings'`.

### `multiple`

A boolean indicating whether to allow selecting multiple media items. Defaults to `false`.

### `isControl`

A boolean indicating whether the component is used as a control in `<InspectorControls/>`. Defaults to `true`.

### `showBlockControls`

A boolean indicating whether to show block controls. Defaults to `true`.

### `isBackground`

A boolean indicating whether the media is used as a background. Defaults to `false`.

## Example

```js
<MediaPicker
	onSelect={handleMediaSelect}
	media={mediaData}
	displayFocalPicker={true}
	allowMediaTypeSwitch={false}
	controlPanelLabel="Custom Settings"
	multiple={true}
	isControl={false}
	showBlockControls={true}
	isBackground={false}
/>
```

## Block.json default attributes

```js
"attributes": {
	"mediaData": {
	"type": "object",
		"default": {
			"id": 0,
			"mediaType": "image",
			"lazyLoad": true,
			"srcset": true,
			"imageSize": "full",
			"videoSource": "internal",
			"videoUrl": "",
			"videoControls": {
				"autoplay": false,
				"isMuted": true,
				"showControls": true,
				"posterId": 0,
				"posterSize": "full"
			},
			"focalPoint": {
				"x": 0.5,
				"y": 0.5
			}
		}
	}
}
```
