import React from 'react';
import { Education as EducationType } from 'domain/Education';

import './Education.css';

type Props = {
    education: EducationType
}

const Education: React.FC<Props> = ({ education }) =>
    <div className='education'>
        <EducationRow className='education__school' iconClassName='fa-school'>
            {education.institutionName}
        </EducationRow>
        <EducationRow className='education__degree' iconClassName='fa-scroll'>
            {education.degreeName}
        </EducationRow>
        <EducationRow className='education__dates' iconClassName='fa-calendar-alt'>
            {new Date(education.startDate).getFullYear()} - {education.endDate && new Date(education.endDate).getFullYear()}
        </EducationRow>
        <EducationRow className='education__gpa' iconClassName='fa-percentage'>
            {education.achievedGpa} / {education.maximumGpa}
        </EducationRow>
        <EducationRow className='education__additional-information' iconClassName='fa-award'>
            {education.additionalInformation}
        </EducationRow>
        {/* <img src={education.logoUrl}></img> */}
    </div>

export default Education;

//#region Helper Components
type RowProps = {
    className: string,
    iconClassName: string
}

const EducationRow: React.FC<RowProps> = props => 
    <div className='education__row'>
        <span className={`education__row-text ${props.className}`}>
            {props.children}
        </span>
        <hr className='sf-hr education__row-horizontal-rule' />
        <span className='education__icon'>
            <i className={`fas ${props.iconClassName}`}></i>
        </span>
    </div>
//#endregion