import React, { useState } from 'react'
import { FormInput } from '../Elements/FormInput'
import Button from '../Elements/Buttons';
import { Input } from '../Elements/BaseInput';
import { RadioButtonGroup } from '../Elements/RadioButton';

export interface MyFormStepTwo {
    experienceMin?: string;
    experienceMax?: string;
    salaryMin?: string;
    salaryMax?: string;
    totalEmployee?: string;
    applyType?: string;
}

const applyTypeOption = [{
    label: 'Quick apply',
    key: 'quick',
},
{
    label: 'External apply',
    key: 'external',
}
]
const Form2 = ({ onSaveCta }: { onSaveCta: (data: MyFormStepTwo) => void }) => {
    const [form2, setForm2] = useState<MyFormStepTwo>({
        experienceMin: "",
        experienceMax: "",
        salaryMin: '',
        salaryMax: '',
        totalEmployee: "",
        applyType: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm2((prevForm) => ({ ...prevForm, [name]: value }));
    };
    const handleapplyChange = (value: string) => {
        console.log(value)
        setForm2((prevForm) => ({ ...prevForm, applyType: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSaveCta(form2)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-between'>
                        <label className='text-xl text-fontPrimary'>Create a job</label>
                        <label className='text-base text-fontPrimary'>Step 2</label>
                    </div>
                    <div className='flex gap-6 flex-1 flex-col'>
                        <div className='flex gap-6 items-end'>
                            <FormInput label='Experience' placeholder='Minimum' wrapperClassName='w-[244px]' name='experienceMin' onBlur={handleInputChange} defaultValue={form2?.experienceMin} />
                            <Input placeholder='Maximum' name='experienceMax' onBlur={handleInputChange} defaultValue={form2?.experienceMax} />
                        </div>
                        <div className='flex gap-6 items-end'>
                            <FormInput label='Salary' placeholder='Minimum' wrapperClassName='w-[244px]' name='salaryMin' onBlur={handleInputChange} defaultValue={form2.salaryMin} />
                            <Input height={40} placeholder='Maximum' name='salaryMax' onBlur={handleInputChange} />
                        </div>
                        <FormInput label='Total employee' placeholder='ex. 100' type='text' name='totalEmployee' onBlur={handleInputChange} defaultValue={form2.totalEmployee} />
                        <div className='flex flex-col gap-3 items-baseline'>
                            <label
                                className='text-xs text-fontPrimary font-medium leading-5'
                            >Apply type</label>
                            <div className='flex gap-4'>
                                <RadioButtonGroup selectedOption={form2.applyType} onOptionSelect={(val) => handleapplyChange(val)} options={applyTypeOption} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <Button type='submit' variant='primary'>Save</Button>
                </div>
            </form>
        </div>
    )
}

export default Form2