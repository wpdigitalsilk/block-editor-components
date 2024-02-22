# getMedia Function

## Description

The `getMedia` function is a utility for retrieving media details and resolution status from the WordPress core data store. It utilizes the `useSelect` hook from the` @wordpress/data` package to access the `getMedia`, `isResolving`, and `hasFinishedResolution` selectors from the` @wordpress/core-data` store.


## Usage

```js
import { getMedia } from '@digitalsilk/block-editor-components';

const YourComponent = ({ attachmentId }) => {
    const { mediaDetails, isResolvingMedia, hasResolvedMedia } = getMedia(attachmentId);

    // ... Perform logic based on media details and resolution status

    if(isResolvingMedia){
        return (
            // do something while it's loading
        );
    }

    return (
        // Your component JSX
    );
};
=
```

## Parameters

- `attachmentId` (number): The ID of the media attachment.

## Return Object

- `mediaDetails` (object): Details of the media attachment.
- `isResolvingMedia` (boolean): Indicates whether the media is currently resolving.
- `hasResolvedMedia` (boolean): Indicates whether the media resolution has finished.

## Example

```js
import { getMedia } from '@digitalsilk/block-editor-components';

const YourComponent = ({ attachmentId }) => {
    const { mediaDetails, isResolvingMedia, hasResolvedMedia } = getMedia(attachmentId);

    console.log('Media Details:', mediaDetails);
    console.log('Is Resolving:', isResolvingMedia);
    console.log('Has Resolved:', hasResolvedMedia);

    // ... Perform logic based on media details and resolution status

    return (
        // Your component JSX
    );
};
```
