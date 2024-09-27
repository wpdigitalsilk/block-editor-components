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
			searchLabel="Search Posts"
			searchPlaceholder="Search for posts..."
			searchPerPage={10}
			searchColumns={["post_title", "post_content"]}
			isOrderable={true}
			maxContentItems={5}
			wrapperClass="custom-wrapper-class"
			wrapperElement="div"
			childElement="div"
			childClass="custom-child-class"
			sortOrientation="vertical"
			pickerType="postType"
			entityType="post"
			storeKeys={[]}
			displayComponent={YourDisplayComponent}
			displayComponentProps={{ prop1: "value1" }}
		/>
	);
};
```

## Props

### `items` 

An array representing the selected content items. Each item should have a unique `id` or `uuid`.

### `onPickChange` (required)

A function to handle changes to the selected items. This function is called with the updated items array when items are added or removed.

### `searchLabel`

A string representing the label for the search input. Defaults to an empty string.

### `searchPlaceholder`

A string representing the placeholder for the search input. Defaults to 'Search'.

### `searchPerPage`

A number representing the number of search results per page. Defaults to 20.

### `searchColumns`

An array of strings representing the columns to search within content. Defaults to `['post_title', 'post_content']`.

### `isOrderable`

A boolean indicating whether the items can be reordered. Defaults to `true`.

### `maxContentItems`

A number representing the maximum number of content items that can be selected. Defaults to 99.

### `wrapperClass`

A string representing the class name for the wrapper element. Defaults to an empty string.

### `wrapperElement`

A string representing the HTML tag name for the wrapper element. Defaults to 'div'.

### `childElement`

A string representing the HTML tag name for the child items. Defaults to 'div'.

### `childClass`

A string representing the class name for the child items. Defaults to an empty string.

### `sortOrientation`

A string representing the orientation for sorting the items. Can be either 'vertical' or 'horizontal'. Defaults to 'vertical'.

### `pickerType`

A string representing the type of content picker. Defaults to 'postType'. Available options: `postType` and`taxonomy`

### `entityType`

A string representing the type of entity to be picked. Defaults to 'post'. When using `postType` for `pickerType` 
pass any public post type name. When using `taxonomy` for `pickerType` pass any public taxonomy name.

### `storeKeys`

An array of strings representing entity object keys pass to the editor and store in the database. Defaults to an 
empty array meaning that the whole post/term object gets passed/stored. Note that this can cause a performance issue,
so limit your keys to only necessary ones including `uuid`, `id`.

### `displayComponent`

A React component to display each content item. This component will receive the item data as props. Defaults to `null`.

### `displayComponentProps`

An object representing additional props to pass to the `displayComponent`. Defaults to an empty object.

## Example

```js
<ContentPicker
	items={[
		{ id: 1, title: "Example Item 1" },
		{ id: 2, title: "Example Item 2" },
	]}
	onPickChange={(newItems) => console.log(newItems)}
	searchLabel="Find Pages"
	searchPlaceholder="Search for pages..."
	searchPerPage={5}
	searchColumns={["page_title", "page_content"]}
	isOrderable={true}
	maxContentItems={10}
	wrapperClass="content-picker-wrapper"
	wrapperElement="div"
	childElement="div"
	childClass="custom-child-class"
	sortOrientation="horizontal"
	pickerType="pageType"
	entityType="page"
	storeKeys={['uuid', 'id', 'title']}
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
