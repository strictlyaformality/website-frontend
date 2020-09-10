import React from 'react';
import Layout from 'components/Layout';
import { GetStaticProps } from 'next';
import { urlTemplate } from 'utilities';
import { Education } from 'domain/Education';
import EducationView from 'components/Education';

type Props = {
    education: Education[]
}

const EducationPage: React.FC<Props> = props => {
    const [education] = props.education;

    return <Layout title="Education" contentClassName='education-layout'>
        <EducationView education={education}  />
    </Layout>
}

export default EducationPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await fetch(urlTemplate('educations'));

    return {
        props: {
            education: await res.json()
        }
    }
}