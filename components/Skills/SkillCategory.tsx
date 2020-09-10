import React from 'react';
import { Skill } from 'domain/Skill';
import SkillList from './SkillList';

type Props = {
    category: Skill.Category
}

const SkillCategory: React.FC<Props> = ({ category: { name, skills } }) => 
    <div className='skills__category'>
        <div className='skills__category-heading'>
            <h2 className='skills__category-name'>{name}</h2>
            <hr className='sf-hr skills__category-heading-horizontal-rule' />
        </div>
        <SkillList skills={skills} />
    </div>

export default SkillCategory;