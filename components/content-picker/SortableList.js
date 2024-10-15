import { DndContext, closestCenter, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy,
	horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import PropTypes from 'prop-types';
import PickedItem from './PickedItem';

/**
 * SortableList is a component that provides functionality to display and reorder a list of posts.
 *
 * @param {object} props - The component props.
 * @param {object[]} props.posts - An array of post objects to display and sort.
 * @param {boolean} props.isOrderable - Flag to enable or disable the ordering functionality.
 * @param {string} props.sortOrientation - The orientation for sorting the list ('vertical' or 'horizontal').
 * @param {string} props.childElement - The HTML element type to wrap each post item.
 * @param {string} props.childClass - CSS class names to apply to the child elements.
 * @param {React.Component} props.displayComponent - A React component to display each post item.
 * @param {object} props.displayComponentProps - Props to pass to the display component.
 * @param {Function} props.handleItemDelete - Callback function to handle the deletion of a post item.
 * @param {Function} props.setPosts - Function to update the posts array after reordering.
 * @returns {JSX.Element} The rendered sortable list component.
 */
const SortableList = ({
	posts = [],
	isOrderable = false,
	sortOrientation = 'vertical',
	childElement = 'div',
	childClass = '',
	displayComponent = null,
	displayComponentProps = {},
	handleItemDelete,
	setPosts,
}) => {
	const hasMultiplePosts = posts && posts.length > 1;

	const items = posts.map((item) => item.uuid);
	const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

	/**
	 * Handles the drag end event for reordering posts.
	 *
	 * This function is invoked when a drag-and-drop action is completed. It updates
	 * the order of posts by moving the dragged post to its new position.
	 *
	 * @param {object} event - The drag end event object.
	 * @param {string} event.over.id - The unique identifier of the item over which the active item is dropped.
	 */
	const handleDragEnd = (event) => {
		const { active, over } = event;

		if (active.id !== over.id) {
			const oldIndex = posts.findIndex((post) => post.uuid === active.id);
			const newIndex = posts.findIndex((post) => post.uuid === over.id);

			setPosts(arrayMove(posts, oldIndex, newIndex));
		}
	};

	return (
		<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			<SortableContext
				items={items}
				strategy={
					sortOrientation === 'horizontal' ? horizontalListSortingStrategy : verticalListSortingStrategy
				}
			>
				{posts.map((post, loopIndex) => (
					<PickedItem
						key={post.uuid}
						item={post}
						isOrderable={hasMultiplePosts && isOrderable}
						handleItemDelete={handleItemDelete}
						index={loopIndex}
						displayComponent={displayComponent}
						displayComponentProps={displayComponentProps}
						childElement={childElement}
						childClass={childClass}
					/>
				))}
			</SortableContext>
		</DndContext>
	);
};

SortableList.propTypes = {
	posts: PropTypes.array.isRequired,
	isOrderable: PropTypes.bool,
	sortOrientation: PropTypes.string,
	displayComponent: PropTypes.elementType,
	displayComponentProps: PropTypes.object,
	childElement: PropTypes.string,
	childClass: PropTypes.string,
	handleItemDelete: PropTypes.func.isRequired,
	setPosts: PropTypes.func.isRequired,
};

export default SortableList;
