import React, { useEffect, useState } from 'react';
import Button from './Components/Elements/Buttons';
import JobCard, { MinMax } from './Components/JobCard';
import JobPosterModal from './Components/JobPoster';
import { getProduct } from './actions/getJobPosts';
export interface JobPostType {
  jobTitle: string
  companyName: string
  industry: string
  location?: string
  remoteType?: string
  experienceMin?: string
  experienceMax?: string
  salaryMin?: string
  salaryMax?: string
  totalEmployee?: string
  externalApply: boolean
  quickApply: boolean
  id?: string
}

function App() {
  const [openJobModal, setOpenJobModal] = useState<boolean>(false)
  const [jobList, setJobList] = useState<JobPostType[]>()

  const fetchData = () => getProduct().then((data) => setJobList(data.data))
  useEffect(() => {
    fetchData()
  }, [])

  const closeModal = () => setOpenJobModal(false)
  return (
    <div className='p-10 flex flex-auto flex-col bg-gray-100 gap-10 font-poppins'>
      <Button variant='primary' onClick={() => setOpenJobModal(true)}>Create Job</Button>
      <div className='flex flex-col gap-20'>{
        jobList?.map((job) => {
          return (
            <JobCard
              key={job.id}
              companyName={job.companyName}
              jobTitle={job.jobTitle}
              industryType={job.industry}
              location={job.location}
              remoteType={job.remoteType}
              salary={{
                min: job.salaryMin,
                max: job.salaryMax,
              }}
              experience={{
                min: job.experienceMin,
                max: job.experienceMax
              }}
              applyType={job.externalApply ? "external" : job.quickApply ? 'quick' : 'quick'}
              totalEmployees={job.totalEmployee}
            />)
        })
      }</div>
      <JobPosterModal
        open={openJobModal}
        onClose={closeModal}
        onSuccessCb={() => {
          closeModal()
          fetchData()
        }
        } />
    </div>
  );
}

export default App;
