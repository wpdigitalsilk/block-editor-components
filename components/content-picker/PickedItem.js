import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { safeDecodeURI, filterURLForDisplay } from '@wordpress/url';
import { decodeEntities } from '@wordpress/html-entities';
import { Button } from '@wordpress/components';
import { close } from '@wordpress/icons';

const DragHandle = () => (
	<svg
		width="18"
		height="18"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 18 18"
		role="img"
		aria-hidden="true"
		focusable="false"
	>
		<path d="M5 4h2V2H5v2zm6-2v2h2V2h-2zm-6 8h2V8H5v2zm6 0h2V8h-2v2zm-6 6h2v-2H5v2zm6 0h2v-2h-2v2z" />
	</svg>
);

// PickedItem
const PickedItem = ({
	item,
	isOrderable,
	handleItemDelete,
	id,
	displayComponent: DisplayComponent,
	displayComponentProps,
}) => {
	const { title, link } = item;
	const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({ id });
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	if (!item) {
		return null;
	}

	return (
		<div
			className={`ds-content-picker__item ${isDragging ? 'is-dragging' : ''} ${
				DisplayComponent ? 'has-display-component' : ''
			}`}
			ref={setNodeRef}
			style={style}
		>
			<div className="ds-content-picker__item-actions">
				{isOrderable ? (
					<span {...attributes} {...listeners}>
						<DragHandle />
						<span>{__('Re-Order')}</span>
					</span>
				) : (
					''
				)}

				<Button
					type="button"
					icon={close}
					onClick={() => {
						handleItemDelete(item);
					}}
					className="ds-remove-content-item"
				>
					{__('Remove')}
				</Button>
			</div>

			{DisplayComponent ? (
				<DisplayComponent item={item} {...displayComponentProps} />
			) : (
				<span className="ds-content-picker__item-default">
					<span className="item-title">{decodeEntities(title?.rendered || '')}</span>
					<span className="item-info">{filterURLForDisplay(safeDecodeURI(link)) || ''}</span>
				</span>
			)}
		</div>
	);
};

PickedItem.defaultProps = {
	isOrderable: false,
};

PickedItem.propTypes = {
	item: PropTypes.object.isRequired,
	isOrderable: PropTypes.bool,
	handleItemDelete: PropTypes.func.isRequired,
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	displayComponent: PropTypes.func,
};

export default PickedItem;
