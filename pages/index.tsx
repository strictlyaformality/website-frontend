import React from 'react';
import { GetStaticProps } from 'next';

import Layout from 'components/Layout';
import Skills from 'components/Skills';
import { Skill } from 'domain/Skill';

type HomeProps = {
    skills: Skill.Category[],
    education: any[],
    jobs: any[]
}

const Home: React.FC<HomeProps> = props =>
    <Layout title="Home">
        <Skills categories={props.skills} />
    </Layout>

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const urlTemplate = (endpoint: string) => `${process.env.API_BASE_URL}/${endpoint}`;
    const [educationRes, jobRes, skillRes] = await Promise.all([
        fetch(urlTemplate('educations')),
        fetch(urlTemplate('jobs')),
        fetch(urlTemplate('skill-categories'))
    ]);

    return {
        props: {
            education: await educationRes.json(),
            jobs: await jobRes.json(),
            skills: await skillRes.json()
        }
    }
}