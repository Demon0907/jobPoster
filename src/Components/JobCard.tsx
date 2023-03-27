import React from 'react'
import Button from './Elements/Buttons'

export type MinMax = {
    min?: string, max?: string
};
type JobCardPropType = {
    jobTitle: string,
    companyName: string,
    industryType: string,
    location?: string,
    remoteType?: string,
    experience?: MinMax;
    salary?: MinMax;
    totalEmployees?: string;
    applyType?: 'external' | 'quick'
}

const getExperience = (experience: MinMax) => {
    const { min, max } = experience
    return min && max ? `${min} - ${max} years` : min ? `Atleast ${min} years` : max ? `Atmost ${max} years` : ''
}

const JobCard = ({
    jobTitle,
    companyName,
    industryType,
    location = '',
    remoteType = '',
    experience,
    salary,
    totalEmployees,
    applyType,
}: JobCardPropType) => {
    const locationRemote = `${location} ${remoteType}`
    return (
        <div className='py-6 px-8 flex gap-2 bg-white border border-solid border-borderGrey rounded-md w-[830px]'>
            <div className='h-12 w-12 rounded-sm'><img src='../../public/logo.png' alt='company-logo' /></div>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col'>
                    <text className='text-2xl'>{jobTitle}</text>
                    <text className='text-base'>{companyName} - {industryType}</text>
                    {locationRemote && <text className='text-base text-fontPlaceHolder'>{locationRemote}</text>}
                </div>
                <div className='flex flex-col gap-2'>
                    {/* hard coded as it is not part of any input param */}
                    <text>Part-Time (9.00 am - 5.00 pm IST)</text>
                    {experience && <text>Experience (${getExperience(experience)})</text>}
                    {salary && <text>INR (₹) {salary?.min} - {salary?.max} / Month</text>}
                    {totalEmployees && <text>{totalEmployees} Employees</text>}
                </div>
                <div className='flex gap-6'>
                    {applyType === 'external' ?
                        <Button onClick={() => console.log('Save Clicked')} variant='primary'>External apply</Button> :
                        <Button onClick={() => console.log('Save Clicked')} variant='primary'>Apply Now</Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default JobCard