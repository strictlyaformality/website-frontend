import React from 'react';
import Layout from 'components/Layout';
import Skills from 'components/Skills';
import { Skill } from 'domain/Skill';
import { GetStaticProps } from 'next';
import { urlTemplate } from 'utilities';

type Props = {
    categories: Skill.Category[]
}

const SkillsPage: React.FC<Props> = props =>
    <Layout title="Skills">
        <Skills categories={props.categories}/>
    </Layout>

export default SkillsPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await fetch(urlTemplate('skill-categories'));

    return {
        props: {
            categories: await res.json()
        }
    }
}