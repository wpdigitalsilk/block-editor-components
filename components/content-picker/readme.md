# ContentPicker Component

## Description

The `ContentPicker` component is a versatile React component for selecting and organizing content items. It allows users to search for content, select items, and reorder them. This component integrates with the `ContentSearch` and `SortableList` components, providing a comprehensive solution for content management.

## Usage

```js
import { ContentPicker } from "@digitalsilk/block-editor-components";

const YourComponent = (props) => {
	const [items, setItems] = React.useState([]);

	return (
		<ContentPicker
			items={items}
			onPickChange={setItems}
			postType="post"
			searchLabel="Search Posts"
			searchPlaceholder="Search for posts..."
			searchMode="post"
			searchPerPage={10}
			isOrderable={true}
			maxContentItems={5}
			wrapperClass="custom-wrapper-class"
			wrapperElement="div"
			sortOriantation="vertical"
			displayComponent={YourDisplayComponent}
			displayComponentProps={{ prop1: "value1" }}
		/>
	);
};
```

## Props

### `items` (required)

An array representing the selected content items. Each item should have a unique `id` or `uuid`.

### `onPickChange` (required)

A function to handle changes to the selected items. This function is called with the updated items array when items are added or removed.

### `postType`

A string representing the type of post to search for. Defaults to 'post'.

### `searchLabel`

A string representing the label for the search input. Defaults to an empty string.

### `searchPlaceholder`

A string representing the placeholder for the search input. Defaults to 'Search'.

### `searchMode`

A string representing the search mode. Defaults to 'post'. Can be `term` or `post`.

### `searchPerPage`

A number representing the number of search results per page. Defaults to 20.

### `isOrderable`

A boolean indicating whether the items can be reordered. Defaults to `true`.

### `maxContentItems`

A number representing the maximum number of content items that can be selected. Defaults to 99.

### `wrapperClass`

A string representing the class name for the wrapper element. Defaults to an empty string.

### `wrapperElement`

A string representing the HTML tag name for the wrapper element. Defaults to 'div'.

### `sortOriantation`

A string representing the orientation for sorting the items. Can be either 'vertical' or 'horizontal'. Defaults to 'vertical'.

### `displayComponent`

A React component to display each content item. This component will receive the item data as props.

### `displayComponentProps`

An object representing additional props to pass to the displayComponent.

## Example

```js
<ContentPicker
	items={[
		{ id: 1, title: "Example Item 1" },
		{ id: 2, title: "Example Item 2" },
	]}
	onPickChange={(newItems) => console.log(newItems)}
	postType="page"
	searchLabel="Find Pages"
	searchPlaceholder="Search for pages..."
	searchMode="page"
	searchPerPage={5}
	isOrderable={true}
	maxContentItems={10}
	wrapperClass="content-picker-wrapper"
	wrapperElement="div"
	sortOriantation="horizontal"
	displayComponent={CustomDisplayComponent}
	displayComponentProps={{ customProp: "value" }}
/>
```

## Block.json default attributes

```js
"attributes": {
  "items": {
    "type": "array",
    "default": []
  },
}
```
