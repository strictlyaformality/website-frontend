import React from 'react';

import SkillCategory from './SkillCategory';
import { Skill } from 'domain/Skill';

import './Skills.css';

type Props = {
    categories: Skill.Category[]
}

const Skills: React.FC<Props> = ({ categories }) =>
    <div className='skills'>
        {categories.map(category => <SkillCategory key={category.id} category={category} />)}
    </div>

export default Skills;