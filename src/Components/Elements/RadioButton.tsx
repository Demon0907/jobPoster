
import React, { InputHTMLAttributes } from 'react';

export interface RadioElementProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    key?: string;
}
export const RadioButton: React.FC<RadioElementProps> = (
    {
        label,
        id,
        key = '',
        ...rest
    }) => {
    return (
        <div className="flex flex-row gap-1">
            <input
                type="radio"
                id={id}
                {...rest}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};
