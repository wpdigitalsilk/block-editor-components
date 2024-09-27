export function Repeater({ children, onChange, value, defaultValue, addButtonLabel, removeButtonLabel, minItems, maxItems, initialItems, removeLayout, showBlockControls, }: {
    children: React.ReactNode;
    onChange: Function;
    value?: any[] | undefined;
    defaultValue?: any[] | undefined;
    addButtonLabel?: string | undefined;
    removeButtonLabel?: string | undefined;
    minItems?: number | undefined;
    maxItems?: number | undefined;
    initialItems?: number | undefined;
    removeLayout?: string | undefined;
    showBlockControls?: boolean | undefined;
}): JSX.Element;
export namespace Repeater {
    namespace propTypes {
        let children: PropTypes.Validator<(...args: any[]) => any>;
        let onChange: PropTypes.Validator<(...args: any[]) => any>;
        let value: PropTypes.Validator<any[]>;
        let defaultValue: PropTypes.Requireable<any[]>;
        let addButtonLabel: PropTypes.Requireable<string>;
        let removeButtonLabel: PropTypes.Requireable<string>;
        let minItems: PropTypes.Requireable<number>;
        let maxItems: PropTypes.Requireable<number>;
        let initialItems: PropTypes.Requireable<number>;
        let removeLayout: PropTypes.Requireable<string>;
        let showBlockControls: PropTypes.Requireable<boolean>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
//# sourceMappingURL=index.d.ts.map