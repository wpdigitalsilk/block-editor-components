# getEditorSettings Function

## Description

The `getEditorSettings` function is a utility for retrieving editor settings from the WordPress Block Editor. It leverages the `useSelect` hook from the `@wordpress/data` package to access the `getSettings` selector from the `@wordpress/block-editor` store.


## Usage

```js
import { getEditorSettings } from '@digitalsilk/block-editor-components';

const YourComponent = () => {
    const editorSettings = getEditorSettings();

    console.log('Editor Settings:', editorSettings);

    // Access individual settings properties
    const isSidebarOpened = editorSettings.isSidebarOpened;
    const activeGeneralPanel = editorSettings.activeGeneralPanel;

    // ... Perform further logic with the retrieved settings

    return (
        // Your component JSX
    );
};
```

## Example

```js
import { getEditorSettings } from '@digitalsilk/block-editor-components';

const YourComponent = () => {
   	const { imageSizes } = getEditorSettings();

    console.log('Here are the available image sizes:', imageSizes);

    return (
        // Your component JSX
    );
};
```
