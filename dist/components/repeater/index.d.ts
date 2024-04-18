export function Repeater({ children, onChange, value, defaultValue, addButtonLabel, removeButtonLabel, minItems, maxItems, initialItems, removeLayout, showBlockControls, }: {
    children: any;
    onChange: any;
    value: any;
    defaultValue?: any[] | undefined;
    addButtonLabel: any;
    removeButtonLabel: any;
    minItems: any;
    maxItems: any;
    initialItems: any;
    removeLayout: any;
    showBlockControls: any;
}): React.JSX.Element;
export namespace Repeater {
    namespace propTypes {
        let children: PropTypes.Validator<(...args: any[]) => any>;
        let defaultValue: PropTypes.Requireable<any[]>;
        let addButtonLabel: PropTypes.Requireable<string>;
        let removeButtonLabel: PropTypes.Requireable<string>;
        let minItems: PropTypes.Requireable<number>;
        let maxItems: PropTypes.Requireable<number>;
        let initialItems: PropTypes.Requireable<number>;
        let removeLayout: PropTypes.Requireable<string>;
        let showBlockControls: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        let defaultValue_1: never[];
        export { defaultValue_1 as defaultValue };
        let addButtonLabel_1: string;
        export { addButtonLabel_1 as addButtonLabel };
        let removeButtonLabel_1: string;
        export { removeButtonLabel_1 as removeButtonLabel };
        let minItems_1: number;
        export { minItems_1 as minItems };
        let initialItems_1: number;
        export { initialItems_1 as initialItems };
        let removeLayout_1: string;
        export { removeLayout_1 as removeLayout };
        let showBlockControls_1: boolean;
        export { showBlockControls_1 as showBlockControls };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map