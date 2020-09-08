import React from 'react';
import { Job } from 'domain/Job';
import JobList from './JobList';

import './WorkExperience.css';

type Props = {
    jobs: Job[]
}

const WorkExperience: React.FC<Props> = props =>
    <div className='work-experience'>
        <JobList {...props} />
    </div>

export default WorkExperience;