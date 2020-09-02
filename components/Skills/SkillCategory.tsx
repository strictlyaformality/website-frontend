import React from 'react';
import { Skill } from 'domain/Skill';
import SkillList from './SkillList';

type Props = {
    category: Skill.Category
}

const SkillCategory: React.FC<Props> = ({ category: { name, skills } }) => 
    <div className='skills__category'>
        <h2 className='skills__category-name'>{name}</h2>
        <SkillList skills={skills} />
    </div>

export default SkillCategory;