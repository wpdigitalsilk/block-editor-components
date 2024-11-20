export function Image({ id, imageSize, aspectRatio, focalPoint, isBackground, className, borderRadius, ...rest }: {
    id: string;
    imageSize?: string | undefined;
    aspectRatio?: string | undefined;
    focalPoint?: object | undefined;
    isBackground?: boolean | undefined;
    className?: string | undefined;
    borderRadius?: number | undefined;
    rest?: object | undefined;
}): JSX.Element;
export namespace Image {
    namespace propTypes {
        let id: PropTypes.Validator<number>;
        let imageSize: PropTypes.Requireable<string>;
        let aspectRatio: PropTypes.Requireable<string>;
        let focalPoint: PropTypes.Requireable<PropTypes.InferProps<{
            x: PropTypes.Requireable<number>;
            y: PropTypes.Requireable<number>;
        }>>;
        let isBackground: PropTypes.Requireable<boolean>;
        let className: PropTypes.Requireable<string>;
        let borderRadius: PropTypes.Requireable<number>;
    }
}
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map