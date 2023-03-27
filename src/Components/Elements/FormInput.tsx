import React, { useRef, useId } from 'react';
import { Input, InputProps } from './BaseInput';

export interface FormInputProps extends InputProps {
    wrapperClassName?: string;
    label: string;
}

export const FormInput: React.FC<FormInputProps> = (
    (
        {
            wrapperClassName,
            type = 'text',
            label = '',
            disabled = false,
            required = false,
            error = false,
            ...rest
        }
    ) => {
        const id = useId();

        const inputRef = useRef<HTMLInputElement>(null);

        return (
            <div
                className={`flex flex-col items-baseline ${wrapperClassName}`}
                onClick={() => inputRef.current?.focus()}
            >
                <label
                    htmlFor={id}
                    className='text-xs text-fontPrimary font-medium leading-5'
                >
                    {label}{required && <span className='text-fontError'>*</span>}
                </label>
                <Input error={error} {...rest} />
            </div>
        );
    })