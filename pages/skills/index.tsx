import React from 'react';
import Layout from 'components/Layout';
import Skills from 'components/Skills';
import { Skill } from 'domain/Skill';
import { GetStaticProps } from 'next';

type Props = {
    categories: Skill.Category[]
}

const SkillsPage: React.FC<Props> = props =>
    <Layout title="Skills">
        <Skills categories={props.categories}/>
    </Layout>

export default SkillsPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await fetch(`${process.env.API_BASE_URL}/skill-categories`);

    return {
        props: {
            categories: await res.json()
        }
    }
}