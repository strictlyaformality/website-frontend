import React from 'react';
import { Skill } from 'domain/Skill';

type Props = {
    skills: Skill[]
}

const SkillList: React.FC<Props> = ({ skills }) =>
    <ul className='skills__skill-list'>
        {
            skills
                .sort((a, b) => a.sortOrder - b.sortOrder)
                .map(skill => <SkillItem key={skill.id} skill={skill}/>)
        }
    </ul>

export default SkillList;

//#region Helper Components
type ItemProps = {
    skill: Skill
}
const SkillItem: React.FC<ItemProps> = ({ skill }) =>
    <li className='skills__skill-item'>
        <img 
            className='skills__skill-image'
            src={skill.imageUrl}
        />
    </li>
//#endregion