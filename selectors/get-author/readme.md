# getAuthor Function

## Description

The `getAuthor` function is a utility for retrieving author details and resolution status from the WordPress core data store. It utilizes the `useSelect` hook from the `@wordpress/data` package to access the `getEntityRecord`, `getUser`, `isResolving`, and `hasFinishedResolution` selectors from the `@wordpress/core-data` store.

## Usage

```js
import { getAuthor } from '@digitalsilk/block-editor-components';

const YourComponent = ({ postId, postType }) => {
    const { authorData, isResolvingAuthor, hasResolvedAuthor } = getAuthor(postId, postType);

    // ... Perform logic based on author details and resolution status

    if (isResolvingAuthor) {
        return (
            // do something while it's loading
        );
    }

    return (
        // Your component JSX
    );
};
```

## Parameters

- `postId` (number): The ID of the post.
- `postType` (string): The type of the post (e.g., 'post', 'page').

## Return Object

- `authorData` (object): Details of the author.
- `isResolvingAuthor` (boolean): Indicates whether the author data is currently resolving.
- `hasResolvedAuthor` (boolean): Indicates whether the author resolution has finished.

## Example

```js
import { getAuthor } from '@digitalsilk/block-editor-components';

const YourComponent = ({ postId, postType }) => {
    const { authorData, isResolvingAuthor, hasResolvedAuthor } = getAuthor(postId, postType);

    console.log('Author Details:', authorData);
    console.log('Is Resolving:', isResolvingAuthor);
    console.log('Has Resolved:', hasResolvedAuthor);

    // ... Perform logic based on author details and resolution status

    return (
        // Your component JSX
    );
};
```
