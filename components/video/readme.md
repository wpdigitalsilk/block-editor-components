# Video Component

## Description

The `Video` component is a React component designed for rendering video content based on the provided media data. It supports displaying videos as part of the document content or as a background video. This component uses the `Placeholder` and `Spinner` components from the WordPress block editor library.

## Usage

```js
import { Video } from '@digitalsilk/block-editor-components';

const YourComponent = (props) => {
    const { attributes, setAttributes } = props;
    const { videoId, videoSource, videoUrl, videoControls} = attributes;

    return (
        <Video
            id={videoId}
            videoSource={videoSource}
            videoUrl={videoUrl}
            videoControls={videoControls}
            isBackground={false}
            isPreview={false}
        />
    );
};
```

## Props

### `id` (required for internal videos)

The Attachment ID. 

### `videoSource`

A string representing the source of the video. Defaults to `'internal'`.

### `videoUrl`

A string representing the URL of the video (used for external videos).


### `videoControls`

An object with properties for controlling video playback. It should have the following structure:


```js
{
    autoplay: false,
    isMuted: true,
    showControls: true,
    posterId: 0,
    posterSize: 'full',
}

```

#### `autoplay` 

A boolean indicating whether the video will autoplay. Defaults to `false`.

#### `isMuted` 

A boolean indicating whether the video will be muted. Defaults to `true`.

#### `showControls` 

A boolean indicating whether the video will have native controls. Defaults to `true`.

#### `posterId` 

Poster image attachment id, defaults to 0.

#### `posterSize` 

Poster image size, defaults to `'full'`.

### `isBackground`

A boolean indicating whether the video is used as a background. Defaults to `false`.


### `isPreview`

A boolean indicating whether the video is rendered as a preview. Defaults to `false`.


## Examples

#### Internal 

```js
<Video
    id={1}
    videoSource="internal"
    videoUrl=""
    videoControls={{
        autoplay: false,
        isMuted: true,
        showControls: true,
        posterId: 2,
        posterSize: 'full',
    }}
    isBackground={false}
    isPreview={false}
/>
```

#### External 

```js
<Video
    id={0}
    videoSource="external"
    videoUrl="https://example.com/video.mp4"
    videoControls={{
        autoplay: false,
        isMuted: true,
        showControls: true,
        posterId: 2,
        posterSize: 'full',
    }}
    isBackground={false}
    isPreview={false}
/>
```

## Block.json default attributes

```js
"attributes": {
    "videoId": {
        "type": "number",
        "default": 0
    },
    "videoSource": {
        "type": "string",
        "default": "internal"
    },
    "videoUrl": {
        "type": "string",
        "default": ""
    },
    "videoControls": {
        "type": "object",
        "default": {
            "autoplay": false,
            "isMuted": true,
            "showControls": true,
            "posterId": 0,
            "posterSize": 'full'
        }
    }
}
```
