export function MediaToolbar({ onSelect, onRemove, id, mediaType, multiple }: {
    onSelect: Function;
    onRemove: Function;
    id?: string | undefined;
    mediaType?: string | undefined;
    multiple?: boolean | undefined;
}): JSX.Element;
export namespace MediaToolbar {
    namespace propTypes {
        let id: PropTypes.Validator<number>;
        let onSelect: PropTypes.Validator<(...args: any[]) => any>;
        let onRemove: PropTypes.Validator<(...args: any[]) => any>;
        let mediaType: PropTypes.Requireable<string>;
        let multiple: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map