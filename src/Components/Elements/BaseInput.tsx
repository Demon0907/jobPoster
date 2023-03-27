import React, { InputHTMLAttributes } from 'react'
import { clsx } from 'clsx'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
    type?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    id?: any;
}

export const Input: React.FC<InputProps> = (
    (
        {
            id,
            type = 'text',
            disabled = false,
            required = false,
            error = false,
            placeholder,
            ...rest
        }
    ) => {
        const styles = {
            base: 'flex-1 h-[36px] rounded-md border border-solid w-full py-2 px-3 bg-white text-fontPrimary text-sm focus:outline-none focus:ring-1 focus:border-transparent transition duration-150 ease-in-out',
            state: {
                normal: 'h-[36px] placeholder-fontPlaceHolder border-borderGrey focus:ring-primary',
                error: 'h-[36px] placeholder-fontError border-red-600 focus:ring-red-600',
                disabled: 'h-[36px] cursor-not-allowed bg-gray-100 shadow-inner text-gray-400'
            },
        }

        return (
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                //style mainted in same files
                className={clsx([styles.base,
                error ? styles.state.error : styles.state.normal,
                disabled && styles.state.disabled
                ])}
                disabled={disabled}
                required={required}
                {...rest}
            />
        )
    })