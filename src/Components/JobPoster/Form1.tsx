import React, { useState } from 'react'
import { FormInput } from '../Elements/FormInput'
import Button from '../Elements/Buttons';

export interface MyFormStepOne {
    jobTitle: string;
    companyName: string;
    industry: string;
    location?: string;
    remoteType?: string;
}

interface FormOneErrorType {
    jobTitle: boolean;
    companyName: boolean;
    industry: boolean;
}

const Form1 = ({ onPass }: { onPass: (data: MyFormStepOne) => void }) => {

    const [form1, setForm1] = useState<MyFormStepOne>({
        jobTitle: "",
        companyName: "",
        industry: "",
        location: "",
        remoteType: "",
    });
    const [errors, setErrors] = useState<FormOneErrorType>({
        jobTitle: false,
        companyName: false,
        industry: false,
    });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm1((prevForm) => ({ ...prevForm, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Check if all required fields are filled in
        const requiredFields = ["jobTitle", "companyName", "industry"];
        const emptyFields = requiredFields.filter((fieldName) => !form1[fieldName as keyof MyFormStepOne]);
        if (emptyFields.length > 0) {
            emptyFields.forEach((fieldName) => {
                setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: true }));
            });
            return;
        }
        onPass(form1)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-24'>
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-between'>
                        <label className='text-xl text-fontPrimary'>Create a job</label>
                        <label className='text-base text-fontPrimary'>Step 1</label>
                    </div>
                    <div className='flex gap-6 flex-1 flex-col'>
                        <FormInput label='Job title' required placeholder='ex. UX UI Designer' type='text' name='jobTitle' onChange={handleInputChange} defaultValue={form1.jobTitle} error={errors.jobTitle ? true : false} />
                        <FormInput label='Company name' required placeholder='ex. Google' type='text' name='companyName' onChange={handleInputChange} defaultValue={form1.companyName} error={errors.companyName ? true : false} />
                        <FormInput label='Industry' required placeholder='ex. Information Technology ' type='text' name='industry' onChange={handleInputChange} defaultValue={form1.industry} error={errors.industry ? true : false} />
                        <div className='flex gap-6'>
                            <FormInput label='Location' placeholder='ex. Chennai' wrapperClassName='w-[244px]' name='location' onBlur={handleInputChange} defaultValue={form1.location} />
                            <FormInput label='Remote type' placeholder='ex. In-office' wrapperClassName='w-[244px]' name='remoteType' onBlur={handleInputChange} defaultValue={form1.remoteType} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <Button type='submit' variant='primary'>Save</Button>
                </div>
            </div>
        </form>
    )
}

export default Form1