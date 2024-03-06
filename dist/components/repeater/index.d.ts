export function Repeater({ children, onChange, value, defaultValue, addButtonLabel, removeButtonLabel }: {
    children: any;
    onChange: any;
    value: any;
    defaultValue: any;
    addButtonLabel: any;
    removeButtonLabel: any;
}): React.JSX.Element;
export namespace Repeater {
    namespace propTypes {
        let children: PropTypes.Validator<(...args: any[]) => any>;
        let defaultValue: PropTypes.Requireable<any[]>;
        let addButtonLabel: PropTypes.Requireable<string>;
        let removeButtonLabel: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        let defaultValue_1: never[];
        export { defaultValue_1 as defaultValue };
        let addButtonLabel_1: string;
        export { addButtonLabel_1 as addButtonLabel };
        let removeButtonLabel_1: string;
        export { removeButtonLabel_1 as removeButtonLabel };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map