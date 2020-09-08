import React from 'react';
import { Job } from 'domain/Job';
import ExperienceList from './ExperienceList';
import Timeline from './Timeline';

type Props = {
    jobs: Job[]
}

const JobList: React.FC<Props> = props => 
    <ul className='work-experience__job-list'>
        {
            props.jobs
                .sort((a, b) => {
                    const x = a.endDate ? +new Date(a.endDate) : Date.now();
                    const y = b.endDate ? +new Date(b.endDate) : Date.now();

                    return y - x;
                })
                .map(job => <JobItem key={job.id} job={job} />)
        }
    </ul>

export default JobList;

//#region Helper Components
type ItemProps = {
    job: Job
}

const JobItem: React.FC<ItemProps> = props => 
    <li className='work-experience__job-list-item'>
        <h2 className='work-experience__job-title'>{props.job.title}</h2>
        <h3 className='work-experience__job-company'>{props.job.company}</h3>
        <hr className='work-experience__horizontal-rule' />
        <div className='work-experience__job-end-date'>
            {Job.getEndYear(props.job.endDate) ?? <i className='fas fa-gift fa-2x'></i>}
        </div>
        <ExperienceList experiences={props.job.jobExperiences} />
        <Timeline startDate={props.job.startDate} endDate={props.job.endDate} />
    </li>
//#endregion