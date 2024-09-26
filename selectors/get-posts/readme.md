# getPosts and getPost Functions

## Description

The `getPosts` and `getPost` functions are utilities for retrieving posts and individual post data from the WordPress core data store. They utilize the `useSelect` hook from the `@wordpress/data` package to access the `getEntityRecords`, `getEntityRecord`, `hasStartedResolution`, `hasFinishedResolution`, and `isResolving` selectors from the `@wordpress/core-data` store.

## Usage

### getPosts

```js
import { getPosts } from '@digitalsilk/block-editor-components';

const YourComponent = ({ postType }) => {
    const { posts, hasStartedResolution, hasFinishedResolution, isResolving } = getPosts(postType);

    // ... Perform logic based on posts and resolution status

    if (isResolving) {
        return (
            // do something while posts are loading
        );
    }

    return (
        // Your component JSX
    );
};
```

### getPost

```js
import { getPost } from '@digitalsilk/block-editor-components';

const YourComponent = ({ postId, postType }) => {
    const { post, hasStartedResolution, hasFinishedResolution, isResolving } = getPost(postId, postType);

    // ... Perform logic based on post data and resolution status

    if (isResolving) {
        return (
            // do something while the post is loading
        );
    }

    return (
        // Your component JSX
    );
};
```

## Parameters

### getPosts

- `postType` (string, optional): The type of the posts to retrieve. Defaults to 'post'.
- `queryParams` (object, optional): Query parameters to filter the posts.

### getPost

- `postId` (number): The ID of the post to retrieve.
- `postType` (string, optional): The type of the post. Defaults to 'post'.

## Return Object

### getPosts

- `posts` (array): Array of posts.
- `hasStartedResolution` (boolean): Indicates whether the resolution process has started.
- `hasFinishedResolution` (boolean): Indicates whether the resolution process has finished.
- `isResolving` (boolean): Indicates whether the posts are currently resolving.

### getPost

- `post` (object): The individual post data.
- `hasStartedResolution` (boolean): Indicates whether the resolution process has started.
- `hasFinishedResolution` (boolean): Indicates whether the resolution process has finished.
- `isResolving` (boolean): Indicates whether the post is currently resolving.

## Example

### getPosts

```js
import { getPosts } from '@digitalsilk/block-editor-components';

const YourComponent = ({ postType }) => {
    const { posts, hasStartedResolution, hasFinishedResolution, isResolving } = getPosts(postType);

    console.log('Posts:', posts);
    console.log('Has Started Resolution:', hasStartedResolution);
    console.log('Has Finished Resolution:', hasFinishedResolution);
    console.log('Is Resolving:', isResolving);

    // ... Perform logic based on posts and resolution status

    return (
        // Your component JSX
    );
};
```

### getPost

```js
import { getPost } from '@digitalsilk/block-editor-components';

const YourComponent = ({ postId, postType }) => {
    const { post, hasStartedResolution, hasFinishedResolution, isResolving } = getPost(postId, postType);

    console.log('Post:', post);
    console.log('Has Started Resolution:', hasStartedResolution);
    console.log('Has Finished Resolution:', hasFinishedResolution);
    console.log('Is Resolving:', isResolving);

    // ... Perform logic based on post data and resolution status

    return (
        // Your component JSX
    );
};
```
