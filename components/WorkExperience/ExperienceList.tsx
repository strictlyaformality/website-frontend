import React from 'react';
import { Job } from 'domain/Job';

type Props = {
    experiences: Job.Experience[]
}

const ExperienceList: React.FC<Props> = props => 
    <ul className='work-experience__job-experience-list'>
        {
            props.experiences
                .map(e => <ExperienceListItem key={e.id} experience={e} />)
        }
    </ul>

export default ExperienceList;

//#region Helper Components
type ItemProps = {
    experience: Job.Experience
}

const ExperienceListItem: React.FC<ItemProps> = props => 
    <li className='work-experience__job-experience-list-item'>
        <span className='work-experience__job-experience-list-item-text'>
            {props.experience.description}
        </span>
    </li>
//#endregion