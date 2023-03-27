import React from 'react';

type OptionType = {
    label: string,
    key: string,
}
type Props = {
    options: OptionType[];
    selectedOption: string | undefined | '';
    onOptionSelect: (option: string) => void;
};

export const RadioButtonGroup: React.FC<Props> = ({ options, selectedOption, onOptionSelect }) => {
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onOptionSelect(event.target.value);
    };

    return (
        <div className='flex gap-4'>
            {options.map((option) => (
                <div className='flex gap-1 items-center'>
                    <input
                        className="before:content[''] cursor-pointer rounded-full border-2 border-blue-gray-200 checked:border-pink-500 before:rounded-full before:bg-blue-gray-500 before:opacity-0"
                        type="radio"
                        value={option.key}
                        checked={selectedOption === option.key}
                        onChange={handleOptionChange}
                    />
                    <label
                        htmlFor={option.key}
                        className='text-xs text-fontPrimary font-medium leading-5'
                    >{option.label}</label>
                </div>
            ))}
        </div>
    );
};
