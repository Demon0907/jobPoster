import { Dialog } from '@headlessui/react'
import React, { useMemo, useState } from 'react'
import Form1, { MyFormStepOne } from './Form1';
import Form2, { MyFormStepTwo } from './Form2';
import { addNewJobPost } from '../../actions/addNewJobPost';

type JobPosterModalProps = {
    open: boolean;
    onClose: () => void;
    onSuccessCb: () => void;
}
type FormDataType = {
    form1Data: MyFormStepOne
    form2Data: MyFormStepTwo
}
const initalFormData = {
    form1Data: {
        jobTitle: "",
        companyName: "",
        industry: "",
    },
    form2Data: {
        totalEmployee: '',
        externalApply: false,
        quickApply: false,
    }
}
const JobPosterModal = ({ open, onClose, onSuccessCb }: JobPosterModalProps) => {
    const [formData, setFormData] = useState<FormDataType>(initalFormData)
    console.log("🚀 ~ file: index.tsx:16 ~ JobPosterModal ~ formData:", formData)

    const showFormTwo = useMemo(() =>
        formData?.form1Data?.companyName && formData.form1Data.industry && formData.form1Data.jobTitle
        , [formData?.form1Data])

    const passFormData = (data: MyFormStepOne) => {
        setFormData(prevUser => {
            return {
                ...prevUser,
                form1Data: data,
            };
        });
    }

    const handleSave = (data: MyFormStepTwo) => {
        setFormData(prevUser => {
            return {
                ...prevUser,
                form2Data: data
            };
        });
        const payloadData = {
            ...formData.form1Data,
            ...data,
        }
        console.log("🚀 ~ file: index.tsx:50 ~ handleSave ~ payloadData:", payloadData)
        addNewJobPost(payloadData).then((data) => console.log(data))
        onSuccessCb()
    }

    return (
        <Dialog as='div' open={open} onClose={onClose} className='relative z-10'>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className='flex flex-col bg-white p-8 rounded-lg border border-solid border-borderGrey w-[577px]'>
                        {!showFormTwo ? <Form1 onPass={passFormData} /> : <Form2 onSaveCta={handleSave} />}
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default JobPosterModal