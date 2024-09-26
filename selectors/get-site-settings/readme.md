# getSiteSettings Function

## Description

The `getSiteSettings` function is a utility for retrieving site settings from the WordPress core data store. It utilizes the `useSelect` hook from the `@wordpress/data` package to access the `getEntityRecord`, `hasStartedResolution`, `hasFinishedResolution`, and `isResolving` selectors from the `@wordpress/core-data` store.

## Usage

```js
import { getSiteSettings } from '@digitalsilk/block-editor-components';

const YourComponent = () => {
    const { settings, hasStartedResolution, hasFinishedResolution, isResolving } = getSiteSettings();

    // ... Perform logic based on site settings and resolution status

    if (isResolving) {
        return (
            // do something while settings are loading
        );
    }

    return (
        // Your component JSX
    );
};
```

## Parameters

This function does not take any parameters.

## Return Object

- `settings` (object): The site settings.
- `hasStartedResolution` (boolean): Indicates whether the resolution process has started.
- `hasFinishedResolution` (boolean): Indicates whether the resolution process has finished.
- `isResolving` (boolean): Indicates whether the site settings are currently resolving.

## Example

```js
import { getSiteSettings } from '@digitalsilk/block-editor-components';

const YourComponent = () => {
    const { settings, hasStartedResolution, hasFinishedResolution, isResolving } = getSiteSettings();

    console.log('Site Settings:', settings);
    console.log('Has Started Resolution:', hasStartedResolution);
    console.log('Has Finished Resolution:', hasFinishedResolution);
    console.log('Is Resolving:', isResolving);

    // ... Perform logic based on site settings and resolution status

    return (
        // Your component JSX
    );
};
```
