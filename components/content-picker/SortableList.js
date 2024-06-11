import { DndContext, closestCenter, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy,
	horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import PropTypes from 'prop-types';
import PickedItem from './PickedItem';

const SortableList = ({
	posts,
	isOrderable,
	handleItemDelete,
	sortOriantation,
	setPosts,
	displayComponent,
	displayComponentProps,
	displayItemStyle,
}) => {
	const hasMultiplePosts = posts.length > 1;

	const items = posts.map((item) => item.uuid);
	const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

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
					sortOriantation === 'horizontal' ? horizontalListSortingStrategy : verticalListSortingStrategy
				}
			>
				{posts.map((post) => (
					<PickedItem
						key={post.uuid}
						item={post}
						isOrderable={hasMultiplePosts && isOrderable}
						handleItemDelete={handleItemDelete}
						id={post.uuid}
						displayComponent={displayComponent}
						displayComponentProps={displayComponentProps}
						displayItemStyle={displayItemStyle}
					/>
				))}
			</SortableContext>
		</DndContext>
	);
};

SortableList.defaultProps = {
	isOrderable: false,
	sortOriantation: 'vertical',
};

SortableList.propTypes = {
	posts: PropTypes.array.isRequired,
	isOrderable: PropTypes.bool,
	handleItemDelete: PropTypes.func.isRequired,
	setPosts: PropTypes.func.isRequired,
	displayComponent: PropTypes.func,
	sortOriantation: PropTypes.string,
};

export default SortableList;
