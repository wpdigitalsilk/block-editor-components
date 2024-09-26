# getPostTerms and getTerms Functions

## Description

The `getPostTerms` and `getTerms` functions are utilities for retrieving taxonomy terms from the WordPress core data store. They utilize the `useSelect` hook from the `@wordpress/data` package to access the `getEntityRecord`, `getEntityRecords`, `isResolving`, and `hasFinishedResolution` selectors from the `@wordpress/core-data` store.

## Usage

### getPostTerms

```js
import { getPostTerms } from '@digitalsilk/block-editor-components';

const YourComponent = ({ postId, postType, taxonomyName }) => {
    const { terms, isResolvingTerms, hasResolvedTerms } = getPostTerms(postId, postType, taxonomyName);

    // ... Perform logic based on terms and resolution status

    if (isResolvingTerms) {
        return (
            // do something while terms are loading
        );
    }

    return (
        // Your component JSX
    );
};
```

### getTerms

```js
import { getTerms } from '@digitalsilk/block-editor-components';

const YourComponent = ({ taxonomyName }) => {
    const { terms, isResolvingTerms, hasResolvedTerms } = getTerms(taxonomyName);

    // ... Perform logic based on terms and resolution status

    if (isResolvingTerms) {
        return (
            // do something while terms are loading
        );
    }

    return (
        // Your component JSX
    );
};
```

## Parameters

### getPostTerms

- `postId` (number): The ID of the post for which to retrieve terms.
- `postType` (string): The type of the post (e.g., 'post', 'page').
- `taxonomyName` (string): The name of the taxonomy (e.g., 'category', 'tag').
- `itemSelector` (string, optional): The property of the post object that holds the term IDs. Defaults to 'categories'.

### getTerms

- `taxonomyName` (string): The name of the taxonomy to retrieve terms for.
- `query` (object, optional): Optional query parameters to filter the terms.

## Return Object

### getPostTerms

- `terms` (array): Array of terms associated with the post.
- `isResolvingTerms` (boolean): Indicates whether the terms are currently resolving.
- `hasResolvedTerms` (boolean): Indicates whether the term resolution has finished.

### getTerms

- `terms` (array): Array of terms.
- `isResolvingTerms` (boolean): Indicates whether the terms are currently resolving.
- `hasResolvedTerms` (boolean): Indicates whether the term resolution has finished.

## Example

### getPostTerms

```js
import { getPostTerms } from '@digitalsilk/block-editor-components';

const YourComponent = ({ postId, postType, taxonomyName }) => {
    const { terms, isResolvingTerms, hasResolvedTerms } = getPostTerms(postId, postType, taxonomyName);

    console.log('Terms:', terms);
    console.log('Is Resolving:', isResolvingTerms);
    console.log('Has Resolved:', hasResolvedTerms);

    // ... Perform logic based on terms and resolution status

    return (
        // Your component JSX
    );
};
```

### getTerms

```js
import { getTerms } from '@digitalsilk/block-editor-components';

const YourComponent = ({ taxonomyName }) => {
    const { terms, isResolvingTerms, hasResolvedTerms } = getTerms(taxonomyName);

    console.log('Terms:', terms);
    console.log('Is Resolving:', isResolvingTerms);
    console.log('Has Resolved:', hasResolvedTerms);

    // ... Perform logic based on terms and resolution status

    return (
        // Your component JSX
    );
};
```
