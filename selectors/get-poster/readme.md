# getPoster Function

## Description

The `getPoster` function is a utility for retrieving poster (thumbnail) details and resolution status from the WordPress core data store. It utilizes the `useSelect` hook from the `@wordpress/data` package to access the `getMedia`, `isResolving`, and `hasFinishedResolution` selectors from the `@wordpress/core-data` store.


## Usage

```js
import { getPoster } from '@digitalsilk/block-editor-components';

const YourComponent = ({ attachmentId, size }) => {
  const { posterUrl, isResolvingPoster, hasResolvedPoster } = getPoster(attachmentId, size);

    // ... Perform logic based on media details and resolution status
    if(isResolvingPoster){
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
- `size` (string): The image size of the poster image to retrieve.

## Return Object

- `posterUrl` (string): The URL of the poster.
- `isResolvingPoster` (boolean): Indicates whether the poster is currently resolving.
- `hasResolvedPoster` (boolean): Indicates whether the poster resolution has finished.

## Example

```js
import { getPoster } from '@digitalsilk/block-editor-components';

const YourComponent = ({ attachmentId, size }) => {
    const { posterUrl, isResolvingPoster, hasResolvedPoster } = getPoster(attachmentId, size);

    console.log('Poster URL:', posterUrl);
    console.log('Is Resolving:', isResolvingPoster);
    console.log('Has Resolved:', hasResolvedPoster);

    // ... Perform logic based on poster details and resolution status

    return (
        // Your component JSX
    );
};
```
