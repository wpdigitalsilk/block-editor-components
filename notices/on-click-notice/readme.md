# onClickNotice Function

## Description

The `onClickNotice` function creates a warning notice when a link click is prevented in the WordPress editor. It uses the `useDispatch` hook from the `@wordpress/data` package to dispatch actions to the `@wordpress/notices` store. This is useful for providing feedback to users when they attempt to click on links that are disabled within the editor.

## Usage

```js
import { useInstanceId } from '@wordpress/compose';
import { onClickNotice } from '@digitalsilk/block-editor-components';

const BlockEdit = (props) => {
	const instanceId = useInstanceId(BlockEdit, 'wp-block-add-block-namespace');
	const handleClick = onClickNotice(instanceId, 'Optional message');
	
    return (
        <a href="https://example.com" onClick={handleClick}>
            Click me
        </a>
    );
};
```

## Parameters

- `instanceId` (string): Unique identifier for the instance of the notice.
- `message` (string, optional): Warning message to be displayed. Defaults to 'Links are disabled in the editor.'.

## Return

- `showRedirectionPreventedNotice` (Function): Event handler that shows the warning notice upon link click.

## Example

```js
import { useInstanceId } from '@wordpress/compose';
import { onClickNotice } from '@digitalsilk/block-editor-components';

const BlockEdit = (props) => {
	const instanceId = useInstanceId(BlockEdit, 'wp-block-add-block-namespace');
	const handleClick = onClickNotice(instanceId, 'Link click prevented in editor...');

	return (
		<a href="https://example.com" onClick={handleClick}>
			Click me
		</a>
	);
};
```

In this example, when the user clicks on the link, the default action is prevented, and a warning notice is created with the message 'Links are disabled in the editor.' for the specific `instanceId`.


